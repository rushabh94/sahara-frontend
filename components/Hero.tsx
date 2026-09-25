import { Phone, ShieldCheck, ThermometerSnowflake, Clock, Truck, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-gradient-to-b from-sky-50/70 via-blue-50/30 to-slate-50">
      {/* Subtle Background Pattern Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-sky-200/30 via-blue-200/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-300/20 blur-3xl pointer-events-none -z-10 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Sahara Enterprise specializes in{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-600 bg-clip-text text-transparent">
                bulk milk transportation
              </span>{" "}
              using refrigerated tankers. We ensure safe, efficient, and reliable delivery solutions.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
              Our bulk milk tanker transportation service ensures the safe and efficient delivery of high-quality milk from farms to processing facilities. We focus on reliability and hygiene and maintain strict standards to guarantee that your dairy products arrive fresh and in optimal condition.
            </p>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <a
                href="tel:+919824302727"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 transition-all duration-200 active:scale-95"
              >
                <Phone className="w-5 h-5" />
                <span>Call +91 98243 02727</span>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-slate-700 font-semibold text-base border border-slate-200 shadow-sm hover:bg-slate-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200"
              >
                <span>Explore Services</span>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600" />
              </a>
            </div>

            {/* Quick Feature Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <ThermometerSnowflake className="w-5 h-5 text-sky-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">Temp Controlled</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">100% Food Grade SS</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Clock className="w-5 h-5 text-indigo-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-slate-700">24/7 Dispatch</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase Card Column */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-sky-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              
              <div className="relative bg-white rounded-2xl shadow-xl border border-blue-100 p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
                      <Truck className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Insulated Tanker Fleet</h3>
                      <p className="text-xs text-slate-500">SS304/316 Sanitary Spec</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Active Fleet
                  </span>
                </div>

                {/* Fleet Specs Highlight */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-sm font-medium text-slate-600">Refrigeration Standard</span>
                    <span className="text-sm font-bold text-blue-700">0°C to +4°C Maintained</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-sm font-medium text-slate-600">Hygiene Standard</span>
                    <span className="text-sm font-bold text-blue-700">CIP Auto Sanitized</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-sm font-medium text-slate-600">GPS & Temp Logging</span>
                    <span className="text-sm font-bold text-blue-700">Real-Time Telematics</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>On-time dispatch guaranteed from farms & collection hubs to processing plants.</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-slate-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Trusted logistics partner for top national dairy brands.</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <a
                    href="#contact"
                    className="block w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-colors text-center"
                  >
                    Request Bulk Transport Quote
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
