import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Blurb Column */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block transition-transform hover:scale-105">
              <div className="relative w-56 sm:w-64 h-14">
                <Image
                  src="/images/sahara-logo-white.png?v=2"
                  alt="Sahara Enterprise Main Logo"
                  fill
                  className="object-contain object-left"
                  unoptimized
                />
              </div>
            </a>

            <p className="text-sm leading-relaxed text-slate-400 max-w-md pt-1">
              Sahara Enterprise specializes in bulk milk and frozen dairy product transportation using high-grade insulated refrigerated tankers. Committed to safety, hygiene, and on-time cold chain delivery.
            </p>

            <div className="pt-2 text-xs text-slate-500">
              Serving major dairy hubs, farms, and processing facilities.
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-sky-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-sky-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-sky-400 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-sky-400 transition-colors">
                  About Sahara Enterprise
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-sky-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-sky-400 transition-colors">
                  Our Clients
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-sky-400 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">Head Office</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span>12/M kalpit apartment opp Gurudwara, Maninagar, Ahmedabad - 380008</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href="mailto:sahara.enterprise@yahoo.com" className="hover:text-sky-400 transition-colors">
                  sahara.enterprise@yahoo.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <div className="flex flex-col gap-1 text-white font-bold">
                  <a href="tel:+919824302727" className="hover:text-sky-400 transition-colors block">
                    +91-9824302727
                  </a>
                  <a href="tel:+919979135309" className="hover:text-sky-400 transition-colors block">
                    +91-9979135309
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 by Sahara Enterprise.</p>
          <p className="flex items-center gap-1">
            Bulk Milk &amp; Dairy Product Transportation Specialists
          </p>
        </div>
      </div>
    </footer>
  );
}
