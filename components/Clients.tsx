"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const clientList = [
  {
    name: "Amul",
    tagline: "The Taste of India",
    category: "Dairy Cooperative",
    logoSrc: "/images/clients/amul.png?v=2",
    borderColor: "hover:border-red-400",
  },
  {
    name: "HERSHEY'S",
    tagline: "Chocolate & Dairy Products",
    category: "Global Confectionery",
    logoSrc: "/images/clients/hersheys.png?v=2",
    borderColor: "hover:border-amber-700",
  },
  {
    name: "Milky Mist",
    tagline: "Premium Dairy Products",
    category: "Dairy Processing Plant",
    logoSrc: "/images/clients/milkymist.png?v=2",
    borderColor: "hover:border-blue-600",
  },
  {
    name: "Safal",
    tagline: "Fresh Cold Chain Network",
    category: "Produce & Food Logistics",
    logoSrc: "/images/clients/safal.png?v=2",
    borderColor: "hover:border-emerald-600",
  },
];

export default function Clients() {
  return (
    <section id="clients" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            OUR CLIENTS
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base pt-2">
            Proudly serving leading national brands and dairy processors with bulk milk transportation.
          </p>
        </div>

        {/* 4 Interactive Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {clientList.map((client, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm ${client.borderColor} hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1`}
            >
              <div>
                {/* Logo Image Showcase Container */}
                <div className="w-full h-24 rounded-xl bg-slate-50/80 flex items-center justify-center p-4 mb-5 border border-slate-100 group-hover:bg-white group-hover:border-blue-100 transition-colors">
                  <div className="relative w-full h-14">
                    <Image
                      src={client.logoSrc}
                      alt={`${client.name} Logo`}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors text-center">
                  {client.name}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1 text-center">
                  {client.tagline}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-600">{client.category}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
