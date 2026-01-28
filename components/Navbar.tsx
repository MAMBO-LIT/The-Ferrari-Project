import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center transition-all duration-300 bg-ferrari-black/30 backdrop-blur-md border-b border-white/10">
            <div className="text-2xl font-bold tracking-wider uppercase font-orbitron">
                <span className="text-ferrari-red">Ferrari</span> <span className="text-white">LaFerrari</span>
            </div>

            <div className="flex items-center gap-8">
                <Link href="#" className="hidden md:block text-sm tracking-[0.2em] hover:text-ferrari-red transition-colors font-rajdhani uppercase">
                    Discover
                </Link>
                <Link href="#" className="hidden md:block text-sm tracking-[0.2em] hover:text-ferrari-red transition-colors font-rajdhani uppercase">
                    Tech Specs
                </Link>
                <button className="px-6 py-2 border border-ferrari-red text-ferrari-red hover:bg-ferrari-red hover:text-white transition-all duration-300 text-sm tracking-widest uppercase font-orbitron">
                    Inquire
                </button>
            </div>
        </nav>
    );
}
