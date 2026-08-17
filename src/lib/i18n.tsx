import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export const LANGS = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "mr", label: "मराठी" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "gu", label: "ગુજરાતી" },
] as const;

export type Lang = (typeof LANGS)[number]["code"];

export type Chain = { id: string; name: string; focus: string };
type Item = { title: string; body: string };
type Slot = { time: string; title: string; body: string };

export type Dict = {
  brandTop: string;
  brandName: string;
  nav: {
    about: string;
    chains: string;
    gallery: string;
    caseStudies: string;
    agenda: string;
    speakers: string;
    contact: string;
  };
  cta: { register: string };
  hero: { meta: string; title: string; body: string };
  facts: Item[];
  about: { eyebrow: string; title: string; body: string; objectives: Item[] };
  chains: { eyebrow: string; title: string; items: Chain[] };
  agenda: { eyebrow: string; title: string; slots: Slot[] };
  speakers: {
    eyebrow: string;
    title: string;
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
  };
  gallery: { eyebrow: string; title: string; body: string; note: string };
  chainDetail: { challenge: string; tech: string; products: string; cta: string; deck: string; close: string };
  caseStudies: {
    eyebrow: string;
    title: string;
    body: string;
    challenges: string;
    interventions: string;
    impact: string;
    bestPractice: string;
    source: string;
  };
  footer: { hosts: string; kvk: string; note: string };
};

const en: Dict = {
  brandTop: "SELCO Foundation × KVK",
  brandName: "Nandurbar Mela 2026",
  nav: {
    about: "About",
    chains: "Value Chains",
    gallery: "Gallery",
    caseStudies: "Case Studies",
    agenda: "Agenda",
    speakers: "Speakers",
    contact: "Contact",
  },
  cta: { register: "Register" },
 hero: {
  meta: "21 August 2026 · PG RESORT, Nandurbar",
  title: "Strengthening Farmers and Women through Collectives, Nandurbar",
  body: "Co-hosted by SELCO Foundation and Krishi Vigyan Kendra, Nandurbar — bringing primary producers together with field champions, bankers and clean-energy technology providers on one platform.",
},
facts: [
  { title: "Date", body: "21 August 2026" },
  {
    title: "Venue",
    body: "PG RESORT, Serve no 281/1, Sita Ma Residency, Plot No 8, Nehru Nagar, Nandurbar, Maharashtra 425412",
  },
  { title: "Participants", body: "~300 farmers, FPO members and SHG women entrepreneurs" },
  { title: "Value chains", body: "Millet · Chilli · Honey · Mushroom · Fisheries" },
],
 
    about: {
  eyebrow: "Why this mela",
  // title: "Strengthening Farmers and Women through Collectives",
  // body: "Nandurbar district holds significant potential in agriculture, forest produce, and allied sectors, particularly in key commodities such as millet, chilly, honey, mushroom, and fisheries. However, smallholder farmers and rural women entrepreneurs continue to face challenges related to post-harvest losses, manual processing constraints, limited access to formal credit, and a lack of specialized branding and market linkages. Integrating Clean Energy-Driven Decentralized Renewable Energy (DRE) appliances — such as solar-powered processing units, cold storage, dryers, and mechanized tools — can dramatically enhance productivity, reduce drudgery, and boost household incomes across rural communities. To bridge the gap between technology, finance and community implementation, SELCO Foundation and Krishi Vigyan Kendra (KVK), Nandurbar are jointly hosting this one-day Mela for Farmers and SHG Women. The event aims to bring primary producers together with successful field champions, financial institutions, and branding-marketing expertise in a single, accessible platform.",
  objectives: [
      {
        title: "Peer-to-peer knowledge exchange",
        body: "Connect local farmers and SHG women with field champions to inspire adoption of clean-energy livelihood solutions.",
      },
      {
        title: "Financial & scheme integration",
        body: "Demystify formal credit and streamline access to government subsidies through a direct panel with bankers.",
      },
      {
        title: "Technology awareness & access",
        body: "Hands-on exposure to relevant clean-energy technologies through a vendor exhibition open to all attendees.",
      },
    ],
  },
  chains: {
    eyebrow: "Focus areas",
    title: "Five value chains",
    items: [
      { id: "millet", name: "Millet", focus: "Processing, primary cleaning, destoning and value addition." },
      { id: "chilli", name: "Chilli", focus: "Solar drying, hygienic grinding and quality retention." },
      { id: "honey", name: "Honey", focus: "Extraction, filtration, hygienic processing and bottling." },
      { id: "mushroom", name: "Mushroom", focus: "Climate-controlled cultivation, dehydration and packaging." },
      { id: "fisheries", name: "Fisheries", focus: "Post-harvest handling, cold storage and value addition." },
    ],
  },
  agenda: {
    eyebrow: "Mela day",
    title: "Programme at a glance",
    slots: [
      {
        time: "10:00 – 10:45 AM",
        title: "Inauguration & Context Setting",
        body: "Hon. District Collector as Chief Guest, with CEO Zilla Parishad, KVK and SELCO Foundation leadership on stage.",
      },
      {
        time: "10:45 AM – 12:15 PM",
        title: "Learning from the Field",
        body: "Experience sharing by champion farmers and women entrepreneurs who scaled enterprises with clean-energy technology.",
      },
      {
        time: "12:15 – 1:00 PM",
        title: "Panel Discussion with Bankers",
        body: "LDM and DDM, NABARD on credit-worthiness, subventions, loan processes and financial literacy.",
      },
      {
        time: "1:00 PM onwards",
        title: "Lunch, Vendor Exhibition & Product Showcase",
        body: "Networking lunch followed by stalls showcasing clean-energy technologies across the five value chains.",
      },
    ],
  },
  speakers: {
    eyebrow: "On stage",
    title: "Speakers & dignitaries",
    note: "More speakers, vendors and case studies will be added as details are confirmed.",
    chief: "Chief Guest",
    hosts: "Context setting",
    champions: "Champion farmers & entrepreneurs",
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
  },
  gallery: {
    eyebrow: "From the field",
    title: "Solutions already running with end users",
    body: "Every technology on show at the mela is already earning income for households — flour and oil mills, cold storage, tailoring units, snack-making lines and fully solarised villages.",
    note: "Photographs from SELCO Foundation field installations.",
  },
  chainDetail: {
    challenge: "The challenge",
    tech: "Technology that helps",
    products: "Products",
    cta: "See photos from the field",
    deck: "View full presentation",
    close: "Close",
  },
  caseStudies: {
    eyebrow: "Case study",
    title: "Real stories, real impact",
    body: "Meet the entrepreneurs already turning clean-energy livelihood technology into steady income.",
    challenges: "Challenges faced",
    interventions: "SELCO Foundation interventions",
    impact: "Impact after intervention",
    bestPractice: "Best practice",
    source: "View source document",
  },
  footer: {
    hosts: "Co-hosts",
    kvk: "Krishi Vigyan Kendra (KVK), Nandurbar",
    note: "A joint initiative of SELCO Foundation and KVK, Nandurbar.",
  },
};

