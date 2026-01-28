export default function SpecsGrid() {
    const specs = [
        { label: "Internal Combustion Engine", value: "6.3L V12" },
        { label: "Electric Motor Output", value: "120 kW (163 CV)" },
        { label: "Max Power Output", value: "963 CV" },
        { label: "Max Torque", value: "> 900 Nm" },
        { label: "Max Speed", value: "> 350 km/h" },
        { label: "0-100 km/h", value: "< 3.0 sec" },
        { label: "0-200 km/h", value: "< 7.0 sec" },
        { label: "0-300 km/h", value: "15.0 sec" },
    ];

    return (
        <section className="py-24 px-8 md:px-20 bg-ferrari-black border-t border-white/10">
            <div className="max-w-7xl mx-auto">
                <h3 className="text-3xl font-orbitron mb-12 text-ferrari-red tracking-widest">TECHNICAL SPECIFICATIONS</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specs.map((spec, i) => (
                        <div key={i} className="p-6 border border-white/5 hover:border-ferrari-red/50 transition-colors bg-white/5 backdrop-blur-sm">
                            <div className="text-gray-400 font-rajdhani text-sm uppercase mb-2">{spec.label}</div>
                            <div className="text-2xl font-orbitron text-white">{spec.value}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
