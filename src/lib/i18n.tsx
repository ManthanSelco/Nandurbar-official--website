import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "mr", label: "मराठी" },
  { code: "gu", label: "ગુજરાતી" },
] as const;

export type Lang = (typeof LANGS)[number]["code"];

export type Chain = {
  id: string;
  name: string;
  focus: string;
};

type Item = {
  title: string;
  body: string;
};

type Slot = {
  time: string;
  title: string;
  body: string;
};

export type Dict = {
  brandTop: string;
  brandName: string;

  nav: {
    about: string;
    chains: string;
    vendors: string;
    gallery: string;
    caseStudies: string;
    agenda: string;
    speakers: string;
    contact: string;
  };

  cta: {
    register: string;
  };

  hero: {
    meta: string;
    title: string;
    body: string;
  };

  facts: Item[];

  about: {
    eyebrow: string;
    title: string;
    body: string;
    objectives: Item[];
  };

  chains: {
    eyebrow: string;
    title: string;
    items: Chain[];
  };

  vendors: {
    eyebrow: string;
    title: string;
    body: string;
    technology: string;
    contact: string;
    location: string;
    summary: string;
  };

  agenda: {
    eyebrow: string;
    title: string;
    slots: Slot[];
  };

  speakers: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
    chief: string;
    hosts: string;
    champions: string;
    panel: string;
  };

  contact: {
    eyebrow: string;
    title: string;
    email: string;
    phone: string;
    offices: string;
    website: string;
    media: string;
    venue: string;
    map: string;
    mediaRead: string;
  };

  gallery: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
    fromField: string;
    previous: string;
    next: string;
  };

  chainDetail: {
    challenge: string;
    tech: string;
    products: string;
    cta: string;
    deck: string;
    close: string;
    valueChain: string;
    benefits: string;
    flow: string;
  };

  caseStudies: {
    eyebrow: string;
    title: string;
    body: string;
    featured: string;
    challenges: string;
    interventions: string;
    impact: string;
    bestPractice: string;
    source: string;
  };

  footer: {
    hosts: string;
    contact: string;
    map: string;
    note: string;
  };
};

