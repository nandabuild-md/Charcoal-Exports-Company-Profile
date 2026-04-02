import { useState } from 'react';
import { motion } from 'motion/react';
import { translations } from './translations';

export default function App() {
  const [lang, setLang] = useState<'en' | 'id' | 'ar'>('en');
  const t = translations[lang];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <>
      <div className="noise-overlay"></div>

      {/* TopNavBar */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-8 h-[64px] bg-[#131313]/80 backdrop-blur-md border-b border-[#5E3F38]">
        <div className="font-headline text-xl md:text-2xl tracking-tighter text-white uppercase drop-shadow-[1px_1px_#FF3300] truncate">
          CARBONCORE EXPORTS
        </div>
        <div className="hidden lg:flex gap-8">
          <button onClick={() => scrollTo('hero')} className="text-ember font-bold border-b-2 border-ember pb-1 uppercase text-sm font-mono tracking-widest">{t.nav.fleet}</button>
          <button onClick={() => scrollTo('applications')} className="text-outline font-medium uppercase text-sm font-mono tracking-widest hover:text-ember transition-colors duration-200">{t.nav.logistics}</button>
          <button onClick={() => scrollTo('specifications')} className="text-outline font-medium uppercase text-sm font-mono tracking-widest hover:text-ember transition-colors duration-200">{t.nav.specifications}</button>
          <button onClick={() => scrollTo('global')} className="text-outline font-medium uppercase text-sm font-mono tracking-widest hover:text-ember transition-colors duration-200">{t.nav.global}</button>
          <button onClick={() => scrollTo('contact')} className="text-outline font-medium uppercase text-sm font-mono tracking-widest hover:text-ember transition-colors duration-200">{t.nav.contact}</button>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <div className="flex gap-2 font-mono text-[10px] text-outline tracking-widest">
            <button onClick={() => setLang('id')} className={lang === 'id' ? 'text-ember' : 'hover:text-white'}>ID</button>|
            <button onClick={() => setLang('en')} className={lang === 'en' ? 'text-ember' : 'hover:text-white'}>EN</button>|
            <button onClick={() => setLang('ar')} className={lang === 'ar' ? 'text-ember' : 'hover:text-white'}>AR</button>
          </div>
          <button className="hidden md:block bg-ember text-white px-4 py-1 font-headline tracking-widest text-sm hover:scale-95 transition-transform">{t.nav.whatsapp}</button>
        </div>
      </nav>

      <main dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        {/* Hero Section */}
        <section id="hero" className="min-h-screen pt-[64px] flex flex-col md:flex-row relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="w-full md:w-1/2 p-6 sm:p-12 md:p-24 flex flex-col justify-center border-r border-outline-variant bg-surface"
          >
            <motion.span variants={fadeUpVariant} className="font-mono text-ember tracking-[0.3em] text-xs mb-4">{t.hero.subtitle}</motion.span>
            <motion.h1 variants={fadeUpVariant} className="font-headline text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter uppercase mb-8 break-words hyphens-auto">
              {t.hero.title1} <br /> <span className="text-ember">{t.hero.title2}</span>
            </motion.h1>
            <motion.p variants={fadeUpVariant} className="font-body text-outline max-w-md mb-12 text-base md:text-lg">
              {t.hero.desc}
            </motion.p>
            <motion.div variants={fadeUpVariant} className="flex flex-wrap gap-4">
              <button onClick={() => scrollTo('contact')} className="bg-ember text-white px-6 md:px-10 py-3 md:py-4 font-headline text-xl md:text-2xl tracking-widest hover:bg-secondary-container transition-all active:scale-95">{t.hero.btnSample}</button>
              <button onClick={() => scrollTo('specifications')} className="border border-outline-variant text-white px-6 md:px-10 py-3 md:py-4 font-headline text-xl md:text-2xl tracking-widest hover:bg-surface-container-high transition-all">{t.hero.btnSpecs}</button>
            </motion.div>
          </motion.div>
          
          <div className="w-full md:w-1/2 relative bg-surface-container-lowest overflow-hidden min-h-[50vh] md:min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10"></div>
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.6 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full object-cover grayscale" 
              alt="Macro close-up of glowing charcoal briquettes with embers radiating heat and subtle smoke wisps in dark industrial setting" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAY-EMEy3V-PQHCNTYIDX1q1jH6TC06JxJ7mdRuFAD4O3hhSM7D4-t2qvK-hRsoBmMgbnyG-w_-K6Zn27i5_R7EOF89V_cHjoRgs1XQgl11NwSI914Fguvm-Bfp8pPwJ2P6hOUJ70xXjCXXN2ZF2uEvXMXEF61Yw0EfGycPDH-qB80OcK9Y021_Rv73vdBkAm5YX3hpJ5Wrv2OMlcS0ZwKWRGKi3Rm82XeXyi5G1hJPzV-2SgSJKoRyktDLZnP6D56YfVaKM7yEP3C3" 
            />
          </div>

          {/* Data Ticker */}
          <div className="absolute bottom-0 left-0 w-full bg-surface-container-high border-t border-outline-variant py-4 z-30 overflow-hidden">
            <div className="flex whitespace-nowrap gap-12 animate-infinite-scroll font-mono text-sm tracking-[0.2em] text-outline">
              <span>{t.ticker.fixedCarbon}</span><span className="text-ember">•</span>
              <span>{t.ticker.moisture}</span><span className="text-ember">•</span>
              <span>{t.ticker.ash}</span><span className="text-ember">•</span>
              <span>{t.ticker.burnTime}</span><span className="text-ember">•</span>
              <span>{t.ticker.volatile}</span><span className="text-ember">•</span>
              <span>{t.ticker.fixedCarbon}</span><span className="text-ember">•</span>
              <span>{t.ticker.moisture}</span><span className="text-ember">•</span>
              <span>{t.ticker.ash}</span><span className="text-ember">•</span>
              <span>{t.ticker.burnTime}</span>
            </div>
          </div>
        </section>

        {/* Product Specs */}
        <section id="specifications" className="py-16 md:py-24 px-6 md:px-8 border-b border-outline-variant">
          <div className="flex flex-col lg:flex-row gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="w-full lg:w-1/2"
            >
              <motion.h2 variants={fadeUpVariant} className="font-headline text-4xl md:text-5xl mb-12 tracking-tight">{t.specs.title1} <span className="text-ember">{t.specs.title2}</span></motion.h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-outline-variant border border-outline-variant">
                {[
                  { val: "85%", label: t.specs.fixedCarbon, highlight: true },
                  { val: "≤5%", label: t.specs.moisture },
                  { val: "≤2.5%", label: t.specs.ashContent },
                  { val: "2.5H", label: t.specs.burnTime, highlight: true },
                  { val: "7500", label: t.specs.calValue },
                  { val: "WHITE", label: t.specs.ashColor },
                  { val: "0%", label: t.specs.chemicals, highlight: true },
                  { val: "MAX", label: t.specs.density },
                ].map((stat, i) => (
                  <motion.div key={i} variants={fadeUpVariant} className="bg-surface p-4 md:p-8 aspect-square flex flex-col justify-between">
                    <span className={`font-headline text-3xl md:text-5xl leading-none ${stat.highlight ? 'text-ember' : 'text-white'}`}>{stat.val}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-outline">{stat.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <div className="flex flex-wrap border-b border-outline-variant">
                <button className="flex-1 px-4 md:px-8 py-4 font-mono text-xs tracking-widest bg-surface-container-high text-ember border-r border-outline-variant whitespace-nowrap">{t.specs.cube}</button>
                <button className="flex-1 px-4 md:px-8 py-4 font-mono text-xs tracking-widest text-outline border-r border-outline-variant hover:text-white transition-colors whitespace-nowrap">{t.specs.finger}</button>
                <button className="flex-1 px-4 md:px-8 py-4 font-mono text-xs tracking-widest text-outline hover:text-white transition-colors whitespace-nowrap">{t.specs.hexagonal}</button>
              </div>
              <div className="flex-grow min-h-[300px] bg-surface-container-lowest border-x border-b border-outline-variant relative overflow-hidden group cursor-crosshair">
                <img 
                  loading="lazy"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-700 absolute inset-0" 
                  alt="Ultra-high resolution texture zoom of black coconut charcoal briquettes showing fine surface detail and structural density" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUmmnY_mtdWhiJUSSSC1QygXu9Nzco2_Qy3G2qOeBMLkH0SOb7FX7Qr_d9hb-HTQrdFY6EUi8xMNsv9oSePeZOWZinUlUOYVlcL6jUiUBXK2qiCOclMNDkbYw6ru9CkW9sgSVzGd-CrvjWRM4aQs6cMowPWNJFBF7YLylgN89-aZ9sapi99xjKMM5__HhgV7BfF--d-nSOmWtSaKLjhhXV1eWBzKUNVaWTkzPGIPTO_jIV3zkCH2xCY65wlo9eaCF_foOazSukLHJ1" 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border border-ember flex items-center justify-center">
                    <div className="w-1 h-1 bg-ember"></div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 p-2 font-mono text-[10px] text-ember tracking-tighter">
                  {t.specs.liveScan}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Operational Applications Section */}
        <section id="applications" className="py-24 px-8 bg-surface grid-bg border-b border-outline-variant">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-headline text-5xl tracking-tight mb-4">{t.apps.title1} <span className="text-ember">{t.apps.title2}</span></h2>
            <p className="font-mono text-sm text-outline tracking-widest uppercase">{t.apps.subtitle}</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Shisha Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="bg-surface border border-outline-variant p-10 flex flex-col justify-between min-h-[400px] inner-ember-glow transition-all duration-300 relative group overflow-hidden"
            >
              <div className="relative z-10">
                <span className="font-mono text-[10px] text-ember tracking-[0.3em] uppercase mb-4 block">{t.apps.sector1}</span>
                <h3 className="font-headline text-6xl mb-6">{t.apps.shishaTitle1} <br /><span className="text-ember">{t.apps.shishaTitle2}</span></h3>
                <p className="font-body text-outline mb-10 max-w-sm">
                  {t.apps.shishaDesc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "01", label: t.apps.zeroOdor },
                    { id: "02", label: t.apps.stableHeat },
                    { id: "03", label: t.apps.burn25 },
                    { id: "04", label: t.apps.whiteAsh },
                  ].map(kpi => (
                    <div key={kpi.id} className="border-l border-ember/50 pl-4">
                      <span className="font-mono text-[10px] text-outline uppercase block">KPI_{kpi.id}</span>
                      <span className="font-mono text-xs text-white uppercase tracking-widest">{kpi.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl">air</span>
              </div>
            </motion.div>

            {/* BBQ Card */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-surface border border-outline-variant p-10 flex flex-col justify-between min-h-[400px] inner-ember-glow transition-all duration-300 relative group overflow-hidden"
            >
              <div className="relative z-10">
                <span className="font-mono text-[10px] text-ember tracking-[0.3em] uppercase mb-4 block">{t.apps.sector2}</span>
                <h3 className="font-headline text-6xl mb-6">{t.apps.bbqTitle1} <br /><span className="text-ember">{t.apps.bbqTitle2}</span></h3>
                <p className="font-body text-outline mb-10 max-w-sm">
                  {t.apps.bbqDesc}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { id: "01", label: t.apps.highCal },
                    { id: "02", label: t.apps.cleanSmoke },
                    { id: "03", label: t.apps.thermalOutput },
                    { id: "04", label: t.apps.pitmasterReady },
                  ].map(kpi => (
                    <div key={kpi.id} className="border-l border-ember/50 pl-4">
                      <span className="font-mono text-[10px] text-outline uppercase block">KPI_{kpi.id}</span>
                      <span className="font-mono text-xs text-white uppercase tracking-widest">{kpi.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <span className="material-symbols-outlined text-9xl">restaurant</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Production & QC */}
        <section className="py-24 bg-surface grid-bg">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-8 mb-16"
          >
            <h2 className="font-headline text-5xl tracking-tight mb-4">{t.production.title1} <span className="text-ember">{t.production.title2}</span></h2>
            <p className="font-mono text-sm text-outline tracking-widest uppercase">{t.production.subtitle}</p>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row border-y border-outline-variant bg-surface/90"
          >
            {[
              { num: "01", title: t.production.sourcing, desc: t.production.sourcingDesc },
              { num: "02", title: t.production.carbonization, desc: t.production.carbonizationDesc },
              { num: "03", title: t.production.crushing, desc: t.production.crushingDesc },
              { num: "04", title: t.production.pressing, desc: t.production.pressingDesc },
              { num: "05", title: t.production.labTesting, desc: t.production.labTestingDesc, last: true },
            ].map((step, i) => (
              <motion.div key={i} variants={fadeUpVariant} className={`flex-1 p-8 ${!step.last ? 'border-b md:border-b-0 md:border-r border-outline-variant' : ''} hover:bg-surface-container-low transition-colors group`}>
                <span className="font-headline text-4xl text-outline mb-4 block group-hover:text-ember transition-colors">{step.num}</span>
                <h4 className="font-headline text-xl mb-2">{step.title}</h4>
                <p className="font-body text-sm text-outline">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-8 mt-16 bg-surface-container-high border border-ember/20 p-12 flex flex-col md:flex-row gap-12"
          >
            <div className="w-full md:w-1/3">
              <span className="material-symbols-outlined text-ember text-4xl mb-6">verified_user</span>
              <h3 className="font-headline text-3xl mb-4">{t.production.qaTitle}</h3>
              <p className="font-body text-outline">{t.production.qaDesc}</p>
            </div>
            <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="font-mono text-xs space-y-3 text-outline">
                <li className="flex items-center gap-3"><span className="text-ember">/</span> {t.production.sgs}</li>
                <li className="flex items-center gap-3"><span className="text-ember">/</span> {t.production.msds}</li>
                <li className="flex items-center gap-3"><span className="text-ember">/</span> {t.production.reach}</li>
              </ul>
              <ul className="font-mono text-xs space-y-3 text-outline">
                <li className="flex items-center gap-3"><span className="text-ember">/</span> {t.production.calorimetry}</li>
                <li className="flex items-center gap-3"><span className="text-ember">/</span> {t.production.zeroOdorThreshold}</li>
                <li className="flex items-center gap-3"><span className="text-ember">/</span> {t.production.smokeless}</li>
              </ul>
            </div>
          </motion.div>
        </section>

        {/* Global Reach */}
        <section id="global" className="h-[800px] relative bg-surface-container-lowest overflow-hidden border-b border-outline-variant">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="absolute top-12 left-12 z-20"
          >
            <h2 className="font-headline text-6xl tracking-tight">{t.global.title1} <span className="text-ember">{t.global.title2}</span></h2>
            <p className="font-mono text-xs text-outline tracking-[0.3em] mt-2 uppercase">{t.global.subtitle}</p>
          </motion.div>

          <div className="w-full h-full relative opacity-50">
            <div className="absolute inset-0 bg-[#0A0A0A]"></div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="absolute top-1/4 left-1/4 w-[30%] h-[40%] bg-[#141414] border border-outline-variant/10 origin-left"
            ></motion.div>
            <motion.div 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: "circOut" }}
              className="absolute top-1/3 left-1/2 w-[25%] h-[35%] bg-[#141414] border border-outline-variant/10 origin-left"
            ></motion.div>

            {/* Nodes */}
            {t.global.nodes.map((node, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: node.delay, type: "spring" }}
                className="absolute group"
                style={{ top: node.top, left: node.left }}
              >
                <div className="w-4 h-4 bg-ember rounded-full animate-ping absolute -inset-0 opacity-40"></div>
                <div className="w-3 h-3 bg-ember relative z-10"></div>
                <div className="absolute top-8 left-0 bg-surface border border-outline-variant p-2 font-mono text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                  {node.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="absolute bottom-12 right-12 z-20 flex gap-12 font-mono text-[10px] text-outline">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-ember"></div>
              <span>{t.global.terminal}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 border border-ember"></div>
              <span>{t.global.warehouse}</span>
            </div>
          </div>
        </section>

        {/* Request Sample / Contact */}
        <section id="contact" className="min-h-[600px] flex flex-col md:flex-row bg-surface">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 p-12 md:p-24 border-b md:border-b-0 md:border-r border-outline-variant"
          >
            <h2 className="font-headline text-5xl mb-12 tracking-tight">{t.contact.title1} <span className="text-ember">{t.contact.title2}</span></h2>
            <div className="space-y-8">
              <div>
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest block mb-2">{t.contact.location}</span>
                <p className="font-headline text-2xl">{t.contact.locationVal}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest block mb-2">{t.contact.capacity}</span>
                <p className="font-headline text-2xl">{t.contact.capacityVal}</p>
              </div>
              <div>
                <span className="font-mono text-[10px] text-outline uppercase tracking-widest block mb-2">{t.contact.origin}</span>
                <p className="font-headline text-2xl">{t.contact.originVal}</p>
              </div>
              <div className="pt-8 flex gap-4">
                <div className="w-12 h-12 bg-surface-container border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-outline">description</span>
                </div>
                <div className="w-12 h-12 bg-surface-container border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-outline">download</span>
                </div>
                <div className="w-12 h-12 bg-surface-container border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-outline">policy</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 bg-black flex flex-col justify-center p-12 md:p-24 relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none grid-bg"></div>
            <div className="relative z-10">
              <div className="mb-12 font-mono text-sm">
                <span className="text-emerald-500">{t.contact.inquiry}</span>
                <span className="inline-block w-2 h-4 bg-emerald-500 ml-1 animate-pulse"></span>
              </div>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="border-b border-outline-variant pb-2">
                  <input className="bg-transparent border-none w-full text-white font-headline text-2xl placeholder:text-outline/30 focus:ring-0 focus:outline-none" placeholder={t.contact.company} type="text" />
                </div>
                <div className="border-b border-outline-variant pb-2">
                  <input className="bg-transparent border-none w-full text-white font-headline text-2xl placeholder:text-outline/30 focus:ring-0 focus:outline-none" placeholder={t.contact.email} type="email" />
                </div>
                <div className="border-b border-outline-variant pb-2">
                  <select className="bg-transparent border-none w-full text-white font-headline text-2xl focus:ring-0 focus:outline-none appearance-none cursor-pointer">
                    <option className="bg-surface">{t.contact.selectShape}</option>
                    <option className="bg-surface">{t.specs.cube}</option>
                    <option className="bg-surface">{t.specs.finger}</option>
                    <option className="bg-surface">{t.specs.hexagonal}</option>
                  </select>
                </div>
                <button type="submit" className="mt-12 w-full bg-ember text-white p-6 flex justify-between items-center group transition-all hover:bg-secondary-container">
                  <span className="font-headline text-3xl tracking-widest">{t.contact.submit}</span>
                  <span className="material-symbols-outlined text-4xl group-hover:translate-x-2 transition-transform">
                    {lang === 'ar' ? 'arrow_back' : 'arrow_forward'}
                  </span>
                </button>
              </form>
              <p className="mt-6 font-mono text-[10px] text-outline text-center">{t.contact.responseTime}</p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-start gap-8 bg-[#0E0E0E] border-t border-[#5E3F38]" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
        <div className="flex flex-col gap-4">
          <div className="text-lg font-black text-white font-headline tracking-tighter">CARBONCORE EXPORTS</div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-[#AF887F] max-w-xs">
            {t.footer.rights}
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-white tracking-widest">{t.footer.access}</span>
            <nav className="flex flex-col gap-2">
              <a className="font-mono text-[10px] uppercase tracking-widest text-[#AF887F] hover:text-ember hover:translate-x-1 transition-all" href="#">{t.footer.terminalAccess}</a>
              <a className="font-mono text-[10px] uppercase tracking-widest text-[#AF887F] hover:text-ember hover:translate-x-1 transition-all" href="#">{t.footer.compliance}</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-white tracking-widest">{t.footer.legal}</span>
            <nav className="flex flex-col gap-2">
              <a className="font-mono text-[10px] uppercase tracking-widest text-[#AF887F] hover:text-ember hover:translate-x-1 transition-all" href="#">{t.footer.privacy}</a>
              <a className="font-mono text-[10px] uppercase tracking-widest text-[#AF887F] hover:text-ember hover:translate-x-1 transition-all" href="#">{t.footer.sitemap}</a>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-white tracking-widest">{t.footer.contact}</span>
            <nav className="flex flex-col gap-2">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#AF887F]">HQ@CARBONCORE.CO</span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#AF887F]">+62 811 0000 0000</span>
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-mono text-[10px] text-white tracking-widest">{t.footer.station}</span>
            <div className="bg-surface-container-low p-2 border border-outline-variant font-mono text-[8px] text-ember">
              {t.footer.sysStatus}<br />
              LAT: -6.2088<br />
              LNG: 106.8456
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
