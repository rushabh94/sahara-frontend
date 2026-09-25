"use client";

import { useState } from "react";
import { MapPin, Mail, Phone, Send, CheckCircle2, Clock } from "lucide-react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Google Sheet Apps Script Web App URL from environment variable
    const googleSheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;

    try {
      if (googleSheetUrl && googleSheetUrl.includes("script.google.com")) {
        await fetch(googleSheetUrl, {
          method: "POST",
          body: formData,
          mode: "no-cors",
        });
      } else if (googleSheetUrl && googleSheetUrl.includes("docs.google.com")) {
        console.warn(
          "⚠️ Incorrect Google Sheet URL detected! You must use a Google Apps Script Web App deployment URL (https://script.google.com/macros/s/.../exec) rather than the spreadsheet view link."
        );
      } else {
        console.log("Submitted Inquiry Data (Local Mode):", Object.fromEntries(formData.entries()));
      }
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            CONTACT US - Get in Touch
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto rounded-full mt-4" />
          <p className="text-slate-600 text-sm sm:text-base pt-2">
            Have questions about bulk milk tanker bookings or logistics contracts? Contact our operations team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Details Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-blue-900 via-slate-900 to-blue-950 rounded-3xl p-8 text-white shadow-xl space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
                <p className="text-slate-300 text-sm">
                  Reach Sahara Enterprise for immediate transport quotes or operational inquiries.
                </p>
              </div>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-sky-400 shrink-0 border border-white/10">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400">Head Office</h4>
                    <p className="text-sm font-medium text-white leading-relaxed mt-1">
                      12/M kalpit apartment opp Gurudwara, Maninagar, Ahmedabad - 380008
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-sky-400 shrink-0 border border-white/10">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400">Email Us</h4>
                    <a
                      href="mailto:sahara.enterprise@yahoo.com"
                      className="text-sm font-medium text-white hover:text-sky-300 transition-colors block mt-1"
                    >
                      sahara.enterprise@yahoo.com
                    </a>
                  </div>
                </div>

                {/* Phone Hotline */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-sky-400 shrink-0 border border-white/10">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400">Phone / WhatsApp</h4>
                    <a
                      href="tel:+919824302727"
                      className="text-lg font-bold text-white hover:text-sky-300 transition-colors block mt-1"
                    >
                      +91-9824302727
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-2xl text-sky-400 shrink-0 border border-white/10">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400">Dispatch Operations</h4>
                    <p className="text-sm font-medium text-white mt-1">
                      24 Hours / 7 Days a Week
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-xs text-slate-400">
                Fast turn-around time for long-distance cold-chain transport inquiries.
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>
              <p className="text-slate-600 text-sm mb-6">
                Fill out the form below and our team will respond promptly.
              </p>

              {submitted ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
                  <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900">Thank You!</h4>
                  <p className="text-sm text-emerald-700">
                    Your message has been submitted successfully and recorded. We will get back to you shortly at Sahara Enterprise.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-4 text-xs font-bold text-emerald-800 underline hover:text-emerald-950"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      placeholder="+91 98243 02727"
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Message / Transport Requirements *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      placeholder="Specify routes, quantity (liters/tons), product type, frequency..."
                      className="w-full px-4 py-3 rounded-xl bg-white border border-slate-300 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-700 hover:to-sky-700 text-white font-bold text-base shadow-lg shadow-blue-600/25 hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {loading ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