const en: Dict = {
  brandTop: "SELCO Foundation × KVK",
  brandName: "Nandurbar Mela 2026",

  nav: {
    about: "About",
    chains: "Value Chains",
    vendors: "Vendors",
    gallery: "Gallery",
    caseStudies: "Case Studies",
    agenda: "Agenda",
    speakers: "Speakers",
    contact: "Contact",
  },

  cta: {
    register: "Register",
  },

  hero: {
    meta: "21 August 2026 · PG RESORT, Nandurbar",
    title:
      "Strengthening Farmers and Women through Collectives, Nandurbar",
    body:
      "Co-hosted by SELCO Foundation and Krishi Vigyan Kendra, Nandurbar — bringing primary producers together with field champions, bankers and clean-energy technology providers on one platform.",
  },

  facts: [
    {
      title: "Date",
      body: "21 August 2026",
    },
    {
      title: "Venue",
      body:
        "PG RESORT, Serve no 281/1, Sita Ma Residency, Plot No 8, Nehru Nagar, Nandurbar, Maharashtra 425412",
    },
    {
      title: "Participants",
      body:
        "~300 farmers, FPO members and SHG women entrepreneurs",
    },
    {
      title: "Value chains",
      body:
        "Millet · Chilli · Honey · Mushroom · Fisheries",
    },
  ],

  about: {
    eyebrow: "Why this mela",
    title:
      "Strengthening Farmers and Women through Collectives",
    body:
      "Nandurbar district holds significant potential in agriculture, forest produce, and allied sectors, particularly in key commodities such as millet, chilly, honey, mushroom, and fisheries. However, smallholder farmers and rural women entrepreneurs continue to face challenges related to post-harvest losses, manual processing constraints, limited access to formal credit, and a lack of specialized branding and market linkages. Integrating Clean Energy-Driven Decentralized Renewable Energy (DRE) appliances — such as solar-powered processing units, cold storage, dryers, and mechanized tools — can dramatically enhance productivity, reduce drudgery, and boost household incomes across rural communities. To bridge the gap between technology, finance and community implementation, SELCO Foundation and Krishi Vigyan Kendra (KVK), Nandurbar are jointly hosting this one-day Mela for Farmers and SHG Women. The event aims to bring primary producers together with successful field champions, financial institutions, and branding-marketing expertise in a single, accessible platform.",

    objectives: [
      {
        title: "Peer-to-peer knowledge exchange",
        body:
          "Connect local farmers and SHG women with field champions to inspire adoption of clean-energy livelihood solutions.",
      },
      {
        title: "Financial & scheme integration",
        body:
          "Demystify formal credit and streamline access to government subsidies through a direct panel with bankers.",
      },
      {
        title: "Technology awareness & access",
        body:
          "Hands-on exposure to relevant clean-energy technologies through a vendor exhibition open to all attendees.",
      },
    ],
  },

  chains: {
    eyebrow: "Focus areas",
    title: "Five value chains",

    items: [
      {
        id: "millet",
        name: "Millet",
        focus:
          "Processing, primary cleaning, destoning and value addition.",
      },
      {
        id: "chilli",
        name: "Chilli",
        focus:
          "Solar drying, hygienic grinding and quality retention.",
      },
      {
        id: "honey",
        name: "Honey",
        focus:
          "Extraction, filtration, hygienic processing and bottling.",
      },
      {
        id: "mushroom",
        name: "Mushroom",
        focus:
          "Climate-controlled cultivation, dehydration and packaging.",
      },
      {
        id: "fisheries",
        name: "Fisheries",
        focus:
          "Post-harvest handling, cold storage and value addition.",
      },
    ],
  },

  vendors: {
    eyebrow: "Vendor Showcase",
    title: "Technology & Solution Partners",
    body:
      "Organisations and enterprises showcasing clean-energy technologies and livelihood solutions at the Nandurbar Mela.",
    technology: "Technology / Solution",
    contact: "Contact",
    location: "Maharashtra",
    summary:
      "Explore the technologies and solutions being showcased at the mela.",
  },

  agenda: {
    eyebrow: "Mela day",
    title: "Programme at a glance",

    slots: [
      {
        time: "10:00 – 10:45 AM",
        title: "Inauguration & Context Setting",
        body:
          "Hon. District Collector as Chief Guest, with CEO Zilla Parishad, KVK and SELCO Foundation leadership on stage.",
      },
      {
        time: "10:45 AM – 12:15 PM",
        title: "Learning from the Field",
        body:
          "Experience sharing by champion farmers and women entrepreneurs who scaled enterprises with clean-energy technology.",
      },
      {
        time: "12:15 – 1:00 PM",
        title: "Panel Discussion with Bankers",
        body:
          "LDM and DDM, NABARD on credit-worthiness, subventions, loan processes and financial literacy.",
      },
      {
        time: "1:00 PM onwards",
        title:
          "Lunch, Vendor Exhibition & Product Showcase",
        body:
          "Networking lunch followed by stalls showcasing clean-energy technologies across the five value chains.",
      },
    ],
  },

  speakers: {
    eyebrow: "On stage",
    title: "Speakers & dignitaries",
    body:
      "Farmers, entrepreneurs, institutions and financial partners coming together to share knowledge and enable action.",
    note:
      "More speakers, vendors and case studies will be added as details are confirmed.",
    chief: "Chief Guest",
    hosts: "Context setting",
    champions:
      "Champion farmers & entrepreneurs",
    panel: "Bankers' panel",
  },

  contact: {
    eyebrow: "Get in touch",
    title: "Contact SELCO Foundation",
    email: "Email",
    phone: "Phone",
    offices: "Offices",
    website: "Website",
    media: "In the media",
    venue: "Venue",
    map: "View on Google Maps",
    mediaRead: "Read the published article",
  },

  gallery: {
    eyebrow: "From the field",
    title:
      "Solutions already running with end users",
    body:
      "Every technology on show at the mela is already earning income for households — flour and oil mills, cold storage, tailoring units, snack-making lines and fully solarised villages.",
    note:
      "Photographs from SELCO Foundation field installations.",
    fromField: "From the field",
    previous: "Previous photo",
    next: "Next photo",
  },

  chainDetail: {
    challenge: "The challenge",
    tech: "Technology that helps",
    products: "Products",
    cta: "See photos from the field",
    deck: "View full presentation",
    close: "Close",
    valueChain: "Value Chain",
    benefits: "Benefits",
    flow: "Value chain flow",
  },

  caseStudies: {
    eyebrow: "Case study",
    title: "Real stories, real impact",
    body:
      "Meet the entrepreneurs already turning clean-energy livelihood technology into steady income.",
    featured: "Featured field story",
    challenges: "Challenges faced",
    interventions:
      "SELCO Foundation interventions",
    impact: "Impact after intervention",
    bestPractice: "Best practice",
    source: "View source document",
  },

  footer: {
    hosts: "Co-hosts",
    contact: "Get in touch",
    map: "View venue on Google Maps",
    note:
      "A joint initiative of SELCO Foundation and KVK, Nandurbar.",
  },
};