const hi: Dict = {
  brandTop: "सेल्को फाउंडेशन × केवीके",
  brandName: "नंदुरबार मेला 2026",
  nav: {
    about: "परिचय",
    chains: "मूल्य श्रृंखलाएँ",
    gallery: "गैलरी",
    caseStudies: "केस स्टडी",
    agenda: "कार्यक्रम",
    speakers: "वक्ता",
    contact: "संपर्क",
  },
  cta: { register: "पंजीकरण करें" },
  hero: {
    meta: "21 अगस्त 2026 · कृषि विज्ञान केंद्र (केवीके), नंदुरबार",
    title: "किसानों और स्वयं सहायता समूह की महिलाओं के लिए एक दिवसीय मेला, नंदुरबार",
    body: "सेल्को फाउंडेशन और कृषि विज्ञान केंद्र, नंदुरबार द्वारा संयुक्त रूप से आयोजित — किसानों, अग्रणी उद्यमियों, बैंकरों और स्वच्छ ऊर्जा तकनीक प्रदाताओं को एक मंच पर लाना।",
  },
  facts: [
    { title: "तिथि", body: "21 अगस्त 2026" },
    { title: "स्थान", body: "कृषि विज्ञान केंद्र (केवीके), नंदुरबार" },
    { title: "प्रतिभागी", body: "लगभग 300 किसान, एफपीओ सदस्य और एसएचजी महिला उद्यमी" },
    { title: "मूल्य श्रृंखलाएँ", body: "बाजरा · मिर्च · शहद · मशरूम · मत्स्य पालन" },
  ],
  about: {
    eyebrow: "यह मेला क्यों",
    title: "स्वच्छ ऊर्जा तकनीक, वित्त और सामुदायिक क्रियान्वयन को जोड़ना",
    body: "नंदुरबार में कृषि, वनोपज और संबद्ध क्षेत्रों की मजबूत संभावनाएँ हैं, फिर भी छोटे किसानों और महिला उद्यमियों को कटाई-पश्चात नुकसान, मैनुअल प्रसंस्करण, सीमित औपचारिक ऋण और कमजोर बाजार संपर्क की चुनौतियाँ हैं। सौर ऊर्जा आधारित प्रसंस्करण, कोल्ड स्टोरेज, ड्रायर और यांत्रिक उपकरण इसे बदल सकते हैं।",
    objectives: [
      {
        title: "आपसी ज्ञान आदान-प्रदान",
        body: "स्थानीय किसानों और एसएचजी महिलाओं को सफल उद्यमियों से जोड़ना ताकि स्वच्छ ऊर्जा समाधानों को अपनाने की प्रेरणा मिले।",
      },
      {
        title: "वित्त एवं योजनाओं से जुड़ाव",
        body: "बैंकरों के साथ सीधे संवाद से औपचारिक ऋण और सरकारी सब्सिडी तक पहुँच आसान बनाना।",
      },
      {
        title: "तकनीक की जानकारी और पहुँच",
        body: "सभी प्रतिभागियों के लिए खुली वेंडर प्रदर्शनी के माध्यम से स्वच्छ ऊर्जा तकनीकों का प्रत्यक्ष अनुभव।",
      },
    ],
  },
  chains: {
    eyebrow: "केंद्रित क्षेत्र",
    title: "पाँच मूल्य श्रृंखलाएँ",
    items: [
      { id: "millet", name: "बाजरा", focus: "प्रसंस्करण, सफाई, डीस्टोनिंग और मूल्य संवर्धन।" },
      { id: "chilli", name: "मिर्च", focus: "सौर सुखाना, स्वच्छ पिसाई और गुणवत्ता संरक्षण।" },
      { id: "honey", name: "शहद", focus: "निष्कर्षण, छानना, स्वच्छ प्रसंस्करण और बॉटलिंग।" },
      { id: "mushroom", name: "मशरूम", focus: "जलवायु-नियंत्रित खेती, निर्जलीकरण और पैकेजिंग।" },
      { id: "fisheries", name: "मत्स्य पालन", focus: "कटाई-पश्चात रखरखाव, कोल्ड स्टोरेज और मूल्य संवर्धन।" },
    ],
  },
  agenda: {
    eyebrow: "मेला दिवस",
    title: "कार्यक्रम एक नज़र में",
    slots: [
      {
        time: "सुबह 10:00 – 10:45",
        title: "उद्घाटन एवं प्रस्तावना",
        body: "माननीय जिलाधिकारी मुख्य अतिथि के रूप में, साथ में सीईओ जिला परिषद, केवीके और सेल्को फाउंडेशन के प्रतिनिधि।",
      },
      {
        time: "सुबह 10:45 – दोपहर 12:15",
        title: "क्षेत्र से सीख",
        body: "स्वच्छ ऊर्जा तकनीक से उद्यम बढ़ाने वाले किसानों और महिला उद्यमियों के अनुभव।",
      },
      {
        time: "दोपहर 12:15 – 1:00",
        title: "बैंकरों के साथ पैनल चर्चा",
        body: "एलडीएम एवं डीडीएम, नाबार्ड — ऋण पात्रता, सब्सिडी, ऋण प्रक्रिया और वित्तीय साक्षरता पर।",
      },
      {
        time: "दोपहर 1:00 से आगे",
        title: "भोजन, वेंडर प्रदर्शनी एवं उत्पाद प्रदर्शन",
        body: "नेटवर्किंग लंच के बाद पाँचों मूल्य श्रृंखलाओं की स्वच्छ ऊर्जा तकनीकों के स्टॉल।",
      },
    ],
  },
  speakers: {
    eyebrow: "मंच पर",
    title: "वक्ता एवं अतिथि",
    note: "और वक्ता, वेंडर और केस स्टडी जानकारी उपलब्ध होते ही जोड़े जाएँगे।",
    chief: "मुख्य अतिथि",
    hosts: "प्रस्तावना",
    champions: "अग्रणी किसान एवं उद्यमी",
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
  },
  gallery: {
    eyebrow: "ज़मीनी तस्वीरें",
    title: "अंतिम उपयोगकर्ताओं के साथ चल रहे समाधान",
    body: "मेले में दिखाई जाने वाली हर तकनीक पहले से ही परिवारों को आमदनी दे रही है — आटा और तेल मिल, कोल्ड स्टोरेज, सिलाई इकाइयाँ, नाश्ता बनाने की मशीनें और पूरी तरह सौर ऊर्जा से चलने वाले गाँव।",
    note: "सेल्को फाउंडेशन की क्षेत्रीय स्थापनाओं की तस्वीरें।",
  },
  chainDetail: {
    challenge: "चुनौती",
    tech: "मददगार तकनीक",
    products: "उत्पाद",
    cta: "ज़मीनी तस्वीरें देखें",
    deck: "पूरी प्रस्तुति देखें",
    close: "बंद करें",
  },
  caseStudies: {
    eyebrow: "केस स्टडी",
    title: "असली कहानियाँ, असली प्रभाव",
    body: "उन उद्यमियों से मिलें जो स्वच्छ ऊर्जा आधारित तकनीक से पहले ही स्थायी आय कमा रहे हैं।",
    challenges: "सामना की गई चुनौतियाँ",
    interventions: "सेल्को फाउंडेशन के हस्तक्षेप",
    impact: "हस्तक्षेप के बाद का प्रभाव",
    bestPractice: "सर्वोत्तम अभ्यास",
    source: "स्रोत दस्तावेज़ देखें",
  },
  footer: {
    hosts: "सह-आयोजक",
    kvk: "कृषि विज्ञान केंद्र (केवीके), नंदुरबार",
    note: "सेल्को फाउंडेशन और केवीके, नंदुरबार की संयुक्त पहल।",
  },
};

