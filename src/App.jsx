import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  Mail,
  Users,
  Building2,
  Hammer,
  Ruler,
  Phone,
  MapPin,
  Clock,
  Star,
  Plus,
  Minus,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

/* --- Components --- */

const ScrollReveal = ({ children, delay = 0, className = '' }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Navbar = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => (
  <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full text-white">
    <div className="flex items-center gap-2 cursor-pointer">
      <span className="text-2xl font-bold tracking-[0.15em]">Groupe APC</span>
    </div>

    <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-200">
      <a href="#" className="hover:text-white transition-colors">Accueil</a>
      <a href="#a-propos" className="hover:text-white transition-colors">À propos</a>
      <a href="#services" className="hover:text-white transition-colors">Services</a>
      <a href="#equipe" className="hover:text-white transition-colors">Équipe</a>
      <a href="#contact" className="hover:text-white transition-colors">Contact</a>
    </div>

    <div className="hidden lg:block">
      <button className="bg-white text-black px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center gap-2">
        Demander une soumission <ArrowRight size={16} />
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
      <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop" alt="Chantier de construction" className="w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      <div className="absolute inset-0 bg-black/20"></div>
    </div>

    <div className="relative z-10 px-6 max-w-7xl mx-auto w-full pt-20">
      <div className="max-w-2xl w-full">
        <h1 className="text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] font-semibold mb-6 tracking-tight text-white">
          Construction résidentielle au Québec — précise, transparente, bien exécutée.
        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
          Rénovations, agrandissements et constructions neuves. Chaque détail compte. Chaque soumission est claire. On ne quitte pas le chantier tant que le travail n'est pas bien fait.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="bg-white text-black px-6 py-3.5 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
            Demander une soumission <ArrowRight size={16} />
          </a>
          <a href="#services" className="border border-white/30 text-white px-6 py-3.5 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2">
            Nos services
          </a>
        </div>
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <section id="a-propos" className="py-20 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <ScrollReveal>
        <div>
          <h4 className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-2">À propos</h4>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Un entrepreneur général<br/>qui prend son métier au sérieux.</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Sebastien Houde est entrepreneur général licencié RBQ avec près de 10 ans d'expérience en construction résidentielle au Québec. Groupe APC, c'est un travail minutieux, une communication directe et des soumissions détaillées — sans surprises.
          </p>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Des rénovations complètes aux constructions neuves, chaque projet est exécuté avec la même rigueur. Le chantier est propre, les délais sont respectés, et le résultat parle de lui-même.
          </p>

          <a href="#contact" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors inline-flex items-center gap-2">
            Nous contacter <ArrowRight size={16} />
          </a>

          <div className="grid grid-cols-3 gap-4 mt-12 pt-12 border-t border-gray-100">
            <div>
              <h3 className="text-3xl font-bold text-gray-900">10+</h3>
              <p className="text-gray-500 text-sm mt-1">Années d'expérience</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">RBQ</h3>
              <p className="text-gray-500 text-sm mt-1">Licence vérifiée</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-900">6+</h3>
              <p className="text-gray-500 text-sm mt-1">Membres d'équipe</p>
            </div>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <div className="grid grid-cols-2 gap-4 h-[600px]">
          <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1000&auto=format&fit=crop" alt="Chantier" className="w-full h-full object-cover rounded-2xl" />
          <div className="grid gap-4 h-full">
            <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=1000&auto=format&fit=crop" alt="Réunion d'équipe" className="w-full h-1/2 object-cover rounded-2xl" />
            <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop" alt="Intérieur fini" className="w-full h-1/2 object-cover rounded-2xl" />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="bg-[#111] py-24 px-6 text-white">
    <div className="max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <h4 className="text-amber-500 font-bold uppercase tracking-wider text-sm mb-2">Nos services</h4>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Construction résidentielle<br />complète — du début à la fin</h2>
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-[1.2fr_1.8fr] gap-8">
        <ScrollReveal><div className="relative group overflow-hidden rounded-3xl h-[600px]">
          <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop" alt="Planification" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
            <div>
              <h3 className="text-2xl font-bold mb-2">Planification et conception</h3>
              <p className="text-gray-300 mb-4 line-clamp-2">Accompagnement dès la conception pour assurer la faisabilité et la qualité de chaque projet.</p>
              <button className="text-amber-500 flex items-center gap-2 font-medium hover:gap-3 transition-all">En savoir plus <ArrowRight size={16} /></button>
            </div>
          </div>
        </div></ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: Building2, title: "Entrepreneur général", desc: "Prise en charge complète de votre projet résidentiel, de la structure aux finitions." },
            { icon: Users, title: "Gestion de projet", desc: "Suivi rigoureux des échéanciers et des budgets. Communication claire à chaque étape." },
            { icon: Hammer, title: "Rénovation", desc: "Transformation d'espaces existants avec des finitions modernes et un travail soigné." },
            { icon: Ruler, title: "Agrandissement", desc: "Extensions et ajouts qui s'intègrent parfaitement à la structure existante." }
          ].map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
            <div className="bg-[#1a1a1a] p-8 rounded-3xl hover:bg-[#222] transition-colors border border-white/5 group">
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section id="equipe" className="py-24 px-6 max-w-7xl mx-auto bg-gray-50/50">
    <ScrollReveal>
      <div className="text-center mb-16">
        <h4 className="text-amber-600 font-bold uppercase tracking-wider text-sm mb-2">Notre équipe</h4>
        <h2 className="text-4xl font-bold text-gray-900">Des gens de métier<br />dédiés à la qualité</h2>
      </div>
    </ScrollReveal>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { name: "Sebastien Houde", role: "Entrepreneur général", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop" },
        { name: "Marc Tremblay", role: "Chef de chantier", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
        { name: "Julie Bergeron", role: "Gestionnaire de projet", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" },
        { name: "Patrick Lavoie", role: "Charpentier", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" },
        { name: "Isabelle Roy", role: "Administration", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop" },
        { name: "François Gagnon", role: "Maçon", img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=400&auto=format&fit=crop" }
      ].map((member, idx) => (
        <ScrollReveal key={idx} delay={idx * 100}>
          <div className="group">
            <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" />
            </div>
            <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
            <p className="text-amber-600 text-sm font-medium">{member.role}</p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  </section>
);

const LocationSection = () => (
  <section id="contact" className="relative py-24 px-6 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop" alt="Bureau" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>
    </div>

    <ScrollReveal className="relative z-10 max-w-6xl mx-auto"><div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row">
      <div className="p-12 lg:w-1/3 flex flex-col justify-center">
        <h3 className="text-3xl font-bold mb-8">Nous joindre</h3>
        <p className="text-gray-600 mb-8">Vous avez un projet en tête? Contactez-nous pour discuter de vos besoins et obtenir une soumission détaillée.</p>

        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><MapPin size={20} /></div>
            <div>
              <p className="font-bold text-gray-900">Emplacement</p>
              <p className="text-gray-500 text-sm">Québec, QC, Canada</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Phone size={20} /></div>
            <div>
              <p className="font-bold text-gray-900">Téléphone</p>
              <p className="text-gray-500 text-sm">+1 (418) 000-0000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-amber-100 p-3 rounded-full text-amber-600"><Clock size={20} /></div>
            <div>
              <p className="font-bold text-gray-900">Heures d'ouverture</p>
              <p className="text-gray-500 text-sm">Lun - Ven : 7h00 - 17h00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 bg-gray-200 h-[400px] lg:h-auto relative">
        <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1500&auto=format&fit=crop" alt="Carte" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="bg-white px-4 py-2 rounded-lg shadow-lg font-bold text-sm flex items-center gap-2 animate-bounce">
              <MapPin size={16} className="text-red-500" /> Québec, QC
           </div>
        </div>
      </div>
    </div></ScrollReveal>
  </section>
);

const TestimonialSection = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <ScrollReveal>
      <div className="text-center mb-16">
        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wide">Témoignages</span>
        <h2 className="text-4xl font-bold mt-4">Ce que nos clients disent</h2>
      </div>
    </ScrollReveal>

    <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
       <ScrollReveal><div className="bg-white border border-gray-100 p-10 rounded-3xl shadow-lg max-w-2xl relative">
          <div className="text-amber-500 flex gap-1 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <h3 className="text-2xl font-bold mb-4 leading-snug">« Sebastien et son équipe ont rénové notre cuisine et salle de bain. Travail minutieux, chantier toujours propre, et une communication claire du début à la fin. On referait affaire sans hésiter. »</h3>
          <div className="flex items-center gap-4 mt-8">
             <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop" alt="Client" className="w-12 h-12 rounded-full object-cover" />
             <div>
                <p className="font-bold text-gray-900">Martin Lévesque</p>
                <p className="text-gray-500 text-sm">Propriétaire, Québec</p>
             </div>
          </div>
       </div></ScrollReveal>

       <ScrollReveal delay={200}><div className="flex flex-col gap-6">
         {[
            { text: "Soumission détaillée, aucune surprise. Le travail a été livré dans les délais.", name: "Catherine Bouchard" },
            { text: "Professionnel et attentif aux détails. Le résultat dépasse nos attentes.", name: "Jean-François Côté" }
         ].map((t, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl max-w-sm border border-gray-100">
               <div className="text-amber-500 flex gap-1 mb-2">
                 {[1,2,3,4,5].map(x => <Star key={x} size={14} fill="currentColor" />)}
               </div>
               <p className="text-gray-600 italic text-sm mb-4">« {t.text} »</p>
               <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                 <p className="font-bold text-sm text-gray-900">{t.name}</p>
               </div>
            </div>
         ))}
       </div></ScrollReveal>
    </div>
  </section>
);

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const faqs = [
        { q: "Est-ce que vous gérez les permis municipaux?", a: "Oui, nous prenons en charge les démarches auprès de la municipalité pour les permis de construction et de rénovation nécessaires à votre projet." },
        { q: "Combien de temps dure une rénovation de cuisine?", a: "En général, une rénovation de cuisine prend entre 3 et 5 semaines selon l'ampleur des travaux structurels et le choix des finitions." },
        { q: "Êtes-vous un entrepreneur licencié?", a: "Oui, Groupe APC détient une licence RBQ valide. Nous sommes pleinement assurés et conformes aux exigences du Québec." },
        { q: "Comment fonctionne le processus de soumission?", a: "Contactez-nous pour une première discussion. Nous évaluons votre projet, puis vous recevez une soumission détaillée avec chaque poste clairement expliqué. Pas de frais cachés." }
    ];

    return (
        <section className="py-24 px-6 max-w-3xl mx-auto">
             <ScrollReveal>
               <div className="text-center mb-12">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">FAQ</span>
                  <h2 className="text-3xl font-bold mt-4">Questions fréquentes</h2>
               </div>
             </ScrollReveal>

             <div className="space-y-4">
                {faqs.map((faq, idx) => (
                    <ScrollReveal key={idx} delay={idx * 100}><div className="border border-gray-200 rounded-xl overflow-hidden">
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
                    </div></ScrollReveal>
                ))}
             </div>
        </section>
    );
};

const CTASection = () => (
    <section className="relative py-32 px-6 flex items-center justify-center text-center">
        <div className="absolute inset-0 z-0">
             <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2000&auto=format&fit=crop" alt="Construction" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <ScrollReveal className="relative z-10 max-w-2xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Prêt à démarrer votre projet?</h2>
            <p className="text-xl text-gray-300 mb-10">Parlez-nous de votre vision. On s'occupe du reste — avec précision, transparence et un travail bien fait.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">Demander une soumission</a>
                <a href="#contact" className="bg-transparent border border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">Nous contacter</a>
            </div>
        </ScrollReveal>
    </section>
);

const Footer = () => (
    <footer className="bg-[#0a0a0a] text-white pt-20 pb-10 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <span className="text-2xl font-bold tracking-[0.15em]">Groupe APC</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">Construction résidentielle au Québec. Précision, transparence et exécution soignée.</p>
                <div className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer"><Facebook size={16} /></div>
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer"><Instagram size={16} /></div>
                    <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-amber-600 hover:text-white transition-colors cursor-pointer"><Linkedin size={16} /></div>
                </div>
            </div>

            <div>
                <h4 className="font-bold mb-6">Navigation</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="hover:text-amber-500 cursor-pointer">Accueil</li>
                    <li className="hover:text-amber-500 cursor-pointer">À propos</li>
                    <li className="hover:text-amber-500 cursor-pointer">Services</li>
                    <li className="hover:text-amber-500 cursor-pointer">Contact</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-6">Services</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="hover:text-amber-500 cursor-pointer">Entrepreneur général</li>
                    <li className="hover:text-amber-500 cursor-pointer">Rénovation</li>
                    <li className="hover:text-amber-500 cursor-pointer">Agrandissement</li>
                    <li className="hover:text-amber-500 cursor-pointer">Construction neuve</li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold mb-6">Contact</h4>
                <ul className="space-y-4 text-gray-400 text-sm">
                    <li className="flex items-start gap-3">
                        <MapPin size={16} className="mt-1 text-amber-600" />
                        <span>Québec, QC<br/>Canada</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Phone size={16} className="text-amber-600" />
                        <span>+1 (418) 000-0000</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Mail size={16} className="text-amber-600" />
                        <span>info@apc-construction.ca</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-gray-900 text-center text-gray-600 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2026 Groupe APC. Tous droits réservés.</p>
            <div className="flex gap-6">
                <span className="cursor-pointer hover:text-white">Politique de confidentialité</span>
                <span className="cursor-pointer hover:text-white">Conditions d'utilisation</span>
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
          <a href="#" className="text-2xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Accueil</a>
          <a href="#a-propos" className="text-2xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>À propos</a>
          <a href="#services" className="text-2xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#equipe" className="text-2xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Équipe</a>
          <a href="#contact" className="text-2xl font-medium text-white" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="#contact" className="bg-white text-black px-8 py-3 rounded-full font-bold text-lg" onClick={() => setIsMobileMenuOpen(false)}>
            Demander une soumission
          </a>
        </div>
      )}

      <Hero />
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
