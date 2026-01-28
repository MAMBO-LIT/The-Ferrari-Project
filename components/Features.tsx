export default function Features() {
    return (
        <section className="py-24 px-8 md:px-20 bg-neutral-900 border-t border-white/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
                <div className="flex-1">
                    <h3 className="text-3xl font-orbitron mb-8 text-white tracking-widest">HY-KERS SYSTEM</h3>
                    <p className="font-rajdhani text-lg text-gray-300 leading-relaxed max-w-xl">
                        The LaFerrari is the first car in Ferrari history to be powered by the HY-KERS system. The ICE represents the pinnacle of engine development and research, a 6262 cc V12 that punches out 800 CV and revs to a maximum of 9,250 rpm, a record for an engine of this displacement.
                    </p>
                    <div className="mt-8">
                        <button className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all font-orbitron text-sm tracking-widest uppercase">
                            Learn More
                        </button>
                    </div>
                </div>
                <div className="flex-1 w-full h-[400px] bg-neutral-800 border border-white/10 flex items-center justify-center relative overflow-hidden group">
                    {/* Placeholder for feature image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-ferrari-red/20 to-black/80"></div>
                    <span className="font-orbitron text-xl text-white/20 group-hover:text-white transition-colors z-10">ENGINEERING MASTERPIECE</span>
                </div>
            </div>
        </section>
    );
}
