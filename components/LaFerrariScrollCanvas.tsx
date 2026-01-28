"use client";

import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface LaFerrariScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
}

export default function LaFerrariScrollCanvas({ scrollYProgress }: LaFerrariScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, 240]);

    useEffect(() => {
        let isMounted = true;
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const imageCount = 240;
            const promises: Promise<void>[] = [];

            for (let i = 1; i <= imageCount; i++) {
                const img = new Image();
                img.src = `/images/laFerrari-sequence/${i}.jpg`;
                const promise = new Promise<void>((resolve) => {
                    img.onload = () => resolve();
                    img.onerror = () => resolve(); // Don't block on error
                });
                promises.push(promise);
                loadedImages.push(img);
            }

            await Promise.all(promises);

            if (isMounted) {
                setImages(loadedImages);
                setIsLoaded(true);
            }
        };

        loadImages();

        return () => {
            isMounted = false;
        };
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !isLoaded || !images[index]) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index];

        // High DPI scaling
        const dpr = window.devicePixelRatio || 1;
        // Set actual size in memory (scaled to account for extra pixel density)
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        ctx.scale(dpr, dpr);

        // Context is now 1:1 with CSS pixels, but canvas "surface" is 2x/3x larger.
        // Wait, typical canvas setup:
        // canvas.width = width * dpr
        // canvas.style.width = width
        // ctx.scale(dpr, dpr)

        // But object-fit: contain logic
        const canvasWidth = window.innerWidth;
        const canvasHeight = window.innerHeight;

        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            // Canvas is wider than image (fit to height)
            drawHeight = canvasHeight;
            drawWidth = img.width * (canvasHeight / img.height);
            offsetX = (canvasWidth - drawWidth) / 2;
            offsetY = 0;
        } else {
            // Canvas is taller than image (fit to width)
            drawWidth = canvasWidth;
            drawHeight = img.height * (canvasWidth / img.width);
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
        }

        // Clear and draw
        // ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Not strictly needed if we fill
        // We already sized the canvas which clears it.

        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // React to scroll changes
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!isLoaded) return;
        const index = Math.min(239, Math.max(0, Math.floor(latest) - 1));
        requestAnimationFrame(() => renderFrame(index));
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded]);

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) {
                const currentFrame = Math.min(239, Math.max(0, Math.floor(frameIndex.get()) - 1));
                renderFrame(currentFrame);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full object-contain bg-ferrari-black -z-10"
        // style handles via CSS info
        />
    );
}
