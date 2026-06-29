/* =================================================================
   RAZEEN — main.js
   Data-driven rendering + interactions (vanilla JS)
   ================================================================= */
(function () {
  "use strict";

  /* ---------- Icon library (fine-line, inherits currentColor) ---------- */
  const I = {
    bag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-.7 12.5a1.5 1.5 0 0 1-1.5 1.4H8.2a1.5 1.5 0 0 1-1.5-1.4L6 8z"/><path d="M9 8V6.2A3 3 0 0 1 12 3a3 3 0 0 1 3 3.2V8"/></svg>',
    user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.5"/><path d="M5 20.5c.6-3.8 3.4-6 7-6s6.4 2.2 7 6"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l11-6.5z"/></svg>',
    bloom: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1"><path d="M12 2l2.6 4.5L19.8 6l-1 5.2L23 12l-4.2.8 1 5.2-5.2-.5L12 22l-2.6-4.5L4.2 18l1-5.2L1 12l4.2-.8-1-5.2 5.2.5z"/><circle cx="12" cy="12" r="2.4"/></svg>',
    arrow: '<svg viewBox="0 0 24 18" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 9H2M9 2L2 9l7 7"/></svg>',
    map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>',
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21c4-4.2 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 3 6.8 7 11z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></svg>',
    person: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="2.3"/><path d="M12 7.4c-2 0-3 1.2-3.4 3L7 20h3l.5-5h3l.5 5h3l-1.6-9.6c-.4-1.8-1.4-3-3.4-3z"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/></svg>',
    scissors: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.6"/><circle cx="6" cy="18" r="2.6"/><path d="M8.2 7.6L20 18M8.2 16.4L20 6"/></svg>',
    package: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M4 7.5l8 4.5 8-4.5M12 12v9"/></svg>',
    truck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M2 6h11v10H2zM13 9h4l3 3v4h-7z"/><circle cx="6" cy="18" r="1.7"/><circle cx="17" cy="18" r="1.7"/></svg>',
    dress: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4.4" r="2.2"/><path d="M9.6 7.2h4.8l3 12.6c.15.7-.36 1.2-1 1.2H7.6c-.64 0-1.15-.5-1-1.2l3-12.6z"/><path d="M12 7.4v13.6"/></svg>',
    fabrics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="14.6" width="16" height="3.8" rx="1.6"/><rect x="5" y="10.7" width="14" height="3.6" rx="1.6"/><rect x="6.2" y="7" width="11.6" height="3.4" rx="1.6"/><path d="M9 7.2v3.2M9 10.9v3.4M9 14.8v3.4"/></svg>',
    sewing: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 20h18"/><rect x="6" y="16.4" width="12" height="3.2" rx="1"/><path d="M15.6 16.4V9.4h2.2a1.4 1.4 0 0 0 0-2.8"/><path d="M14.6 6.6h4.2"/><path d="M15.6 9.4H8.7a2 2 0 0 0-2 2"/><path d="M7 11.4v3l1.1.9"/></svg>',
    leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20c0-9 6-15 16-15 0 10-6 15-13 15a8 8 0 0 1-3 0z"/><path d="M9 15c2.5-2.5 5-4 8-5"/></svg>',
    badge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.8l2.3 1.7 2.8-.2.9 2.7 2.3 1.6-.9 2.7.9 2.7-2.3 1.6-.9 2.7-2.8-.2L12 21.2l-2.3-1.7-2.8.2-.9-2.7-2.3-1.6.9-2.7-.9-2.7 2.3-1.6.9-2.7 2.8.2z"/><path d="M9 12l2 2 4-4"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4 4 10-10"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.8l7 2.6v5.3c0 4.6-3 7.9-7 9.5-4-1.6-7-4.9-7-9.5V5.4l7-2.6z"/><path d="M8.6 12.1l2.4 2.4 4.4-4.7"/></svg>',
    needle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21l11.5-11.5"/><path d="M12.5 6.7l4.8 4.8"/><path d="M19.2 5.4a2.3 2.3 0 0 1 0 3.6"/><path d="M17.4 3.9c1.4 0 2.6 1.1 2.6 2.6"/></svg>',
    checkCircle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.3l2.6 2.6L16 9.5"/></svg>',
    at: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3.4"/><path d="M15.4 12v1.5a2.3 2.3 0 0 0 4.6 0V12a8 8 0 1 0-3.2 6.4"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="3.6"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg>',
    swatch: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2.2" stroke-dasharray="2.4 2.2"/><path d="M7.5 9.4c1.5 1.2 3-1.2 4.5 0s3-1.2 4.5 0"/><path d="M7.5 13.4c1.5 1.2 3-1.2 4.5 0s3-1.2 4.5 0"/></svg>',
    palette: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="2.8"/><path d="M12 3.5v5.7M12 14.8v5.7M3.5 12h5.7M14.8 12h5.7M6.05 6.05l4 4M13.95 13.95l4 4M17.95 6.05l-4 4M10.05 13.95l-4 4"/></svg>',
    penDesign: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><path d="M5 19l1.2-4.2L16.2 4.8a1.7 1.7 0 0 1 2.4 0l.6.6a1.7 1.7 0 0 1 0 2.4L9.2 17.8 5 19z"/><path d="M14.6 6.4l3 3"/><path d="M4 21h7"/></svg>',
    mtape: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="9.6" r="5.8"/><circle cx="11" cy="9.6" r="2.1"/><path d="M6.6 13.4 4.3 18.8a1.2 1.2 0 0 0 1.1 1.7H19a1.2 1.2 0 0 0 1.2-1.2v-2.6"/><path d="M8 20.5v-1.5M11 20.5v-1.8M14 20.5v-1.5M17 20.5v-1.8"/></svg>',
    mapCorner: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"><path d="M5 26V12A7 7 0 0 1 12 5H26"/><path d="M12 26V15.5A3.5 3.5 0 0 1 15.5 12H26"/><path d="M5 33q9 0 9-9 q0-6 6-6"/><circle cx="12" cy="12" r="1.7" fill="currentColor" stroke="none"/></svg>',
    tiktok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v11.2a3.4 3.4 0 1 1-3-3.37"/><path d="M14 6.2a5.2 5.2 0 0 0 4.6 3.1"/></svg>',
    snapchat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c2.4 0 4 1.9 4 4.4 0 1.2-.1 2.2.4 2.9.4.5 1.1.5 1.7.9.3.2.2.7-.2.9-.7.3-1.7.3-2 1-.2.5.6 1.6 2.4 2.4.4.2.3.7-.1.9-1 .4-1.8.1-2.4.6-.4.4-.2 1.3-.9 1.5-.8.2-1.5-.6-2.9-.6-1.4 0-2.1.8-2.9.6-.7-.2-.5-1.1-.9-1.5-.6-.5-1.4-.2-2.4-.6-.4-.2-.5-.7-.1-.9 1.8-.8 2.6-1.9 2.4-2.4-.3-.7-1.3-.7-2-1-.4-.2-.5-.7-.2-.9.6-.4 1.3-.4 1.7-.9.5-.7.4-1.7.4-2.9C8 4.9 9.6 3 12 3z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20l1.3-3.9A7.5 7.5 0 1 1 8 19.1L4 20z"/><path d="M9.2 8.4c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.5l-.5.6c-.1.1-.2.3-.1.5.3.6 1.3 1.7 2.3 2.1.2.1.4.1.5 0l.6-.6c.1-.2.3-.2.5-.1l1.5.7c.2.1.4.2.4.4 0 .6-.3 1.5-1.4 1.6-1 .1-2.3.1-4.4-1.7-1.8-1.6-2.5-3.4-2.6-4 0-.6.3-1.2.3-1.6z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="2.4"/><path d="M4 7l8 5.5L20 7"/></svg>',
    chevronL: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5l-7 7 7 7"/></svg>',
    heart: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.5l-1.4-1.3C5.8 14.9 3 12.3 3 9.1 3 6.6 4.9 4.8 7.3 4.8c1.4 0 2.7.6 3.7 1.7 1-1.1 2.3-1.7 3.7-1.7 2.4 0 4.3 1.8 4.3 4.3 0 3.2-2.8 5.8-7.6 10.1L12 20.5z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="9.5" rx="2.2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/><circle cx="12" cy="15" r="1.2" fill="currentColor" stroke="none"/></svg>',
    ornament: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4c1.4 2 1.4 6 0 8-1.4-2-1.4-6 0-8z" transform="rotate(0 12 12)"/><path d="M12 20c1.4-2 1.4-6 0-8-1.4 2-1.4 6 0 8z"/><path d="M4 12c2-1.4 6-1.4 8 0-2 1.4-6 1.4-8 0z"/><path d="M20 12c-2-1.4-6-1.4-8 0 2 1.4 6 1.4 8 0z"/><circle cx="12" cy="12" r="1.1" fill="currentColor" stroke="none"/></svg>',
    payVisa: '<svg viewBox="0 0 52 22" fill="currentColor"><text x="26" y="16" font-family="Arial, sans-serif" font-weight="700" font-style="italic" font-size="15" letter-spacing="1" text-anchor="middle">VISA</text></svg>',
    payMada: '<svg viewBox="0 0 52 22" fill="currentColor"><text x="26" y="15" font-family="Arial, sans-serif" font-weight="700" font-size="13" letter-spacing="0.5" text-anchor="middle">mada</text></svg>',
    payMc: '<svg viewBox="0 0 52 22" fill="none"><circle cx="22" cy="11" r="8" fill="currentColor" opacity="0.9"/><circle cx="30" cy="11" r="8" fill="currentColor" opacity="0.5"/></svg>',
    payApple: '<svg viewBox="0 0 56 22" fill="currentColor"><path d="M11.4 7.3c-.5.6-1.3 1-2 .9-.1-.8.3-1.6.7-2.1.5-.6 1.4-1 2-1 .1.8-.2 1.6-.7 2.2zm.7 1.2c-1.1 0-2 .6-2.5.6s-1.3-.6-2.1-.6c-1.1 0-2.1.6-2.7 1.6-1.1 2-.3 4.9.8 6.5.5.8 1.1 1.6 2 1.6.8 0 1.1-.5 2-.5s1.2.5 2 .5 1.4-.7 1.9-1.5c.4-.6.6-1.2.6-1.2-1.3-.5-1.5-2.3-.2-3.1-.6-.9-1.6-1-2-1z"/><text x="38" y="15" font-family="Arial, sans-serif" font-weight="600" font-size="12" text-anchor="middle">Pay</text></svg>',
    chevronD: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>',
    chevronR: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 5l7 7-7 7"/></svg>',
    refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 11a8 8 0 0 0-14-4.5L4 9"/><path d="M4 4v5h5"/><path d="M4 13a8 8 0 0 0 14 4.5L20 15"/><path d="M20 20v-5h-5"/></svg>',
    sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2.2"/><circle cx="8" cy="17" r="2.2"/></svg>',
  };
  const icon = (n) => I[n] || "";

  /* ---------- Data ---------- */
  const DATA = {
    nav: [
      { label: "الرئيسية", href: "#home", active: true },
      { label: "المجموعات", href: "#collections" },
      { label: "لماذا رزين", href: "#why" },
      { label: "عوالم رزين", href: "#worlds" },
      { label: "المتجر", href: "#shop" },
      { label: "الطلب الخاص", href: "#bespoke" },
      { label: "حكايتنا", href: "#story" },
      { label: "تواصلي", href: "#visit" },
    ],
    stats: [
      { num: "4.9", label: "تقييم المتجر" },
      { num: "+50", label: "تصميم حصري" },
      { num: "+10K", label: "عميلة راضية" },
    ],
    trust: [
      { ic: "shield", t: "ضمان الجودة", s: "على كل قطعة" },
      { ic: "truck", t: "شحن سريع", s: "لكافة المناطق" },
      { ic: "needle", t: "تفصيل يدوي", s: "بأعلى جودة" },
      { ic: "leaf", t: "خامات فاخرة", s: "مختارة بعناية" },
    ],
    collections: [
      { img: "ph-abaya", title: "عبايات", l1: "تصاميم أنيقة", l2: "لمختلف المناسبات", bg: "assets/ab.png" },
      { img: "ph-khimar", title: "خُمُر", l1: "راحة وستر", l2: "بخامات فاخرة" , bg: "assets/k.png" },
      { img: "ph-shawl", title: "شالات", l1: "لمسة جمالية", l2: "تكمل إطلالتك", bg: "assets/shall.png" },
      { img: "ph-niqab", title: "نقابات", l1: "عملية وأنيقة", l2: "بجودة عالية" },
    ],
    why: [
      { ic: "dress", n: "01", t: "ستر وأناقة", d: "تصاميم تجمع بين الحشمة والجمال لتمنحك إطلالة راقية في كل مناسبة." },
      { ic: "fabrics", n: "02", t: "خامات مختارة", d: "أقمشة فاخرة مختارة بعناية لضمان الراحة، الجودة، والمتانة التي تدوم." },
      { ic: "sewing", n: "03", t: "تفصيل متقن", d: "كل قطعة تُصنع بدقة وعناية على أيدي خبيرات في فن الخياطة." },
      { ic: "package", n: "04", t: "تغليف فاخر", d: "نهتم بكل التفاصيل حتى يصلك طلبك بتغليف أنيق يعكس قيمة ما اخترتِه." },
      { ic: "truck", n: "05", t: "شحن سريع وآمن", d: "نوصل طلبك بسرعة إلى جميع مناطق االمحررة وغير المحررة." },
    ],
    worlds: [
      { img: "ph-abaya", title: "عبَايات", sub: "أناقة تلامس الوقار" , bg: "assets/ab.png" },
      { img: "ph-khimar", title: "خُمُر", sub: "سترٌ بنعومة... وجمالٌ في البساطة", bg: "assets/k.png" },
      { img: "ph-niqab", title: "نقابات", sub: "هيبة الحضور... وطمأنينة الاختيار" },
      { img: "ph-shawl", title: "شالات وإكسسوارات", sub: "تفاصيل صغيرة... تصنع فرقاً كبيراً", bg: "assets/shall.png" },
    ],
    /* products — each carries filterable attributes (cat/style/material/sizes/colors) */
    products: [
      { id: 1, title: "عباية نواعم",      price: 320, cat: "عبايات", style: "يومي",    material: "كريب",   sizes: ["S","M","L"],      colors: ["#181512","#6b5640","#c9b79c"] },
      { id: 2, title: "عباية رزين",       price: 360, cat: "عبايات", style: "سهرة",    material: "حرير",    sizes: ["M","L","XL"],     colors: ["#181512","#6b5640","#cdbfa6"] },
      { id: 3, title: "عباية هدايا",      price: 340, cat: "عبايات", style: "يومي",    material: "جورجيت", sizes: ["S","M","L"],      colors: ["#c9b79c","#6b5640","#8a6c45"], badge: "جديد" },
      { id: 4, title: "شال حرير فاخر",    price: 180, cat: "شالات",  style: "كلاسيكي", material: "حرير",    sizes: ["مقاس واحد"],       colors: ["#6b5640","#181512","#8a6c45"], badge: "الأكثر مبيعاً" },
      { id: 5, title: "خمار نور",         price: 140, cat: "خُمُر",   style: "يومي",    material: "كريب",   sizes: ["S","M"],          colors: ["#181512","#2d3142","#7e756f"] },
      { id: 6, title: "عباية سَنا",        price: 420, cat: "عبايات", style: "سهرة",    material: "حرير",    sizes: ["M","L"],          colors: ["#181512","#7a2e2e"], badge: "جديد" },
      { id: 7, title: "شال قطن ناعم",     price: 120, cat: "شالات",  style: "عصري",    material: "قطن",     sizes: ["مقاس واحد"],       colors: ["#c9b79c","#b88a8a"] },
      { id: 8, title: "نقاب كلاسيك",      price: 90,  cat: "نقابات", style: "كلاسيكي", material: "كريب",   sizes: ["مقاس واحد"],       colors: ["#181512"] },
    ],
    /* single-select filter dimensions (key must match a product field) */
    filterDims: [
      { key: "cat",      label: "الفئة",  opts: ["عبايات", "خُمُر", "شالات", "نقابات"] },
      { key: "style",    label: "النمط",  opts: ["يومي", "سهرة", "كلاسيكي", "عصري"] },
      { key: "material", label: "الخامة", opts: ["كريب", "حرير", "جورجيت", "قطن"] },
      { key: "size",     label: "المقاس", opts: ["S", "M", "L", "XL"] },
    ],
    colorOpts: ["#181512", "#6b5640", "#8a6c45", "#c9b79c", "#cdbfa6", "#7a2e2e", "#2d3142"],
    sortOpts: [
      { val: "new",  label: "الأحدث" },
      { val: "low",  label: "السعر: الأقل أولاً" },
      { val: "high", label: "السعر: الأعلى أولاً" },
    ],
    specialSteps: [
      { ic: "swatch", t: "اختاري القماش" },
      { ic: "palette", t: "حددي اللون" },
      { ic: "penDesign", t: "صممي تفاصيلك" },
      { ic: "mtape", t: "أدخلي قياساتك" },
    ],
    footer: [
      { type: "brand" },
      { type: "links", title: "تسوّقي", items: ["جديد الوصول", "العبايات", "الخُمُر", "النقابات", "الإكسسوارات", "العروض الخاصة"] },
      { type: "links", title: "معلومات", items: ["من نحن", "دليل المقاسات", "سياسة الاسترجاع", "سياسة الخصوصية", "الشروط والأحكام", "الأسئلة الشائعة"] },
      { type: "links", title: "خدمة العملاء", items: ["تتبّع الطلب", "طرق الدفع", "الشحن والتوصيل", "الاستبدال والإرجاع", "تواصلي معنا"] },
      { type: "news" },
    ],
    pay: ["payMada", "payVisa", "payMc", "payApple"],
  };

  const img = (name) => `assets/images/${name}.jpg`;
  const COVER = "assets/cover.png"; // shared card background for collections + worlds
  const el = (id) => document.getElementById(id);
  const setHTML = (id, html) => { const n = el(id); if (n) n.innerHTML = html; };

  /* ---------- Render: inject standalone icons ---------- */
  document.querySelectorAll("[data-icon]").forEach((n) => { n.innerHTML = icon(n.dataset.icon); });

  /* ---------- Render: nav ---------- */
  setHTML("navList", DATA.nav.map((n) =>
    `<li><a href="${n.href}" class="${n.active ? "active" : ""}">${n.label}</a></li>`).join(""));

  /* ---------- Render: hero stats + trust ---------- */
  setHTML("heroStats", DATA.stats.map((s) =>
    `<div class="bar-stat"><span class="stat-num">${s.num}</span><span class="stat-label">${s.label}</span></div>`).join(""));

  setHTML("heroTrust", DATA.trust.map((t) =>
    `<div class="bar-trust-item"><span class="t-txt"><strong>${t.t}</strong><span>${t.s}</span></span><span class="trust-ic">${icon(t.ic)}</span></div>`).join(""));

  /* ---------- Render: collections ---------- */
  setHTML("collectionGrid", DATA.collections.map((c, i) =>
    `<article class="col-card reveal" style="transition-delay:${i * 110}ms">
       <img src="${c.bg || COVER}" alt="${c.title}" loading="lazy">
       <div class="col-body">
         <h3 class="col-title">${c.title}</h3>
         <p class="col-desc">${c.l1}<br>${c.l2}</p>
         <a href="#shop" class="col-cta"><span>تسوّقي الآن</span><span class="circle">${icon("arrow")}</span></a>
       </div>
     </article>`).join(""));

  /* ---------- Render: why cards ---------- */
  setHTML("whyGrid", DATA.why.map((w, i) =>
    `<article class="why-card reveal" style="transition-delay:${i * 80}ms">
       <span class="why-ic">${icon(w.ic)}</span>
       <h3>${w.t}</h3>
       <p>${w.d}</p>
       <span class="why-num">${w.n}</span>
     </article>`).join(""));

  /* ---------- Render: worlds (arch cards) ---------- */
  setHTML("worldsGrid", DATA.worlds.map((w, i) =>
    `<article class="world-card reveal" style="transition-delay:${i * 120}ms">
       <div class="world-arch">
         <img src="${w.bg || COVER}" alt="${w.title}" loading="lazy">
         <span class="world-veil"></span>
       </div>
       <div class="world-body">
         <h3 class="world-title">${w.title}</h3>
         <span class="world-div"></span>
         <p class="world-sub">${w.sub}</p>
         <a href="#shop" class="world-cta"><span>استكشفي المجموعة</span><span class="circle">${icon("arrow")}</span></a>
       </div>
     </article>`).join(""));

  /* ---------- Fayd: functional products + filters ---------- */
  const CARD_IMG = "assets/shall_card.png"; // shared card image (per-item img can override later)
  const fstate = { cat: "", style: "", material: "", size: "", color: "", sort: "new" };
  const wished = new Set();

  /* build the filter-bar dropdowns (attribute dims + color) */
  setHTML("filterBar", [
    ...DATA.filterDims.map((d) =>
      `<div class="fdrop" data-dim="${d.key}">
         <button class="fdrop-btn" type="button"><span class="fdrop-cur">${d.label}</span>${icon("chevronD")}</button>
         <div class="fdrop-panel">
           <button class="fdrop-opt" data-val="" data-label="${d.label}">الكل</button>
           ${d.opts.map((o) => `<button class="fdrop-opt" data-val="${o}" data-label="${o}">${o}</button>`).join("")}
         </div>
       </div>`),
    `<div class="fdrop fdrop--color" data-dim="color">
       <button class="fdrop-btn" type="button"><span class="fdrop-swatch" style="background:#181512"></span><span class="fdrop-cur">اللون</span>${icon("chevronD")}</button>
       <div class="fdrop-panel fdrop-panel--colors">
         <button class="fdrop-opt fdrop-opt--all" data-val="" data-label="اللون">الكل</button>
         <div class="fdrop-colors">
           ${DATA.colorOpts.map((c) => `<button class="color-chip" data-val="${c}" style="background:${c}" aria-label="لون"></button>`).join("")}
         </div>
       </div>
     </div>`,
  ].join(""));

  /* sort dropdown */
  setHTML("filterSort",
    `<div class="fdrop fdrop--sort" data-dim="sort">
       <button class="fdrop-btn" type="button"><span class="fdrop-cur">${DATA.sortOpts[0].label}</span>${icon("chevronD")}</button>
       <div class="fdrop-panel">
         ${DATA.sortOpts.map((s) => `<button class="fdrop-opt" data-val="${s.val}" data-label="${s.label}">${s.label}</button>`).join("")}
       </div>
     </div>`);

  const productCard = (p) =>
    `<article class="pcard reveal" data-id="${p.id}">
       <div class="pcard-media">
         <img src="${p.img || CARD_IMG}" alt="${p.title}" loading="lazy">
         <button class="pcard-wish${wished.has(p.id) ? " on" : ""}" type="button" aria-label="إضافة للمفضلة">${icon("heart")}</button>
         ${p.badge ? `<span class="pcard-badge">${p.badge}</span>` : ""}
       </div>
       <div class="pcard-info">
         <h3 class="pcard-name">${p.title}</h3>
         <div class="pcard-row">
           <span class="pcard-price">${p.price} ر.س</span>
           <span class="pcard-dots">${p.colors.map((d) => `<span class="dot" style="background:${d}"></span>`).join("")}</span>
         </div>
       </div>
     </article>`;

  const matches = (p) =>
    (!fstate.cat || p.cat === fstate.cat) &&
    (!fstate.style || p.style === fstate.style) &&
    (!fstate.material || p.material === fstate.material) &&
    (!fstate.size || p.sizes.includes(fstate.size)) &&
    (!fstate.color || p.colors.includes(fstate.color));

  const renderProducts = () => {
    let list = DATA.products.filter(matches);
    if (fstate.sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    else if (fstate.sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    setHTML("productGrid",
      list.length
        ? list.map(productCard).join("")
        : `<p class="pgrid-empty">لا توجد منتجات مطابقة للتصفية. جرّبي <button type="button" id="emptyReset" class="pgrid-reset">إعادة الضبط</button>.</p>`);
    const cnt = el("prodCount");
    if (cnt) cnt.textContent = `عرض ${list.length} من ${DATA.products.length} منتج`;
    document.querySelectorAll("#productGrid .reveal").forEach((r) => r.classList.add("in"));
    updateNav();
  };

  /* rail navigation (arrows + dots) */
  const railEl = el("productGrid");
  const dotsEl = el("pnavDots");
  const navEl = el("productNav");
  const railStep = () => (railEl ? railEl.clientWidth * 0.9 : 0);
  const clampScroll = (v) => Math.max(-(railEl.scrollWidth - railEl.clientWidth), Math.min(0, v));
  const railGo = (dir) => railEl && railEl.scrollTo({ left: clampScroll(railEl.scrollLeft - dir * railStep()), behavior: "smooth" });

  function updateNav() {
    if (!railEl || !dotsEl || !navEl) return;
    const overflow = railEl.scrollWidth - railEl.clientWidth > 6;
    navEl.style.display = overflow ? "" : "none";
    if (!overflow) { dotsEl.innerHTML = ""; return; }
    const max = railEl.scrollWidth - railEl.clientWidth;
    const pages = Math.max(2, Math.round(max / railEl.clientWidth) + 1);
    const cur = Math.min(pages - 1, Math.round(Math.abs(railEl.scrollLeft) / railEl.clientWidth));
    dotsEl.innerHTML = Array.from({ length: pages }, (_, i) =>
      `<button class="pnav-dot${i === cur ? " on" : ""}" type="button" data-page="${i}" aria-label="صفحة ${i + 1}"></button>`).join("");
  }

  if (railEl) {
    railEl.addEventListener("scroll", updateNav, { passive: true });
    window.addEventListener("resize", updateNav);
    window.addEventListener("load", updateNav);
    el("pnavPrev").addEventListener("click", () => railGo(-1)); // toward earlier items (right)
    el("pnavNext").addEventListener("click", () => railGo(1));   // toward later items (left)
    dotsEl.addEventListener("click", (e) => {
      const d = e.target.closest(".pnav-dot");
      if (d) railEl.scrollTo({ left: clampScroll(-(+d.dataset.page) * railEl.clientWidth), behavior: "smooth" });
    });
  }

  renderProducts();

  /* ---------- Render: special-order steps ---------- */
  setHTML("specialSteps", DATA.specialSteps.map((s) =>
    `<div class="special-step"><span class="step-ic">${icon(s.ic)}</span><span class="step-t">${s.t}</span></div>`).join(""));

  /* ---------- Render: footer ---------- */
  const footHead = (t) =>
    `<h4 class="foot-head"><span class="foot-orn">${icon("ornament")}</span>${t}<span class="foot-orn">${icon("ornament")}</span></h4>`;

  setHTML("footerGrid", DATA.footer.map((col) => {
    if (col.type === "brand") {
      return `<div class="foot-col brand-col">
        <span class="foot-bloom" aria-hidden="true">${icon("bloom")}</span>
        <a href="#home" class="brand foot-brand"><span class="brand-ar">رزين</span><span class="brand-en">RAZEEN</span></a>
        <p class="foot-tagline">نختار لكِ من العبايات والخُمُر والشالات ما يجمع بين الحشمة والأناقة، لتكوني كما أحبّ الله أن تكوني.</p>
        <div class="foot-social">
          <a href="#" aria-label="انستجرام">${icon("instagram")}</a>
          <a href="#" aria-label="تيك توك">${icon("tiktok")}</a>
          <a href="#" aria-label="سناب شات">${icon("snapchat")}</a>
          <a href="#" aria-label="واتساب">${icon("whatsapp")}</a>
        </div>
      </div>`;
    }
    if (col.type === "news") {
      return `<div class="foot-col news">
        ${footHead("اشتركي في نشرتنا")}
        <p class="news-desc">كوني أوّل من يعرف عن الجديد والعروض الحصرية.</p>
        <form class="news-form" onsubmit="return false">
          <span class="news-ic">${icon("mail")}</span>
          <input type="email" placeholder="بريدك الإلكتروني">
          <button type="submit" aria-label="اشتراك">${icon("chevronL")}</button>
        </form>
      </div>`;
    }
    return `<div class="foot-col">
      ${footHead(col.title)}
      <div class="foot-links">${col.items.map((x) =>
        `<a href="#"><span class="ln-txt">${x}</span><span class="ln-ar">${icon("chevronL")}</span></a>`).join("")}</div>
    </div>`;
  }).join(""));

  /* ---------- Render: footer payments ---------- */
  setHTML("footPay", DATA.pay.map((p) => `<span class="pay-chip">${icon(p)}</span>`).join(""));

  /* =================================================================
     INTERACTIONS
     ================================================================= */

  /* Sticky header */
  const header = el("siteHeader");
  const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 40);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* Mobile nav */
  const toggle = el("navToggle");
  const nav = el("mainNav");
  const overlay = el("navOverlay");
  const setMenu = (open) => {
    nav.classList.toggle("open", open);
    overlay.classList.toggle("show", open);
    toggle.innerHTML = icon(open ? "close" : "menu");
    document.body.style.overflow = open ? "hidden" : "";
  };
  toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  overlay.addEventListener("click", () => setMenu(false));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

  /* Fayd: dropdowns, filtering, sorting, wishlist, reset */
  const closeDrops = (except) =>
    document.querySelectorAll(".fdrop.open").forEach((d) => { if (d !== except) d.classList.remove("open"); });

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".fdrop-btn");
    if (btn) {
      const drop = btn.closest(".fdrop");
      const wasOpen = drop.classList.contains("open");
      closeDrops(drop);
      drop.classList.toggle("open", !wasOpen);
      return;
    }

    const opt = e.target.closest(".fdrop-opt");
    if (opt) {
      const drop = opt.closest(".fdrop");
      const dim = drop.dataset.dim;
      fstate[dim] = opt.dataset.val;
      drop.querySelector(".fdrop-cur").textContent = opt.dataset.label;
      drop.classList.toggle("is-active", !!opt.dataset.val);
      if (dim === "color") { const sw = drop.querySelector(".fdrop-swatch"); if (sw) sw.style.background = opt.dataset.val || "#181512"; }
      drop.classList.remove("open");
      renderProducts();
      return;
    }

    const chip = e.target.closest(".color-chip");
    if (chip) {
      const drop = chip.closest(".fdrop");
      fstate.color = chip.dataset.val;
      drop.querySelector(".fdrop-cur").textContent = "اللون";
      drop.querySelector(".fdrop-swatch").style.background = chip.dataset.val;
      drop.classList.add("is-active");
      drop.querySelectorAll(".color-chip").forEach((c) => c.classList.remove("sel"));
      chip.classList.add("sel");
      drop.classList.remove("open");
      renderProducts();
      return;
    }

    const wish = e.target.closest(".pcard-wish");
    if (wish) {
      const id = +wish.closest(".pcard").dataset.id;
      if (wished.has(id)) wished.delete(id); else wished.add(id);
      wish.classList.toggle("on", wished.has(id));
      return;
    }

    if (e.target.closest("#filterReset") || e.target.closest("#emptyReset")) { resetFilters(); return; }

    if (!e.target.closest(".fdrop")) closeDrops(null);
  });

  function resetFilters() {
    Object.assign(fstate, { cat: "", style: "", material: "", size: "", color: "", sort: "new" });
    document.querySelectorAll("#filterBar .fdrop, #filterSort .fdrop").forEach((d) => {
      d.classList.remove("is-active", "open");
      const cur = d.querySelector(".fdrop-cur");
      const dim = d.dataset.dim;
      if (dim === "sort") cur.textContent = DATA.sortOpts[0].label;
      else { const dd = DATA.filterDims.find((x) => x.key === dim); cur.textContent = dim === "color" ? "اللون" : (dd ? dd.label : cur.textContent); }
      const sw = d.querySelector(".fdrop-swatch"); if (sw) sw.style.background = "#181512";
      d.querySelectorAll(".color-chip.sel").forEach((c) => c.classList.remove("sel"));
    });
    renderProducts();
  }

  /* Product rail: drag-to-scroll (single row, horizontal) */
  const grid = el("productGrid");
  if (grid) {
    let down = false, startX = 0, startScroll = 0, moved = 0;
    grid.addEventListener("mousedown", (e) => { down = true; startX = e.pageX; startScroll = grid.scrollLeft; moved = 0; grid.classList.add("dragging"); });
    window.addEventListener("mousemove", (e) => { if (!down) return; const d = e.pageX - startX; moved = Math.abs(d); grid.scrollLeft = startScroll - d; });
    window.addEventListener("mouseup", () => { down = false; grid.classList.remove("dragging"); });
    grid.addEventListener("click", (e) => { if (moved > 6) { e.preventDefault(); e.stopPropagation(); } }, true);
  }

  /* Scroll reveal */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveals.forEach((r) => io.observe(r));
  } else {
    reveals.forEach((r) => r.classList.add("in"));
  }

  /* Active nav link on scroll (scroll-spy) */
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll(".nav-list a")];
  const spy = () => {
    const y = window.scrollY + window.innerHeight * 0.32;
    let cur = sections[0];
    for (const s of sections) { if (s.offsetTop <= y) cur = s; }
    navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + cur.id));
  };
  window.addEventListener("scroll", spy, { passive: true });
  spy();
})();
