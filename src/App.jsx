import React, { useState } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Mail,
  Flower,
  Award,
  Users,
  Building2,
  Hammer,
  Ruler,
  PaintBucket,
  Phone,
  MapPin,
  Clock,
  Star,
  Plus,
  Minus,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle2
} from 'lucide-react';

/* --- Components --- */

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full text-white">
    <div className="flex items-center gap-2 cursor-pointer">
      <div className="bg-white text-black p-1 rounded-full">
        <Flower size={24} fill="currentColor" />
      </div>
      <span className="text-xl font-bold tracking-tight">Logoipsum</span>
    </div>

    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-200">
      <a href="#" className="hover:text-white transition-colors">Home</a>
      <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">About Us <ChevronDown size={14} /></div>
      <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">Services <ChevronDown size={14} /></div>
      <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer">Projects <ChevronDown size={14} /></div>
      <a href="#" className="hover:text-white transition-colors">Blog</a>
      <a href="#" className="hover:text-white transition-colors">Contact</a>
    </div>

    <div className="hidden lg:block">
      <button className="bg-white text-black px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
        Book a Consultation <ArrowRight size={16} />
      </button>
    </div>

    <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
      {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </nav>
);

const Hero = () => (
  <div className="relative min-h-screen flex items-center">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop" alt="Construction Worker" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    <div className="relative z-10 px-6 max-w-7xl mx-auto w-full pt-20">
      <div className="max-w-2xl w-full">
        <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1 pr-4 mb-8 group cursor-pointer hover:bg-white/20 transition-all">
          <span className="bg-[#2B2B2B] text-white text-xs font-bold px-3 py-1 rounded-full mr-3">We're Hiring!</span>
          <span className="text-sm font-medium flex items-center gap-1 text-white">Join our Remote Team <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-semibold mb-6 tracking-tight text-white">
          We Use Local Expertise to Deliver Stronger, Smarter Construction in Aberdeen
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
          From Torry to West End, we've been Aberdeen's trusted builders for 15+ years—delivering on-time, budget-friendly projects with granite-strength reliability.
        </p>

        <div className="relative max-w-md">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-2 flex items-center">
            <div className="pl-3 pr-2 text-gray-400"><Mail size={20} /></div>
            <input type="email" placeholder="Enter email address..." className="bg-transparent border-none outline-none text-white placeholder-gray-400 flex-1 w-full text-sm h-10 px-2" />
            <button className="bg-white text-black px-4 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap">Book a Consultation</button>
          </div>
           <div className="absolute -right-20 bottom-2 hidden md:block">
              <svg width="80" height="60" viewBox="0 0 100 80" fill="none" className="transform rotate-12 opacity-90">
                <path d="M90 10 C 70 40, 40 40, 10 50 M 10 50 L 25 40 M 10 50 L 20 65" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
        </div>
      </div>
    </div>
  </div>
);

const LogoStrip = () => (
  <div className="bg-white py-8 border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale">
      {['Wave', 'PinPoint', 'Terra', 'Vertex', 'Martino', 'Square'].map((logo, i) => (
        <span key={i} className="text-xl font-bold flex items-center gap-2"><div className="w-6 h-6 bg-gray-800 rounded-sm"></div> {logo}</span>
      ))}
    </div>
  </div>
);