const mr: Dict = {
  brandTop: "सेल्को फाउंडेशन × केव्हीके",
  brandName: "नंदुरबार मेळावा 2026",
  nav: {
    about: "परिचय",
    chains: "मूल्य साखळ्या",
    gallery: "गॅलरी",
    caseStudies: "केस स्टडी",
    agenda: "कार्यक्रम",
    speakers: "वक्ते",
    contact: "संपर्क",
  },
  cta: { register: "नोंदणी करा" },
  hero: {
    meta: "21 ऑगस्ट 2026 · कृषी विज्ञान केंद्र (केव्हीके), नंदुरबार",
    title: "शेतकरी व बचत गटातील महिलांसाठी एक दिवसीय मेळावा, नंदुरबार",
    body: "सेल्को फाउंडेशन आणि कृषी विज्ञान केंद्र, नंदुरबार यांच्या संयुक्त विद्यमाने — शेतकरी, यशस्वी उद्योजक, बँकर्स आणि स्वच्छ ऊर्जा तंत्रज्ञान पुरवठादार एका व्यासपीठावर.",
  },
  facts: [
    { title: "दिनांक", body: "21 ऑगस्ट 2026" },
    { title: "ठिकाण", body: "कृषी विज्ञान केंद्र (केव्हीके), नंदुरबार" },
    { title: "सहभागी", body: "सुमारे 300 शेतकरी, एफपीओ सदस्य व बचत गट महिला उद्योजक" },
    { title: "मूल्य साखळ्या", body: "बाजरी · मिरची · मध · मशरूम · मत्स्यव्यवसाय" },
  ],
  about: {
    eyebrow: "हा मेळावा का",
    title: "स्वच्छ ऊर्जा तंत्रज्ञान, वित्त आणि समुदाय अंमलबजावणी यांची सांगड",
    body: "नंदुरबारमध्ये शेती, वनोपज आणि संलग्न क्षेत्रांत मोठी क्षमता आहे; तरीही अल्पभूधारक शेतकरी व महिला उद्योजकांना काढणीपश्चात नुकसान, हाताने प्रक्रिया, मर्यादित कर्जपुरवठा आणि कमकुवत बाजार जोडणीचा सामना करावा लागतो. सौरऊर्जेवरील प्रक्रिया, शीतगृह, ड्रायर व यांत्रिक साधने हे चित्र बदलू शकतात.",
    objectives: [
      {
        title: "परस्पर ज्ञानाची देवाणघेवाण",
        body: "स्थानिक शेतकरी व बचत गट महिलांना यशस्वी उद्योजकांशी जोडून स्वच्छ ऊर्जा उपाय स्वीकारण्यास प्रोत्साहन.",
      },
      {
        title: "वित्त व योजनांची जोडणी",
        body: "बँकर्ससोबत थेट संवादातून औपचारिक कर्ज व शासकीय अनुदानाची प्रक्रिया सुलभ करणे.",
      },
      {
        title: "तंत्रज्ञानाची ओळख व उपलब्धता",
        body: "सर्व सहभागींसाठी खुल्या प्रदर्शनातून स्वच्छ ऊर्जा तंत्रज्ञानाचा प्रत्यक्ष अनुभव.",
      },
    ],
  },
  chains: {
    eyebrow: "केंद्रबिंदू",
    title: "पाच मूल्य साखळ्या",
    items: [
      { id: "millet", name: "बाजरी", focus: "प्रक्रिया, स्वच्छता, दगड वेगळे करणे व मूल्यवर्धन." },
      { id: "chilli", name: "मिरची", focus: "सौर वाळवण, स्वच्छ दळण व गुणवत्ता टिकवणे." },
      { id: "honey", name: "मध", focus: "काढणी, गाळणी, स्वच्छ प्रक्रिया व बाटलीबंद करणे." },
      { id: "mushroom", name: "मशरूम", focus: "वातावरण नियंत्रित लागवड, वाळवण व पॅकेजिंग." },
      { id: "fisheries", name: "मत्स्यव्यवसाय", focus: "काढणीपश्चात हाताळणी, शीतगृह व मूल्यवर्धन." },
    ],
  },
  agenda: {
    eyebrow: "मेळाव्याचा दिवस",
    title: "कार्यक्रमाची रूपरेषा",
    slots: [
      {
        time: "सकाळी 10:00 – 10:45",
        title: "उद्घाटन व प्रास्ताविक",
        body: "मा. जिल्हाधिकारी प्रमुख पाहुणे, सोबत मुख्य कार्यकारी अधिकारी जिल्हा परिषद, केव्हीके व सेल्को फाउंडेशन.",
      },
      {
        time: "सकाळी 10:45 – दुपारी 12:15",
        title: "क्षेत्रातून शिकवण",
        body: "स्वच्छ ऊर्जा तंत्रज्ञानाने उद्योग वाढवलेल्या शेतकरी व महिला उद्योजकांचे अनुभवकथन.",
      },
      {
        time: "दुपारी 12:15 – 1:00",
        title: "बँकर्ससोबत परिसंवाद",
        body: "एलडीएम व डीडीएम, नाबार्ड — कर्जपात्रता, अनुदान, कर्ज प्रक्रिया व आर्थिक साक्षरता.",
      },
      {
        time: "दुपारी 1:00 नंतर",
        title: "भोजन, प्रदर्शन व उत्पादन मांडणी",
        body: "भोजनानंतर पाचही मूल्य साखळ्यांतील स्वच्छ ऊर्जा तंत्रज्ञानाचे स्टॉल्स.",
      },
    ],
  },
  speakers: {
    eyebrow: "मंचावर",
    title: "वक्ते व मान्यवर",
    note: "अधिक वक्ते, वेंडर आणि केस स्टडी माहिती उपलब्ध होताच जोडली जाईल.",
    chief: "प्रमुख पाहुणे",
    hosts: "प्रास्ताविक",
    champions: "यशस्वी शेतकरी व उद्योजक",
    panel: "बँकर्स परिसंवाद",
  },
  contact: {
    eyebrow: "संपर्क",
    title: "सेल्को फाउंडेशनशी संपर्क",
    email: "ईमेल",
    phone: "दूरध्वनी",
    offices: "कार्यालये",
    website: "संकेतस्थळ",
    media: "माध्यमांमध्ये",
  },
  gallery: {
    eyebrow: "प्रत्यक्ष क्षेत्रातून",
    title: "अंतिम वापरकर्त्यांसोबत सुरू असलेली समाधाने",
    body: "मेळ्यात दाखवली जाणारी प्रत्येक तंत्रज्ञान आधीच कुटुंबांना उत्पन्न मिळवून देत आहे — पीठ आणि तेल गिरण्या, शीतगृह, शिवणकाम युनिट, फराळ निर्मिती आणि पूर्णतः सौरऊर्जेवर चालणारी गावे.",
    note: "सेल्को फाउंडेशनच्या क्षेत्रीय प्रकल्पांतील छायाचित्रे.",
  },
  chainDetail: {
    challenge: "आव्हान",
    tech: "उपयुक्त तंत्रज्ञान",
    products: "उत्पादने",
    cta: "क्षेत्रीय छायाचित्रे पाहा",
    deck: "पूर्ण सादरीकरण पाहा",
    close: "बंद करा",
  },
  caseStudies: {
    eyebrow: "केस स्टडी",
    title: "खऱ्या कथा, खरा प्रभाव",
    body: "स्वच्छ ऊर्जा तंत्रज्ञानाच्या मदतीने स्थिर उत्पन्न मिळवणाऱ्या उद्योजकांना भेटा.",
    challenges: "आलेली आव्हाने",
    interventions: "सेल्को फाउंडेशनचे हस्तक्षेप",
    impact: "हस्तक्षेपानंतरचा परिणाम",
    bestPractice: "उत्तम पद्धत",
    source: "स्रोत दस्तऐवज पाहा",
  },
  footer: {
    hosts: "सह-आयोजक",
    kvk: "कृषी विज्ञान केंद्र (केव्हीके), नंदुरबार",
    note: "सेल्को फाउंडेशन व केव्हीके, नंदुरबार यांचा संयुक्त उपक्रम.",
  },
};

