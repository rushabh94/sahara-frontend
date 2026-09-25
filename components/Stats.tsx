import { Award, PackageCheck, Smile, Clock } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "10+",
    label: "Years of Expertise",
    description: "Decade of leadership in specialized dairy and cold chain transportation.",
  },
  {
    icon: PackageCheck,
    value: "200+",
    label: "Frozen Products Transport",
    description: "Handled diverse temperature-sensitive products with complete integrity.",
  },
  {
    icon: Smile,
    value: "100%",
    label: "Client Satisfaction",
    description: "Consistent high performance, hygiene, and on-time delivery metrics.",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Service Availability",
    description: "Round-the-clock logistics support, dispatch, and continuous tracking.",
  },
];

export default function Stats() {
  return (
    <section id="why-us" className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-64 bg-blue-500/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose Us
          </h2>
          <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-sky-400/40 hover:bg-white/10 transition-all duration-300 group text-center flex flex-col items-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white mb-5 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-100 to-sky-300 tracking-tight mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-white mb-2">{stat.label}</div>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