const AboutSection = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h4 className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-2">Who We Are</h4>
        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">More Than Just Builders—<br/>We're Construction Partners.</h2>
        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
          For over a decade, we've helped homeowners and businesses in Aberdeen transform their visions into reality. We don't just pour concrete; we build relationships founded on transparency and trust.
        </p>
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
          From historic renovations in Old Aberdeen to modern commercial hubs in the city center, our team brings local knowledge and world-class craftsmanship to every job site.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
          Read More About Us <ArrowRight size={16} />
        </button>

        <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-gray-100">
          <div>
            <h3 className="text-3xl font-bold text-gray-900">100%</h3>
            <p className="text-gray-500 text-sm mt-1">Satisfaction Rate</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">15+</h3>
            <p className="text-gray-500 text-sm mt-1">Years Experience</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900">200+</h3>
            <p className="text-gray-500 text-sm mt-1">Projects Done</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 h-[600px]">
        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" alt="Construction Site" className="w-full h-full object-cover rounded-2xl" />
        <div className="grid gap-4 h-full">
          <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1000&auto=format&fit=crop" alt="Team Meeting" className="w-full h-1/2 object-cover rounded-2xl" />
          <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" alt="Finished Interior" className="w-full h-1/2 object-cover rounded-2xl" />
        </div>
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section className="bg-[#111] py-24 px-6 text-white">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h4 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-2">Our Services</h4>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Aberdeen's Most Trusted<br />Construction Services — Built for You</h2>
      </div>

      <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-8">
        <div className="relative group overflow-hidden rounded-3xl h-[600px]">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" alt="Architect" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Architectural Planning</h3>
              <p className="text-gray-300 mb-4 line-clamp-2">Comprehensive design and blueprint services ensuring structural integrity and aesthetic excellence.</p>
              <button className="text-amber-500 flex items-center gap-2 font-medium hover:gap-3 transition-all">Learn More <ArrowRight size={16} /></button>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Building2, title: "General Contracting", desc: "Full-service oversight for commercial and residential builds." },
            { icon: Users, title: "Project Management", desc: "Keeping your timeline and budget on track from day one." },
            { icon: Hammer, title: "Renovation & Remodel", desc: "Breathing new life into existing spaces with modern finishes." },
            { icon: Ruler, title: "Design & Build", desc: "Unified workflow from initial concept to final walkthrough." }
          ].map((item, idx) => (
            <div key={idx} className="bg-[#1a1a1a] p-8 rounded-3xl hover:bg-[#222] transition-colors border border-white/5 group">
              <div className="bg-[#2a2a2a] w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600 transition-colors">
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500 font-medium tracking-wide">0{idx + 1}</span>
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-amber-500 group-hover:text-amber-500 transition-colors">
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto bg-gray-50/50">
    <div className="text-center mb-16">
      <h4 className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-2">Our Team</h4>
      <h2 className="text-4xl font-bold text-gray-900">Aberdeen's Finest Building<br />Craftsmen & Women</h2>
    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { name: "David Miller", role: "Lead Architect", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
        { name: "Sarah Jenkins", role: "Project Manager", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
        { name: "Ross Gellar", role: "Site Foreman", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
        { name: "Monica Hall", role: "Interior Designer", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
        { name: "James Wilson", role: "Civil Engineer", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
        { name: "Linda Davis", role: "Safety Officer", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop" },
        { name: "Robert Brown", role: "Master Carpenter", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400&auto=format&fit=crop" },
        { name: "Emily White", role: "Client Relations", img: "https://images.unsplash.com/photo-1554151228-14d9def656ec?q=80&w=400&auto=format&fit=crop" }
      ].map((member, idx) => (
        <div key={idx} className="group">
          <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
            <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
            <div className="absolute top-3 right-3 bg-white p-1.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
              <Linkedin size={14} className="text-[#0077b5]" />
            </div>
          </div>
          <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
          <p className="text-amber-600 text-sm font-medium">{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);

const LocationSection = () => (
  <section className="relative py-24 px-6 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Office Background" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
    </div>

    <div className="relative z-10 max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
      <div className="p-12 lg:w-1/3 flex flex-col justify-center">
        <h3 className="text-3xl font-bold mb-8">Visit Our Office</h3>
        <p className="text-gray-600 mb-8">Ready to discuss your project? Stop by our HQ for a coffee and a consultation.</p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><MapPin size={20} /></div>
            <div>
              <p className="font-bold text-gray-900">Our Location</p>
              <p className="text-gray-500 text-sm">123 Union Street, Aberdeen, AB10 1BD</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Phone size={20} /></div>
            <div>
              <p className="font-bold text-gray-900">Phone Number</p>
              <p className="text-gray-500 text-sm">+44 (0) 1224 123456</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Clock size={20} /></div>
            <div>
              <p className="font-bold text-gray-900">Office Hours</p>
              <p className="text-gray-500 text-sm">Mon - Fri: 8:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 bg-gray-200 h-[400px] lg:h-auto relative">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1500&auto=format&fit=crop" alt="Map" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="bg-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 animate-bounce">
              <MapPin size={16} className="text-red-500" /> We are here
           </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wide">Testimonials</span>
      <h2 className="text-4xl font-bold mt-4">Why our customers love us</h2>
    </div>

    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
       <div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-lg max-w-2xl relative">
          <div className="text-amber-500 flex gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <h3 className="text-2xl font-bold mb-4 leading-snug">"Aberdeen Builders ran a complex renovation for us. Their team was communicative, honest, and the craftsmanship was beyond what we imagined. A granite-solid job!"</h3>
          <div className="flex items-center gap-4 mt-8">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Client" className="w-12 h-12 rounded-full object-cover" />
             <div>
                <p className="font-bold text-gray-900">Michael Scott</p>
                <p className="text-gray-500 text-sm">CEO, Paper Co.</p>
             </div>
          </div>
       </div>

       <div className="flex flex-col gap-6">
         {[
            { text: "Professional from start to finish. The team cleaned up daily!", name: "Pam Beesley" },
            { text: "On time and under budget. Highly recommended.", name: "Jim Halpert" }
         ].map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl max-w-sm border border-gray-100">
               <div className="text-amber-500 flex gap-1 mb-2">
                 {[1,2,3,4,5].map(x => <Star key={x} size={14} fill="currentColor" />)}
               </div>
               <p className="text-gray-600 italic text-sm mb-4">"{t.text}"</p>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                 <p className="font-bold text-sm text-gray-900">{t.name}</p>
               </div>
            </div>
         ))}
       </div>
    </div>
  </section>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        { q: "Do you handle permits for extensions?", a: "Yes, we handle all council planning permissions and building warrants as part of our full project management service." },
        { q: "How long does a typical kitchen remodel take?", a: "A standard kitchen remodel usually takes 3-5 weeks depending on the complexity of structural changes and finishes." },
        { q: "Are you fully insured?", a: "Absolutely. We carry full public liability and employers' liability insurance for all our sites." },
        { q: "Do you offer free estimates?", a: "Yes, we provide a complimentary initial consultation and detailed estimate for all prospective projects." }
    ];

    return (
        <section className="py-24 px-6 max-w-3xl mx-auto">
             <div className="text-center mb-12">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">FAQ</span>
                <h2 className="text-3xl font-bold mt-4">Your Aberdeen Construction<br/>Questions — Answered</h2>
             </div>

             <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
                        <button
                            onClick={() => setOpenIndex(idx === openIndex ? -1 : idx)}
                            className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                        >
                            <span className="font-bold text-gray-900">{faq.q}</span>
                            {openIndex === idx ? <Minus size={20} className="text-amber-600" /> : <Plus size={20} className="text-gray-400" />}
                        </button>
                        {openIndex === idx && (
                            <div className="p-6 pt-0 bg-white text-gray-600 leading-relaxed">
                                {faq.a}
                            </div>
                        )}
                    </div>
                ))}
             </div>
        </section>
    );
};

const CTASection = () => (
    <section className="relative py-32 px-6 flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop" alt="Construction High Rise" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 max-w-2xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build Your Aberdeen Vision?</h2>
            <p className="text-xl text-gray-300 mb-10">Schedule a free consultation with our expert team today and let's get started on your dream project.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">Get a Quote</button>
                <button className="bg-transparent border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">Contact Us</button>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <div className="bg-white text-black p-1 rounded-full">
                        <Flower size={20} fill="currentColor" />
                    </div>
                    <span className="text-xl font-bold">Logoipsum</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Building the future of Aberdeen with integrity, quality, and community at heart.</p>
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer"><Facebook size={16} /></div>
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer"><Twitter size={16} /></div>
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer"><Instagram size={16} /></div>
                </div>
            </div>

            <div>
                <h4 className="font-bold mb-6">Quick Links</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="hover:text-amber-500 cursor-pointer">About Us</li>
                    <li className="hover:text-amber-500 cursor-pointer">Our Projects</li>
                    <li className="hover:text-amber-500 cursor-pointer">Services</li>
                    <li className="hover:text-amber-500 cursor-pointer">Latest News</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-6">Services</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="hover:text-amber-500 cursor-pointer">General Contracting</li>
                    <li className="hover:text-amber-500 cursor-pointer">Design & Build</li>
                    <li className="hover:text-amber-500 cursor-pointer">Renovations</li>
                    <li className="hover:text-amber-500 cursor-pointer">Project Management</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-6">Contact</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="flex items-start gap-3">
                        <MapPin size={16} className="mt-1 text-amber-600" />
                        <span>123 Union Street,<br/>Aberdeen, AB10 1BD</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone size={16} className="text-amber-600" />
                        <span>+44 (0) 1224 123456</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail size={16} className="text-amber-600" />
                        <span>hello@logoipsum.com</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2024 Logoipsum Construction Ltd. All rights reserved.</p>
            <div className="flex gap-6">
                <span className="cursor-pointer hover:text-white">Privacy Policy</span>
                <span className="cursor-pointer hover:text-white">Terms of Service</span>
            </div>
        </div>
    </footer>
);

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen relative overflow-x-hidden">
      <Navbar isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center space-y-8 lg:hidden">
          <a href="#" className="text-2xl font-medium text-white">Home</a>
          <a href="#" className="text-2xl font-medium text-white">About Us</a>
          <a href="#" className="text-2xl font-medium text-white">Services</a>
          <a href="#" className="text-2xl font-medium text-white">Projects</a>
          <a href="#" className="text-2xl font-medium text-white">Contact</a>
          <button className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg">
            Book a Consultation
          </button>
        </div>
      )}

      <Hero />
      <LogoStrip />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <LocationSection />
      <TestimonialSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default App;
