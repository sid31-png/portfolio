// Lightweight i18n: English is captured live from the DOM; FR + AR below.
(function () {
  const fr = {
    nav_about:"À propos", nav_skills:"Compétences", nav_work:"Projets", nav_exp:"Parcours", nav_services:"Services", nav_cta:"Discutons",
    hero_eyebrow:"Doha, Qatar · Disponible pour des projets sélectionnés",
    hero_title:"<span class=\"grad\">Product Builder</span>",
    hero_subtitle:"UI/UX Designer · Développeur Front-End",
    hero_lead:"Je transforme les enjeux marketing et opérationnels en vrais produits digitaux — de l'UI/UX et du front-end jusqu'au logiciel interne qui fait tourner l'entreprise. Je conçois et je livre de bout en bout, ancré dans le <em>design centré utilisateur (ISO&nbsp;9241-210).</em>",
    hero_cta1:"Voir mes projets", hero_cta2:"Télécharger le CV ↓",
    stat1:"Croissance de la clientèle", stat2:"Mandats gouvernementaux gérés", stat3:"Traitement plus rapide", stat4:"Événements d'envergure menés",
    about_badge_n:"5+ ans", about_badge_t:"marketing · digital · produit",
    about_title:"Je conçois des produits<br />— et je les construis.",
    about_p1:"Je suis Ahmed, basé à Doha. À chaque poste, mon travail est resté proche du marketing et du digital — et de la construction du logiciel interne qui fait tourner l'entreprise. Des sites et de la marque jusqu'aux dashboards et outils internes, je conçois l'expérience puis j'écris le front-end qui la met en ligne.",
    about_p2:"Récemment, j'ai conçu et développé un CRM/ERP complet pour RCH — design system, écrans et front-end — pour gérer clients, conformité et recouvrement sur deux entités. Je travaille comme le prescrit la norme : design centré utilisateur, <em>ISO&nbsp;9241-210</em>, appliqué à de vrais produits utilisés au quotidien.",
    about_lang1:"Arabe <span>Langue maternelle</span>", about_lang2:"Anglais <span>Courant</span>", about_lang3:"Français <span>Courant</span>",
    skills_title:"Deux facettes, un seul opérateur.", skills_sub:"Le jugement produit qui sait quoi construire — et les mains pour le construire.",
    skills_set1:"Design & Produit", skills_set2:"Front-End & Build", sk_pm:"Product Design",
    impact_eyebrow:"Impact", impact_title:"Des chiffres dont je suis fier.", impact_sub:"Des résultats concrets en pilotant les projets de bout en bout.",
    impact_l1:"Croissance de la clientèle", impact_n1:"Campagnes terrain & comptes clés — Cat Planet",
    impact_l2:"Fidélisation client", impact_n2:"Suivi régulier & gestion de la relation",
    impact_l3:"Traitement gouvernemental plus rapide", impact_n3:"Refonte des processus sur 500+ mandats",
    impact_l4:"Économies sur les projets", impact_n4:"Coordination fournisseurs & logistique — 15+ événements",
    work_eyebrow:"Projets sélectionnés", work_title:"Des projets que j'ai possédés, conçus<br />et livrés de bout en bout.",
    work_c1_t:"RCH Saudi — Site corporate", work_c1_x:"Concept, UI/UX et design front-end pour l'expansion de RCH sur le marché saoudien — conçu et livré en solo.", work_c1_l:"Lire l'étude de cas →",
    work_c2_t:"Ce portfolio", work_c2_x:"Conçu & codé par moi — UI façon Apple, mode sombre, trilingue EN/FR/AR.", work_c2_l:"Vous le regardez",
    work_c3_t:"Événements live — 15+", work_c3_x:"Identité, signalétique et expérience des parties prenantes pour 15+ événements d'envergure, 20+ prestataires coordonnés.", work_c3_l:"Études de cas sur demande",
    work_c4_t:"RCH CRM / ERP — Produit interne", work_c4_x:"Un produit interne que j'ai conçu & développé — design system, dashboard, clients, conformité & recouvrement sur deux entités. Confidentiel ; aperçu de design anonymisé.", work_c4_l:"Voir l'aperçu design ↗",
    work_c5_t:"Montage & génération vidéo", work_c5_x:"Montages courts et vidéo générée par IA pour la marque et le social — du motion qui vend.", work_c5_l:"▶ Voir le showreel",
    work_c6_t:"L'idée était la mienne", work_c6_x:"J'ai conçu, designé et livré le site RCH Saudi de bout en bout — positionnement, système visuel et build.", work_c6_l:"Dans le projet →",
    rch_visual:"Visuel de marque que j'ai créé avec Higgsfield — « Book Your Workspace Tour », aux couleurs navy & magenta de RCH.",
    rch_eyebrow:"Étude de cas · 01", rch_title:"Site RCH Saudi", rch_sub:"Concevoir et construire la vitrine digitale du lancement de RCH en Arabie Saoudite.",
    ba_before:"Avant", ba_after:"Après", ba_cap1:"rch.sa — le site existant", ba_cap2:"Ma refonte — en ligne", ba_meta:"Conçu en React & Tailwind · bilingue EN / AR",
    rch_after:"Après — le site en ligne", rch_before:"Avant — l'ancien site rch.qa", rch_hint:"Glissez la poignée pour comparer l'ancien rendu au vrai site que j'ai conçu.", rch_live:"Ouvrir le site en ligne ↗",
    rch_k1:"Rôle", rch_v1:"UI/UX Designer & Développeur Front-End — solo", rch_k2:"Périmètre", rch_v2:"Concept · UI/UX · Front-end · Direction éditoriale", rch_k3:"Outils", rch_k4:"Année",
    rch_block_h:"L'idée était la mienne.", rch_block_p:"RCH avait besoin d'une présence crédible pour entrer sur le marché saoudien. J'ai tout pris en main — du positionnement et de l'architecture de l'information jusqu'au langage visuel, aux composants et au build en ligne. Chaque décision ci-dessous est partie de mon idée et a été gérée concrètement, sans la déléguer.",
    rch_i1_h:"Positionnement & structure", rch_i1_p:"Défini à qui le site s'adresse, cartographié le parcours des clients gouvernementaux & corporate, et structuré les pages autour de la confiance et de la conformité.",
    rch_i2_h:"Système visuel", rch_i2_p:"Construit un design system clair, inspiré d'Apple, dans Figma — échelle typographique, espacements, couleurs et composants réutilisables pour une cohérence sur tout le site.",
    rch_i3_h:"Build front-end", rch_i3_p:"Donné vie au design dans Framer avec des mises en page responsives, des interactions fluides et un chargement rapide — sans hand-off développeur.",
    rch_i4_h:"Contenu assisté par IA", rch_i4_p:"Utilisé Higgsfield et Claude pour générer des visuels et rédiger un copy net et fidèle à la marque, rapidement.",
    rch_cta_p:"Vous voulez le déroulé complet, le lien live et l'avant/après ?", rch_cta_b:"Demander le dossier",
    exp_title:"Le parcours jusqu'ici.",
    exp_d1:"Mai 2025 — Présent", exp_r1:"Account & Event Manager", exp_x1:"500+ mandats gouvernementaux à 100% de conformité, temps de traitement réduit de 20%. 15+ événements d'envergure menés, 20+ collaborateurs/prestataires, jusqu'à 15% d'économies.",
    exp_d2:"Nov. 2024 — Mai 2025", exp_r2:"Client Solutions & Sales Partner", exp_x2:"Comptes fournisseurs & corporate clés, logistique internationale et campagnes de vente — clientèle +70%, 90% de rétention client.",
    exp_d3:"Mars 2020 — Juil. 2022", exp_r3:"Développement commercial & Support client", exp_x3:"Conseil sur 150+ produits — commandes répétées +35%, adoption +25%, délais −20%, satisfaction au-dessus de 90%.",
    exp_d4:"Formation", exp_r4:"Master & Licence en Agronomie", exp_x4:"Formation professionnelle en Marketing — FORCOM, Algérie.",
    srv_eyebrow:"Ce que je fais", srv_title:"Concevoir. Construire. Livrer.",
    srv1_t:"Design Produit & UX", srv1_x:"User flows, wireframes et UI soignée, ancrés dans le design centré utilisateur (ISO 9241-210) — du problème au système livrable.",
    srv2_t:"Développement Front-End", srv2_x:"Des builds responsives, rapides et obsédés du détail en HTML/CSS/JS, React & Tailwind — fidèles au design au pixel près.",
    srv3_t:"Outils internes & CRM/ERP", srv3_x:"Dashboards et logiciels internes qui font tourner l'entreprise — comme le CRM/ERP RCH que j'ai conçu et développé de bout en bout.",
    srv4_t:"Design Systems", srv4_x:"Tokens, composants et patterns — une source de vérité unique pour garder produit et marque cohérents à l'échelle.",
    srv5_t:"IA générative", srv5_x:"Visuels, motion et contenu avec Higgsfield, plus le développement assisté par IA pour construire et livrer plus vite.",
    srv6_t:"Marketing & Digital", srv6_x:"Marque, sites et campagnes — le fil marketing-et-digital qui a traversé chaque poste.",
    ct_eyebrow:"Contact", ct_title:"Construisons quelque chose<br /><span class=\"grad\">de clair et d'astucieux.</span>", ct_lead:"Ouvert aux projets produit, UI/UX, front-end et outils internes. Le plus rapide pour me joindre :",
    footer:"Conçu & développé par mes soins."
  };

  const ar = {
    nav_about:"نبذة", nav_skills:"المهارات", nav_work:"الأعمال", nav_exp:"الخبرة", nav_services:"الخدمات", nav_cta:"لنتحدث",
    hero_eyebrow:"الدوحة، قطر · متاح لمشاريع مختارة",
    hero_title:"<span class=\"grad\">Product Builder</span>",
    hero_subtitle:"مصمّم UI/UX · مطوّر واجهات أمامية",
    hero_lead:"أحوّل تحديات التسويق والعمليات إلى منتجات رقمية حقيقية — من UI/UX والواجهة الأمامية إلى البرمجيات الداخلية التي تُدير الأعمال. أصمّم وأُطلق من البداية إلى النهاية، مستنداً إلى <em>التصميم المتمحور حول الإنسان (ISO&nbsp;9241-210).</em>",
    hero_cta1:"شاهد أعمالي", hero_cta2:"تحميل السيرة الذاتية ↓",
    stat1:"نمو قاعدة العملاء", stat2:"معاملات حكومية مُدارة", stat3:"معالجة أسرع", stat4:"فعاليات كبرى نُظِّمت",
    about_badge_n:"+5 سنوات", about_badge_t:"تسويق · رقمي · منتج",
    about_title:"أُصمّم المنتجات<br />— وأبنيها.",
    about_p1:"أنا أحمد، مقيم في الدوحة. في كل دور بقي عملي قريباً من التسويق والرقمي — ومن بناء البرمجيات الداخلية التي تُشغّل الأعمال. من المواقع والعلامة إلى لوحات التحكم والأدوات الداخلية، أُصمّم التجربة ثم أكتب الواجهة الأمامية التي تُطلقها.",
    about_p2:"حديثاً صمّمت وطوّرت نظام CRM/ERP كاملاً لـ RCH — نظام تصميم وشاشات وواجهة أمامية — لإدارة العملاء والامتثال والتحصيل عبر كيانين. أعمل كما تنصّ المعايير: تصميم متمحور حول الإنسان، <em>ISO&nbsp;9241-210</em>، مطبّق على منتجات حقيقية تُستخدم يومياً.",
    about_lang1:"العربية <span>اللغة الأم</span>", about_lang2:"الإنجليزية <span>بطلاقة</span>", about_lang3:"الفرنسية <span>بطلاقة</span>",
    skills_title:"وجهان، مشغّل واحد.", skills_sub:"حسٌّ بالمنتج يعرف ماذا يبني — ويدان تبنيانه.",
    skills_set1:"التصميم والمنتج", skills_set2:"الواجهة الأمامية والبناء", sk_pm:"تصميم المنتجات",
    impact_eyebrow:"الأثر", impact_title:"أرقام أفخر بها.", impact_sub:"نتائج حقيقية من إدارة المشاريع كاملةً.",
    impact_l1:"نمو قاعدة العملاء", impact_n1:"حملات ميدانية وحسابات رئيسية — Cat Planet",
    impact_l2:"الاحتفاظ بالعملاء", impact_n2:"متابعة مستمرة وإدارة للعلاقات",
    impact_l3:"معالجة حكومية أسرع", impact_n3:"إعادة تصميم العمليات عبر +500 معاملة",
    impact_l4:"توفير في تكاليف المشاريع", impact_n4:"تنسيق المورّدين واللوجستيات — +15 فعالية",
    work_eyebrow:"أعمال مختارة", work_title:"مشاريع امتلكتُها وصمّمتُها<br />وأنجزتُها من البداية إلى النهاية.",
    work_c1_t:"RCH السعودية — موقع مؤسسي", work_c1_x:"الفكرة وتصميم تجربة المستخدم والواجهة الأمامية لتوسّع RCH في السوق السعودي — صُمّم ونُفّذ منفرداً.", work_c1_l:"اقرأ دراسة الحالة →",
    work_c2_t:"هذا الموقع", work_c2_x:"صُمّم وبُرمج بواسطتي — واجهة بروح Apple، وضع داكن، ثلاثي اللغات EN/FR/AR.", work_c2_l:"أنت تشاهده الآن",
    work_c3_t:"فعاليات حية — +15", work_c3_x:"هوية ولافتات وتجربة لأصحاب المصلحة في +15 فعالية كبرى، وتنسيق +20 مورّداً.", work_c3_l:"دراسات الحالة عند الطلب",
    work_c4_t:"RCH CRM / ERP — منتج داخلي", work_c4_x:"منتج داخلي صمّمته وطوّرته — نظام تصميم ولوحة تحكم وعملاء وامتثال وتحصيل عبر كيانين. سري؛ معاينة تصميم مُنقّاة.", work_c4_l:"عرض معاينة التصميم ↗",
    work_c5_t:"مونتاج وتوليد الفيديو", work_c5_x:"مونتاجات قصيرة وفيديو مولّد بالذكاء الاصطناعي للعلامة والسوشيال — موشن يبيع.", work_c5_l:"▶ شغّل العرض",
    work_c6_t:"الفكرة كانت فكرتي", work_c6_x:"تصوّرت وصمّمت وأطلقت موقع RCH السعودية بالكامل — التموضع والنظام البصري والبناء.", work_c6_l:"داخل المشروع →",
    rch_visual:"تصميم بصري للعلامة أنشأته بـ Higgsfield — «Book Your Workspace Tour» بألوان RCH الكحلي والأرجواني.",
    rch_eyebrow:"دراسة حالة · 01", rch_title:"موقع RCH السعودية", rch_sub:"تصميم وبناء الواجهة الرقمية لإطلاق RCH في السعودية.",
    ba_before:"قبل", ba_after:"بعد", ba_cap1:"rch.sa — الموقع الحالي", ba_cap2:"إعادة تصميمي — مباشر", ba_meta:"بُني بـ React وTailwind · ثنائي اللغة EN / AR",
    rch_after:"بعد — الموقع المباشر", rch_before:"قبل — موقع rch.qa القديم", rch_hint:"اسحب المقبض لمقارنة الشكل القديم بالموقع الحقيقي الذي صمّمته.", rch_live:"افتح الموقع المباشر ↗",
    rch_k1:"الدور", rch_v1:"مصمّم UI/UX ومطوّر واجهات أمامية — منفرداً", rch_k2:"النطاق", rch_v2:"الفكرة · UI/UX · الواجهة الأمامية · توجيه النصوص", rch_k3:"الأدوات", rch_k4:"السنة",
    rch_block_h:"الفكرة كانت فكرتي.", rch_block_p:"احتاجت RCH إلى حضور موثوق لدخول السوق السعودي. تولّيتُ كل شيء — من التموضع وهندسة المعلومات إلى اللغة البصرية والمكوّنات والبناء المباشر. كل قرار أدناه بدأ كفكرة لي ونُفّذ بيديّ، لا بتفويضه.",
    rch_i1_h:"التموضع والبنية", rch_i1_p:"حدّدتُ لمن يتحدث الموقع، ورسمتُ رحلة العملاء الحكوميين والمؤسسيين، ونظّمتُ الصفحات حول الثقة والامتثال.",
    rch_i2_h:"النظام البصري", rch_i2_p:"بنيتُ نظام تصميم نظيفاً مستوحى من Apple في Figma — مقياس الخطوط والمسافات والألوان ومكوّنات قابلة لإعادة الاستخدام لاتساق عبر الموقع.",
    rch_i3_h:"بناء الواجهة الأمامية", rch_i3_p:"أحييتُ التصميم في Framer بتخطيطات متجاوبة وتفاعلات سلسة وتحميل سريع — دون تسليم لمطوّر.",
    rch_i4_h:"محتوى بمساعدة الذكاء الاصطناعي", rch_i4_p:"استخدمتُ Higgsfield وClaude لتوليد الصور وصياغة نصوص دقيقة ومتوافقة مع العلامة بسرعة.",
    rch_cta_p:"تريد الجولة الكاملة والرابط المباشر والمقارنة قبل/بعد؟", rch_cta_b:"اطلب العرض",
    exp_title:"المسار حتى الآن.",
    exp_d1:"مايو 2025 — الآن", exp_r1:"مدير حسابات وفعاليات", exp_x1:"+500 معاملة حكومية بامتثال 100%، وخفض زمن المعالجة 20%. قُدْت +15 فعالية كبرى، +20 موظفاً/مورّداً، حتى 15% توفيراً.",
    exp_d2:"نوفمبر 2024 — مايو 2025", exp_r2:"شريك حلول ومبيعات", exp_x2:"حسابات مورّدين ومؤسسات رئيسية، ولوجستيات دولية وحملات بيع — قاعدة عملاء +70%، احتفاظ 90%.",
    exp_d3:"مارس 2020 — يوليو 2022", exp_r3:"تطوير أعمال ودعم عملاء", exp_x3:"استشارة في +150 منتجاً — طلبات متكررة +35%، تبنٍّ +25%، تأخيرات −20%، رضا فوق 90%.",
    exp_d4:"التعليم", exp_r4:"ماجستير وبكالوريوس في الأغرونوميا", exp_x4:"تدريب مهني في التسويق — FORCOM، الجزائر.",
    srv_eyebrow:"ما أقوم به", srv_title:"صمّم. ابنِ. أطلِق.",
    srv1_t:"تصميم المنتج وتجربة المستخدم", srv1_x:"مسارات المستخدم والتخطيطات وواجهة مصقولة، مبنية على التصميم المتمحور حول الإنسان (ISO 9241-210) — من المشكلة إلى نظام قابل للتسليم.",
    srv2_t:"تطوير الواجهة الأمامية", srv2_x:"بناء متجاوب وسريع ومهووس بالتفاصيل بـ HTML/CSS/JS وReact وTailwind — مطابق للتصميم بدقة البكسل.",
    srv3_t:"الأدوات الداخلية وCRM/ERP", srv3_x:"لوحات تحكم وبرمجيات داخلية تُشغّل الأعمال — مثل نظام CRM/ERP لـ RCH الذي صمّمته وطوّرته بالكامل.",
    srv4_t:"أنظمة التصميم", srv4_x:"رموز ومكوّنات وأنماط — مصدر حقيقة واحد يُبقي المنتج والعلامة متّسقين على نطاق واسع.",
    srv5_t:"الذكاء الاصطناعي التوليدي", srv5_x:"صور وحركة ومحتوى عبر Higgsfield، إضافة إلى التطوير بمساعدة الذكاء الاصطناعي للبناء والإطلاق أسرع.",
    srv6_t:"التسويق والرقمي", srv6_x:"علامة ومواقع وحملات — خيط التسويق والرقمي الذي مرّ عبر كل دور.",
    ct_eyebrow:"تواصل", ct_title:"لنبنِ شيئاً<br /><span class=\"grad\">نظيفاً وذكياً.</span>", ct_lead:"منفتح على مشاريع المنتج وUI/UX والواجهة الأمامية والأدوات الداخلية. أسرع طريقة للوصول إليّ:",
    footer:"صُمّم وطُوّر بواسطتي."
  };

  const dicts = { fr, ar };
  const en = {};

  document.querySelectorAll('[data-i18n]').forEach(el => { en[el.dataset.i18n] = el.textContent.trim(); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { en['#' + el.dataset.i18nHtml] = el.innerHTML.trim(); });

  function apply(lang) {
    const d = dicts[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.dataset.i18n;
      const v = lang === 'en' ? en[k] : (d && d[k] != null ? d[k] : en[k]);
      if (v != null) el.textContent = v;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.dataset.i18nHtml;
      const v = lang === 'en' ? en['#' + k] : (d && d[k] != null ? d[k] : en['#' + k]);
      if (v != null) el.innerHTML = v;
    });
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.querySelectorAll('#lang button').forEach(b => b.classList.toggle('is-active', b.dataset.lang === lang));
    localStorage.setItem('lang', lang);
  }

  apply(localStorage.getItem('lang') || 'en');

  document.getElementById('lang').addEventListener('click', e => {
    const b = e.target.closest('button');
    if (b) apply(b.dataset.lang);
  });
})();
