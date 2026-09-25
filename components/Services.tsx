import { Truck, SlidersHorizontal, ShieldCheck, ArrowRight } from "lucide-react";

const services = [
  {
    id: "refrigerated-trucks",
    icon: Truck,
    title: "Refrigerated Trucks",
    description:
      "At Sahara Enterprise, we specialize in transporting frozen products using state-of-the-art refrigerated trucks. Our focus on maintaining the quality and freshness of the products sets us apart from the rest.",
    badge: "Temperature Controlled",
    color: "from-blue-500 to-sky-500",
  },
  {
    id: "customized-logistics",
    icon: SlidersHorizontal,
    title: "Customized Logistics",
    description:
      "We offer personalized logistics solutions tailored to the specific transportation requirements for dairy and frozen products. Our team ensures timely and secure delivery to the intended destinations.",
    badge: "Tailored Routes & Schedules",
    color: "from-indigo-500 to-blue-600",
  },
  {
    id: "safety-standards",
    icon: ShieldCheck,
    title: "Safety Standards",
    description:
      "Safety is our top priority. We optimize transport routes and adhere to strict safety standards to secure frozen product transportation.",
    badge: "FSSAI & Quality Compliant",
    color: "from-sky-600 to-cyan-500",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            OUR SERVICES - Dairy Product Transportation Solutions
          </h2>
          <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mt-4" />
          <p className="text-base text-slate-600 pt-2">
            Comprehensive cold-chain transportation and logistics tailored to safeguard dairy quality every kilometer of the journey.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-slate-50 hover:bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-blue-300 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wide uppercase px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-600 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center text-sm font-semibold text-blue-600 group-hover:text-blue-700">
                  <a href="#contact" className="inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
