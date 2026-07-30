(function(){
  "use strict";

  /* ---------- ICONS (reused) ---------- */
  const ic = {
    clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h12M13 6l6 6-6 6"/></svg>`,
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M20 6L9 17l-5-5"/></svg>`,
    star: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L6 21l1.7-7L2.3 9.2l7.1-.6z"/></svg>`,
    zoom: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg>`,
    ig: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.4" cy="6.6" r="1"/></svg>`,
    fb: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M15 8.5h2V5h-2a4 4 0 00-4 4v2H9v3.5h2V21h3.5v-6.5H17l.5-3.5h-3V9a1 1 0 011-1z"/></svg>`,
    google: `<svg viewBox="0 0 24 24" width="20" height="20"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>`,
  };

  /* ---------- IMAGE PATHS ---------- */
  const img = {
    hero: "images/hero/hero-bg.png",
    aboutMain: "images/about/about-main.png",
    aboutFloat: "images/about/about-float.png",
    hairPrecisionCut: "images/services/hair/precision-cut.png",
    hairStyling: "images/services/hair/styling.png",
    hairSpa: "images/services/hair/hair-spa.png",
    hairColouring: "images/services/hair/colouring.png",
    hairKeratin: "images/services/hair/keratin.png",
    skinClassicFacial: "images/services/skin/classic-facial.png",
    skinHydra: "images/services/skin/hydra-facial.png",
    skinCleanup: "images/services/skin/express-cleanup.png",
    skinAntiAging: "images/services/skin/anti-aging-facial.png",
    makeupBridal: "images/services/makeup/bridal-makeup.png",
    makeupHD: "images/services/makeup/hd-makeup.png",
    makeupParty: "images/services/makeup/party-makeup.png",
    makeupAirbrush: "images/services/makeup/airbrush-makeup.png",
    nailsArt: "images/services/nails/nail-art.png",
    nailsGel: "images/services/nails/gel-polish.png",
    nailsPedicure: "images/services/nails/luxury-pedicure.png",
    nailsManicure: "images/services/nails/classic-manicure.png",
    spaMassage: "images/services/spa/swedish-massage.png",
    spaRelaxation: "images/services/spa/relaxation-ritual.png",
    spaBodyPolish: "images/services/spa/body-spa-polish.png",
  };

  const galleryImgUrls = [
    "images/gallery/balayage.png",
    "images/gallery/bridal-makeup.png",
    "images/gallery/hair-styling.png",
    "images/gallery/hydra-facial.png",
    "images/gallery/nail-art.png",
    "images/gallery/studio-interior.png",
    "images/gallery/spa-ritual.png",
    "images/gallery/party-makeup.png",
    "images/gallery/keratin-finish.png",
  ];

  const galleryLightboxUrls = [
    "images/gallery/balayage.png",
    "images/gallery/bridal-makeup.png",
    "images/gallery/hair-styling.png",
    "images/gallery/hydra-facial.png",
    "images/gallery/nail-art.png",
    "images/gallery/studio-interior.png",
    "images/gallery/spa-ritual.png",
    "images/gallery/party-makeup.png",
    "images/gallery/keratin-finish.png",
  ];

  const teamImgUrls = [
    "images/team/isabelle-moreau.png",
    "images/team/amara-chen.png",
    "images/team/sofia-delgado.png",
    "images/team/priya-nair.png",
  ];

  const clientImgUrls = [
    "images/team/amara-chen.png",
    "images/team/sofia-delgado.png",
    "images/team/isabelle-moreau.png",
    "images/team/priya-nair.png",
  ];

  /* ---------- DATA IN INR (₹) ---------- */
  const services = {
    Hair: [
      {name:"Precision Hair Cut", desc:"Tailored cut based on face shape & texture.", price:"799", duration:"45 min", img:img.hairPrecisionCut},
      {name:"Signature Hair Styling", desc:"Blow-dry, curls or sleek finish for any occasion.", price:"999", duration:"50 min", img:img.hairStyling},
      {name:"Restorative Hair Spa", desc:"Deep-conditioning ritual for strength & shine.", price:"1,499", duration:"60 min", img:img.hairSpa},
      {name:"Hair Colouring", desc:"Full colour, balayage or root touch-up.", price:"2,999", duration:"120 min", img:img.hairColouring},
      {name:"Keratin Smoothening", desc:"Frizz-free, silky finish that lasts for months.", price:"4,999", duration:"150 min", img:img.hairKeratin},
    ],
    Skin: [
      {name:"Classic Facial", desc:"Cleanse, exfoliate & hydrate for instant glow.", price:"1,299", duration:"50 min", img:img.skinClassicFacial},
      {name:"Hydra Facial", desc:"Deep hydration with medical-grade infusion.", price:"2,499", duration:"60 min", img:img.skinHydra},
      {name:"Express Cleanup", desc:"Quick refresh for on-the-go radiance.", price:"799", duration:"30 min", img:img.skinCleanup},
      {name:"Anti-Ageing Facial", desc:"Collagen-boosting treatment for firmer skin.", price:"2,999", duration:"75 min", img:img.skinAntiAging},
    ],
    Makeup: [
      {name:"Bridal Makeup", desc:"Full bridal look with trial session included.", price:"14,999", duration:"180 min", img:img.makeupBridal},
      {name:"HD Makeup", desc:"Camera-ready, high-definition finish.", price:"3,999", duration:"75 min", img:img.makeupHD},
      {name:"Party Makeup", desc:"Glam looks for events & celebrations.", price:"2,499", duration:"60 min", img:img.makeupParty},
      {name:"Airbrush Makeup", desc:"Featherlight, long-lasting flawless coverage.", price:"4,999", duration:"90 min", img:img.makeupAirbrush},
    ],
    Nails: [
      {name:"Nail Art", desc:"Custom hand-painted designs, any style.", price:"899", duration:"45 min", img:img.nailsArt},
      {name:"Gel Polish", desc:"Chip-free, glossy colour for weeks.", price:"799", duration:"40 min", img:img.nailsGel},
      {name:"Luxury Pedicure", desc:"Soothing soak, scrub & massage for feet.", price:"1,299", duration:"55 min", img:img.nailsPedicure},
      {name:"Classic Manicure", desc:"Shape, cuticle care & polish.", price:"699", duration:"35 min", img:img.nailsManicure},
    ],
    Spa: [
      {name:"Swedish Massage", desc:"Full-body relaxation with aromatic oils.", price:"2,499", duration:"60 min", img:img.spaMassage},
      {name:"Relaxation Ritual", desc:"Signature stress-relief body treatment.", price:"2,999", duration:"75 min", img:img.spaRelaxation},
      {name:"Body Spa & Polish", desc:"Exfoliation & nourishing body wrap.", price:"3,499", duration:"90 min", img:img.spaBodyPolish},
    ],
  };

  const pricingPlans = [
    { name:"Basic Glow", price:"2,999", duration:"Single visit · ~90 min", featured:false,
      items:["Express facial cleanup","Classic manicure","Hair wash & blow-dry","Brow shaping"] },
    { name:"Premium Glow", price:"6,999", duration:"Single visit · ~3 hrs", featured:true,
      items:["Hydra facial treatment","Gel polish manicure + pedicure","Hair spa & styling","HD party makeup","Complimentary refreshments"] },
    { name:"Luxury Bridal", price:"18,999", duration:"Full day · trial included", featured:false,
      items:["Bridal makeup + hair styling","Pre-bridal skin ritual (2 sessions)","Luxury mani-pedi with nail art","Personal beauty concierge","Trial session included"] },
  ];

  const googleReviews = [
    {
      name: "Pooja Sharma",
      time: "2 days ago",
      rating: 5,
      comment: "Absolutely in love with their Hydra Facial! My skin felt so radiant and hydrated. Isabelle and her team are extremely courteous. Best salon experience in town!",
      img: clientImgUrls[0]
    },
    {
      name: "Ananya Roy",
      time: "1 week ago",
      rating: 5,
      comment: "Got my bridal makeup done at Luxe Beauty Studio. Sofia did a phenomenal job! Everyone complimented my look. The airbrush finish stayed all night without retouching.",
      img: clientImgUrls[1]
    },
    {
      name: "Rohan Verma",
      time: "2 weeks ago",
      rating: 5,
      comment: "Super professional staff and serene luxury ambience. Got a Keratin treatment and haircut, results are smooth and shiny. Worth every rupee!",
      img: clientImgUrls[2]
    },
    {
      name: "Simran Kaur",
      time: "1 month ago",
      rating: 5,
      comment: "Priya is a magician with nail art! Elegant, durable gel polish and peaceful spa pedicure. The place is spotlessly clean and very relaxing.",
      img: clientImgUrls[3]
    }
  ];

  const galleryImages = [
    {url:galleryImgUrls[0], cap:"Balayage colour transformation"},
    {url:galleryImgUrls[1], cap:"Bridal editorial makeup"},
    {url:galleryImgUrls[2], cap:"Signature hair styling"},
    {url:galleryImgUrls[3], cap:"Hydra facial glow result"},
    {url:galleryImgUrls[4], cap:"Nail art detailing"},
    {url:galleryImgUrls[5], cap:"Studio interior, private suite"},
    {url:galleryImgUrls[6], cap:"Relaxation spa ritual"},
    {url:galleryImgUrls[7], cap:"HD party makeup"},
    {url:galleryImgUrls[8], cap:"Keratin smoothening finish"},
  ];

  const team = [
    {name:"Isabelle Moreau", role:"Creative Director, Hair", exp:"12 yrs experience", img:teamImgUrls[0]},
    {name:"Amara Chen", role:"Lead Skin Therapist", exp:"9 yrs experience", img:teamImgUrls[1]},
    {name:"Sofia Delgado", role:"Bridal Makeup Artist", exp:"10 yrs experience", img:teamImgUrls[2]},
    {name:"Priya Nair", role:"Nail Art Specialist", exp:"7 yrs experience", img:teamImgUrls[3]},
  ];

  const offers = [
    {tag:"This Month", title:"20% Off First Visit", desc:"New clients enjoy 20% off any single service, studio-wide."},
    {tag:"Bridal Season", title:"Free Trial with Bridal Package", desc:"Book the Luxury Bridal package and receive a complimentary trial session."},
    {tag:"Refer & Earn", title:"Refer a Friend, Get ₹500", desc:"Both you and your friend receive ₹500 credit toward your next visit."},
  ];

  const faqs = [
    {q:"Do I need to book an appointment in advance?", a:"Yes, we recommend booking at least 24 to 48 hours ahead, and 2–3 weeks ahead for bridal packages, to guarantee your preferred artist and time slot."},
    {q:"What products do you use?", a:"We use clean, professional-grade and dermatologically tested formulations from internationally recognised beauty brands, selected for both performance and skin safety."},
    {q:"What is your cancellation policy?", a:"Appointments can be rescheduled or cancelled free of charge up to 24 hours before your slot. Late cancellations may incur a small service fee."},
    {q:"Do you offer bridal trials?", a:"Yes — every Luxury Bridal package includes one complimentary trial session so your look is perfected well before the big day."},
    {q:"Is parking available at the studio?", a:"Complimentary valet parking is available for all clients at our main studio entrance during studio hours."},
  ];

  /* ---------- RENDER: MARQUEE ---------- */
  const marqueeItems = ["Hair Styling","Bridal Makeup","Hydra Facial","Nail Art","Body Spa","Keratin Treatment","HD Makeup","Skin Rituals"];
  const marqueeHTML = marqueeItems.map(t=>`<span>${t}<i>&#10022;</i></span>`).join("");
  const marqueeTrack = document.getElementById("marqueeTrack");
  if(marqueeTrack) marqueeTrack.innerHTML = marqueeHTML + marqueeHTML;

  /* ---------- RENDER: SERVICES ---------- */
  const tabsEl = document.getElementById("serviceTabs");
  const gridEl = document.getElementById("serviceGrid");
  const categories = Object.keys(services);
  if(tabsEl && gridEl) {
    tabsEl.innerHTML = categories.map((c,i)=>`<button class="tab-btn${i===0?' active':''}" data-cat="${c}">${c}</button>`).join("");

    function renderServices(cat){
      gridEl.innerHTML = services[cat].map(s=>`
        <div class="service-card reveal in">
          <div class="thumb">
            <img loading="lazy" src="${s.img}" alt="${s.name}">
            <span class="price-tag">From ₹${s.price}</span>
          </div>
          <div class="body">
            <h3>${s.name}</h3>
            <p>${s.desc}</p>
            <div class="service-meta">
              <span class="duration">${ic.clock}${s.duration}</span>
              <a href="#booking">Book ${ic.arrow}</a>
            </div>
          </div>
        </div>
      `).join("");
    }
    renderServices(categories[0]);

    tabsEl.addEventListener("click", e=>{
      const btn = e.target.closest(".tab-btn");
      if(!btn) return;
      tabsEl.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      renderServices(btn.dataset.cat);
    });
  }

  /* ---------- RENDER: PRICING ---------- */
  const priceGrid = document.getElementById("priceGrid");
  if(priceGrid) {
    priceGrid.innerHTML = pricingPlans.map(p=>`
      <div class="price-card reveal in ${p.featured?'featured':''}">
        ${p.featured?'<span class="ribbon">Most Popular</span>':''}
        <div class="plan-name">${p.name}</div>
        <div class="plan-price">₹${p.price}<span>/ session</span></div>
        <div class="plan-duration">${p.duration}</div>
        <ul>${p.items.map(i=>`<li>${ic.check}${i}</li>`).join("")}</ul>
        <a href="#booking" class="btn ${p.featured?'btn-gold':'btn-outline'} btn-block" style="${p.featured?'':'color:#F3EFE6;border-color:rgba(255,255,255,0.25);'}">Book Now</a>
      </div>
    `).join("");
  }

  /* ---------- RENDER: GOOGLE REVIEWS ---------- */
  const googleReviewsGrid = document.getElementById("googleReviewsGrid");
  if(googleReviewsGrid) {
    googleReviewsGrid.innerHTML = googleReviews.map(r => `
      <div class="google-review-card reveal in">
        <div class="gr-card-head">
          <img src="${r.img}" alt="${r.name}" class="gr-avatar">
          <div class="gr-author-info">
            <div class="gr-author-name">${r.name}</div>
            <div class="gr-author-meta">
              <span class="gr-badge-tag">${ic.google} Verified Review</span> · <span class="gr-time">${r.time}</span>
            </div>
          </div>
        </div>
        <div class="gr-stars">
          ${Array(r.rating).fill(ic.star).join("")}
        </div>
        <p class="gr-comment">&ldquo;${r.comment}&rdquo;</p>
      </div>
    `).join("");
  }

  /* ---------- RENDER: GALLERY ---------- */
  const galleryGrid = document.getElementById("galleryGrid");
  if(galleryGrid) {
    galleryGrid.innerHTML = galleryImages.map((g,i)=>`
      <div class="gallery-item" data-index="${i}">
        <img loading="lazy" src="${g.url}" alt="${g.cap}">
        <span class="zoom-ic">${ic.zoom}</span>
        <span class="cap">${g.cap}</span>
      </div>
    `).join("");
  }

  /* ---------- RENDER: TEAM ---------- */
  const teamGrid = document.getElementById("teamGrid");
  if(teamGrid) {
    teamGrid.innerHTML = team.map(t=>`
      <div class="team-card reveal in">
        <div class="photo">
          <img loading="lazy" src="${t.img}" alt="${t.name}, ${t.role}">
          <div class="socials"><a href="#" aria-label="Instagram">${ic.ig}</a><a href="#" aria-label="Facebook">${ic.fb}</a></div>
        </div>
        <div class="info">
          <h3>${t.name}</h3>
          <div class="role">${t.role}</div>
          <div class="exp">${t.exp}</div>
        </div>
      </div>
    `).join("");
  }

  /* ---------- RENDER: TESTIMONIALS ---------- */
  const tTrack = document.getElementById("tTrack");
  const tDots = document.getElementById("tDots");
  if(tTrack && tDots) {
    tTrack.innerHTML = googleReviews.map(t=>`
      <div class="t-slide">
        <div class="t-stars">${Array(5).fill(ic.star).join("")}</div>
        <p class="t-quote">&ldquo;${t.comment}&rdquo;</p>
        <div class="t-person">
          <img src="${t.img}" alt="${t.name}">
          <div class="meta"><b>${t.name}</b><span>Google Verified Review</span></div>
        </div>
      </div>
    `).join("");
    tDots.innerHTML = googleReviews.map((_,i)=>`<button data-i="${i}" class="${i===0?'active':''}" aria-label="Go to testimonial ${i+1}"></button>`).join("");

    let tIndex = 0;
    function goTo(i){
      tIndex = (i + googleReviews.length) % googleReviews.length;
      tTrack.style.transform = `translateX(-${tIndex*100}%)`;
      tDots.querySelectorAll("button").forEach((b,idx)=>b.classList.toggle("active", idx===tIndex));
    }
    const tPrev = document.getElementById("tPrev");
    const tNext = document.getElementById("tNext");
    if(tPrev) tPrev.addEventListener("click", ()=>goTo(tIndex-1));
    if(tNext) tNext.addEventListener("click", ()=>goTo(tIndex+1));
    tDots.addEventListener("click", e=>{ const b=e.target.closest("button"); if(b) goTo(+b.dataset.i); });
    let tAuto = setInterval(()=>goTo(tIndex+1), 6000);
    const testSec = document.getElementById("testimonials");
    if(testSec) {
      testSec.addEventListener("mouseenter", ()=>clearInterval(tAuto));
      testSec.addEventListener("mouseleave", ()=>{ tAuto = setInterval(()=>goTo(tIndex+1), 6000); });
    }
  }

  /* ---------- RENDER: OFFERS ---------- */
  const offerGrid = document.getElementById("offerGrid");
  if(offerGrid) {
    offerGrid.innerHTML = offers.map(o=>`
      <div class="offer-card reveal in">
        <span class="tag">${o.tag}</span>
        <h3>${o.title}</h3>
        <p>${o.desc}</p>
        <a href="#booking">Claim Offer ${ic.arrow}</a>
      </div>
    `).join("");
  }

  /* ---------- RENDER: FAQ ---------- */
  const faqWrap = document.getElementById("faqWrap");
  if(faqWrap) {
    faqWrap.innerHTML = faqs.map((f,i)=>`
      <div class="faq-item" data-i="${i}">
        <button class="faq-q" aria-expanded="false">
          <h4>${f.q}</h4>
          <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg></span>
        </button>
        <div class="faq-a"><p>${f.a}</p></div>
      </div>
    `).join("");
    faqWrap.addEventListener("click", e=>{
      const q = e.target.closest(".faq-q");
      if(!q) return;
      const item = q.closest(".faq-item");
      const answer = item.querySelector(".faq-a");
      const isOpen = item.classList.contains("open");
      faqWrap.querySelectorAll(".faq-item.open").forEach(o=>{
        o.classList.remove("open"); o.querySelector(".faq-a").style.maxHeight = null; o.querySelector(".faq-q").setAttribute("aria-expanded","false");
      });
      if(!isOpen){
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
        q.setAttribute("aria-expanded","true");
      }
    });
  }

  /* ---------- PRELOADER ---------- */
  window.addEventListener("load", ()=>{
    setTimeout(()=>{
      const pre = document.getElementById("preloader");
      const home = document.getElementById("home");
      if(pre) pre.classList.add("hide");
      if(home) home.classList.add("is-ready");
    }, 500);
  });

  /* ---------- NAV SCROLL STATE ---------- */
  const nav = document.getElementById("siteNav");
  const navBookBtn = document.getElementById("navBookBtn");
  const topBtn = document.getElementById("topBtn");
  window.addEventListener("scroll", ()=>{
    const y = window.scrollY;
    if(nav) nav.classList.toggle("scrolled", y > 40);
    if(navBookBtn) navBookBtn.style.display = y > 40 ? "inline-flex" : "none";
    if(topBtn) topBtn.classList.toggle("show", y > 700);
  }, { passive:true });

  /* ---------- MOBILE MENU ---------- */
  const mobileMenu = document.getElementById("mobileMenu");
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");
  if(burgerBtn && mobileMenu) burgerBtn.addEventListener("click", ()=>mobileMenu.classList.add("open"));
  if(mobileCloseBtn && mobileMenu) mobileCloseBtn.addEventListener("click", ()=>mobileMenu.classList.remove("open"));
  if(mobileMenu) mobileMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=>mobileMenu.classList.remove("open")));

  /* ---------- THEME TOGGLE ---------- */
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  if(themeToggle) {
    themeToggle.addEventListener("click", ()=>{
      root.setAttribute("data-theme", root.getAttribute("data-theme")==="dark" ? "light" : "dark");
    });
  }

  /* ---------- BACK TO TOP ---------- */
  if(topBtn) topBtn.addEventListener("click", ()=>window.scrollTo({top:0, behavior:"smooth"}));

  /* ---------- CUSTOM CURSOR ---------- */
  const cursorDot = document.getElementById("cursorDot");
  if(cursorDot) {
    window.addEventListener("mousemove", e=>{
      cursorDot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
    });
    document.querySelectorAll("a, button").forEach(el=>{
      el.addEventListener("mouseenter", ()=>cursorDot.classList.add("grow"));
      el.addEventListener("mouseleave", ()=>cursorDot.classList.remove("grow"));
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold:0.15 });
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));

  /* ---------- COUNT UP STATS ---------- */
  const counters = document.querySelectorAll("[data-count]");
  const cIo = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(!en.isIntersecting) return;
      const el = en.target;
      const target = +el.dataset.count;
      let cur = 0;
      const step = Math.max(1, Math.round(target/60));
      const tick = ()=>{
        cur += step;
        if(cur >= target){ el.textContent = target.toLocaleString()+"+"; return; }
        el.textContent = cur.toLocaleString();
        requestAnimationFrame(tick);
      };
      tick();
      cIo.unobserve(el);
    });
  }, { threshold:0.5 });
  counters.forEach(c=>cIo.observe(c));

  /* ---------- GALLERY LIGHTBOX ---------- */
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lbImg");
  let lbIndex = 0;
  function openLightbox(i){
    lbIndex = i;
    if(lbImg) {
      lbImg.src = galleryLightboxUrls[i];
      lbImg.alt = galleryImages[i].cap;
    }
    if(lightbox) lightbox.classList.add("open");
  }
  if(galleryGrid) {
    galleryGrid.addEventListener("click", e=>{
      const item = e.target.closest(".gallery-item");
      if(item) openLightbox(+item.dataset.index);
    });
  }
  const lbClose = document.getElementById("lbClose");
  const lbPrev = document.getElementById("lbPrev");
  const lbNext = document.getElementById("lbNext");
  if(lbClose && lightbox) lbClose.addEventListener("click", ()=>lightbox.classList.remove("open"));
  if(lightbox) lightbox.addEventListener("click", e=>{ if(e.target===lightbox) lightbox.classList.remove("open"); });
  if(lbPrev) lbPrev.addEventListener("click", ()=>openLightbox((lbIndex-1+galleryImages.length)%galleryImages.length));
  if(lbNext) lbNext.addEventListener("click", ()=>openLightbox((lbIndex+1)%galleryImages.length));
  window.addEventListener("keydown", e=>{
    if(!lightbox || !lightbox.classList.contains("open")) return;
    if(e.key==="Escape") lightbox.classList.remove("open");
    if(e.key==="ArrowLeft") openLightbox((lbIndex-1+galleryImages.length)%galleryImages.length);
    if(e.key==="ArrowRight") openLightbox((lbIndex+1)%galleryImages.length);
  });

  /* ---------- BEFORE / AFTER SLIDER ---------- */
  const baRange = document.getElementById("baRange");
  const baBeforeImg = document.getElementById("baBeforeImg");
  const baHandle = document.getElementById("baHandle");
  if(baRange && baBeforeImg && baHandle) {
    baRange.addEventListener("input", ()=>{
      const v = baRange.value;
      baBeforeImg.style.clipPath = `inset(0 ${100-v}% 0 0)`;
      baHandle.style.left = v + "%";
    });
  }

  /* ---------- BOOKING FORM ---------- */
  const bookingForm = document.getElementById("bookingForm");
  const formSuccess = document.getElementById("formSuccess");
  const bkDateInput = document.getElementById("bkDate");

  // Restrict appointment booking date picker to today onwards
  if(bkDateInput) {
    const todayStr = new Date().toISOString().split("T")[0];
    bkDateInput.setAttribute("min", todayStr);
  }

  if(bookingForm && formSuccess) {
    bookingForm.addEventListener("submit", e=>{
      e.preventDefault();
      
      const name = document.getElementById("bkName")?.value || "Valued Client";
      const service = document.getElementById("bkService")?.value || "Selected Service";
      const date = document.getElementById("bkDate")?.value || "";
      const time = document.getElementById("bkTime")?.value || "";

      // Generate Reference Code
      const refCode = "LX-" + Math.floor(10000 + Math.random() * 90000);
      
      const bkRefCode = document.getElementById("bkRefCode");
      const bkConfirmName = document.getElementById("bkConfirmName");
      const bkWaBtn = document.getElementById("bkWaBtn");

      if(bkRefCode) bkRefCode.textContent = refCode;
      if(bkConfirmName) bkConfirmName.textContent = name;

      if(bkWaBtn) {
        const msg = `Hi Luxe Beauty Studio! I would like to confirm my appointment request.\n\n📌 *Booking Ref:* ${refCode}\n👤 *Name:* ${name}\n✨ *Service:* ${service}\n📅 *Date:* ${date}\n⏰ *Time:* ${time}`;
        bkWaBtn.href = `https://wa.me/919876543210?text=${encodeURIComponent(msg)}`;
      }

      bookingForm.style.display = "none";
      formSuccess.classList.add("show");
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ---------- NEWSLETTER ---------- */
  const newsletterForm = document.getElementById("newsletterForm");
  if(newsletterForm) {
    newsletterForm.addEventListener("submit", e=>{
      e.preventDefault();
      const input = e.target.querySelector("input");
      if(input) {
        input.value = "Subscribed ✓";
        setTimeout(()=>{ input.value=""; }, 2500);
      }
    });
  }

  /* ---------- IMAGE ERROR FALLBACK ---------- */
  document.addEventListener("error", function(e) {
    if(e.target && e.target.tagName === "IMG") {
      e.target.onerror = null;
      // Fallback SVG data URI with luxury gold placeholder
      e.target.src = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='500' height='400' viewBox='0 0 500 400'><rect width='500' height='400' fill='%23161513'/><text x='50%25' y='50%25' fill='%23D4AF37' font-family='serif' font-size='22' text-anchor='middle' dominant-baseline='middle'>Luxe Beauty Atelier</text></svg>";
    }
  }, true);

  /* ---------- SERVICE WORKER REGISTRATION ---------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js")
        .then(reg => console.log("ServiceWorker registered successfully:", reg.scope))
        .catch(err => console.log("ServiceWorker registration failed:", err));
    });
  }

  /* ---------- YEAR ---------- */
  const yearNow = document.getElementById("yearNow");
  if(yearNow) yearNow.textContent = new Date().getFullYear();

})();

