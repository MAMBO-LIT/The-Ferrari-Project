export default function Footer() {
    return (
        <footer className="py-12 px-8 bg-black border-t border-white/5 text-center">
            <div className="text-2xl font-bold tracking-wider uppercase font-orbitron mb-4 text-white/50">
                Ferrari
            </div>
            <p className="text-gray-600 font-rajdhani text-sm">
                © {new Date().getFullYear()} Ferrari S.p.A. - All Rights Reserved
            </p>
        </footer>
    );
}
