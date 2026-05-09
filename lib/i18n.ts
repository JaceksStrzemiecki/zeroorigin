export const locales = ['en', 'pl', 'fr', 'es', 'zh', 'ar'] as const;
export type Locale = typeof locales[number];

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  pl: 'PL',
  fr: 'FR',
  es: 'ES',
  zh: '中文',
  ar: 'AR',
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

type RoadmapItem = {
  phase: string;
  title: string;
  text: string;
};

type Content = {
  nav: string[];
  cta: string;
  heroKicker: string;
  heroTitle: string;
  heroText: string;
  heroButton: string;
  secondaryButton: string;
  definitionTitle: string;
  definitionText: string;
  missionTitle: string;
  missionText: string;
  whyTitle: string;
  whyText: string;
  tokenTitle: string;
  tokenText: string;
  physicalTitle: string;
  physicalText: string;
  publicTitle: string;
  publicText: string;
  roadmapTitle: string;
  roadmapIntro: string;
  roadmap: RoadmapItem[];
  collabTitle: string;
  collabText: string;
  contact: string;
  disclaimer: string;
};

export const content: Record<Locale, Content> = {
  en: {
heroTitle: 'Building something real — from zero.',
heroText: 'A long-term public experiment exploring whether digital communities can evolve into real-world value.',
definitionTitle: 'What is ZeroOrigin?',
definitionText: 'ZeroOrigin is a long-term experiment built around a simple but ambitious question: can an online community evolve into something capable of building real-world value? Starting with technology, automotive culture and digital coordination, ZeroOrigin explores how ideas, people and long-term thinking may eventually become something tangible. No shortcuts. No fake promises. Just building — step by step.',
missionTitle: 'Long-Term Vision',
missionText: 'The vision behind ZeroOrigin is intentionally ambitious. One of the future directions of the project is exploring whether a digital-first community could eventually support real-world production — including automotive concepts inspired by vehicles no longer in production. The goal is not short-term hype. The goal is long-term creation. Trust, consistency and community come first.',
whyTitle: 'Why Follow Early?',
whyText: 'Because meaningful things take time. ZeroOrigin is being built publicly — step by step. The early phase is not about hype. It is about watching an idea evolve from zero into something potentially much larger. Some will watch. Some will contribute. Some may eventually help shape what comes next.',
tokenTitle: 'Future Digital Layer',
tokenText: 'ZeroOrigin is not starting with a token-first mindset. Over time, digital participation systems — including future utility mechanisms and token-based coordination — may become part of the ecosystem to support access, participation, growth and future opportunities. Nothing rushed. Nothing promised.',
physicalTitle: 'Physical Direction',
physicalText: 'ZeroOrigin keeps a long-term interest in real-world creation. Automotive and mobility remain part of the early direction, but not as a limitation. The broader goal is to explore whether digital coordination can eventually help shape physical products, production concepts and tangible outcomes.',
publicTitle: 'Built in Public',
publicText: 'ZeroOrigin started as an independent long-term experiment. Built by one person, supported by modern AI tools, and developed step by step in public. The vision starts small — but is intentionally designed to grow over time through community, contributors and shared ambition. What begins with one builder may eventually involve many.',
roadmapIntro: 'The roadmap is intentionally realistic. ZeroOrigin grows through visible steps, not artificial promises.',
roadmap: [
  { phase: 'Phase 01', title: 'Foundation', text: 'Website, identity, public channels, first narrative and early community signals.' },
  { phase: 'Phase 02', title: 'Community', text: 'Consistent updates, early supporters, feedback loops and public discussion around the direction.' },
  { phase: 'Phase 03', title: 'Coordination', text: 'Research into digital participation systems, access mechanics, utility concepts and future token-based coordination.' },
  { phase: 'Phase 04', title: 'Real-World Exploration', text: 'Careful exploration of automotive, mobility or hardware-inspired directions, including feasibility and potential collaborators.' },
  { phase: 'Phase 05', title: 'Beyond Origin', text: 'A broader network of contributors focused on turning digital coordination into real-world creation.' },
],
  pl: {
    nav: ['Misja', 'Token', 'Wizja fizyczna', 'Roadmapa', 'Współpraca'],
    cta: 'Śledź budowę',
    heroKicker: 'ZeroOrigin Lab',
    heroTitle: 'Czy cyfrowa społeczność może zbudować coś realnego?',
    heroText: 'ZeroOrigin to publiczny eksperyment kryptowalutowy badający, jak społeczność, AI i koordynacja oparta na tokenie mogą wyjść poza ekran — od cyfrowego początku do fizycznej rzeczywistości.',
    heroButton: 'Poznaj misję',
    secondaryButton: 'Obserwuj na X',
    definitionTitle: 'Czym jest ZeroOrigin?',
    definitionText: 'ZeroOrigin to otwarty projekt budowany publicznie. Zaczyna się od jednego foundera, rozwoju wspieranego przez AI i podejścia community-first. Celem nie jest stworzenie kolejnej pustej narracji krypto, ale sprawdzenie, czy cyfrowa koordynacja może prowadzić do namacalnych efektów w świecie rzeczywistym.',
    missionTitle: 'Misja',
    missionText: 'Misją ZeroOrigin jest zbudowanie społeczności zdolnej stworzyć coś fizycznego od zera. Automotive i mobilność są częścią pierwszego długoterminowego kierunku, ale większa idea jest szersza: udowodnić, że transparentna cyfrowa społeczność może organizować się, wnosić wkład i współtworzyć realne projekty.',
    whyTitle: 'Dlaczego to istnieje',
    whyText: 'Krypto zbyt często kończy się na spekulacji. ZeroOrigin zaczyna od innego pytania: co jeśli token może być warstwą dostępu, uczestnictwa i koordynacji wokół realnego procesu budowania? Projekt jest świadomie wczesny, transparentny i eksperymentalny.',
    tokenTitle: 'Token',
    tokenText: 'Token ZeroOrigin ma stać się cyfrową warstwą uczestnictwa: dostępu, interakcji, eksperymentów governance i udziału w rozwoju projektu. Nie jest przedstawiany jako inwestycja, papier wartościowy ani obietnica zwrotu finansowego. Użyteczność będzie rozwijana krok po kroku wraz z dojrzewaniem projektu.',
    physicalTitle: 'Wizja fizyczna / automotive',
    physicalText: 'Pierwszym długoterminowym kierunkiem jest eksploracja fizycznych produktów inspirowanych dawnymi epokami motoryzacji, zapomnianymi filozofiami designu i kultowymi koncepcjami z przeszłości. Automotive nie jest sztywnym ograniczeniem — to pierwsze ambitne wyzwanie dla społeczności, która chce budować poza światem cyfrowym.',
    publicTitle: 'Budowane publicznie',
    publicText: 'Każdy krok ma znaczenie. Decyzje, postępy, błędy i zmiany będą dokumentowane publicznie zawsze, gdy to możliwe. Transparentność nie jest marketingowym dodatkiem ZeroOrigin — jest fundamentem zaufania.',
    roadmapTitle: 'Roadmapa',
    roadmapIntro: 'Roadmapa jest celowo realistyczna. ZeroOrigin nie będzie udawać większego projektu, niż jest. Projekt rośnie przez widoczne kroki.',
    roadmap: [
      { phase: 'Faza 01', title: 'Origin', text: 'Identyfikacja, domena, strona, kanały publiczne i pierwsza jasna narracja.' },
      { phase: 'Faza 02', title: 'Społeczność', text: 'Regularne aktualizacje, pierwsi obserwujący, feedback i publiczna rozmowa o kierunku.' },
      { phase: 'Faza 03', title: 'Warstwa koordynacji', text: 'Badanie użyteczności tokena, mechanik dostępu, modeli uczestnictwa i eksperymentów governance.' },
      { phase: 'Faza 04', title: 'Pierwsze fizyczne wyzwanie', text: 'Eksploracja koncepcji wokół automotive, mobilności lub hardware, w tym wykonalność i potencjalni współpracownicy.' },
      { phase: 'Faza 05', title: 'Beyond Origin', text: 'Szersza sieć osób skupionych na przenoszeniu cyfrowej koordynacji do realnego tworzenia.' },
    ],
    collabTitle: 'Współpraca',
    collabText: 'ZeroOrigin jest otwarty na osoby i firmy zainteresowane współpracą techniczną, kreatywną, strategiczną lub związaną z automotive. Jeśli rozumiesz eksperyment i chcesz wnieść wkład, drzwi są otwarte.',
    contact: 'Kontakt / współpraca',
    disclaimer: 'ZeroOrigin jest projektem eksperymentalnym. Token nie jest przedstawiany jako inwestycja, papier wartościowy ani obietnica zwrotu finansowego. Nic na tej stronie nie powinno być traktowane jako porada finansowa.',
  },
  fr: {
    nav: ['Mission', 'Token', 'Vision physique', 'Feuille de route', 'Collaborer'],
    cta: 'Suivre le projet',
    heroKicker: 'ZeroOrigin Lab',
    heroTitle: 'Une communauté numérique peut-elle construire quelque chose de réel ?',
    heroText: 'ZeroOrigin est une expérience crypto publique qui explore comment une communauté, l’IA et une coordination basée sur un token peuvent dépasser l’écran — de l’origine numérique à la réalité physique.',
    heroButton: 'Explorer la mission',
    secondaryButton: 'Suivre sur X',
    definitionTitle: 'Qu’est-ce que ZeroOrigin ?',
    definitionText: 'ZeroOrigin est un projet ouvert construit publiquement. Il commence avec un fondateur, un développement assisté par l’IA et une approche centrée sur la communauté. L’objectif n’est pas de créer une autre narration crypto vide, mais de tester si la coordination numérique peut mener à des résultats tangibles dans le monde réel.',
    missionTitle: 'La mission',
    missionText: 'La mission de ZeroOrigin est de construire une communauté capable de créer quelque chose de physique à partir de zéro. L’automobile et la mobilité font partie de la première direction à long terme, mais l’idée est plus large : prouver qu’une communauté numérique transparente peut s’organiser, contribuer et façonner des projets réels.',
    whyTitle: 'Pourquoi ce projet existe',
    whyText: 'La crypto s’arrête trop souvent à la spéculation. ZeroOrigin commence par une autre question : et si un token servait de couche d’accès, de participation et de coordination autour d’un vrai processus de construction ? Le projet est volontairement précoce, transparent et expérimental.',
    tokenTitle: 'Le Token',
    tokenText: 'Le token ZeroOrigin est destiné à devenir la couche numérique de participation : accès, interaction, expériences de gouvernance et implication dans l’évolution du projet. Il n’est pas présenté comme un investissement, un titre financier ou une promesse de rendement. Son utilité sera développée étape par étape.',
    physicalTitle: 'Vision physique / automobile',
    physicalText: 'La première direction à long terme consiste à explorer des produits physiques inspirés d’époques automobiles disparues, de philosophies de design oubliées et de concepts iconiques du passé. L’automobile n’est pas une limite fixe — c’est le premier défi ambitieux pour une communauté qui veut construire au-delà du numérique.',
    publicTitle: 'Construit publiquement',
    publicText: 'Chaque étape compte. Les décisions, les progrès, les échecs et les changements seront documentés publiquement lorsque cela sera possible. La transparence n’est pas un argument marketing — c’est la base de la confiance.',
    roadmapTitle: 'Feuille de route',
    roadmapIntro: 'La feuille de route est volontairement réaliste. ZeroOrigin ne prétendra pas être plus grand qu’il ne l’est. Le projet grandit par étapes visibles.',
    roadmap: [
      { phase: 'Phase 01', title: 'Origin', text: 'Identité, domaine, site web, canaux publics et première narration claire.' },
      { phase: 'Phase 02', title: 'Communauté', text: 'Mises à jour régulières, premiers soutiens, boucles de feedback et discussion publique.' },
      { phase: 'Phase 03', title: 'Couche de coordination', text: 'Recherche sur l’utilité du token, les mécanismes d’accès, la participation et la gouvernance.' },
      { phase: 'Phase 04', title: 'Premier défi physique', text: 'Exploration de concepts autour de l’automobile, de la mobilité ou du hardware, avec faisabilité et partenaires potentiels.' },
      { phase: 'Phase 05', title: 'Beyond Origin', text: 'Un réseau plus large de contributeurs dédiés à transformer la coordination numérique en création réelle.' },
    ],
    collabTitle: 'Collaborer',
    collabText: 'ZeroOrigin est ouvert aux personnes et aux entreprises intéressées par une collaboration technique, créative, stratégique ou liée à l’automobile.',
    contact: 'Contact / collaboration',
    disclaimer: 'ZeroOrigin est un projet expérimental. Le token n’est pas présenté comme un investissement, un titre financier ou une promesse de rendement. Ce site ne constitue pas un conseil financier.',
  },
  es: {
    nav: ['Misión', 'Token', 'Visión física', 'Ruta', 'Colaborar'],
    cta: 'Seguir el proyecto',
    heroKicker: 'ZeroOrigin Lab',
    heroTitle: '¿Puede una comunidad digital construir algo real?',
    heroText: 'ZeroOrigin es un experimento cripto público que explora cómo una comunidad, la IA y la coordinación basada en un token pueden ir más allá de la pantalla — del origen digital a la realidad física.',
    heroButton: 'Explorar la misión',
    secondaryButton: 'Seguir en X',
    definitionTitle: '¿Qué es ZeroOrigin?',
    definitionText: 'ZeroOrigin es un proyecto abierto construido en público. Comienza con un fundador, desarrollo asistido por IA y una mentalidad centrada en la comunidad. El objetivo no es crear otra narrativa cripto vacía, sino probar si la coordinación digital puede generar resultados tangibles en el mundo real.',
    missionTitle: 'La misión',
    missionText: 'La misión de ZeroOrigin es construir una comunidad capaz de crear algo físico desde cero. Automotive y movilidad forman parte de la primera dirección a largo plazo, pero la idea es más amplia: demostrar que una comunidad digital transparente puede organizarse, contribuir y dar forma a proyectos reales.',
    whyTitle: 'Por qué existe',
    whyText: 'Crypto muchas veces se queda en la especulación. ZeroOrigin empieza con otra pregunta: ¿y si un token pudiera servir como capa de acceso, participación y coordinación alrededor de un verdadero proceso de construcción? El proyecto es intencionalmente temprano, transparente y experimental.',
    tokenTitle: 'El Token',
    tokenText: 'El token ZeroOrigin está pensado como la capa digital de participación: acceso, interacción, experimentos de gobernanza e implicación en la evolución del proyecto. No se presenta como inversión, valor financiero ni promesa de retorno. Su utilidad se desarrollará paso a paso.',
    physicalTitle: 'Visión física / automotriz',
    physicalText: 'La primera dirección a largo plazo es explorar productos físicos inspirados en eras automotrices discontinuadas, filosofías de diseño olvidadas y conceptos icónicos del pasado. Automotive no es una limitación fija — es el primer gran desafío para una comunidad que quiere construir más allá de lo digital.',
    publicTitle: 'Construido en público',
    publicText: 'Cada paso importa. Las decisiones, avances, errores y cambios se documentarán públicamente siempre que sea posible. La transparencia no es una función de marketing — es la base de la confianza.',
    roadmapTitle: 'Ruta',
    roadmapIntro: 'La ruta es intencionalmente realista. ZeroOrigin no fingirá ser más grande de lo que es. El proyecto crece a través de pasos visibles.',
    roadmap: [
      { phase: 'Fase 01', title: 'Origin', text: 'Identidad, dominio, sitio web, canales públicos y la primera narrativa clara.' },
      { phase: 'Fase 02', title: 'Comunidad', text: 'Actualizaciones constantes, primeros seguidores, feedback y conversación pública sobre la dirección.' },
      { phase: 'Fase 03', title: 'Capa de coordinación', text: 'Investigación de utilidad del token, mecanismos de acceso, modelos de participación y gobernanza.' },
      { phase: 'Fase 04', title: 'Primer desafío físico', text: 'Exploración de conceptos alrededor de automotive, movilidad o hardware, incluyendo viabilidad y colaboradores potenciales.' },
      { phase: 'Fase 05', title: 'Beyond Origin', text: 'Una red más amplia de contribuidores enfocada en transformar coordinación digital en creación real.' },
    ],
    collabTitle: 'Colaborar',
    collabText: 'ZeroOrigin está abierto a personas y empresas interesadas en colaboración técnica, creativa, estratégica o relacionada con automotive.',
    contact: 'Contacto / colaboración',
    disclaimer: 'ZeroOrigin es un proyecto experimental. El token no se presenta como inversión, valor financiero ni promesa de retorno. Nada en este sitio debe considerarse asesoramiento financiero.',
  },
  zh: {
    nav: ['使命', '代币', '实体愿景', '路线图', '合作'],
    cta: '关注进展',
    heroKicker: 'ZeroOrigin Lab',
    heroTitle: '一个数字社区能否创造真实世界的成果？',
    heroText: 'ZeroOrigin 是一个公开的加密实验，探索社区、AI 与基于代币的协作如何走出屏幕——从数字起点走向物理现实。',
    heroButton: '了解使命',
    secondaryButton: '在 X 上关注',
    definitionTitle: '什么是 ZeroOrigin？',
    definitionText: 'ZeroOrigin 是一个公开构建的开放项目。它从一位创始人、AI 辅助开发和社区优先的理念开始。目标不是创造另一个空洞的加密叙事，而是测试数字协作是否能够在现实世界中产生可触及的结果。',
    missionTitle: '使命',
    missionText: 'ZeroOrigin 的使命是建立一个能够从零开始创造实体成果的社区。汽车与出行是首个长期方向的一部分，但更大的理念更加广泛：证明一个透明的数字社区可以组织、贡献并共同塑造真实世界的项目。',
    whyTitle: '为什么存在',
    whyText: '加密领域常常停留在投机。ZeroOrigin 从另一个问题开始：如果代币可以成为围绕真实构建过程的访问、参与和协作层，会发生什么？这个项目有意保持早期、透明和实验性。',
    tokenTitle: '代币',
    tokenText: 'ZeroOrigin 代币旨在成为参与的数字层：访问、互动、治理实验以及参与项目演进。它不被描述为投资、证券或财务回报承诺。其实际用途将随着项目成熟逐步发展。',
    physicalTitle: '实体 / 汽车愿景',
    physicalText: '首个长期方向是探索受已停产汽车时代、被遗忘的设计哲学和过去标志性概念启发的实体产品。汽车不是固定限制，而是一个希望超越数字空间的社区的第一个雄心挑战。',
    publicTitle: '公开构建',
    publicText: '每一步都重要。决策、进展、失败和变化将在可能的情况下公开记录。透明不是营销功能，而是信任的基础。',
    roadmapTitle: '路线图',
    roadmapIntro: '路线图刻意保持现实。ZeroOrigin 不会假装比自身更大。项目通过可见的步骤成长。',
    roadmap: [
      { phase: '阶段 01', title: 'Origin', text: '身份、域名、网站、公开渠道和第一个清晰叙事。' },
      { phase: '阶段 02', title: '社区', text: '持续更新、早期支持者、反馈循环和围绕方向的公开讨论。' },
      { phase: '阶段 03', title: '协作层', text: '代币实用性研究、访问机制、参与模型和治理实验。' },
      { phase: '阶段 04', title: '第一个实体挑战', text: '围绕汽车、出行或硬件启发成果的概念探索，包括可行性和潜在合作者。' },
      { phase: '阶段 05', title: 'Beyond Origin', text: '一个更广泛的贡献者网络，专注于将数字协作转化为真实创造。' },
    ],
    collabTitle: '合作',
    collabText: 'ZeroOrigin 欢迎对技术、创意、战略或汽车相关合作感兴趣的个人和公司。',
    contact: '联系 / 合作',
    disclaimer: 'ZeroOrigin 是一个实验性项目。代币不被描述为投资、证券或财务回报承诺。本网站内容不应被视为财务建议。',
  },
  ar: {
    nav: ['المهمة', 'الرمز', 'الرؤية المادية', 'الخارطة', 'التعاون'],
    cta: 'تابع البناء',
    heroKicker: 'ZeroOrigin Lab',
    heroTitle: 'هل يمكن لمجتمع رقمي أن يبني شيئًا حقيقيًا؟',
    heroText: 'ZeroOrigin تجربة كريبتو عامة تستكشف كيف يمكن للمجتمع والذكاء الاصطناعي والتنسيق القائم على الرمز أن يتجاوزوا الشاشة — من الأصل الرقمي إلى الواقع المادي.',
    heroButton: 'استكشف المهمة',
    secondaryButton: 'تابع على X',
    definitionTitle: 'ما هو ZeroOrigin؟',
    definitionText: 'ZeroOrigin مشروع مفتوح يُبنى علنًا. يبدأ بمؤسس واحد، وتطوير مدعوم بالذكاء الاصطناعي، ونهج يضع المجتمع أولًا. الهدف ليس إنشاء سرد كريبتو فارغ آخر، بل اختبار ما إذا كان التنسيق الرقمي يمكن أن يقود إلى نتائج ملموسة في العالم الحقيقي.',
    missionTitle: 'المهمة',
    missionText: 'مهمة ZeroOrigin هي بناء مجتمع قادر على إنشاء شيء مادي من الصفر. السيارات والتنقل جزء من أول اتجاه طويل المدى، لكن الفكرة الأكبر أوسع: إثبات أن مجتمعًا رقميًا شفافًا يمكنه التنظيم والمساهمة وتشكيل مشاريع واقعية.',
    whyTitle: 'لماذا يوجد هذا المشروع',
    whyText: 'غالبًا ما يتوقف الكريبتو عند المضاربة. يبدأ ZeroOrigin بسؤال مختلف: ماذا لو استُخدم الرمز كطبقة للوصول والمشاركة والتنسيق حول عملية بناء حقيقية؟ المشروع مبكر وشفاف وتجريبي عن قصد.',
    tokenTitle: 'الرمز',
    tokenText: 'يهدف رمز ZeroOrigin إلى أن يصبح طبقة المشاركة الرقمية: الوصول، التفاعل، تجارب الحوكمة والمساهمة في تطور المشروع. لا يتم تقديمه كاستثمار أو ورقة مالية أو وعد بعائد مالي. ستتطور فائدته خطوة بخطوة مع نضج المشروع.',
    physicalTitle: 'الرؤية المادية / السيارات',
    physicalText: 'الاتجاه طويل المدى الأول هو استكشاف منتجات مادية مستوحاة من عصور سيارات توقفت، وفلسفات تصميم منسية، ومفاهيم أيقونية من الماضي. السيارات ليست قيدًا ثابتًا — بل أول تحدٍ طموح لمجتمع يريد البناء خارج العالم الرقمي.',
    publicTitle: 'يُبنى علنًا',
    publicText: 'كل خطوة مهمة. سيتم توثيق القرارات والتقدم والإخفاقات والتغييرات علنًا كلما أمكن. الشفافية ليست ميزة تسويقية — إنها أساس الثقة.',
    roadmapTitle: 'خارطة الطريق',
    roadmapIntro: 'الخارطة واقعية عن قصد. لن يتظاهر ZeroOrigin بأنه أكبر مما هو عليه. ينمو المشروع عبر خطوات مرئية.',
    roadmap: [
      { phase: 'المرحلة 01', title: 'Origin', text: 'الهوية، النطاق، الموقع، القنوات العامة وأول سرد واضح.' },
      { phase: 'المرحلة 02', title: 'المجتمع', text: 'تحديثات مستمرة، داعمون أوائل، حلقات ملاحظات ونقاش عام حول الاتجاه.' },
      { phase: 'المرحلة 03', title: 'طبقة التنسيق', text: 'بحث فائدة الرمز، آليات الوصول، نماذج المشاركة وتجارب الحوكمة.' },
      { phase: 'المرحلة 04', title: 'أول تحدٍ مادي', text: 'استكشاف مفاهيم حول السيارات أو التنقل أو المنتجات المستوحاة من العتاد، بما في ذلك الجدوى والشركاء المحتملون.' },
      { phase: 'المرحلة 05', title: 'Beyond Origin', text: 'شبكة أوسع من المساهمين تركز على تحويل التنسيق الرقمي إلى خلق واقعي.' },
    ],
    collabTitle: 'التعاون',
    collabText: 'ZeroOrigin مفتوح للأفراد والشركات المهتمين بالتعاون التقني أو الإبداعي أو الاستراتيجي أو المرتبط بعالم السيارات.',
    contact: 'تواصل / تعاون',
    disclaimer: 'ZeroOrigin مشروع تجريبي. لا يتم تقديم الرمز كاستثمار أو ورقة مالية أو وعد بعائد مالي. لا ينبغي اعتبار أي شيء في هذا الموقع نصيحة مالية.',
  },
};