const kn: Dict = {
  brandTop: "ಸೆಲ್ಕೋ ಫೌಂಡೇಶನ್ × ಕೆವಿಕೆ",
  brandName: "ನಂದೂರ್‌ಬಾರ್ ಮೇಳ 2026",
  nav: {
    about: "ಪರಿಚಯ",
    chains: "ಮೌಲ್ಯ ಸರಪಳಿಗಳು",
    gallery: "ಗ್ಯಾಲರಿ",
    caseStudies: "ಕೇಸ್ ಸ್ಟಡಿ",
    agenda: "ಕಾರ್ಯಕ್ರಮ",
    speakers: "ಭಾಷಣಕಾರರು",
    contact: "ಸಂಪರ್ಕ",
  },
  cta: { register: "ನೋಂದಣಿ" },
  hero: {
    meta: "21 ಆಗಸ್ಟ್ 2026 · ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ (ಕೆವಿಕೆ), ನಂದೂರ್‌ಬಾರ್",
    title: "ರೈತರು ಮತ್ತು ಸ್ವಸಹಾಯ ಸಂಘದ ಮಹಿಳೆಯರಿಗಾಗಿ ಒಂದು ದಿನದ ಮೇಳ, ನಂದೂರ್‌ಬಾರ್",
    body: "ಸೆಲ್ಕೋ ಫೌಂಡೇಶನ್ ಮತ್ತು ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ, ನಂದೂರ್‌ಬಾರ್ ಜಂಟಿಯಾಗಿ ಆಯೋಜಿಸಿದ ಮೇಳ — ರೈತರು, ಯಶಸ್ವಿ ಉದ್ಯಮಿಗಳು, ಬ್ಯಾಂಕರ್‌ಗಳು ಮತ್ತು ಶುದ್ಧ ಇಂಧನ ತಂತ್ರಜ್ಞಾನ ಪೂರೈಕೆದಾರರು ಒಂದೇ ವೇದಿಕೆಯಲ್ಲಿ.",
  },
  facts: [
    { title: "ದಿನಾಂಕ", body: "21 ಆಗಸ್ಟ್ 2026" },
    { title: "ಸ್ಥಳ", body: "ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ (ಕೆವಿಕೆ), ನಂದೂರ್‌ಬಾರ್" },
    { title: "ಭಾಗವಹಿಸುವವರು", body: "ಸುಮಾರು 300 ರೈತರು, ಎಫ್‌ಪಿಒ ಸದಸ್ಯರು ಮತ್ತು ಮಹಿಳಾ ಉದ್ಯಮಿಗಳು" },
    { title: "ಮೌಲ್ಯ ಸರಪಳಿಗಳು", body: "ಸಿರಿಧಾನ್ಯ · ಮೆಣಸಿನಕಾಯಿ · ಜೇನು · ಅಣಬೆ · ಮೀನುಗಾರಿಕೆ" },
  ],
  about: {
    eyebrow: "ಈ ಮೇಳ ಏಕೆ",
    title: "ಶುದ್ಧ ಇಂಧನ ತಂತ್ರಜ್ಞಾನ, ಹಣಕಾಸು ಮತ್ತು ಸಮುದಾಯ ಅನುಷ್ಠಾನದ ಸಂಪರ್ಕ",
    body: "ನಂದೂರ್‌ಬಾರ್‌ನಲ್ಲಿ ಕೃಷಿ, ಅರಣ್ಯ ಉತ್ಪನ್ನ ಮತ್ತು ಸಂಬಂಧಿತ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಉತ್ತಮ ಸಾಮರ್ಥ್ಯವಿದೆ; ಆದರೂ ಸಣ್ಣ ರೈತರು ಮತ್ತು ಮಹಿಳಾ ಉದ್ಯಮಿಗಳು ಕೊಯ್ಲೋತ್ತರ ನಷ್ಟ, ಕೈಯಿಂದ ಸಂಸ್ಕರಣೆ, ಸೀಮಿತ ಸಾಲ ಮತ್ತು ದುರ್ಬಲ ಮಾರುಕಟ್ಟೆ ಸಂಪರ್ಕವನ್ನು ಎದುರಿಸುತ್ತಾರೆ. ಸೌರಶಕ್ತಿ ಆಧಾರಿತ ಸಂಸ್ಕರಣೆ, ಶೀತಲ ಸಂಗ್ರಹ, ಡ್ರೈಯರ್ ಮತ್ತು ಯಾಂತ್ರಿಕ ಸಾಧನಗಳು ಇದನ್ನು ಬದಲಾಯಿಸಬಲ್ಲವು.",
    objectives: [
      {
        title: "ಪರಸ್ಪರ ಜ್ಞಾನ ವಿನಿಮಯ",
        body: "ಸ್ಥಳೀಯ ರೈತರು ಮತ್ತು ಮಹಿಳೆಯರನ್ನು ಯಶಸ್ವಿ ಉದ್ಯಮಿಗಳೊಂದಿಗೆ ಜೋಡಿಸಿ ಶುದ್ಧ ಇಂಧನ ಪರಿಹಾರಗಳ ಅಳವಡಿಕೆಗೆ ಪ್ರೇರಣೆ.",
      },
      {
        title: "ಹಣಕಾಸು ಮತ್ತು ಯೋಜನೆಗಳ ಸಂಯೋಜನೆ",
        body: "ಬ್ಯಾಂಕರ್‌ಗಳೊಂದಿಗೆ ನೇರ ಸಂವಾದದ ಮೂಲಕ ಸಾಲ ಮತ್ತು ಸರ್ಕಾರಿ ಸಬ್ಸಿಡಿ ಪ್ರಕ್ರಿಯೆ ಸರಳಗೊಳಿಸುವುದು.",
      },
      {
        title: "ತಂತ್ರಜ್ಞಾನ ಅರಿವು ಮತ್ತು ಲಭ್ಯತೆ",
        body: "ಎಲ್ಲರಿಗೂ ಮುಕ್ತವಾದ ಪ್ರದರ್ಶನದ ಮೂಲಕ ಶುದ್ಧ ಇಂಧನ ತಂತ್ರಜ್ಞಾನಗಳ ನೇರ ಅನುಭವ.",
      },
    ],
  },
  chains: {
    eyebrow: "ಗಮನ ಕ್ಷೇತ್ರಗಳು",
    title: "ಐದು ಮೌಲ್ಯ ಸರಪಳಿಗಳು",
    items: [
      { id: "millet", name: "ಸಿರಿಧಾನ್ಯ", focus: "ಸಂಸ್ಕರಣೆ, ಶುಚಿಗೊಳಿಸುವಿಕೆ, ಕಲ್ಲು ಬೇರ್ಪಡಿಸುವಿಕೆ ಮತ್ತು ಮೌಲ್ಯವರ್ಧನೆ." },
      { id: "chilli", name: "ಮೆಣಸಿನಕಾಯಿ", focus: "ಸೌರ ಒಣಗಿಸುವಿಕೆ, ಸ್ವಚ್ಛ ಪುಡಿ ಮಾಡುವಿಕೆ ಮತ್ತು ಗುಣಮಟ್ಟ ರಕ್ಷಣೆ." },
      { id: "honey", name: "ಜೇನು", focus: "ಹೊರತೆಗೆಯುವಿಕೆ, ಶೋಧನೆ, ಸ್ವಚ್ಛ ಸಂಸ್ಕರಣೆ ಮತ್ತು ಬಾಟ್ಲಿಂಗ್." },
      { id: "mushroom", name: "ಅಣಬೆ", focus: "ಹವಾ ನಿಯಂತ್ರಿತ ಬೆಳೆ, ನಿರ್ಜಲೀಕರಣ ಮತ್ತು ಪ್ಯಾಕೇಜಿಂಗ್." },
      { id: "fisheries", name: "ಮೀನುಗಾರಿಕೆ", focus: "ಕೊಯ್ಲೋತ್ತರ ನಿರ್ವಹಣೆ, ಶೀತಲ ಸಂಗ್ರಹ ಮತ್ತು ಮೌಲ್ಯವರ್ಧನೆ." },
    ],
  },
  agenda: {
    eyebrow: "ಮೇಳದ ದಿನ",
    title: "ಕಾರ್ಯಕ್ರಮದ ನೋಟ",
    slots: [
      {
        time: "ಬೆಳಿಗ್ಗೆ 10:00 – 10:45",
        title: "ಉದ್ಘಾಟನೆ ಮತ್ತು ಪ್ರಸ್ತಾವನೆ",
        body: "ಮಾನ್ಯ ಜಿಲ್ಲಾಧಿಕಾರಿಗಳು ಮುಖ್ಯ ಅತಿಥಿಯಾಗಿ, ಜೊತೆಗೆ ಸಿಇಒ ಜಿಲ್ಲಾ ಪರಿಷತ್, ಕೆವಿಕೆ ಮತ್ತು ಸೆಲ್ಕೋ ಫೌಂಡೇಶನ್.",
      },
      {
        time: "ಬೆಳಿಗ್ಗೆ 10:45 – ಮಧ್ಯಾಹ್ನ 12:15",
        title: "ಕ್ಷೇತ್ರದಿಂದ ಕಲಿಕೆ",
        body: "ಶುದ್ಧ ಇಂಧನ ತಂತ್ರಜ್ಞಾನದಿಂದ ಉದ್ಯಮ ಬೆಳೆಸಿದ ರೈತರು ಮತ್ತು ಮಹಿಳಾ ಉದ್ಯಮಿಗಳ ಅನುಭವ ಹಂಚಿಕೆ.",
      },
      {
        time: "ಮಧ್ಯಾಹ್ನ 12:15 – 1:00",
        title: "ಬ್ಯಾಂಕರ್‌ಗಳೊಂದಿಗೆ ಸಂವಾದ",
        body: "ಎಲ್‌ಡಿಎಂ ಮತ್ತು ಡಿಡಿಎಂ, ನಬಾರ್ಡ್ — ಸಾಲ ಅರ್ಹತೆ, ಸಬ್ಸಿಡಿ, ಸಾಲ ಪ್ರಕ್ರಿಯೆ ಮತ್ತು ಹಣಕಾಸು ಸಾಕ್ಷರತೆ.",
      },
      {
        time: "ಮಧ್ಯಾಹ್ನ 1:00 ನಂತರ",
        title: "ಊಟ, ಪ್ರದರ್ಶನ ಮತ್ತು ಉತ್ಪನ್ನ ಪ್ರದರ್ಶನ",
        body: "ಊಟದ ನಂತರ ಐದೂ ಮೌಲ್ಯ ಸರಪಳಿಗಳ ಶುದ್ಧ ಇಂಧನ ತಂತ್ರಜ್ಞಾನ ಮಳಿಗೆಗಳು.",
      },
    ],
  },
  speakers: {
    eyebrow: "ವೇದಿಕೆಯಲ್ಲಿ",
    title: "ಭಾಷಣಕಾರರು ಮತ್ತು ಗಣ್ಯರು",
    note: "ಹೆಚ್ಚಿನ ಭಾಷಣಕಾರರು, ಮಾರಾಟಗಾರರು ಮತ್ತು ಕೇಸ್ ಸ್ಟಡಿ ವಿವರಗಳು ದೊರೆತಂತೆ ಸೇರಿಸಲಾಗುವುದು.",
    chief: "ಮುಖ್ಯ ಅತಿಥಿ",
    hosts: "ಪ್ರಸ್ತಾವನೆ",
    champions: "ಯಶಸ್ವಿ ರೈತರು ಮತ್ತು ಉದ್ಯಮಿಗಳು",
    panel: "ಬ್ಯಾಂಕರ್‌ಗಳ ಸಂವಾದ",
  },
  contact: {
    eyebrow: "ಸಂಪರ್ಕಿಸಿ",
    title: "ಸೆಲ್ಕೋ ಫೌಂಡೇಶನ್ ಸಂಪರ್ಕ",
    email: "ಇಮೇಲ್",
    phone: "ದೂರವಾಣಿ",
    offices: "ಕಚೇರಿಗಳು",
    website: "ಜಾಲತಾಣ",
    media: "ಮಾಧ್ಯಮದಲ್ಲಿ",
  },
  gallery: {
    eyebrow: "ಕ್ಷೇತ್ರದಿಂದ",
    title: "ಬಳಕೆದಾರರೊಂದಿಗೆ ಈಗಾಗಲೇ ಕಾರ್ಯನಿರತ ಪರಿಹಾರಗಳು",
    body: "ಮೇಳದಲ್ಲಿ ತೋರಿಸಲಾಗುವ ಪ್ರತಿಯೊಂದು ತಂತ್ರಜ್ಞಾನವೂ ಈಗಾಗಲೇ ಕುಟುಂಬಗಳಿಗೆ ಆದಾಯ ತರುತ್ತಿದೆ — ಹಿಟ್ಟು ಮತ್ತು ಎಣ್ಣೆ ಗಿರಣಿ, ಶೀತಲ ಸಂಗ್ರಹ, ಹೊಲಿಗೆ ಘಟಕ, ತಿಂಡಿ ತಯಾರಿಕೆ ಮತ್ತು ಸಂಪೂರ್ಣ ಸೌರ ಗ್ರಾಮಗಳು.",
    note: "ಸೆಲ್ಕೊ ಫೌಂಡೇಶನ್ ಕ್ಷೇತ್ರ ಅನುಷ್ಠಾನಗಳ ಚಿತ್ರಗಳು.",
  },
  chainDetail: {
    challenge: "ಸವಾಲು",
    tech: "ಸಹಾಯಕ ತಂತ್ರಜ್ಞಾನ",
    products: "ಉತ್ಪನ್ನಗಳು",
    cta: "ಕ್ಷೇತ್ರ ಚಿತ್ರಗಳನ್ನು ನೋಡಿ",
    deck: "ಪೂರ್ಣ ಪ್ರಸ್ತುತಿ ನೋಡಿ",
    close: "ಮುಚ್ಚಿ",
  },
  caseStudies: {
    eyebrow: "ಕೇಸ್ ಸ್ಟಡಿ",
    title: "ನಿಜ ಕಥೆಗಳು, ನಿಜ ಪರಿಣಾಮ",
    body: "ಸ್ವಚ್ಛ ಇಂಧನ ತಂತ್ರಜ್ಞಾನದ ಮೂಲಕ ಈಗಾಗಲೇ ಸ್ಥಿರ ಆದಾಯ ಗಳಿಸುತ್ತಿರುವ ಉದ್ಯಮಿಗಳನ್ನು ಭೇಟಿಯಾಗಿ.",
    challenges: "ಎದುರಿಸಿದ ಸವಾಲುಗಳು",
    interventions: "ಸೆಲ್ಕೋ ಫೌಂಡೇಶನ್ ಮಧ್ಯಸ್ಥಿಕೆಗಳು",
    impact: "ಮಧ್ಯಸ್ಥಿಕೆಯ ನಂತರದ ಪರಿಣಾಮ",
    bestPractice: "ಉತ್ತಮ ಅಭ್ಯಾಸ",
    source: "ಮೂಲ ದಾಖಲೆ ನೋಡಿ",
  },
  footer: {
    hosts: "ಸಹ-ಆಯೋಜಕರು",
    kvk: "ಕೃಷಿ ವಿಜ್ಞಾನ ಕೇಂದ್ರ (ಕೆವಿಕೆ), ನಂದೂರ್‌ಬಾರ್",
    note: "ಸೆಲ್ಕೋ ಫೌಂಡೇಶನ್ ಮತ್ತು ಕೆವಿಕೆ, ನಂದೂರ್‌ಬಾರ್ ಜಂಟಿ ಉಪಕ್ರಮ.",
  },
};