const hi: Dict = {
  brandTop: "सेल्को फाउंडेशन × केवीके",
  brandName: "नंदुरबार मेला 2026",

  nav: {
    about: "परिचय",
    chains: "मूल्य श्रृंखलाएँ",
    vendors: "विक्रेता",
    gallery: "गैलरी",
    caseStudies: "केस स्टडी",
    agenda: "कार्यक्रम",
    speakers: "वक्ता",
    contact: "संपर्क",
  },

  cta: {
    register: "पंजीकरण करें",
  },

  hero: {
    meta: "21 अगस्त 2026 · PG RESORT, नंदुरबार",
    title:
      "सामूहिक प्रयासों के माध्यम से किसानों और महिलाओं को सशक्त बनाना, नंदुरबार",
    body:
      "सेल्को फाउंडेशन और कृषि विज्ञान केंद्र, नंदुरबार द्वारा संयुक्त रूप से आयोजित — किसानों, अग्रणी उद्यमियों, बैंकरों और स्वच्छ ऊर्जा तकनीक प्रदाताओं को एक मंच पर लाना।",
  },

  facts: [
    {
      title: "तिथि",
      body: "21 अगस्त 2026",
    },
    {
      title: "स्थान",
      body:
        "PG RESORT, सर्वे नं. 281/1, सीता मा रेजिडेंसी, प्लॉट नं. 8, नेहरू नगर, नंदुरबार, महाराष्ट्र 425412",
    },
    {
      title: "प्रतिभागी",
      body:
        "लगभग 300 किसान, एफपीओ सदस्य और एसएचजी महिला उद्यमी",
    },
    {
      title: "मूल्य श्रृंखलाएँ",
      body:
        "बाजरा · मिर्च · शहद · मशरूम · मत्स्य पालन",
    },
  ],

  about: {
    eyebrow: "यह मेला क्यों",
    title:
      "सामूहिक प्रयासों के माध्यम से किसानों और महिलाओं को सशक्त बनाना",
    body:
      "नंदुरबार जिले में कृषि, वनोपज और संबद्ध क्षेत्रों में महत्वपूर्ण संभावनाएँ हैं, विशेष रूप से बाजरा, मिर्च, शहद, मशरूम और मत्स्य पालन जैसी प्रमुख वस्तुओं में। हालांकि, छोटे किसान और ग्रामीण महिला उद्यमी कटाई-पश्चात नुकसान, मैनुअल प्रसंस्करण की सीमाओं, औपचारिक ऋण तक सीमित पहुँच तथा विशेष ब्रांडिंग और बाजार संपर्क की कमी जैसी चुनौतियों का सामना करते हैं। स्वच्छ ऊर्जा आधारित विकेंद्रीकृत नवीकरणीय ऊर्जा (DRE) उपकरण — जैसे सौर ऊर्जा संचालित प्रसंस्करण इकाइयाँ, कोल्ड स्टोरेज, ड्रायर और यांत्रिक उपकरण — उत्पादकता बढ़ाने, श्रम और कठिनाई कम करने तथा ग्रामीण परिवारों की आय बढ़ाने में महत्वपूर्ण भूमिका निभा सकते हैं। तकनीक, वित्त और सामुदायिक क्रियान्वयन के बीच की दूरी को कम करने के लिए SELCO Foundation और Krishi Vigyan Kendra (KVK), Nandurbar संयुक्त रूप से किसानों और स्वयं सहायता समूह की महिलाओं के लिए एक दिवसीय मेला आयोजित कर रहे हैं। इस आयोजन का उद्देश्य प्राथमिक उत्पादकों को सफल क्षेत्रीय अग्रदूतों, वित्तीय संस्थानों तथा ब्रांडिंग और मार्केटिंग विशेषज्ञता से एक ही सुलभ मंच पर जोड़ना है.",

    objectives: [
      {
        title: "आपसी ज्ञान आदान-प्रदान",
        body:
          "स्थानीय किसानों और एसएचजी महिलाओं को सफल क्षेत्रीय अग्रदूतों से जोड़ना ताकि स्वच्छ ऊर्जा आधारित आजीविका समाधानों को अपनाने की प्रेरणा मिले।",
      },
      {
        title: "वित्त एवं योजनाओं से जुड़ाव",
        body:
          "बैंकरों के साथ सीधे संवाद के माध्यम से औपचारिक ऋण और सरकारी सब्सिडी तक पहुँच को आसान बनाना।",
      },
      {
        title: "तकनीक की जानकारी और पहुँच",
        body:
          "सभी प्रतिभागियों के लिए खुली वेंडर प्रदर्शनी के माध्यम से प्रासंगिक स्वच्छ ऊर्जा तकनीकों का प्रत्यक्ष अनुभव।",
      },
    ],
  },

  chains: {
    eyebrow: "केंद्रित क्षेत्र",
    title: "पाँच मूल्य श्रृंखलाएँ",

    items: [
      {
        id: "millet",
        name: "बाजरा",
        focus:
          "प्रसंस्करण, सफाई, डीस्टोनिंग और मूल्य संवर्धन।",
      },
      {
        id: "chilli",
        name: "मिर्च",
        focus:
          "सौर सुखाना, स्वच्छ पिसाई और गुणवत्ता संरक्षण।",
      },
      {
        id: "honey",
        name: "शहद",
        focus:
          "निष्कर्षण, छानना, स्वच्छ प्रसंस्करण और बॉटलिंग।",
      },
      {
        id: "mushroom",
        name: "मशरूम",
        focus:
          "जलवायु-नियंत्रित खेती, निर्जलीकरण और पैकेजिंग।",
      },
      {
        id: "fisheries",
        name: "मत्स्य पालन",
        focus:
          "कटाई-पश्चात रखरखाव, कोल्ड स्टोरेज और मूल्य संवर्धन।",
      },
    ],
  },

  vendors: {
    eyebrow: "वेंडर प्रदर्शनी",
    title: "तकनीक और समाधान साझेदार",
    body:
      "नंदुरबार मेले में स्वच्छ ऊर्जा तकनीकों और आजीविका समाधानों का प्रदर्शन करने वाले संगठन और उद्यम।",
    technology: "तकनीक / समाधान",
    contact: "संपर्क",
    location: "महाराष्ट्र",
    summary:
      "मेले में प्रदर्शित की जा रही तकनीकों और समाधानों को देखें।",
  },

  agenda: {
    eyebrow: "मेला दिवस",
    title: "कार्यक्रम एक नज़र में",

    slots: [
      {
        time: "सुबह 10:00 – 10:45",
        title: "उद्घाटन एवं प्रस्तावना",
        body:
          "माननीय जिलाधिकारी मुख्य अतिथि के रूप में, साथ में सीईओ जिला परिषद, केवीके और सेल्को फाउंडेशन के प्रतिनिधि।",
      },
      {
        time: "सुबह 10:45 – दोपहर 12:15",
        title: "क्षेत्र से सीख",
        body:
          "स्वच्छ ऊर्जा तकनीक से उद्यम बढ़ाने वाले किसानों और महिला उद्यमियों के अनुभव।",
      },
      {
        time: "दोपहर 12:15 – 1:00",
        title: "बैंकरों के साथ पैनल चर्चा",
        body:
          "एलडीएम एवं डीडीएम, नाबार्ड — ऋण पात्रता, सब्सिडी, ऋण प्रक्रिया और वित्तीय साक्षरता पर।",
      },
      {
        time: "दोपहर 1:00 से आगे",
        title:
          "भोजन, वेंडर प्रदर्शनी एवं उत्पाद प्रदर्शन",
        body:
          "नेटवर्किंग लंच के बाद पाँचों मूल्य श्रृंखलाओं की स्वच्छ ऊर्जा तकनीकों के स्टॉल।",
      },
    ],
  },

  speakers: {
    eyebrow: "मंच पर",
    title: "वक्ता एवं अतिथि",
    body:
      "किसान, उद्यमी, संस्थाएँ और वित्तीय साझेदार ज्ञान और कार्यवाही के लिए एक मंच पर।",
    note:
      "और वक्ता, वेंडर और केस स्टडी जानकारी उपलब्ध होते ही जोड़े जाएँगे।",
    chief: "मुख्य अतिथि",
    hosts: "प्रस्तावना",
    champions:
      "अग्रणी किसान एवं उद्यमी",
    panel: "बैंकर पैनल",
  },

  contact: {
    eyebrow: "संपर्क करें",
    title: "सेल्को फाउंडेशन से संपर्क",
    email: "ईमेल",
    phone: "फ़ोन",
    offices: "कार्यालय",
    website: "वेबसाइट",
    media: "मीडिया में",
    venue: "स्थान",
    map: "Google Maps पर देखें",
    mediaRead: "प्रकाशित लेख पढ़ें",
  },

  gallery: {
    eyebrow: "ज़मीनी तस्वीरें",
    title:
      "अंतिम उपयोगकर्ताओं के साथ चल रहे समाधान",
    body:
      "मेले में दिखाई जाने वाली हर तकनीक पहले से ही परिवारों को आमदनी दे रही है — आटा और तेल मिल, कोल्ड स्टोरेज, सिलाई इकाइयाँ, नाश्ता बनाने की मशीनें और पूरी तरह सौर ऊर्जा से चलने वाले गाँव।",
    note:
      "सेल्को फाउंडेशन की क्षेत्रीय स्थापनाओं की तस्वीरें।",
    fromField: "ज़मीनी तस्वीरें",
    previous: "पिछली तस्वीर",
    next: "अगली तस्वीर",
  },

  chainDetail: {
    challenge: "चुनौती",
    tech: "मददगार तकनीक",
    products: "उत्पाद",
    cta: "ज़मीनी तस्वीरें देखें",
    deck: "पूरी प्रस्तुति देखें",
    close: "बंद करें",
    valueChain: "मूल्य श्रृंखला",
    benefits: "लाभ",
    flow: "मूल्य श्रृंखला प्रवाह",
  },

  caseStudies: {
    eyebrow: "केस स्टडी",
    title:
      "असली कहानियाँ, असली प्रभाव",
    body:
      "उन उद्यमियों से मिलें जो स्वच्छ ऊर्जा आधारित तकनीक से पहले ही स्थायी आय कमा रहे हैं।",
    featured: "प्रमुख क्षेत्रीय कहानी",
    challenges: "सामना की गई चुनौतियाँ",
    interventions:
      "सेल्को फाउंडेशन के हस्तक्षेप",
    impact:
      "हस्तक्षेप के बाद का प्रभाव",
    bestPractice: "सर्वोत्तम अभ्यास",
    source: "स्रोत दस्तावेज़ देखें",
  },

  footer: {
    hosts: "सह-आयोजक",
    contact: "संपर्क करें",
    map: "स्थान Google Maps पर देखें",
    note:
      "सेल्को फाउंडेशन और केवीके, नंदुरबार की संयुक्त पहल।",
  },
};

