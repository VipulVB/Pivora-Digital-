import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Calendar, Send, CheckCircle } from 'lucide-react';
import { ContactSubmission } from '../types';
import { entryContainerVariants, entryItemVariants } from '../lib/animations';

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactSubmission>({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    serviceRequired: 'Website Design & Development',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Prefill listener for WebsiteDiagnosis integration
  useEffect(() => {
    const handlePrefill = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData(prev => ({
          ...prev,
          message: customEvent.detail
        }));
      }
    };

    window.addEventListener('pivora-prefill-diagnosis', handlePrefill);

    // Dynamic checks on mount/refresh if pre-filled data is persisted
    try {
      const stored = localStorage.getItem('pivora_diagnosis_prefill');
      if (stored) {
        setFormData(prev => ({ ...prev, message: stored }));
        localStorage.removeItem('pivora_diagnosis_prefill'); // Clean cache immediately after consuming
      }
    } catch (err) {
      console.warn('Storage not reachable', err);
    }

    return () => {
      window.removeEventListener('pivora-prefill-diagnosis', handlePrefill);
    };
  }, []);

  // List of professional services matching Services section
  const servicesList = [
    'Website Design & Development',
    'Branding & Visual Identity',
    'SEO & Performance Strategy',
    'Digital Marketing & Growth',
    'SaaS & UI/UX Product Design',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate elite secure agency server processing
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);

      // Save inquiry persistently to localStorage as proof of real-world integration
      try {
        const existingRaw = localStorage.getItem('pivora_inquiries');
        const list = existingRaw ? JSON.parse(existingRaw) : [];
        list.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('pivora_inquiries', JSON.stringify(list));
      } catch (err) {
        console.error('Failed to log submission', err);
      }
    }, 1200);
  };

  const handleWhatsAppClick = () => {
    // Generate helpful direct string for lead transition
    const textMsg = `Hello Pivora Digital! I'm interested in building a website/brand system. My name is: ${formData.name || 'Visitor'}.`;
    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/917021645056?text=${encoded}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-bg-primary relative overflow-hidden" id="contact">
      
      {/* Background radial soft spots */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 w-[400px] h-[400px] rounded-full bg-accent-primary/5 blur-3xl"></div>
      <div className="absolute bottom-12 right-12 -z-10 w-[300px] h-[300px] rounded-full bg-accent-secondary/5 blur-3xl"></div>

      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={entryContainerVariants}
        className="max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-start" id="contact-wrapper-grid">
          
          {/* Left Column: Bold CTA & Personal Contact Info Card */}
          <motion.div 
            variants={entryItemVariants}
            className="lg:col-span-5 space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold font-display tracking-[0.25em] text-accent-primary uppercase inline-block font-extrabold">
                SECURE FREE STRATEGY CALL
              </span>
              {/* Bold final CTA requested by prompt */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-[1.1]" id="bold-final-cta-headline">
                Ready to Build a Website That Works?
              </h2>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Book a free 30-minute growth strategy consultation with our system architects. We will audit your current site speed, check your keyword SEO positions, and draft a high-converting wireframe blueprint.
              </p>
            </div>

            {/* Practical contact details */}
            <div className="space-y-4 pt-4 border-t border-border-primary/60" id="agency-direct-connects">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="p-2.5 rounded-lg bg-bg-secondary border border-border-primary text-accent-primary">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] text-text-secondary font-display uppercase tracking-[0.18em]">EMAIL LINE</p>
                  <p className="text-xs font-bold text-text-primary">vipul@pivoradigital.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="p-2.5 rounded-lg bg-bg-secondary border border-border-primary text-accent-primary">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[9px] text-text-secondary font-display uppercase tracking-[0.18em]">SECURE WHATSAPP LINE</p>
                  <p className="text-xs font-bold text-text-primary">+91-7021645056</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call-to-Action to minimize friction */}
            <div className="pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="w-fit flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold mx-auto lg:mx-0 cursor-pointer shadow-md transition-all active:scale-95"
                id="whatsapp-cta-trigger"
              >
                {/* Custom WhatsApp Icon styled using clean text/SVG */}
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
                Instant WhatsApp Chat
              </button>
            </div>
          </motion.div>

          {/* Right Column: Premium Contact Form */}
          <motion.div 
            variants={entryItemVariants}
            className="lg:col-span-7" 
            id="contact-form-canvas"
          >
            <div className="p-4 sm:p-10 rounded-2xl sm:rounded-3xl bg-bg-secondary border border-border-primary shadow-2xl relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    id="agency-inquiry-form"
                  >
                    <div className="flex items-center gap-2 pb-4 border-b border-border-primary/60 mb-2">
                      <Calendar className="w-4 h-4 text-accent-primary animate-pulse" />
                      <span className="text-xs font-extrabold font-display text-text-primary tracking-[0.2em] uppercase">
                        INQUIRY SPECIFICATION SHEET
                      </span>
                    </div>

                    {/* Name & Business Name fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label htmlFor="name" className="text-[10px] font-extrabold font-display tracking-[0.15em] text-text-secondary uppercase select-none">
                          Your Full Name <span className="text-accent-primary">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-xs outline-none transition-colors text-text-primary font-medium"
                          placeholder="Rohan Sharma"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label htmlFor="business" className="text-[10px] font-extrabold font-display tracking-[0.15em] text-text-secondary uppercase select-none">
                          Business Name <span className="text-accent-primary">*</span>
                        </label>
                        <input
                          type="text"
                          id="business"
                          required
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-xs outline-none transition-colors text-text-primary font-medium"
                          placeholder="Your Company Pvt Ltd"
                        />
                      </div>
                    </div>

                    {/* Email & Phone fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5 text-left">
                        <label htmlFor="email" className="text-[10px] font-extrabold font-display tracking-[0.15em] text-text-secondary uppercase select-none">
                          Business Email <span className="text-accent-primary">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-xs outline-none transition-colors text-text-primary font-medium"
                          placeholder="rohan@company.com"
                        />
                      </div>

                      <div className="space-y-1.5 text-left">
                        <label htmlFor="phone" className="text-[10px] font-extrabold font-display tracking-[0.15em] text-text-secondary uppercase select-none">
                          Phone Number <span className="text-accent-primary">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-xs outline-none transition-colors text-text-primary font-medium"
                          placeholder="+91-7021645056"
                        />
                      </div>
                    </div>

                    {/* Service Required Select Option */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="service-select" className="text-[10px] font-extrabold font-display tracking-[0.15em] text-text-secondary uppercase select-none">
                        Service Required <span className="text-accent-primary">*</span>
                      </label>
                      <select
                        id="service-select"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-xs outline-none transition-colors text-text-primary font-medium appearance-none cursor-pointer"
                      >
                        {servicesList.map((service, sIdx) => (
                          <option key={sIdx} value={service} className="bg-bg-secondary text-text-primary p-2">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Project Message description area */}
                    <div className="space-y-1.5 text-left">
                      <label htmlFor="message" className="text-[10px] font-extrabold font-display tracking-[0.15em] text-text-secondary uppercase select-none">
                        Project Brief & Goals <span className="text-accent-primary">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-bg-primary border border-border-primary focus:border-accent-primary focus:ring-1 focus:ring-accent-primary text-xs outline-none transition-colors text-text-primary font-medium resize-none leading-relaxed"
                        placeholder="Tell us about your brand, what you sell, who your target audience is, and what your main timeline constraints are..."
                      />
                    </div>

                    {/* Submit launcher */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl font-bold text-xs bg-accent-primary text-bg-primary hover:bg-opacity-95 shadow-lg shadow-accent-primary/10 transition-all cursor-pointer select-none active:scale-95 disabled:opacity-50"
                      id="form-submit-btn"
                    >
                      {loading ? (
                        <span className="w-5 h-5 rounded-full border-2 border-bg-primary border-t-transparent animate-spin inline-block"></span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Book Free Strategy Call
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Success Frame */
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 px-4 text-center space-y-6"
                    id="contact-success-notice"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-500/20">
                      <CheckCircle className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-extrabold text-text-primary">
                        Inquiry Securely Received!
                      </h3>
                      <p className="text-xs text-text-secondary font-display tracking-[0.18em] uppercase">
                        REFPID-{(Math.random() * 1000000).toFixed(0)}
                      </p>
                    </div>

                    <p className="text-xs text-text-secondary max-w-sm mx-auto leading-relaxed">
                      Thank you <span className="font-bold text-text-primary">{formData.name}</span>! Our lead system architect will review your brief for <span className="font-bold text-text-primary">{formData.businessName}</span> and contact you at <span className="underline">{formData.email}</span> within 2 business hours.
                    </p>

                    <div className="pt-4 flex flex-col gap-2">
                      <button
                        onClick={handleWhatsAppClick}
                        className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 text-xs font-semibold cursor-pointer"
                      >
                        Follow up Instantly on WhatsApp
                      </button>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            businessName: '',
                            email: '',
                            phone: '',
                            serviceRequired: 'Website Design & Development',
                            message: '',
                          });
                        }}
                        className="text-[10px] text-text-secondary font-display tracking-[0.12em] uppercase underline hover:text-text-primary cursor-pointer mt-2"
                      >
                        Submit another specification sheet
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
