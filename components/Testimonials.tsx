"use client";

import { useState } from "react";
import { Quote, Star, Building2, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Sahara Enterprise has been a game-changer for us. Their refrigerated tankers ensure our milk stays fresh and safe during transit. Highly reliable and professional!",
    author: "Amul",
    role: "Verified Client",
    description: "India's Premier Dairy Cooperative Brand",
    badge: "Dairy Leader",
    accentColor: "from-red-600 to-red-500",
  },
  {
    id: 2,
    quote:
      "We've been using Sahara Enterprise for months, and their punctual deliveries and top-notch service have exceeded our expectations every time.",
    author: "Hershey Chocolate",
    role: "Verified Client",
    description: "Global Confectionery & Dairy Consumer Products",
    badge: "Enterprise Partner",
    accentColor: "from-amber-800 to-amber-700",
  },
  {
    id: 3,
    quote:
      "The care Sahara Enterprise takes in transporting bulk milk is remarkable. Their attention to detail and commitment to safety are truly impressive.",
    author: "Milky Mist",
    role: "Verified Client",
    description: "Premium Dairy Product Manufacturer",
    badge: "Cold Chain Partner",
    accentColor: "from-blue-700 to-indigo-600",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            CLIENT TESTIMONIALS
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base pt-2">
            Read what industry leaders in dairy processing say about working with Sahara Enterprise.
          </p>
        </div>

        {/* Testimonials Interactive Carousel / Grid */}
        <div className="max-w-4xl mx-auto relative">
          <div className="relative bg-gradient-to-br from-blue-50/80 via-sky-50/40 to-white rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-xl overflow-hidden transition-all duration-300">
            <Quote className="absolute -top-4 -right-4 w-36 h-36 text-blue-200/40 pointer-events-none" />

            {/* Rating Stars */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                {current.badge}
              </span>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-xl sm:text-2xl font-semibold text-slate-800 leading-relaxed mb-8 italic min-h-[120px] flex items-center">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author / Client Details & Carousel Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-blue-100/80">
              <div className="flex items-center gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${current.accentColor} flex items-center justify-center text-white font-extrabold text-xl shadow-md`}
                >
                  {current.author.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span>{current.author}</span>
                    <span className="text-xs bg-blue-100 text-blue-700 font-semibold px-2 py-0.5 rounded-md">
                      {current.role}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-blue-600" />
                    {current.description}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={handlePrev}
                  className="p-3 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all shadow-sm active:scale-95"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="text-xs font-bold text-slate-400 px-2">
                  {currentIndex + 1} / {testimonials.length}
                </div>
                <button
                  onClick={handleNext}
                  className="p-3 rounded-full bg-white border border-slate-200 hover:border-blue-300 hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-all shadow-sm active:scale-95"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center items-center gap-2 mt-6">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-8 bg-blue-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