const mr: Dict = {
  brandTop: "सेल्को फाउंडेशन × केव्हीके",
  brandName: "नंदुरबार मेळावा 2026",

  nav: {
    about: "परिचय",
    chains: "मूल्य साखळ्या",
    vendors: "विक्रेते",
    gallery: "गॅलरी",
    caseStudies: "केस स्टडी",
    agenda: "कार्यक्रम",
    speakers: "वक्ते",
    contact: "संपर्क",
  },

  cta: {
    register: "नोंदणी करा",
  },

  hero: {
    meta: "21 ऑगस्ट 2026 · PG RESORT, नंदुरबार",
    title:
      "सामूहिक प्रयत्नांतून शेतकरी आणि महिलांचे सक्षमीकरण, नंदुरबार",
    body:
      "सेल्को फाउंडेशन आणि कृषी विज्ञान केंद्र, नंदुरबार यांच्या संयुक्त विद्यमाने — शेतकरी, यशस्वी उद्योजक, बँकर्स आणि स्वच्छ ऊर्जा तंत्रज्ञान पुरवठादार एका व्यासपीठावर.",
  },

  facts: [
    {
      title: "दिनांक",
      body: "21 ऑगस्ट 2026",
    },
    {
      title: "ठिकाण",
      body:
        "PG RESORT, सर्व्हे नं. 281/1, सीता मा रेसिडेन्सी, प्लॉट नं. 8, नेहरू नगर, नंदुरबार, महाराष्ट्र 425412",
    },
    {
      title: "सहभागी",
      body:
        "सुमारे 300 शेतकरी, एफपीओ सदस्य व बचत गट महिला उद्योजक",
    },
    {
      title: "मूल्य साखळ्या",
      body:
        "बाजरी · मिरची · मध · मशरूम · मत्स्यव्यवसाय",
    },
  ],

  about: {
    eyebrow: "हा मेळावा का",
    title:
      "सामूहिक प्रयत्नांतून शेतकरी आणि महिलांचे सक्षमीकरण",
    body:
      "नंदुरबार जिल्ह्यात शेती, वनोपज आणि संलग्न क्षेत्रांमध्ये मोठी क्षमता आहे, विशेषतः बाजरी, मिरची, मध, मशरूम आणि मत्स्यव्यवसाय यांसारख्या प्रमुख घटकांमध्ये. मात्र अल्पभूधारक शेतकरी आणि ग्रामीण महिला उद्योजकांना काढणीनंतरचे नुकसान, हाताने प्रक्रिया करण्याच्या मर्यादा, औपचारिक कर्जाची मर्यादित उपलब्धता आणि विशेष ब्रँडिंग व बाजारपेठेशी जोडणीचा अभाव अशा अडचणींचा सामना करावा लागतो. सौरऊर्जेवर आधारित प्रक्रिया यंत्रणा, शीतगृह, ड्रायर आणि यांत्रिक साधने यांसारखी स्वच्छ ऊर्जा-आधारित विकेंद्रित नवीकरणीय ऊर्जा (DRE) उपकरणे उत्पादकता वाढवू शकतात, श्रमकष्ट कमी करू शकतात आणि ग्रामीण कुटुंबांचे उत्पन्न वाढवू शकतात. तंत्रज्ञान, वित्त आणि समुदाय अंमलबजावणी यांच्यातील दरी कमी करण्यासाठी SELCO Foundation आणि कृषी विज्ञान केंद्र (KVK), नंदुरबार संयुक्तपणे शेतकरी आणि बचत गटातील महिलांसाठी एक दिवसीय मेळावा आयोजित करत आहेत. या कार्यक्रमाचा उद्देश प्राथमिक उत्पादकांना यशस्वी क्षेत्रीय अग्रदूत, वित्तीय संस्था तसेच ब्रँडिंग आणि मार्केटिंग तज्ज्ञांशी एका सुलभ व्यासपीठावर जोडणे हा आहे.",

    objectives: [
      {
        title: "परस्पर ज्ञानाची देवाणघेवाण",
        body:
          "स्थानिक शेतकरी आणि बचत गटातील महिलांना यशस्वी क्षेत्रीय उद्योजकांशी जोडून स्वच्छ ऊर्जा आधारित उपाय स्वीकारण्यास प्रोत्साहन देणे.",
      },
      {
        title: "वित्त व योजनांची जोडणी",
        body:
          "बँकर्ससोबत थेट संवादातून औपचारिक कर्ज आणि शासकीय अनुदानापर्यंत पोहोच सुलभ करणे.",
      },
      {
        title:
          "तंत्रज्ञानाची ओळख व उपलब्धता",
        body:
          "सर्व सहभागींसाठी खुल्या वेंडर प्रदर्शनातून स्वच्छ ऊर्जा तंत्रज्ञानाचा प्रत्यक्ष अनुभव देणे.",
      },
    ],
  },

  chains: {
    eyebrow: "केंद्रबिंदू",
    title: "पाच मूल्य साखळ्या",

    items: [
      {
        id: "millet",
        name: "बाजरी",
        focus:
          "प्रक्रिया, स्वच्छता, दगड वेगळे करणे व मूल्यवर्धन.",
      },
      {
        id: "chilli",
        name: "मिरची",
        focus:
          "सौर वाळवण, स्वच्छ दळण व गुणवत्ता टिकवणे.",
      },
      {
        id: "honey",
        name: "मध",
        focus:
          "काढणी, गाळणी, स्वच्छ प्रक्रिया व बाटलीबंद करणे.",
      },
      {
        id: "mushroom",
        name: "मशरूम",
        focus:
          "वातावरण नियंत्रित लागवड, वाळवण व पॅकेजिंग.",
      },
      {
        id: "fisheries",
        name: "मत्स्यव्यवसाय",
        focus:
          "काढणीपश्चात हाताळणी, शीतगृह व मूल्यवर्धन.",
      },
    ],
  },

  vendors: {
    eyebrow: "विक्रेता प्रदर्शन",
    title:
      "तंत्रज्ञान आणि समाधान भागीदार",
    body:
      "नंदुरबार मेळाव्यात स्वच्छ ऊर्जा तंत्रज्ञान आणि उपजीविका उपायांचे प्रदर्शन करणाऱ्या संस्था व उद्यम.",
    technology: "तंत्रज्ञान / उपाय",
    contact: "संपर्क",
    location: "महाराष्ट्र",
    summary:
      "मेळाव्यात प्रदर्शित होत असलेली तंत्रज्ञान आणि उपाय पहा.",
  },

  agenda: {
    eyebrow: "मेळाव्याचा दिवस",
    title: "कार्यक्रमाची रूपरेषा",

    slots: [
      {
        time: "सकाळी 10:00 – 10:45",
        title: "उद्घाटन व प्रास्ताविक",
        body:
          "मा. जिल्हाधिकारी प्रमुख पाहुणे, सोबत मुख्य कार्यकारी अधिकारी जिल्हा परिषद, केव्हीके व सेल्को फाउंडेशन.",
      },
      {
        time:
          "सकाळी 10:45 – दुपारी 12:15",
        title: "क्षेत्रातून शिकवण",
        body:
          "स्वच्छ ऊर्जा तंत्रज्ञानाने उद्योग वाढवलेल्या शेतकरी व महिला उद्योजकांचे अनुभवकथन.",
      },
      {
        time:
          "दुपारी 12:15 – 1:00",
        title: "बँकर्ससोबत परिसंवाद",
        body:
          "एलडीएम व डीडीएम, नाबार्ड — कर्जपात्रता, अनुदान, कर्ज प्रक्रिया व आर्थिक साक्षरता.",
      },
      {
        time: "दुपारी 1:00 नंतर",
        title:
          "भोजन, प्रदर्शन व उत्पादन मांडणी",
        body:
          "भोजनानंतर पाचही मूल्य साखळ्यांतील स्वच्छ ऊर्जा तंत्रज्ञानाचे स्टॉल्स.",
      },
    ],
  },

  speakers: {
    eyebrow: "मंचावर",
    title: "वक्ते व मान्यवर",
    body:
      "शेतकरी, उद्योजक, संस्था आणि वित्तीय भागीदार ज्ञान व कृतीसाठी एका व्यासपीठावर.",
    note:
      "अधिक वक्ते, वेंडर आणि केस स्टडी माहिती उपलब्ध होताच जोडली जाईल.",
    chief: "प्रमुख पाहुणे",
    hosts: "प्रास्ताविक",
    champions:
      "यशस्वी शेतकरी व उद्योजक",
    panel: "बँकर्स परिसंवाद",
  },

  contact: {
    eyebrow: "संपर्क",
    title:
      "सेल्को फाउंडेशनशी संपर्क",
    email: "ईमेल",
    phone: "दूरध्वनी",
    offices: "कार्यालये",
    website: "संकेतस्थळ",
    media: "माध्यमांमध्ये",
    venue: "ठिकाण",
    map: "Google Maps वर पहा",
    mediaRead: "प्रकाशित लेख वाचा",
  },

  gallery: {
    eyebrow: "प्रत्यक्ष क्षेत्रातून",
    title:
      "अंतिम वापरकर्त्यांसोबत सुरू असलेली समाधाने",
    body:
      "मेळ्यात दाखवली जाणारी प्रत्येक तंत्रज्ञान आधीच कुटुंबांना उत्पन्न मिळवून देत आहे — पीठ आणि तेल गिरण्या, शीतगृह, शिवणकाम युनिट, फराळ निर्मिती आणि पूर्णतः सौरऊर्जेवर चालणारी गावे.",
    note:
      "सेल्को फाउंडेशनच्या क्षेत्रीय प्रकल्पांतील छायाचित्रे.",
    fromField: "प्रत्यक्ष क्षेत्रातून",
    previous: "मागील छायाचित्र",
    next: "पुढील छायाचित्र",
  },

  chainDetail: {
    challenge: "आव्हान",
    tech: "उपयुक्त तंत्रज्ञान",
    products: "उत्पादने",
    cta: "क्षेत्रीय छायाचित्रे पाहा",
    deck: "पूर्ण सादरीकरण पाहा",
    close: "बंद करा",
    valueChain: "मूल्य साखळी",
    benefits: "फायदे",
    flow: "मूल्य साखळी प्रवाह",
  },

  caseStudies: {
    eyebrow: "केस स्टडी",
    title: "खऱ्या कथा, खरा प्रभाव",
    body:
      "स्वच्छ ऊर्जा तंत्रज्ञानाच्या मदतीने स्थिर उत्पन्न मिळवणाऱ्या उद्योजकांना भेटा.",
    featured: "प्रमुख क्षेत्रीय कथा",
    challenges: "आलेली आव्हाने",
    interventions:
      "सेल्को फाउंडेशनचे हस्तक्षेप",
    impact:
      "हस्तक्षेपानंतरचा परिणाम",
    bestPractice: "उत्तम पद्धत",
    source: "स्रोत दस्तऐवज पाहा",
  },

  footer: {
    hosts: "सह-आयोजक",
    contact: "संपर्क करा",
    map: "ठिकाण Google Maps वर पहा",
    note:
      "सेल्को फाउंडेशन व केव्हीके, नंदुरबार यांचा संयुक्त उपक्रम.",
  },
};

