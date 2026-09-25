import { ShieldCheck, CheckCircle2, Award, Truck, Droplets } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image & Highlights Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="bg-gradient-to-tr from-blue-700 to-sky-600 rounded-3xl p-8 text-white shadow-2xl space-y-6 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/20 backdrop-blur-md rounded-xl text-white">
                    <Droplets className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Uncompromising Pureness</h4>
                    <p className="text-xs text-sky-100">Cold Chain Quality Control</p>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                    <CheckCircle2 className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-sm">Strict Hygiene Protocols</h5>
                      <p className="text-xs text-sky-100">Cleaned-in-place (CIP) sanitized tanks before every dispatch.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                    <CheckCircle2 className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-sm">Precision Temperature Controls</h5>
                      <p className="text-xs text-sky-100">Advanced insulation keeping milk fresh over long distances.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/15">
                    <CheckCircle2 className="w-5 h-5 text-sky-300 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-semibold text-sm">Professional Fleet Drivers</h5>
                      <p className="text-xs text-sky-100">Trained crew for delicate liquid food-grade handling.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              ABOUT SAHARA ENTERPRISE - Committed to Excellence
            </h2>

            <div className="w-16 h-1.5 bg-blue-600 rounded-full" />

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              At Sahara Enterprise, we are committed to excellence in frozen products transportation. Our dedicated team ensures the highest standards of service, reliability, and professionalism. We strive to exceed our client&apos;s expectations in every aspect of our operations.
            </p>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              From small dairy operations to large-scale milk processors across India, we deliver end-to-end transportation efficiency with modern insulated tankers, real-time GPS tracking, and round-the-clock operational support.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-extrabold text-blue-600 mb-1">100%</div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Food Safety Compliant</div>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm">
                <div className="text-2xl font-extrabold text-blue-600 mb-1">24/7</div>
                <div className="text-xs font-semibold text-slate-700 uppercase tracking-wide">Real-time GPS Tracking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