const gu: Dict = {
  brandTop: "સેલ્કો ફાઉન્ડેશન × કેવીકે",
  brandName: "નંદુરબાર મેળો 2026",
  nav: {
    about: "પરિચય",
    chains: "મૂલ્ય શૃંખલાઓ",
    gallery: "ગેલેરી",
    caseStudies: "કેસ સ્ટડી",
    agenda: "કાર્યક્રમ",
    speakers: "વક્તાઓ",
    contact: "સંપર્ક",
  },
  cta: { register: "નોંધણી કરો" },
  hero: {
    meta: "21 ઓગસ્ટ 2026 · કૃષિ વિજ્ઞાન કેન્દ્ર (કેવીકે), નંદુરબાર",
    title: "ખેડૂતો અને સ્વસહાય જૂથની મહિલાઓ માટે એક દિવસીય મેળો, નંદુરબાર",
    body: "સેલ્કો ફાઉન્ડેશન અને કૃષિ વિજ્ઞાન કેન્દ્ર, નંદુરબાર દ્વારા સંયુક્ત આયોજન — ખેડૂતો, અગ્રણી ઉદ્યોગસાહસિકો, બેંકરો અને સ્વચ્છ ઊર્જા ટેક્નોલોજી પ્રદાતાઓ એક જ મંચ પર.",
  },
  facts: [
    { title: "તારીખ", body: "21 ઓગસ્ટ 2026" },
    { title: "સ્થળ", body: "કૃષિ વિજ્ઞાન કેન્દ્ર (કેવીકે), નંદુરબાર" },
    { title: "સહભાગીઓ", body: "આશરે 300 ખેડૂતો, એફપીઓ સભ્યો અને મહિલા ઉદ્યોગસાહસિકો" },
    { title: "મૂલ્ય શૃંખલાઓ", body: "મિલેટ · મરચું · મધ · મશરૂમ · મત્સ્યઉદ્યોગ" },
  ],
  about: {
    eyebrow: "આ મેળો શા માટે",
    title: "સ્વચ્છ ઊર્જા ટેક્નોલોજી, ધિરાણ અને સામુદાયિક અમલીકરણને જોડવું",
    body: "નંદુરબારમાં ખેતી, વન પેદાશો અને સંલગ્ન ક્ષેત્રોમાં મોટી ક્ષમતા છે, છતાં નાના ખેડૂતો અને મહિલા ઉદ્યોગસાહસિકો કાપણી પછીનું નુકસાન, હાથથી પ્રક્રિયા, મર્યાદિત ધિરાણ અને નબળા બજાર જોડાણનો સામનો કરે છે. સૌર ઊર્જા આધારિત પ્રોસેસિંગ, કોલ્ડ સ્ટોરેજ, ડ્રાયર અને યાંત્રિક સાધનો આ બદલી શકે છે.",
    objectives: [
      {
        title: "પરસ્પર જ્ઞાન વિનિમય",
        body: "સ્થાનિક ખેડૂતો અને મહિલાઓને અગ્રણી ઉદ્યોગસાહસિકો સાથે જોડીને સ્વચ્છ ઊર્જા ઉકેલો અપનાવવા પ્રેરણા.",
      },
      {
        title: "ધિરાણ અને યોજનાઓનું સંકલન",
        body: "બેંકરો સાથે સીધા સંવાદ દ્વારા લોન અને સરકારી સબસિડીની પ્રક્રિયા સરળ બનાવવી.",
      },
      {
        title: "ટેક્નોલોજી જાગૃતિ અને પહોંચ",
        body: "સૌ માટે ખુલ્લા પ્રદર્શન દ્વારા સ્વચ્છ ઊર્જા ટેક્નોલોજીનો પ્રત્યક્ષ અનુભવ.",
      },
    ],
  },
  chains: {
    eyebrow: "ફોકસ ક્ષેત્રો",
    title: "પાંચ મૂલ્ય શૃંખલાઓ",
    items: [
      { id: "millet", name: "મિલેટ", focus: "પ્રોસેસિંગ, સફાઈ, પથ્થર દૂર કરવા અને મૂલ્યવર્ધન." },
      { id: "chilli", name: "મરચું", focus: "સૌર સૂકવણી, સ્વચ્છ દળણ અને ગુણવત્તા જાળવણી." },
      { id: "honey", name: "મધ", focus: "નિષ્કર્ષણ, ગાળણ, સ્વચ્છ પ્રોસેસિંગ અને બોટલિંગ." },
      { id: "mushroom", name: "મશરૂમ", focus: "તાપમાન નિયંત્રિત ખેતી, ડિહાઇડ્રેશન અને પેકેજિંગ." },
      { id: "fisheries", name: "મત્સ્યઉદ્યોગ", focus: "કાપણી પછીનું સંચાલન, કોલ્ડ સ્ટોરેજ અને મૂલ્યવર્ધન." },
    ],
  },
  agenda: {
    eyebrow: "મેળાનો દિવસ",
    title: "કાર્યક્રમ એક નજરે",
    slots: [
      {
        time: "સવારે 10:00 – 10:45",
        title: "ઉદ્ઘાટન અને પ્રસ્તાવના",
        body: "માનનીય જિલ્લા કલેક્ટર મુખ્ય અતિથિ તરીકે, સાથે સીઈઓ જિલ્લા પરિષદ, કેવીકે અને સેલ્કો ફાઉન્ડેશન.",
      },
      {
        time: "સવારે 10:45 – બપોરે 12:15",
        title: "ક્ષેત્રમાંથી શીખ",
        body: "સ્વચ્છ ઊર્જા ટેક્નોલોજીથી ઉદ્યોગ વિકસાવનાર ખેડૂતો અને મહિલા ઉદ્યોગસાહસિકોના અનુભવો.",
      },
      {
        time: "બપોરે 12:15 – 1:00",
        title: "બેંકરો સાથે પેનલ ચર્ચા",
        body: "એલડીએમ અને ડીડીએમ, નાબાર્ડ — ધિરાણપાત્રતા, સબસિડી, લોન પ્રક્રિયા અને નાણાકીય સાક્ષરતા.",
      },
      {
        time: "બપોરે 1:00 પછી",
        title: "ભોજન, વેન્ડર પ્રદર્શન અને પ્રોડક્ટ શોકેસ",
        body: "ભોજન બાદ પાંચેય મૂલ્ય શૃંખલાઓની સ્વચ્છ ઊર્જા ટેક્નોલોજીના સ્ટોલ.",
      },
    ],
  },
  speakers: {
    eyebrow: "મંચ પર",
    title: "વક્તાઓ અને મહાનુભાવો",
    note: "વધુ વક્તાઓ, વેન્ડર અને કેસ સ્ટડી વિગતો ઉપલબ્ધ થતાં ઉમેરવામાં આવશે.",
    chief: "મુખ્ય અતિથિ",
    hosts: "પ્રસ્તાવના",
    champions: "અગ્રણી ખેડૂતો અને ઉદ્યોગસાહસિકો",
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
  },
  gallery: {
    eyebrow: "ક્ષેત્રમાંથી",
    title: "અંતિમ વપરાશકર્તાઓ સાથે ચાલી રહેલા ઉકેલો",
    body: "મેળામાં દર્શાવાતી દરેક ટેકનોલોજી પહેલેથી જ પરિવારોને આવક આપી રહી છે — લોટ અને તેલ મિલ, કોલ્ડ સ્ટોરેજ, સિલાઈ એકમો, નાસ્તા બનાવવાની લાઈન અને સંપૂર્ણ સૌર ગામ.",
    note: "સેલ્કો ફાઉન્ડેશનના ક્ષેત્રીય સ્થાપનોની તસવીરો.",
  },
  chainDetail: {
    challenge: "પડકાર",
    tech: "મદદરૂપ ટેકનોલોજી",
    products: "ઉત્પાદનો",
    cta: "ક્ષેત્રીય તસવીરો જુઓ",
    deck: "સંપૂર્ણ પ્રેઝન્ટેશન જુઓ",
    close: "બંધ કરો",
  },
  caseStudies: {
    eyebrow: "કેસ સ્ટડી",
    title: "સાચી વાર્તાઓ, સાચી અસર",
    body: "સ્વચ્છ ઊર્જા ટેકનોલોજી વડે સ્થિર આવક મેળવી રહેલા ઉદ્યોગસાહસિકોને મળો.",
    challenges: "સામનો કરેલા પડકારો",
    interventions: "સેલ્કો ફાઉન્ડેશનના હસ્તક્ષેપો",
    impact: "હસ્તક્ષેપ પછીની અસર",
    bestPractice: "શ્રેષ્ઠ પ્રથા",
    source: "સ્રોત દસ્તાવેજ જુઓ",
  },
  footer: {
    hosts: "સહ-આયોજકો",
    kvk: "કૃષિ વિજ્ઞાન કેન્દ્ર (કેવીકે), નંદુરબાર",
    note: "સેલ્કો ફાઉન્ડેશન અને કેવીકે, નંદુરબારની સંયુક્ત પહેલ.",
  },
};

const DICTS: Record<Lang, Dict> = { en, hi, mr, kn, gu };

const LangContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang") as Lang | null;
    if (saved && saved in DICTS) setLang(saved);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang, t: DICTS[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useI18n() {
  return useContext(LangContext);
}