const gu: Dict = {
  brandTop: "સેલ્કો ફાઉન્ડેશન × કેવીકે",
  brandName: "નંદુરબાર મેળો 2026",

  nav: {
    about: "પરિચય",
    chains: "મૂલ્ય શૃંખલાઓ",
    vendors: "વિક્રેતાઓ",
    gallery: "ગેલેરી",
    caseStudies: "કેસ સ્ટડી",
    agenda: "કાર્યક્રમ",
    speakers: "વક્તાઓ",
    contact: "સંપર્ક",
  },

  cta: {
    register: "નોંધણી કરો",
  },

  hero: {
    meta: "21 ઓગસ્ટ 2026 · PG RESORT, નંદુરબાર",
    title:
      "સામૂહિક પ્રયાસોથી ખેડૂતો અને મહિલાઓને સશક્ત બનાવવું, નંદુરબાર",
    body:
      "સેલ્કો ફાઉન્ડેશન અને કૃષિ વિજ્ઞાન કેન્દ્ર, નંદુરબાર દ્વારા સંયુક્ત આયોજન — ખેડૂતો, અગ્રણી ઉદ્યોગસાહસિકો, બેંકરો અને સ્વચ્છ ઊર્જા ટેક્નોલોજી પ્રદાતાઓને એક જ મંચ પર લાવવું.",
  },

  facts: [
    {
      title: "તારીખ",
      body: "21 ઓગસ્ટ 2026",
    },
    {
      title: "સ્થળ",
      body:
        "PG RESORT, સર્વે નં. 281/1, સીતા મા રેસિડેન્સી, પ્લોટ નં. 8, નહેરુ નગર, નંદુરબાર, મહારાષ્ટ્ર 425412",
    },
    {
      title: "ભાગલેનારાઓ",
      body:
        "આશરે 300 ખેડૂતો, FPO સભ્યો અને SHG મહિલા ઉદ્યોગસાહસિકો",
    },
    {
      title: "મૂલ્ય શૃંખલાઓ",
      body:
        "મિલેટ · મરચું · મધ · મશરૂમ · મત્સ્યઉદ્યોગ",
    },
  ],

  about: {
    eyebrow: "આ મેળો શા માટે",
    title:
      "સામૂહિક પ્રયાસોથી ખેડૂતો અને મહિલાઓને સશક્ત બનાવવું",
    body:
      "નંદુરબાર જિલ્લામાં કૃષિ, વન પેદાશો અને સંલગ્ન ક્ષેત્રોમાં નોંધપાત્ર સંભાવના છે, ખાસ કરીને મિલેટ, મરચું, મધ, મશરૂમ અને મત્સ્યઉદ્યોગ જેવી મુખ્ય વસ્તુઓમાં. તેમ છતાં નાના ખેડૂતો અને ગ્રામ્ય મહિલા ઉદ્યોગસાહસિકોને કાપણી પછીનું નુકસાન, હાથથી પ્રક્રિયા કરવાની મર્યાદાઓ, ઔપચારિક ધિરાણ સુધી મર્યાદિત પહોંચ અને વિશિષ્ટ બ્રાન્ડિંગ તથા બજાર જોડાણની અછત જેવી મુશ્કેલીઓનો સામનો કરવો પડે છે. સૌર આધારિત પ્રોસેસિંગ એકમો, કોલ્ડ સ્ટોરેજ, ડ્રાયર્સ અને મિકેનાઇઝ્ડ સાધનો જેવી સ્વચ્છ ઊર્જા આધારિત વિકેન્દ્રિત નવીનીકરણીય ઊર્જા (DRE) ઉપકરણો ઉત્પાદકતા વધારી શકે છે, મહેનત ઘટાડે છે અને ગ્રામ્ય પરિવારોની આવકમાં વધારો કરી શકે છે. ટેક્નોલોજી, નાણાં અને સમુદાય અમલીકરણ વચ્ચેનું અંતર દૂર કરવા SELCO Foundation અને Krishi Vigyan Kendra (KVK), Nandurbar સંયુક્ત રીતે ખેડૂતો અને SHG મહિલાઓ માટે એક દિવસીય મેળાનું આયોજન કરી રહ્યા છે. આ કાર્યક્રમનો હેતુ પ્રાથમિક ઉત્પાદકોને સફળ ક્ષેત્રિય આગેવાનો, નાણાકીય સંસ્થાઓ તેમજ બ્રાન્ડિંગ અને માર્કેટિંગ નિષ્ણાતો સાથે એક જ સરળ મંચ પર જોડવાનો છે.",

    objectives: [
      {
        title: "પરસ્પર જ્ઞાન વિનિમય",
        body:
          "સ્થાનિક ખેડૂતો અને SHG મહિલાઓને સફળ ક્ષેત્રિય આગેવાનો સાથે જોડીને સ્વચ્છ ઊર્જા આધારિત જીવનોપાર્જન ઉકેલ અપનાવવા પ્રેરિત કરવું.",
      },
      {
        title:
          "નાણાંકીય અને યોજનાઓ સાથે જોડાણ",
        body:
          "બેંકરો સાથે સીધા સંવાદ દ્વારા ઔપચારિક ધિરાણ અને સરકારી સબસિડી સુધી પહોંચ સરળ બનાવવી.",
      },
      {
        title:
          "ટેક્નોલોજી જાગૃતિ અને પહોંચ",
        body:
          "તમામ ભાગલેનારાઓ માટે ખુલ્લા વેન્ડર પ્રદર્શન દ્વારા સંબંધિત સ્વચ્છ ઊર્જા ટેક્નોલોજીનો સીધો અનુભવ કરાવવો.",
      },
    ],
  },

  chains: {
    eyebrow: "ફોકસ ક્ષેત્રો",
    title: "પાંચ મૂલ્ય શૃંખલાઓ",

    items: [
      {
        id: "millet",
        name: "મિલેટ",
        focus:
          "પ્રોસેસિંગ, સફાઈ, પથ્થર દૂર કરવા અને મૂલ્યવર્ધન.",
      },
      {
        id: "chilli",
        name: "મરચું",
        focus:
          "સૌર સૂકવણી, સ્વચ્છ દળણ અને ગુણવત્તા જાળવણી.",
      },
      {
        id: "honey",
        name: "મધ",
        focus:
          "નિષ્કર્ષણ, ગાળણ, સ્વચ્છ પ્રોસેસિંગ અને બોટલિંગ.",
      },
      {
        id: "mushroom",
        name: "મશરૂમ",
        focus:
          "તાપમાન નિયંત્રિત ખેતી, ડિહાઇડ્રેશન અને પેકેજિંગ.",
      },
      {
        id: "fisheries",
        name: "મત્સ્યઉદ્યોગ",
        focus:
          "કાપણી પછીનું સંચાલન, કોલ્ડ સ્ટોરેજ અને મૂલ્યવર્ધન.",
      },
    ],
  },

  vendors: {
    eyebrow: "વિક્રેતા પ્રદર્શન",
    title:
      "ટેક્નોલોજી અને સોલ્યુશન ભાગીદારો",
    body:
      "નંદુરબાર મેળામાં સ્વચ્છ ઊર્જા ટેક્નોલોજી અને જીવનોપાર્જન ઉકેલોનું પ્રદર્શન કરતી સંસ્થાઓ અને ઉદ્યોગો.",
    technology:
      "ટેક્નોલોજી / સોલ્યુશન",
    contact: "સંપર્ક",
    location: "મહારાષ્ટ્ર",
    summary:
      "મેળામાં પ્રદર્શિત થતી ટેક્નોલોજી અને ઉકેલો જુઓ.",
  },

  agenda: {
    eyebrow: "મેળાનો દિવસ",
    title: "કાર્યક્રમ એક નજરે",

    slots: [
      {
        time: "સવારે 10:00 – 10:45",
        title: "ઉદ્ઘાટન અને પ્રસ્તાવના",
        body:
          "માનનીય જિલ્લા કલેક્ટર મુખ્ય અતિથિ તરીકે, સાથે સીઈઓ જિલ્લા પરિષદ, કેવીકે અને સેલ્કો ફાઉન્ડેશન.",
      },
      {
        time:
          "સવારે 10:45 – બપોરે 12:15",
        title: "ક્ષેત્રમાંથી શીખ",
        body:
          "સ્વચ્છ ઊર્જા ટેક્નોલોજીથી ઉદ્યોગ વિકસાવનાર ખેડૂતો અને મહિલા ઉદ્યોગસાહસિકોના અનુભવો.",
      },
      {
        time:
          "બપોરે 12:15 – 1:00",
        title:
          "બેંકરો સાથે પેનલ ચર્ચા",
        body:
          "એલડીએમ અને ડીડીએમ, નાબાર્ડ — ધિરાણપાત્રતા, સબસિડી, લોન પ્રક્રિયા અને નાણાકીય સાક્ષરતા.",
      },
      {
        time:
          "બપોરે 1:00 પછી",
        title:
          "ભોજન, વેન્ડર પ્રદર્શન અને પ્રોડક્ટ શોકેસ",
        body:
          "ભોજન બાદ પાંચેય મૂલ્ય શૃંખલાઓની સ્વચ્છ ઊર્જા ટેક્નોલોજીના સ્ટોલ.",
      },
    ],
  },

  speakers: {
    eyebrow: "મંચ પર",
    title: "વક્તાઓ અને મહાનુભાવો",
    body:
      "ખેડૂતો, ઉદ્યોગસાહસિકો, સંસ્થાઓ અને નાણાકીય ભાગીદારો જ્ઞાન અને કાર્ય માટે એક મંચ પર.",
    note:
      "વધુ વક્તાઓ, વેન્ડર અને કેસ સ્ટડી વિગતો ઉપલબ્ધ થતાં ઉમેરવામાં આવશે.",
    chief: "મુખ્ય અતિથિ",
    hosts: "પ્રસ્તાવના",
    champions:
      "અગ્રણી ખેડૂતો અને ઉદ્યોગસાહસિકો",
    panel: "બેંકર્સ પેનલ",
  },

  contact: {
    eyebrow: "સંપર્ક કરો",
    title: "સેલ્કો ફાઉન્ડેશનનો સંપર્ક",
    email: "ઈમેલ",
    phone: "ફોન",
    offices: "કાર્યાલયો",
    website: "વેબસાઇટ",
    media: "મીડિયામાં",
    venue: "સ્થળ",
    map: "Google Maps પર જુઓ",
    mediaRead: "પ્રકાશિત લેખ વાંચો",
  },

  gallery: {
    eyebrow: "ક્ષેત્રમાંથી",
    title:
      "અંતિમ વપરાશકર્તાઓ સાથે ચાલી રહેલા ઉકેલો",
    body:
      "મેળામાં દર્શાવાતી દરેક ટેકનોલોજી પહેલેથી જ પરિવારોને આવક આપી રહી છે — લોટ અને તેલ મિલ, કોલ્ડ સ્ટોરેજ, સિલાઈ એકમો, નાસ્તા બનાવવાની લાઈન અને સંપૂર્ણ સૌર ગામ.",
    note:
      "સેલ્કો ફાઉન્ડેશનના ક્ષેત્રીય સ્થાપનોની તસવીરો.",
    fromField: "ક્ષેત્રમાંથી",
    previous: "પાછલી તસવીર",
    next: "આગળની તસવીર",
  },

  chainDetail: {
    challenge: "પડકાર",
    tech: "મદદરૂપ ટેકનોલોજી",
    products: "ઉત્પાદનો",
    cta: "ક્ષેત્રીય તસવીરો જુઓ",
    deck: "સંપૂર્ણ પ્રેઝન્ટેશન જુઓ",
    close: "બંધ કરો",
    valueChain: "મૂલ્ય શૃંખલા",
    benefits: "લાભ",
    flow: "મૂલ્ય શૃંખલા પ્રવાહ",
  },

  caseStudies: {
    eyebrow: "કેસ સ્ટડી",
    title: "સાચી વાર્તાઓ, સાચી અસર",
    body:
      "સ્વચ્છ ઊર્જા ટેકનોલોજી વડે સ્થિર આવક મેળવી રહેલા ઉદ્યોગસાહસિકોને મળો.",
    featured: "મુખ્ય ક્ષેત્રિય વાર્તા",
    challenges:
      "સામનો કરેલા પડકારો",
    interventions:
      "સેલ્કો ફાઉન્ડેશનના હસ્તક્ષેપો",
    impact:
      "હસ્તક્ષેપ પછીની અસર",
    bestPractice: "શ્રેષ્ઠ પ્રથા",
    source: "સ્રોત દસ્તાવેજ જુઓ",
  },

  footer: {
    hosts: "સહ-આયોજકો",
    contact: "સંપર્ક કરો",
    map: "સ્થળ Google Maps પર જુઓ",
    note:
      "સેલ્કો ફાઉન્ડેશન અને કેવીકે, નંદુરબારની સંયુક્ત પહેલ.",
  },
};

const DICTS: Record<Lang, Dict> = {
  en,
  hi,
  mr,
  gu,
};

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Dict;
}>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved =
      window.localStorage.getItem("lang") as Lang | null;

    if (saved && saved in DICTS) {
      setLang(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider
      value={{
        lang,
        setLang,
        t: DICTS[lang],
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

export function useI18n() {
  return useContext(LangContext);
}