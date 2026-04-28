export const languageOptions = [
  { value: "en", label: "English", speechLang: "en-IN" },
  { value: "hi", label: "हिन्दी", speechLang: "hi-IN" },
  { value: "kn", label: "ಕನ್ನಡ", speechLang: "kn-IN" },
  { value: "ta", label: "தமிழ்", speechLang: "ta-IN" },
  { value: "te", label: "తెలుగు", speechLang: "te-IN" },
  { value: "mr", label: "मराठी", speechLang: "mr-IN" }
];

export const eligibilityQuestions = [
  {
    name: "audience",
    label: "I am a",
    options: [
      { value: "student", label: "Student" },
      { value: "farmer", label: "Farmer" },
      { value: "worker", label: "Worker" },
      { value: "family", label: "Family / Citizen" }
    ]
  },
  {
    name: "location",
    label: "Location type",
    options: [
      { value: "any", label: "Any" },
      { value: "urban", label: "Urban" },
      { value: "rural", label: "Rural" }
    ]
  },
  {
    name: "income",
    label: "Income range",
    options: [
      { value: "low", label: "Low income" },
      { value: "middle", label: "Middle income" },
      { value: "any", label: "Not sure" }
    ]
  },
  {
    name: "need",
    label: "I need help with",
    options: [
      { value: "scholarship", label: "Scholarship / Education" },
      { value: "health", label: "Health support" },
      { value: "documents", label: "Documents / Governance" },
      { value: "community", label: "Volunteer / Community support" }
    ]
  }
];

export const eligibilityRecommendations = [
  {
    audience: "student",
    location: "any",
    income: "low",
    need: "scholarship",
    type: "Scholarship",
    title: "National Scholarship Portal",
    reason: "Best starting point for central and state scholarship schemes, payment tracking, and application status.",
    href: "https://scholarships.gov.in/"
  },
  {
    audience: "student",
    location: "any",
    income: "low",
    need: "scholarship",
    type: "Scheme",
    title: "NMMSS",
    reason: "Useful for meritorious students from economically weaker sections looking for education support.",
    href: "https://dsel.education.gov.in/en/scheme/nmmss"
  },
  {
    audience: "farmer",
    location: "rural",
    income: "any",
    need: "documents",
    type: "Scheme",
    title: "PM-KISAN",
    reason: "Useful for farmers who need income-support information, registration help, or beneficiary services.",
    href: "https://pmkisan.gov.in/"
  },
  {
    audience: "worker",
    location: "any",
    income: "low",
    need: "documents",
    type: "Portal",
    title: "eShram",
    reason: "Helps unorganised workers register, access labour-linked benefits, and use multilingual helpdesk support.",
    href: "https://eshram.gov.in/"
  },
  {
    audience: "family",
    location: "urban",
    income: "low",
    need: "documents",
    type: "Housing",
    title: "PMAY Urban",
    reason: "Relevant for eligible urban households looking for affordable-housing support and tracking information.",
    href: "https://pmaymis.gov.in/"
  },
  {
    audience: "family",
    location: "any",
    income: "any",
    need: "health",
    type: "Telehealth",
    title: "eSanjeevani",
    reason: "Fast option for remote doctor consultation when travel is difficult.",
    href: "https://esanjeevani.mohfw.gov.in/"
  },
  {
    audience: "family",
    location: "any",
    income: "any",
    need: "health",
    type: "Mental Health",
    title: "Tele-MANAS",
    reason: "24x7 mental-health support via official helpline and referral services.",
    href: "https://www.mohfw.gov.in/?q=pressrelease-242"
  },
  {
    audience: "family",
    location: "any",
    income: "any",
    need: "community",
    type: "Volunteer",
    title: "MY Bharat",
    reason: "Good for finding youth opportunities, volunteers, events, and community programs.",
    href: "https://mybharat.gov.in/"
  },
  {
    audience: "student",
    location: "any",
    income: "any",
    need: "community",
    type: "Volunteer",
    title: "NSS",
    reason: "Relevant for student-led service, awareness drives, and local community engagement.",
    href: "https://nss.gov.in/"
  }
];

export const checklistOptions = [
  { value: "scholarship", label: "Scholarship" },
  { value: "health", label: "Health" },
  { value: "documents", label: "Documents" },
  { value: "housing", label: "Housing" }
];

export const documentChecklists = {
  scholarship: {
    title: "Scholarship Application Checklist",
    items: [
      "Aadhaar number or enrollment ID",
      "Student ID and recent passport-size photo",
      "Previous marksheet or academic record",
      "Bank account details linked to the applicant",
      "Income certificate if required by the scheme",
      "Caste, disability, or category certificate if applicable"
    ]
  },
  health: {
    title: "Health and Telehealth Checklist",
    items: [
      "Mobile number for OTP or consultation login",
      "Basic patient details: age, gender, address",
      "Previous prescriptions or test reports",
      "List of current medicines and symptoms",
      "Emergency contact details if follow-up may be needed"
    ]
  },
  documents: {
    title: "Government Document Service Checklist",
    items: [
      "Aadhaar or another accepted identity proof",
      "Address proof such as ration card, utility bill, or voter ID",
      "Supporting certificate forms for the service requested",
      "Recent photo and mobile number",
      "Reference or application number for status tracking"
    ]
  },
  housing: {
    title: "Housing Scheme Checklist",
    items: [
      "Aadhaar and family identity details",
      "Income proof and category information",
      "Address and residence details",
      "Bank account details for beneficiary transfer",
      "Property, land, or residence-related supporting documents if applicable"
    ]
  }
};

export const trackerSeeds = [
  {
    id: "track-1",
    category: "Scholarship",
    title: "NSP application and OTR setup",
    deadline: "Suggested deadline: Before scholarship closing date",
    status: "In progress"
  },
  {
    id: "track-2",
    category: "Health",
    title: "Register for local health camp and telehealth account",
    deadline: "Suggested deadline: This week",
    status: "Not started"
  },
  {
    id: "track-3",
    category: "Governance",
    title: "Collect Aadhaar, income proof, and bank details",
    deadline: "Suggested deadline: Before submitting scheme forms",
    status: "Submitted"
  }
];

export const translations = {
  en: {
    languageLabel: "Language",
    brandBadge: "Social Impact Platform",
    brandCopy:
      "A multilingual, accessibility-first digital platform that helps communities discover services, learn online skills, and connect with local support.",
    eyebrow: "Digital transformation with inclusion at the center",
    heroTitle: "One platform for public services, community help, and digital learning.",
    heroText:
      "JanConnect reduces the digital divide by making essential services easier to find, understand, and use for students, elders, rural citizens, and persons with disabilities.",
    exploreServices: "Explore Services",
    seeImpact: "See Impact",
    readSummary: "Read Summary",
    highContrast: "High Contrast",
    statOne: "Essential digital service categories",
    statTwo: "Core pillars: access, learning, community",
    statThree: "Self-service support in simple language",
    serviceEyebrow: "Essential access",
    serviceTitle: "Find the right digital service quickly",
    filterLabel: "Filter by category",
    all: "All",
    education: "Education",
    governance: "Governance",
    health: "Health",
    community: "Community",
    learningEyebrow: "Digital confidence",
    learningTitle: "Short lessons that build real-world skills",
    impactEyebrow: "Why it matters",
    impactTitle: "Designed to create measurable social impact",
    communityEyebrow: "Community action",
    communityTitle: "Local announcements and support requests",
    footerText:
      "JanConnect is a React starter platform for digital transformation and inclusive social impact."
  },
  hi: {
    languageLabel: "भाषा",
    brandBadge: "सामाजिक प्रभाव प्लेटफॉर्म",
    brandCopy:
      "यह एक बहुभाषी और सुलभ डिजिटल प्लेटफॉर्म है जो लोगों को सेवाएं खोजने, डिजिटल कौशल सीखने और स्थानीय सहायता से जुड़ने में मदद करता है।",
    eyebrow: "समावेशन के साथ डिजिटल परिवर्तन",
    heroTitle: "सरकारी सेवाओं, सामुदायिक सहायता और डिजिटल सीखने के लिए एक ही प्लेटफॉर्म।",
    heroText:
      "JanConnect छात्रों, बुजुर्गों, ग्रामीण नागरिकों और दिव्यांग उपयोगकर्ताओं के लिए डिजिटल सेवाओं को आसान और समझने योग्य बनाता है।",
    exploreServices: "सेवाएं देखें",
    seeImpact: "प्रभाव देखें",
    readSummary: "सार पढ़ें",
    highContrast: "हाई कॉन्ट्रास्ट",
    statOne: "जरूरी डिजिटल सेवा श्रेणियां",
    statTwo: "तीन मुख्य स्तंभ: सेवाएं, सीखना, समुदाय",
    statThree: "सरल भाषा में 24x7 सहायता",
    serviceEyebrow: "जरूरी पहुंच",
    serviceTitle: "सही डिजिटल सेवा जल्दी खोजें",
    filterLabel: "श्रेणी चुनें",
    all: "सभी",
    education: "शिक्षा",
    governance: "शासन",
    health: "स्वास्थ्य",
    community: "समुदाय",
    learningEyebrow: "डिजिटल आत्मविश्वास",
    learningTitle: "छोटे पाठ जो वास्तविक कौशल बनाते हैं",
    impactEyebrow: "यह क्यों जरूरी है",
    impactTitle: "मापनीय सामाजिक प्रभाव के लिए डिज़ाइन किया गया",
    communityEyebrow: "सामुदायिक कार्रवाई",
    communityTitle: "स्थानीय घोषणाएं और सहायता अनुरोध",
    footerText:
      "JanConnect डिजिटल परिवर्तन और समावेशी सामाजिक प्रभाव के लिए एक React स्टार्टर प्लेटफॉर्म है।"
  },
  kn: {
    languageLabel: "ಭಾಷೆ",
    brandBadge: "ಸಾಮಾಜಿಕ ಪರಿಣಾಮ ವೇದಿಕೆ",
    brandCopy:
      "ಸೇವೆಗಳು, ಡಿಜಿಟಲ್ ಕೌಶಲ್ಯಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಸಹಾಯವನ್ನು ಒಂದು ಸ್ಥಳದಲ್ಲಿ ಸಂಪರ್ಕಿಸುವ ಬಹುಭಾಷಾ, ಪ್ರವೇಶಯೋಗ್ಯ ಡಿಜಿಟಲ್ ವೇದಿಕೆ.",
    eyebrow: "ಒಗ್ಗೂಡಿಕೆಯನ್ನು ಕೇಂದ್ರವಾಗಿಟ್ಟ ಡಿಜಿಟಲ್ ಪರಿವರ್ತನೆ",
    heroTitle: "ಸಾರ್ವಜನಿಕ ಸೇವೆಗಳು, ಸಮುದಾಯ ಸಹಾಯ ಮತ್ತು ಡಿಜಿಟಲ್ ಕಲಿಕೆಗೆ ಒಂದೇ ವೇದಿಕೆ.",
    heroText:
      "JanConnect ವಿದ್ಯಾರ್ಥಿಗಳು, ಹಿರಿಯರು, ಗ್ರಾಮೀಣ ನಾಗರಿಕರು ಮತ್ತು ವಿಶೇಷ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿರುವ ಬಳಕೆದಾರರಿಗೆ ಡಿಜಿಟಲ್ ಸೇವೆಗಳನ್ನು ಸುಲಭವಾಗಿ ಅರಿತು ಬಳಸುವಂತೆ ಮಾಡುತ್ತದೆ.",
    exploreServices: "ಸೇವೆಗಳು ನೋಡಿ",
    seeImpact: "ಪರಿಣಾಮ ನೋಡಿ",
    readSummary: "ಸಾರಾಂಶ ಓದಿ",
    highContrast: "ಹೈ ಕಾಂಟ್ರಾಸ್ಟ್",
    statOne: "ಅಗತ್ಯ ಡಿಜಿಟಲ್ ಸೇವಾ ವಿಭಾಗಗಳು",
    statTwo: "ಮೂರು ಪ್ರಮುಖ ಸ್ತಂಭಗಳು: ಪ್ರವೇಶ, ಕಲಿಕೆ, ಸಮುದಾಯ",
    statThree: "ಸರಳ ಭಾಷೆಯಲ್ಲಿ 24x7 ಸಹಾಯ",
    serviceEyebrow: "ಅಗತ್ಯ ಪ್ರವೇಶ",
    serviceTitle: "ಸರಿಯಾದ ಡಿಜಿಟಲ್ ಸೇವೆಯನ್ನು ಬೇಗ ಹುಡುಕಿ",
    filterLabel: "ವರ್ಗ ಆಯ್ಕೆಮಾಡಿ",
    all: "ಎಲ್ಲಾ",
    education: "ಶಿಕ್ಷಣ",
    governance: "ಆಡಳಿತ",
    health: "ಆರೋಗ್ಯ",
    community: "ಸಮುದಾಯ",
    learningEyebrow: "ಡಿಜಿಟಲ್ ಆತ್ಮವಿಶ್ವಾಸ",
    learningTitle: "ನೈಜ ಜೀವನ ಕೌಶಲ್ಯಗಳನ್ನು ಬೆಳೆಸುವ ಚಿಕ್ಕ ಪಾಠಗಳು",
    impactEyebrow: "ಇದು ಏಕೆ ಮುಖ್ಯ",
    impactTitle: "ಅಳೆಯಬಹುದಾದ ಸಾಮಾಜಿಕ ಪರಿಣಾಮಕ್ಕಾಗಿ ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ",
    communityEyebrow: "ಸಮುದಾಯ ಕ್ರಿಯೆ",
    communityTitle: "ಸ್ಥಳೀಯ ಪ್ರಕಟಣೆಗಳು ಮತ್ತು ಸಹಾಯ ವಿನಂತಿಗಳು",
    footerText:
      "JanConnect ಡಿಜಿಟಲ್ ಪರಿವರ್ತನೆ ಮತ್ತು ಒಳಗೊಂಡ ಸಾಮಾಜಿಕ ಪರಿಣಾಮಕ್ಕಾಗಿ React ಆಧಾರಿತ ಆರಂಭಿಕ ವೇದಿಕೆ."
  },
  ta: {
    languageLabel: "மொழி",
    brandBadge: "சமூக தாக்க தளம்",
    brandCopy:
      "சேவைகள், டிஜிட்டல் கற்றல் மற்றும் உள்ளூர் ஆதரவை ஒரே இடத்தில் இணைக்கும் பன்மொழி, அணுகலுக்கு ஏற்ற டிஜிட்டல் தளம்.",
    eyebrow: "ஒப்புரவைக் மையமாகக் கொண்ட டிஜிட்டல் மாற்றம்",
    heroTitle: "பொது சேவைகள், சமூக உதவி மற்றும் டிஜிட்டல் கற்றலுக்கான ஒரே தளம்.",
    heroText:
      "JanConnect மாணவர்கள், முதியவர்கள், கிராமப்புற குடிமக்கள் மற்றும் மாற்றுத் திறனாளிகள் டிஜிட்டல் சேவைகளை எளிதாகப் புரிந்து பயன்படுத்த உதவுகிறது.",
    exploreServices: "சேவைகள் பார்க்க",
    seeImpact: "தாக்கத்தை பார்க்க",
    readSummary: "சுருக்கம் வாசிக்க",
    highContrast: "உயர் முரண்",
    statOne: "அத்தியாவசிய டிஜிட்டல் சேவை பிரிவுகள்",
    statTwo: "மூன்று முக்கிய தூண்கள்: அணுகல், கற்றல், சமூகம்",
    statThree: "எளிய மொழியில் 24x7 உதவி",
    serviceEyebrow: "அத்தியாவசிய அணுகல்",
    serviceTitle: "சரியான டிஜிட்டல் சேவையை விரைவாக கண்டுபிடிக்கவும்",
    filterLabel: "பிரிவை தேர்வு செய்க",
    all: "அனைத்தும்",
    education: "கல்வி",
    governance: "ஆட்சி",
    health: "ஆரோக்கியம்",
    community: "சமூகம்",
    learningEyebrow: "டிஜிட்டல் நம்பிக்கை",
    learningTitle: "உண்மையான திறன்களை உருவாக்கும் குறுகிய பாடங்கள்",
    impactEyebrow: "இது ஏன் முக்கியம்",
    impactTitle: "அளவிடக்கூடிய சமூக தாக்கத்திற்காக வடிவமைக்கப்பட்டது",
    communityEyebrow: "சமூக செயல்",
    communityTitle: "உள்ளூர் அறிவிப்புகள் மற்றும் உதவி கோரிக்கைகள்",
    footerText:
      "JanConnect டிஜிட்டல் மாற்றம் மற்றும் உள்ளடக்கிய சமூக தாக்கத்திற்கான React ஆரம்ப தளம்."
  },
  te: {
    languageLabel: "భాష",
    brandBadge: "సామాజిక ప్రభావ వేదిక",
    brandCopy:
      "సేవలు, డిజిటల్ నైపుణ్యాలు మరియు స్థానిక సహాయాన్ని ఒకే చోట కలిపే బహుభాషా, అందుబాటుకు అనుకూలమైన డిజిటల్ వేదిక.",
    eyebrow: "సమగ్రతను కేంద్రంగా పెట్టిన డిజిటల్ మార్పు",
    heroTitle: "ప్రజా సేవలు, కమ్యూనిటీ సహాయం మరియు డిజిటల్ లెర్నింగ్ కోసం ఒకే వేదిక.",
    heroText:
      "JanConnect విద్యార్థులు, వృద్ధులు, గ్రామీణ పౌరులు మరియు దివ్యాంగ వినియోగదారులు డిజిటల్ సేవలను సులభంగా అర్థం చేసుకుని ఉపయోగించేందుకు సహాయపడుతుంది.",
    exploreServices: "సేవలు చూడండి",
    seeImpact: "ప్రభావం చూడండి",
    readSummary: "సారాంశం వినండి",
    highContrast: "హై కాంట్రాస్ట్",
    statOne: "అవసరమైన డిజిటల్ సేవా విభాగాలు",
    statTwo: "మూడు ప్రధాన స్తంభాలు: ప్రాప్యత, అభ్యాసం, సమాజం",
    statThree: "సరళమైన భాషలో 24x7 సహాయం",
    serviceEyebrow: "అవసరమైన ప్రాప్యత",
    serviceTitle: "సరైన డిజిటల్ సేవను త్వరగా కనుగొనండి",
    filterLabel: "వర్గాన్ని ఎంచుకోండి",
    all: "అన్నీ",
    education: "విద్య",
    governance: "పాలన",
    health: "ఆరోగ్యం",
    community: "సమాజం",
    learningEyebrow: "డిజిటల్ ఆత్మవిశ్వాసం",
    learningTitle: "నిజ జీవిత నైపుణ్యాలను పెంచే చిన్న పాఠాలు",
    impactEyebrow: "ఇది ఎందుకు ముఖ్యం",
    impactTitle: "కొలిచే సామాజిక ప్రభావం కోసం రూపకల్పన చేయబడింది",
    communityEyebrow: "సమాజ చర్య",
    communityTitle: "స్థానిక ప్రకటనలు మరియు సహాయ అభ్యర్థనలు",
    footerText:
      "JanConnect డిజిటల్ మార్పు మరియు సమగ్ర సామాజిక ప్రభావం కోసం రూపొందించిన React ప్రారంభ వేదిక."
  },
  mr: {
    languageLabel: "भाषा",
    brandBadge: "सामाजिक प्रभाव मंच",
    brandCopy:
      "सेवा, डिजिटल कौशल्ये आणि स्थानिक मदत एकाच ठिकाणी जोडणारा बहुभाषिक आणि सुलभ डिजिटल मंच.",
    eyebrow: "समावेशकतेला केंद्रस्थानी ठेवणारा डिजिटल बदल",
    heroTitle: "सार्वजनिक सेवा, समुदाय मदत आणि डिजिटल शिक्षणासाठी एकच मंच.",
    heroText:
      "JanConnect विद्यार्थ्यांना, ज्येष्ठांना, ग्रामीण नागरिकांना आणि दिव्यांग वापरकर्त्यांना डिजिटल सेवा सोप्या पद्धतीने समजून वापरता येतील असे करते.",
    exploreServices: "सेवा पहा",
    seeImpact: "परिणाम पहा",
    readSummary: "सारांश वाचा",
    highContrast: "हाय कॉन्ट्रास्ट",
    statOne: "महत्त्वाच्या डिजिटल सेवा श्रेणी",
    statTwo: "तीन मुख्य आधारस्तंभ: प्रवेश, शिक्षण, समुदाय",
    statThree: "सोप्या भाषेत 24x7 मदत",
    serviceEyebrow: "महत्त्वाचा प्रवेश",
    serviceTitle: "योग्य डिजिटल सेवा पटकन शोधा",
    filterLabel: "श्रेणी निवडा",
    all: "सर्व",
    education: "शिक्षण",
    governance: "शासन",
    health: "आरोग्य",
    community: "समुदाय",
    learningEyebrow: "डिजिटल आत्मविश्वास",
    learningTitle: "प्रत्यक्ष आयुष्यात उपयोगी पडणारे छोटे धडे",
    impactEyebrow: "हे का महत्त्वाचे आहे",
    impactTitle: "मोजता येणाऱ्या सामाजिक परिणामासाठी तयार केलेले",
    communityEyebrow: "समुदाय कृती",
    communityTitle: "स्थानिक घोषणा आणि मदतीच्या विनंत्या",
    footerText:
      "JanConnect डिजिटल परिवर्तन आणि समावेशक सामाजिक परिणामासाठी तयार केलेले React प्रारंभिक व्यासपीठ आहे."
  }
};

export const featureCards = {
  en: [
    {
      title: "Service Navigator",
      text: "Guides users to the correct government or civic service with simple categories and step-by-step actions."
    },
    {
      title: "Community Hub",
      text: "Connects people with local NGOs, volunteers, events, scholarships, and support initiatives."
    },
    {
      title: "Digital Learning",
      text: "Offers practical lessons on cyber safety, digital payments, online forms, and public portals."
    },
    {
      title: "Accessibility Toolkit",
      text: "Includes voice assistance, larger text, high contrast mode, and screen-reader friendly structure."
    }
  ],
  hi: [
    {
      title: "सेवा नेविगेटर",
      text: "उपयोगकर्ता को सही सरकारी या नागरिक सेवा तक सरल चरणों में पहुंचाता है।"
    },
    {
      title: "कम्युनिटी हब",
      text: "उपयोगकर्ताओं को NGO, स्वयंसेवक, कार्यक्रम और सहायता समूहों से जोड़ता है।"
    },
    {
      title: "डिजिटल लर्निंग",
      text: "साइबर सुरक्षा, डिजिटल भुगतान, ऑनलाइन फॉर्म और सार्वजनिक पोर्टल पर छोटे व्यावहारिक पाठ देता है।"
    },
    {
      title: "एक्सेसिबिलिटी टूलकिट",
      text: "वॉइस सहायता, बड़ा टेक्स्ट, हाई कॉन्ट्रास्ट और स्क्रीन-रीडर फ्रेंडली संरचना शामिल है।"
    }
  ],
  kn: [
    {
      title: "ಸೇವಾ ನ್ಯಾವಿಗೇಟರ್",
      text: "ಸರಳ ವಿಭಾಗಗಳು ಮತ್ತು ಹಂತ ಹಂತದ ಮಾರ್ಗದರ್ಶನದ ಮೂಲಕ ಸರಿಯಾದ ಸರ್ಕಾರಿ ಅಥವಾ ನಾಗರಿಕ ಸೇವೆಗೆ ಬಳಕೆದಾರರನ್ನು ಕರೆದೊಯ್ಯುತ್ತದೆ."
    },
    {
      title: "ಸಮುದಾಯ ಹಬ್",
      text: "ಸ್ಥಳೀಯ ಎನ್‌ಜಿಒಗಳು, ಸ್ವಯಂಸೇವಕರು, ಕಾರ್ಯಕ್ರಮಗಳು, ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು ಮತ್ತು ಬೆಂಬಲ ಗುಂಪುಗಳೊಂದಿಗೆ ಜನರನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ."
    },
    {
      title: "ಡಿಜಿಟಲ್ ಕಲಿಕೆ",
      text: "ಸೈಬರ್ ಸುರಕ್ಷತೆ, ಡಿಜಿಟಲ್ ಪಾವತಿಗಳು, ಆನ್‌ಲೈನ್ ಫಾರ್ಮ್‌ಗಳು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಪೋರ್ಟಲ್‌ಗಳ ಬಗ್ಗೆ ಉಪಯುಕ್ತ ಚಿಕ್ಕ ಪಾಠಗಳನ್ನು ನೀಡುತ್ತದೆ."
    },
    {
      title: "ಪ್ರವೇಶ ಸಹಾಯಕಗಳು",
      text: "ಧ್ವನಿ ಸಹಾಯ, ದೊಡ್ಡ ಅಕ್ಷರ, ಹೈ ಕಾಂಟ್ರಾಸ್ಟ್ ಮತ್ತು ಸ್ಕ್ರೀನ್‌ರೀಡರ್‌ಗೆ ಅನುಗುಣವಾದ ರಚನೆಯನ್ನು ಒಳಗೊಂಡಿದೆ."
    }
  ],
  ta: [
    {
      title: "சேவை வழிகாட்டி",
      text: "எளிய பிரிவுகள் மற்றும் படிப்படியான வழிகாட்டுதலின் மூலம் சரியான அரசு அல்லது குடிமை சேவையை கண்டுபிடிக்க உதவுகிறது."
    },
    {
      title: "சமூக மையம்",
      text: "உள்ளூர் என்.ஜி.ஓ., தன்னார்வலர்கள், நிகழ்ச்சிகள், கல்வி உதவித்தொகைகள் மற்றும் ஆதரவு வலையமைப்புகளுடன் மக்களை இணைக்கிறது."
    },
    {
      title: "டிஜிட்டல் கற்றல்",
      text: "சைபர் பாதுகாப்பு, டிஜிட்டல் கட்டணம், ஆன்லைன் படிவங்கள் மற்றும் பொது தளங்கள் குறித்து பயனுள்ள குறுகிய பாடங்களை வழங்குகிறது."
    },
    {
      title: "அணுகல் கருவிகள்",
      text: "குரல் உதவி, பெரிய எழுத்து, உயர் முரண் முறை மற்றும் ஸ்கிரீன் ரீடருக்கு ஏற்ற அமைப்பை உள்ளடக்குகிறது."
    }
  ],
  te: [
    {
      title: "సేవా నావిగేటర్",
      text: "సరళమైన వర్గాలు మరియు దశలవారీ మార్గదర్శకంతో సరైన ప్రభుత్వ లేదా పౌర సేవను కనుగొనడంలో సహాయపడుతుంది."
    },
    {
      title: "కమ్యూనిటీ హబ్",
      text: "స్థానిక ఎన్‌జీఓలు, వాలంటీర్లు, ఈవెంట్లు, స్కాలర్‌షిప్‌లు మరియు సహాయ కార్యక్రమాలతో ప్రజలను కలుపుతుంది."
    },
    {
      title: "డిజిటల్ లెర్నింగ్",
      text: "సైబర్ సేఫ్టీ, డిజిటల్ చెల్లింపులు, ఆన్‌లైన్ ఫారమ్‌లు మరియు ప్రజా పోర్టల్‌లపై ఉపయోగకరమైన చిన్న పాఠాలను అందిస్తుంది."
    },
    {
      title: "అందుబాటు టూల్‌కిట్",
      text: "వాయిస్ సహాయం, పెద్ద అక్షరాలు, హై కాంట్రాస్ట్ మోడ్ మరియు స్క్రీన్ రీడర్‌కు అనుకూలమైన నిర్మాణాన్ని కలిగి ఉంటుంది."
    }
  ],
  mr: [
    {
      title: "सेवा मार्गदर्शक",
      text: "सोप्या श्रेणी आणि टप्प्याटप्प्याच्या मार्गदर्शनाद्वारे योग्य सरकारी किंवा नागरी सेवा शोधण्यास मदत करते."
    },
    {
      title: "समुदाय हब",
      text: "स्थानिक स्वयंसेवी संस्था, स्वयंसेवक, कार्यक्रम, शिष्यवृत्ती आणि मदत उपक्रमांशी लोकांना जोडते."
    },
    {
      title: "डिजिटल शिक्षण",
      text: "सायबर सुरक्षा, डिजिटल पेमेंट, ऑनलाइन फॉर्म आणि सार्वजनिक पोर्टल्सबद्दल उपयुक्त छोटे धडे देते."
    },
    {
      title: "अॅक्सेसिबिलिटी टूलकिट",
      text: "व्हॉइस सहाय्य, मोठा मजकूर, हाय कॉन्ट्रास्ट मोड आणि स्क्रीन-रीडर अनुकूल रचना देते."
    }
  ]
};

export const services = {
  en: [
    {
      category: "education",
      pill: "Education",
      title: "Scholarship Finder",
      text: "Helps students discover scholarships, compare scheme requirements, and move directly to trusted application resources.",
      details: [
        "National Scholarship Portal (NSP): one place to explore and apply for central and state scholarship schemes.",
        "Central Sector Scheme of Scholarships for College and University Students (CSSS): support for eligible Class 12 graduates entering higher education.",
        "National Means-cum-Merit Scholarship Scheme (NMMSS): support for meritorious students from economically weaker sections from Class 9 onward.",
        "INSPIRE Scholarship: a popular path for students pursuing natural and basic sciences."
      ],
      eligibilityTitle: "Eligibility Snapshot",
      eligibility: [
        "NSP: scheme eligibility varies by ministry, course, income criteria, and category.",
        "CSSS: typically for eligible higher-secondary graduates entering college or university.",
        "NMMSS: for meritorious students from economically weaker sections selected through the scheme pathway.",
        "INSPIRE: generally aimed at students pursuing natural and basic sciences."
      ],
      primaryAction: {
        label: "Apply",
        href: "https://scholarships.gov.in/"
      },
      secondaryAction: {
        label: "Check Eligibility",
        href: "https://scholarships.gov.in/"
      },
      links: [
        {
          label: "Learn More: NSP",
          href: "https://scholarships.gov.in/"
        },
        {
          label: "Learn More: CSSS",
          href: "https://www.education.gov.in/en/central-sector-scheme-scholarship-college-and-university-student-csss-0"
        },
        {
          label: "Learn More: NMMSS",
          href: "https://dsel.education.gov.in/en/scheme/nmmss"
        }
      ]
    },
    {
      category: "governance",
      pill: "Governance",
      title: "Document Assistant",
      text: "Explains how to request certificates, upload documents, and track application status with familiar digital public-service tools.",
      details: [
        "DigiLocker support for marksheets, certificates, and downloadable verified records.",
        "UMANG guidance for commonly used public-service applications across departments.",
        "eDistrict-style workflows for income, caste, residence, and birth certificates.",
        "Aadhaar document-check guidance before appointments or online updates."
      ],
      eligibilityTitle: "Typical Requirements",
      eligibility: [
        "Mobile number and identity details for account creation or login.",
        "Supporting documents such as Aadhaar, marksheets, or address proof depending on service.",
        "Verified personal details before certificate or application submission."
      ],
      primaryAction: {
        label: "Learn More",
        href: "https://www.umang.gov.in/"
      },
      secondaryAction: {
        label: "Check Documents",
        href: "https://www.digilocker.gov.in/"
      },
      links: [
        {
          label: "DigiLocker",
          href: "https://www.digilocker.gov.in/"
        },
        {
          label: "UMANG",
          href: "https://www.umang.gov.in/"
        },
        {
          label: "UIDAI",
          href: "https://uidai.gov.in/"
        }
      ]
    },
    {
      category: "health",
      pill: "Health",
      title: "Health Camp Alerts",
      text: "Lists named camps, telehealth services, and wellness programs so users know exactly where to go next.",
      details: [
        "Ayushman Arogya Mandir health screening and wellness sessions for primary care, yoga, and health awareness.",
        "eSanjeevani telemedicine for remote doctor consultations when users cannot travel easily.",
        "Tele-MANAS mental health support via 14416 or 1800-89-14416 for 24x7 tele-counselling.",
        "District Mental Health Programme and local wellness outreach camps for referral, counselling, and follow-up support."
      ],
      eligibilityTitle: "Who Can Use These Services",
      eligibility: [
        "eSanjeevani: patients needing remote doctor consultation and digital follow-up support.",
        "Tele-MANAS: anyone seeking free tele-mental health counselling support.",
        "Ayushman Arogya Mandir: local residents seeking preventive, primary-care, and wellness services."
      ],
      primaryAction: {
        label: "Telehealth Link",
        href: "https://esanjeevani.mohfw.gov.in/"
      },
      secondaryAction: {
        label: "Mental Health Help",
        href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
      },
      links: [
        {
          label: "Learn More: eSanjeevani",
          href: "https://esanjeevani.mohfw.gov.in/"
        },
        {
          label: "Learn More: Tele-MANAS",
          href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
        },
        {
          label: "Learn More: Ayushman Arogya Mandir",
          href: "https://aam.mohfw.gov.in/index.php/"
        }
      ]
    },
    {
      category: "community",
      pill: "Community",
      title: "Volunteer Connect",
      text: "Matches citizens with recognizable volunteer networks and community support channels for forms and service access.",
      details: [
        "National Service Scheme (NSS) student volunteer drives for application help and awareness camps.",
        "MY Bharat and NYKS youth volunteers for outreach, digital awareness, and neighbourhood support.",
        "Local NGO onboarding so verified groups can host help desks and scholarship support days.",
        "Community noticeboards for job fairs, education clinics, and digital-service camps."
      ],
      eligibilityTitle: "How Support Is Matched",
      eligibility: [
        "Students can request scholarship or form-filling help.",
        "Citizens can look for nearby awareness drives, camps, and help desks.",
        "Verified groups can publish events, volunteer slots, and community support posts."
      ],
      primaryAction: {
        label: "Find Volunteers",
        href: "https://www.mybharat.gov.in/"
      },
      secondaryAction: {
        label: "Learn More",
        href: "https://www.nss.gov.in/"
      },
      links: [
        {
          label: "MY Bharat",
          href: "https://www.mybharat.gov.in/"
        },
        {
          label: "NSS",
          href: "https://www.nss.gov.in/"
        },
        {
          label: "NYKS",
          href: "https://nyks.nic.in/"
        }
      ]
    }
  ]
};

services.hi = [
  {
    category: "education",
    pill: "शिक्षा",
    title: "स्कॉलरशिप फाइंडर",
    text: "छात्रों को छात्रवृत्ति योजनाओं के नाम, पात्रता और भरोसेमंद आवेदन संसाधन एक जगह समझने में मदद करता है।",
    details: [
      "National Scholarship Portal (NSP): केंद्रीय और राज्य छात्रवृत्ति योजनाओं को खोजने और आवेदन करने का एकीकृत पोर्टल।",
      "Central Sector Scheme of Scholarships for College and University Students (CSSS): उच्च शिक्षा में जाने वाले पात्र विद्यार्थियों के लिए सहायता।",
      "National Means-cum-Merit Scholarship Scheme (NMMSS): आर्थिक रूप से कमजोर और मेधावी विद्यार्थियों के लिए कक्षा 9 से आगे सहायता।",
      "INSPIRE Scholarship: प्राकृतिक और बुनियादी विज्ञान पढ़ने वाले छात्रों के लिए लोकप्रिय छात्रवृत्ति विकल्प।"
    ],
    eligibilityTitle: "पात्रता सारांश",
    eligibility: [
      "NSP: हर स्कीम की पात्रता मंत्रालय, कोर्स, आय सीमा और श्रेणी के अनुसार बदल सकती है।",
      "CSSS: आमतौर पर उच्च माध्यमिक के बाद कॉलेज या विश्वविद्यालय में प्रवेश लेने वाले पात्र विद्यार्थियों के लिए।",
      "NMMSS: आर्थिक रूप से कमजोर और मेधावी छात्रों के लिए, जो निर्धारित स्कीम प्रक्रिया से चुने जाते हैं।",
      "INSPIRE: सामान्यतः प्राकृतिक और बुनियादी विज्ञान पढ़ने वाले छात्रों के लिए।"
    ],
    primaryAction: { label: "Apply", href: "https://scholarships.gov.in/" },
    secondaryAction: { label: "Check Eligibility", href: "https://scholarships.gov.in/" },
    links: [
      { label: "Learn More: NSP", href: "https://scholarships.gov.in/" },
      {
        label: "Learn More: CSSS",
        href: "https://www.education.gov.in/en/central-sector-scheme-scholarship-college-and-university-student-csss-0"
      },
      { label: "Learn More: NMMSS", href: "https://dsel.education.gov.in/en/scheme/nmmss" }
    ]
  },
  {
    category: "governance",
    pill: "शासन",
    title: "डॉक्यूमेंट असिस्टेंट",
    text: "प्रमाणपत्र, दस्तावेज अपलोड और आवेदन ट्रैकिंग की प्रक्रिया को परिचित सरकारी डिजिटल टूल्स के साथ समझाता है।",
    details: [
      "DigiLocker के माध्यम से मार्कशीट, प्रमाणपत्र और सत्यापित दस्तावेज़ प्राप्त करने की जानकारी।",
      "UMANG पर आम सरकारी सेवाओं और आवेदन प्रक्रिया की सहायता।",
      "eDistrict जैसे वर्कफ़्लो के जरिए आय, जाति, निवास और जन्म प्रमाणपत्र की जानकारी।",
      "Aadhaar अपडेट से पहले जरूरी दस्तावेज़ और अपॉइंटमेंट तैयारी की सूची।"
    ],
    eligibilityTitle: "सामान्य आवश्यकताएं",
    eligibility: [
      "खाता बनाने या लॉगिन के लिए मोबाइल नंबर और पहचान विवरण।",
      "सेवा के अनुसार आधार, मार्कशीट या पते के प्रमाण जैसे दस्तावेज़।",
      "प्रमाणपत्र या आवेदन जमा करने से पहले सत्यापित व्यक्तिगत जानकारी।"
    ],
    primaryAction: { label: "Learn More", href: "https://www.umang.gov.in/" },
    secondaryAction: { label: "Check Documents", href: "https://www.digilocker.gov.in/" },
    links: [
      { label: "DigiLocker", href: "https://www.digilocker.gov.in/" },
      { label: "UMANG", href: "https://www.umang.gov.in/" },
      { label: "UIDAI", href: "https://uidai.gov.in/" }
    ]
  },
  {
    category: "health",
    pill: "स्वास्थ्य",
    title: "हेल्थ कैंप अलर्ट",
    text: "नाम सहित हेल्थ कैंप, टेलीहेल्थ सेवाएं और वेलनेस प्रोग्राम दिखाता है ताकि उपयोगकर्ता तुरंत सही विकल्प चुन सकें।",
    details: [
      "Ayushman Arogya Mandir स्वास्थ्य जांच, योग और हेल्थ अवेयरनेस वेलनेस सत्र।",
      "eSanjeevani टेलीमेडिसिन के जरिए दूरस्थ डॉक्टर परामर्श।",
      "Tele-MANAS मानसिक स्वास्थ्य सहायता हेल्पलाइन 14416 या 1800-89-14416 के साथ 24x7 टेली-काउंसलिंग।",
      "District Mental Health Programme और स्थानीय वेलनेस आउटरीच कैंप के जरिए काउंसलिंग और रेफरल सहायता।"
    ],
    eligibilityTitle: "कौन उपयोग कर सकता है",
    eligibility: [
      "eSanjeevani: दूरस्थ डॉक्टर परामर्श और डिजिटल फॉलो-अप चाहने वाले मरीज।",
      "Tele-MANAS: मुफ्त टेली-मेंटल हेल्थ काउंसलिंग चाहने वाला कोई भी व्यक्ति।",
      "Ayushman Arogya Mandir: प्राथमिक स्वास्थ्य और वेलनेस सेवाएं चाहने वाले स्थानीय निवासी।"
    ],
    primaryAction: { label: "Telehealth Link", href: "https://esanjeevani.mohfw.gov.in/" },
    secondaryAction: {
      label: "Mental Health Help",
      href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
    },
    links: [
      { label: "Learn More: eSanjeevani", href: "https://esanjeevani.mohfw.gov.in/" },
      {
        label: "Learn More: Tele-MANAS",
        href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
      },
      { label: "Learn More: Ayushman Arogya Mandir", href: "https://aam.mohfw.gov.in/index.php/" }
    ]
  },
  {
    category: "community",
    pill: "समुदाय",
    title: "वॉलंटियर कनेक्ट",
    text: "फॉर्म और सेवाओं में मदद के लिए पहचाने जाने वाले स्वयंसेवी नेटवर्क और सामुदायिक सहायता चैनलों से जोड़ता है।",
    details: [
      "National Service Scheme (NSS) छात्र स्वयंसेवकों के जरिए आवेदन सहायता और जागरूकता कैंप।",
      "MY Bharat और NYKS युवा स्वयंसेवकों के जरिए आउटरीच और डिजिटल सहायता।",
      "स्थानीय NGO को प्लेटफॉर्म पर जोड़कर हेल्प डेस्क और स्कॉलरशिप सहायता दिवस आयोजित करना।",
      "जॉब फेयर, शिक्षा क्लिनिक और डिजिटल सेवा कैंप के लिए कम्युनिटी नोटिसबोर्ड।"
    ],
    eligibilityTitle: "सहायता कैसे मिलती है",
    eligibility: [
      "छात्र स्कॉलरशिप या फॉर्म-फिलिंग सहायता का अनुरोध कर सकते हैं।",
      "नागरिक नजदीकी कैंप, हेल्प डेस्क और जागरूकता कार्यक्रम देख सकते हैं।",
      "सत्यापित समूह इवेंट, स्वयंसेवी स्लॉट और सहायता पोस्ट प्रकाशित कर सकते हैं।"
    ],
    primaryAction: { label: "Find Volunteers", href: "https://www.mybharat.gov.in/" },
    secondaryAction: { label: "Learn More", href: "https://www.nss.gov.in/" },
    links: [
      { label: "MY Bharat", href: "https://www.mybharat.gov.in/" },
      { label: "NSS", href: "https://www.nss.gov.in/" },
      { label: "NYKS", href: "https://nyks.nic.in/" }
    ]
  }
];

services.kn = [
  {
    category: "education",
    pill: "ಶಿಕ್ಷಣ",
    title: "ವಿದ್ಯಾರ್ಥಿವೇತನ ಹುಡುಕಾಟ",
    text: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳ ಹೆಸರುಗಳು, ಅರ್ಹತೆ ಮತ್ತು ವಿಶ್ವಾಸಾರ್ಹ ಅರ್ಜಿ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ ತಿಳಿಯಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.",
    details: [
      "National Scholarship Portal (NSP): ಕೇಂದ್ರ ಮತ್ತು ರಾಜ್ಯ ವಿದ್ಯಾರ್ಥಿವೇತನ ಯೋಜನೆಗಳನ್ನು ಹುಡುಕಲು ಮತ್ತು ಅರ್ಜಿ ಹಾಕಲು ಒಂದೇ ವೇದಿಕೆ.",
      "CSSS: ಪಿಯುಸಿ ಅಥವಾ 12ನೇ ತರಗತಿ ನಂತರ ಉನ್ನತ ಶಿಕ್ಷಣಕ್ಕೆ ಸೇರುವ ಅರ್ಹ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೆಂಬಲ.",
      "NMMSS: ಆರ್ಥಿಕವಾಗಿ ಹಿಂದುಳಿದ ಮೆಧಾವಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ 9ನೇ ತರಗತಿಯಿಂದ ನೆರವು.",
      "INSPIRE Scholarship: ನೈಸರ್ಗಿಕ ಮತ್ತು ಮೂಲ ವಿಜ್ಞಾನಗಳನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಜನಪ್ರಿಯ ಆಯ್ಕೆ."
    ],
    eligibilityTitle: "ಅರ್ಹತೆ ಸಾರಾಂಶ",
    eligibility: [
      "NSP: ಪ್ರತಿ ಯೋಜನೆಯ ಅರ್ಹತೆ ಸಚಿವಾಲಯ, ಕೋರ್ಸ್, ಆದಾಯ ಮಿತಿ ಮತ್ತು ವರ್ಗದ ಮೇಲೆ ಅವಲಂಬಿತವಾಗಿರುತ್ತದೆ.",
      "CSSS: ಸಾಮಾನ್ಯವಾಗಿ ಕಾಲೇಜು ಅಥವಾ ವಿಶ್ವವಿದ್ಯಾಲಯಕ್ಕೆ ಸೇರುವ ಅರ್ಹ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ.",
      "NMMSS: ನಿರ್ದಿಷ್ಟ ಯೋಜನಾ ಮಾರ್ಗದ ಮೂಲಕ ಆಯ್ಕೆಯಾಗುವ ಆರ್ಥಿಕವಾಗಿ ಹಿಂದುಳಿದ ಮೆಧಾವಿ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ.",
      "INSPIRE: ಸಾಮಾನ್ಯವಾಗಿ ನೈಸರ್ಗಿಕ ಮತ್ತು ಮೂಲ ವಿಜ್ಞಾನಗಳನ್ನು ಓದುವವರಿಗೆ."
    ],
    primaryAction: { label: "Apply", href: "https://scholarships.gov.in/" },
    secondaryAction: { label: "Check Eligibility", href: "https://scholarships.gov.in/" },
    links: [
      { label: "Learn More: NSP", href: "https://scholarships.gov.in/" },
      {
        label: "Learn More: CSSS",
        href: "https://www.education.gov.in/en/central-sector-scheme-scholarship-college-and-university-student-csss-0"
      },
      { label: "Learn More: NMMSS", href: "https://dsel.education.gov.in/en/scheme/nmmss" }
    ]
  },
  {
    category: "governance",
    pill: "ಆಡಳಿತ",
    title: "ಡಾಕ್ಯುಮೆಂಟ್ ಸಹಾಯಕ",
    text: "ಪ್ರಮಾಣಪತ್ರಗಳಿಗಾಗಿ ಅರ್ಜಿ ಹಾಕುವುದು, ದಾಖಲೆಗಳನ್ನು ಅಪ್‌ಲೋಡ್ ಮಾಡುವುದು ಮತ್ತು ಅರ್ಜಿ ಸ್ಥಿತಿಯನ್ನು ಟ್ರ್ಯಾಕ್ ಮಾಡುವುದನ್ನು ಪರಿಚಿತ ಡಿಜಿಟಲ್ ಸಾರ್ವಜನಿಕ ಸಾಧನಗಳೊಂದಿಗೆ ವಿವರಿಸುತ್ತದೆ.",
    details: [
      "DigiLocker ಮೂಲಕ ಅಂಕಪಟ್ಟಿ, ಪ್ರಮಾಣಪತ್ರ ಮತ್ತು ಪರಿಶೀಲಿತ ದಾಖಲೆಗಳ ಬೆಂಬಲ.",
      "UMANG ಮೂಲಕ ಸಾಮಾನ್ಯ ಸರ್ಕಾರಿ ಸೇವೆಗಳ ಮಾರ್ಗದರ್ಶನ.",
      "eDistrict ಶೈಲಿಯ ಕೆಲಸದ ಹರಿವುಗಳ ಮೂಲಕ ಆದಾಯ, ಜಾತಿ, ನಿವಾಸ ಮತ್ತು ಜನನ ಪ್ರಮಾಣಪತ್ರ ಮಾಹಿತಿ.",
      "Aadhaar ಅಪ್‌ಡೇಟ್‌ಗೂ ಮುನ್ನ ಅಗತ್ಯ ದಾಖಲೆಗಳ ಪರಿಶೀಲನಾ ಮಾರ್ಗದರ್ಶನ."
    ],
    eligibilityTitle: "ಸಾಮಾನ್ಯ ಅಗತ್ಯಗಳು",
    eligibility: [
      "ಖಾತೆ ಸೃಷ್ಟಿಸಲು ಅಥವಾ ಲಾಗಿನ್ ಮಾಡಲು ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ಗುರುತು ವಿವರಗಳು.",
      "ಸೇವೆಯ ಪ್ರಕಾರ ಆಧಾರ್, ಅಂಕಪಟ್ಟಿ ಅಥವಾ ವಿಳಾಸದ ಸಾಕ್ಷಿ ಮುಂತಾದ ದಾಖಲೆಗಳು.",
      "ಅರ್ಜಿ ಸಲ್ಲಿಸುವ ಮೊದಲು ವೈಯಕ್ತಿಕ ವಿವರಗಳ ಪರಿಶೀಲನೆ."
    ],
    primaryAction: { label: "Learn More", href: "https://www.umang.gov.in/" },
    secondaryAction: { label: "Check Documents", href: "https://www.digilocker.gov.in/" },
    links: [
      { label: "DigiLocker", href: "https://www.digilocker.gov.in/" },
      { label: "UMANG", href: "https://www.umang.gov.in/" },
      { label: "UIDAI", href: "https://uidai.gov.in/" }
    ]
  },
  {
    category: "health",
    pill: "ಆರೋಗ್ಯ",
    title: "ಆರೋಗ್ಯ ಶಿಬಿರ ಎಚ್ಚರಿಕೆಗಳು",
    text: "ಹೆಸರುಗಳೊಂದಿಗೆ ಆರೋಗ್ಯ ಶಿಬಿರಗಳು, ಟೆಲಿಹೆಲ್ತ್ ಸೇವೆಗಳು ಮತ್ತು ವೆಲ್‌ನೆಸ್ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ತೋರಿಸಿ ಬಳಕೆದಾರರು ತಕ್ಷಣ ಸರಿಯಾದ ಆಯ್ಕೆಯನ್ನು ಆರಿಸಬಹುದು.",
    details: [
      "Ayushman Arogya Mandir ಪ್ರಾಥಮಿಕ ಆರೈಕೆ, ಯೋಗ ಮತ್ತು ಆರೋಗ್ಯ ಜಾಗೃತಿಯ ವೆಲ್‌ನೆಸ್ ಅಧಿವೇಶನಗಳು.",
      "eSanjeevani ಮೂಲಕ ದೂರಸ್ಥ ವೈದ್ಯರ ಸಲಹೆ.",
      "Tele-MANAS 14416 ಅಥವಾ 1800-89-14416 ಮೂಲಕ 24x7 ಮಾನಸಿಕ ಆರೋಗ್ಯ ಟೆಲಿ-ಕೌನ್ಸೆಲಿಂಗ್.",
      "District Mental Health Programme ಹಾಗೂ ಸ್ಥಳೀಯ ವೆಲ್‌ನೆಸ್ ಔಟ್‌ರೀಚ್ ಶಿಬಿರಗಳು."
    ],
    eligibilityTitle: "ಯಾರು ಬಳಸಬಹುದು",
    eligibility: [
      "eSanjeevani: ದೂರಸ್ಥ ವೈದ್ಯಕೀಯ ಸಲಹೆ ಬೇಕಿರುವ ರೋಗಿಗಳು.",
      "Tele-MANAS: ಉಚಿತ ಟೆಲಿ-ಮೆಂಟಲ್ ಹೆಲ್ತ್ ಕೌನ್ಸೆಲಿಂಗ್ ಬೇಕಿರುವ ಯಾರಾದರೂ.",
      "Ayushman Arogya Mandir: ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಮತ್ತು ವೆಲ್‌ನೆಸ್ ಸೇವೆ ಬೇಕಿರುವ ಸ್ಥಳೀಯ ನಿವಾಸಿಗಳು."
    ],
    primaryAction: { label: "Telehealth Link", href: "https://esanjeevani.mohfw.gov.in/" },
    secondaryAction: {
      label: "Mental Health Help",
      href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
    },
    links: [
      { label: "Learn More: eSanjeevani", href: "https://esanjeevani.mohfw.gov.in/" },
      {
        label: "Learn More: Tele-MANAS",
        href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
      },
      { label: "Learn More: Ayushman Arogya Mandir", href: "https://aam.mohfw.gov.in/index.php/" }
    ]
  },
  {
    category: "community",
    pill: "ಸಮುದಾಯ",
    title: "ಸ್ವಯಂಸೇವಕ ಸಂಪರ್ಕ",
    text: "ಫಾರ್ಮ್‌ಗಳು ಮತ್ತು ಸೇವೆಗಳಿಗೆ ಸಹಾಯವಾಗಲು ಪರಿಚಿತ ಸ್ವಯಂಸೇವಕ ಜಾಲಗಳು ಮತ್ತು ಸಮುದಾಯ ಬೆಂಬಲ ಚಾನಲ್‌ಗಳೊಂದಿಗೆ ನಾಗರಿಕರನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ.",
    details: [
      "National Service Scheme (NSS) ವಿದ್ಯಾರ್ಥಿ ಸ್ವಯಂಸೇವಕರ ಮೂಲಕ ಅರ್ಜಿ ಸಹಾಯ ಮತ್ತು ಜಾಗೃತಿ ಶಿಬಿರಗಳು.",
      "MY Bharat ಮತ್ತು NYKS ಯುವ ಸ್ವಯಂಸೇವಕರು ಡಿಜಿಟಲ್ ಜಾಗೃತಿ ಮತ್ತು ನೆರವಿಗಾಗಿ.",
      "ಸ್ಥಳೀಯ NGO ಗಳು ಸಹಾಯ ಕೌಂಟರ್ ಮತ್ತು ವಿದ್ಯಾರ್ಥಿವೇತನ ಬೆಂಬಲ ದಿನಗಳನ್ನು ಆಯೋಜಿಸಲು ಸೇರ್ಪಡೆ.",
      "ಉದ್ಯೋಗ ಮೇಳ, ಶಿಕ್ಷಣ ಕ್ಲಿನಿಕ್ ಮತ್ತು ಡಿಜಿಟಲ್ ಸೇವಾ ಶಿಬಿರಗಳಿಗಾಗಿ ಸಮುದಾಯ ಸೂಚನಾ ಫಲಕ."
    ],
    eligibilityTitle: "ಸಹಾಯ ಹೇಗೆ ಹೊಂದಿಸಲಾಗುತ್ತದೆ",
    eligibility: [
      "ವಿದ್ಯಾರ್ಥಿಗಳು ವಿದ್ಯಾರ್ಥಿವೇತನ ಅಥವಾ ಫಾರ್ಮ್ ಭರ್ತಿ ಸಹಾಯ ಕೇಳಬಹುದು.",
      "ನಾಗರಿಕರು ಹತ್ತಿರದ ಶಿಬಿರಗಳು, ಸಹಾಯ ಕೌಂಟರ್‌ಗಳು ಮತ್ತು ಜಾಗೃತಿ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ನೋಡಬಹುದು.",
      "ಪರಿಶೀಲಿತ ಗುಂಪುಗಳು ಕಾರ್ಯಕ್ರಮಗಳು, ಸ್ವಯಂಸೇವಕ ಅವಕಾಶಗಳು ಮತ್ತು ಬೆಂಬಲ ಪೋಸ್ಟ್‌ಗಳನ್ನು ಪ್ರಕಟಿಸಬಹುದು."
    ],
    primaryAction: { label: "Find Volunteers", href: "https://www.mybharat.gov.in/" },
    secondaryAction: { label: "Learn More", href: "https://www.nss.gov.in/" },
    links: [
      { label: "MY Bharat", href: "https://www.mybharat.gov.in/" },
      { label: "NSS", href: "https://www.nss.gov.in/" },
      { label: "NYKS", href: "https://nyks.nic.in/" }
    ]
  }
];

services.ta = [
  {
    category: "education",
    pill: "கல்வி",
    title: "உதவித்தொகை தேடுபவர்",
    text: "மாணவர்கள் உதவித்தொகை பெயர்கள், தகுதி விதிகள் மற்றும் நம்பகமான விண்ணப்ப வளங்களை ஒரே இடத்தில் அறிய உதவுகிறது.",
    details: [
      "National Scholarship Portal (NSP): மத்திய மற்றும் மாநில உதவித்தொகை திட்டங்களை தேடி விண்ணப்பிக்க ஒரே தளம்.",
      "CSSS: 12ஆம் வகுப்புக்குப் பிறகு உயர்கல்விக்கு செல்லும் தகுதியான மாணவர்களுக்கு ஆதரவு.",
      "NMMSS: பொருளாதார ரீதியாக பலவீனமான திறமையான மாணவர்களுக்கு 9ஆம் வகுப்பிலிருந்து உதவி.",
      "INSPIRE Scholarship: இயற்கை மற்றும் அடிப்படை அறிவியல் படிக்கும் மாணவர்களுக்கு பிரபலமான வாய்ப்பு."
    ],
    eligibilityTitle: "தகுதி சுருக்கம்",
    eligibility: [
      "NSP: ஒவ்வொரு திட்டத்திற்கும் அமைச்சகம், பாடநெறி, வருமானம் மற்றும் பிரிவு அடிப்படையில் தகுதி மாறும்.",
      "CSSS: பொதுவாக கல்லூரி அல்லது பல்கலைக்கழகத்தில் சேரும் தகுதியான மாணவர்களுக்கு.",
      "NMMSS: திட்டத்தின் தேர்வு பாதை மூலம் தேர்ந்தெடுக்கப்படும் திறமையான மற்றும் பொருளாதார ரீதியாக பலவீனமான மாணவர்களுக்கு.",
      "INSPIRE: இயற்கை மற்றும் அடிப்படை அறிவியல் படிப்பவர்களுக்கு பொதுவாக வழங்கப்படும்."
    ],
    primaryAction: { label: "Apply", href: "https://scholarships.gov.in/" },
    secondaryAction: { label: "Check Eligibility", href: "https://scholarships.gov.in/" },
    links: [
      { label: "Learn More: NSP", href: "https://scholarships.gov.in/" },
      {
        label: "Learn More: CSSS",
        href: "https://www.education.gov.in/en/central-sector-scheme-scholarship-college-and-university-student-csss-0"
      },
      { label: "Learn More: NMMSS", href: "https://dsel.education.gov.in/en/scheme/nmmss" }
    ]
  },
  {
    category: "governance",
    pill: "ஆட்சி",
    title: "ஆவண உதவியாளர்",
    text: "சான்றிதழ் விண்ணப்பம், ஆவணப் பதிவேற்றம் மற்றும் விண்ணப்ப நிலை கண்காணிப்பை பரிச்சயமான பொது டிஜிட்டல் கருவிகளுடன் விளக்குகிறது.",
    details: [
      "DigiLocker மூலம் மதிப்பெண் பட்டியல், சான்றிதழ் மற்றும் சரிபார்க்கப்பட்ட ஆவணங்களுக்கான உதவி.",
      "UMANG வழியாக பொதுவாக பயன்படுத்தப்படும் அரசு சேவைகளுக்கான வழிகாட்டுதல்.",
      "eDistrict போன்ற பணிச்சரிவுகள் மூலம் வருமானம், சாதி, இருப்பிடம் மற்றும் பிறப்பு சான்றிதழ் தகவல்.",
      "Aadhaar புதுப்பிப்புக்கு முன் தேவையான ஆவணங்களை சரிபார்க்கும் உதவி."
    ],
    eligibilityTitle: "வழக்கமான தேவைகள்",
    eligibility: [
      "கணக்கு உருவாக்க அல்லது உள்நுழைய மொபைல் எண் மற்றும் அடையாள விவரங்கள்.",
      "சேவையைப் பொறுத்து ஆதார், மதிப்பெண் பட்டியல் அல்லது முகவரி சான்று போன்ற ஆவணங்கள்.",
      "விண்ணப்பத்திற்கு முன் தனிப்பட்ட விவரங்கள் சரிபார்க்கப்பட வேண்டும்."
    ],
    primaryAction: { label: "Learn More", href: "https://www.umang.gov.in/" },
    secondaryAction: { label: "Check Documents", href: "https://www.digilocker.gov.in/" },
    links: [
      { label: "DigiLocker", href: "https://www.digilocker.gov.in/" },
      { label: "UMANG", href: "https://www.umang.gov.in/" },
      { label: "UIDAI", href: "https://uidai.gov.in/" }
    ]
  },
  {
    category: "health",
    pill: "ஆரோக்கியம்",
    title: "சுகாதார முகாம் அறிவிப்புகள்",
    text: "பெயருடன் கூடிய சுகாதார முகாம்கள், தொலைமருத்துவ சேவைகள் மற்றும் நலத்திட்டங்களை காட்டி பயனர்கள் உடனே சரியான தேர்வை செய்ய உதவுகிறது.",
    details: [
      "Ayushman Arogya Mandir மூலம் முதற்கட்ட சுகாதாரம், யோகா மற்றும் ஆரோக்கிய விழிப்புணர்வு அமர்வுகள்.",
      "eSanjeevani வழியாக தொலைதூர மருத்துவர் ஆலோசனை.",
      "Tele-MANAS 14416 அல்லது 1800-89-14416 மூலம் 24x7 மனநல தொலை ஆலோசனை.",
      "District Mental Health Programme மற்றும் உள்ளூர் நல முகாம்கள் மூலம் ஆலோசனை மற்றும் வழிமுறை உதவி."
    ],
    eligibilityTitle: "யார் பயன்படுத்தலாம்",
    eligibility: [
      "eSanjeevani: தொலை மருத்துவர் ஆலோசனை தேவைப்படும் நோயாளிகள்.",
      "Tele-MANAS: இலவச மனநல தொலை ஆலோசனை தேடும் யாரும்.",
      "Ayushman Arogya Mandir: முதற்கட்ட சுகாதாரம் மற்றும் நல சேவைகள் தேடும் உள்ளூர் குடிமக்கள்."
    ],
    primaryAction: { label: "Telehealth Link", href: "https://esanjeevani.mohfw.gov.in/" },
    secondaryAction: {
      label: "Mental Health Help",
      href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
    },
    links: [
      { label: "Learn More: eSanjeevani", href: "https://esanjeevani.mohfw.gov.in/" },
      {
        label: "Learn More: Tele-MANAS",
        href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
      },
      { label: "Learn More: Ayushman Arogya Mandir", href: "https://aam.mohfw.gov.in/index.php/" }
    ]
  },
  {
    category: "community",
    pill: "சமூகம்",
    title: "தன்னார்வ இணைப்பு",
    text: "படிவங்கள் மற்றும் சேவைகளுக்கான உதவிக்காக நம்பகமான தன்னார்வ வலையமைப்புகள் மற்றும் சமூக ஆதரவு சேனல்களுடன் குடிமக்களை இணைக்கிறது.",
    details: [
      "National Service Scheme (NSS) மாணவர் தன்னார்வலர்கள் மூலம் விண்ணப்ப உதவி மற்றும் விழிப்புணர்வு முகாம்கள்.",
      "MY Bharat மற்றும் NYKS இளைஞர் தன்னார்வலர்கள் மூலம் டிஜிட்டல் விழிப்புணர்வு மற்றும் சமூக ஆதரம்.",
      "உள்ளூர் NGO-கள் உதவி மேசைகள் மற்றும் உதவித்தொகை ஆதரவு நாட்களை நடத்த தளத்தில் இணைப்பு.",
      "வேலைவாய்ப்பு முகாம், கல்வி கிளினிக் மற்றும் டிஜிட்டல் சேவை முகாம்களுக்கு சமூக அறிவிப்பு பலகை."
    ],
    eligibilityTitle: "ஆதரவு எப்படி இணைக்கப்படுகிறது",
    eligibility: [
      "மாணவர்கள் உதவித்தொகை அல்லது படிவ நிரப்ப உதவி கோரலாம்.",
      "குடிமக்கள் அருகிலுள்ள முகாம்கள், உதவி மேசைகள் மற்றும் விழிப்புணர்வு நிகழ்ச்சிகளைப் பார்க்கலாம்.",
      "சரிபார்க்கப்பட்ட குழுக்கள் நிகழ்வுகள், தன்னார்வ இடங்கள் மற்றும் ஆதரவு பதிவுகளை வெளியிடலாம்."
    ],
    primaryAction: { label: "Find Volunteers", href: "https://www.mybharat.gov.in/" },
    secondaryAction: { label: "Learn More", href: "https://www.nss.gov.in/" },
    links: [
      { label: "MY Bharat", href: "https://www.mybharat.gov.in/" },
      { label: "NSS", href: "https://www.nss.gov.in/" },
      { label: "NYKS", href: "https://nyks.nic.in/" }
    ]
  }
];

services.te = [
  {
    category: "education",
    pill: "విద్య",
    title: "స్కాలర్‌షిప్ ఫైండర్",
    text: "విద్యార్థులకు స్కాలర్‌షిప్ పేర్లు, అర్హత నియమాలు మరియు నమ్మదగిన దరఖాస్తు వనరులను ఒకే చోట చూపిస్తుంది.",
    details: [
      "National Scholarship Portal (NSP): కేంద్ర మరియు రాష్ట్ర స్కాలర్‌షిప్ పథకాలను తెలుసుకోవడానికి, దరఖాస్తు చేయడానికి ఒకే వేదిక.",
      "CSSS: 12వ తరగతి తర్వాత ఉన్నత విద్యలో చేరే అర్హులైన విద్యార్థులకు సహాయం.",
      "NMMSS: ఆర్థికంగా బలహీనమైన ప్రతిభావంతులైన విద్యార్థులకు 9వ తరగతి నుంచి మద్దతు.",
      "INSPIRE Scholarship: సహజ మరియు ప్రాథమిక శాస్త్రాలను అభ్యసించే విద్యార్థులకు ప్రముఖ అవకాశం."
    ],
    eligibilityTitle: "అర్హత సారాంశం",
    eligibility: [
      "NSP: ప్రతి పథకానికి అర్హత మంత్రిత్వ శాఖ, కోర్సు, ఆదాయ పరిమితి మరియు వర్గంపై ఆధారపడుతుంది.",
      "CSSS: సాధారణంగా కళాశాల లేదా విశ్వవిద్యాలయంలో చేరే అర్హులైన విద్యార్థులకు.",
      "NMMSS: పథకం మార్గం ద్వారా ఎంపికయ్యే ఆర్థికంగా బలహీనమైన ప్రతిభావంతులైన విద్యార్థులకు.",
      "INSPIRE: సాధారణంగా సహజ మరియు ప్రాథమిక శాస్త్రాలు చదివేవారికి."
    ],
    primaryAction: { label: "Apply", href: "https://scholarships.gov.in/" },
    secondaryAction: { label: "Check Eligibility", href: "https://scholarships.gov.in/" },
    links: [
      { label: "Learn More: NSP", href: "https://scholarships.gov.in/" },
      {
        label: "Learn More: CSSS",
        href: "https://www.education.gov.in/en/central-sector-scheme-scholarship-college-and-university-student-csss-0"
      },
      { label: "Learn More: NMMSS", href: "https://dsel.education.gov.in/en/scheme/nmmss" }
    ]
  },
  {
    category: "governance",
    pill: "పాలన",
    title: "డాక్యుమెంట్ అసిస్టెంట్",
    text: "సర్టిఫికెట్లు పొందడం, పత్రాలు అప్‌లోడ్ చేయడం, దరఖాస్తు స్థితి చూడడం వంటి ప్రక్రియలను పరిచయమైన ప్రజా డిజిటల్ సాధనాలతో వివరిస్తుంది.",
    details: [
      "DigiLocker ద్వారా మార్కుల పట్టాలు, సర్టిఫికెట్లు మరియు ధృవీకరించిన పత్రాల సహాయం.",
      "UMANG ద్వారా సాధారణ ప్రభుత్వ సేవల మార్గదర్శనం.",
      "eDistrict తరహా ప్రక్రియల ద్వారా ఆదాయం, కులం, నివాసం మరియు జనన సర్టిఫికెట్ సమాచారం.",
      "Aadhaar అప్‌డేట్‌కు ముందు అవసరమైన పత్రాల తనిఖీ సహాయం."
    ],
    eligibilityTitle: "సాధారణ అవసరాలు",
    eligibility: [
      "ఖాతా సృష్టించడానికి లేదా లాగిన్ కావడానికి మొబైల్ నంబర్ మరియు గుర్తింపు వివరాలు.",
      "సేవను బట్టి ఆధార్, మార్కుల పట్టా లేదా చిరునామా రుజువు వంటి పత్రాలు.",
      "దరఖాస్తు ముందు వ్యక్తిగత వివరాల ధృవీకరణ అవసరం."
    ],
    primaryAction: { label: "Learn More", href: "https://www.umang.gov.in/" },
    secondaryAction: { label: "Check Documents", href: "https://www.digilocker.gov.in/" },
    links: [
      { label: "DigiLocker", href: "https://www.digilocker.gov.in/" },
      { label: "UMANG", href: "https://www.umang.gov.in/" },
      { label: "UIDAI", href: "https://uidai.gov.in/" }
    ]
  },
  {
    category: "health",
    pill: "ఆరోగ్యం",
    title: "హెల్త్ క్యాంప్ అలర్ట్స్",
    text: "పేరు ఉన్న హెల్త్ క్యాంపులు, టెలీహెల్త్ సేవలు మరియు వెల్‌నెస్ ప్రోగ్రామ్‌లను చూపించి వినియోగదారులు వెంటనే సరైన ఎంపిక చేసుకునేలా చేస్తుంది.",
    details: [
      "Ayushman Arogya Mandir ద్వారా ప్రాథమిక ఆరోగ్యం, యోగా మరియు ఆరోగ్య అవగాహన కార్యక్రమాలు.",
      "eSanjeevani ద్వారా దూర వైద్యుల సంప్రదింపు.",
      "Tele-MANAS 14416 లేదా 1800-89-14416 ద్వారా 24x7 మానసిక ఆరోగ్య టెలీ-కౌన్సిలింగ్.",
      "District Mental Health Programme మరియు స్థానిక వెల్‌నెస్ క్యాంపులు."
    ],
    eligibilityTitle: "ఎవరు ఉపయోగించవచ్చు",
    eligibility: [
      "eSanjeevani: దూర వైద్య సంప్రదింపు అవసరమైన రోగులు.",
      "Tele-MANAS: ఉచిత టెలీ-మెంటల్ హెల్త్ కౌన్సిలింగ్ కోరుకునే ఎవరైనా.",
      "Ayushman Arogya Mandir: ప్రాథమిక ఆరోగ్యం మరియు వెల్‌నెస్ సేవలు కోరుకునే స్థానిక నివాసితులు."
    ],
    primaryAction: { label: "Telehealth Link", href: "https://esanjeevani.mohfw.gov.in/" },
    secondaryAction: {
      label: "Mental Health Help",
      href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
    },
    links: [
      { label: "Learn More: eSanjeevani", href: "https://esanjeevani.mohfw.gov.in/" },
      {
        label: "Learn More: Tele-MANAS",
        href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
      },
      { label: "Learn More: Ayushman Arogya Mandir", href: "https://aam.mohfw.gov.in/index.php/" }
    ]
  },
  {
    category: "community",
    pill: "సమాజం",
    title: "వాలంటీర్ కనెక్ట్",
    text: "ఫారమ్‌లు మరియు సేవలకు సహాయం కోసం గుర్తింపు పొందిన వాలంటీర్ నెట్‌వర్క్‌లు మరియు కమ్యూనిటీ సపోర్ట్ ఛానెల్‌లతో పౌరులను కలుపుతుంది.",
    details: [
      "National Service Scheme (NSS) విద్యార్థి వాలంటీర్ల ద్వారా దరఖాస్తు సహాయం మరియు అవగాహన శిబిరాలు.",
      "MY Bharat మరియు NYKS యువ వాలంటీర్ల ద్వారా డిజిటల్ అవగాహన మరియు సమాజ సహాయం.",
      "స్థానిక NGOలు హెల్ప్‌డెస్క్‌లు మరియు స్కాలర్‌షిప్ సపోర్ట్ డేలు నిర్వహించడానికి ఆన్‌బోర్డింగ్.",
      "జాబ్ ఫెయిర్లు, ఎడ్యుకేషన్ క్లినిక్లు మరియు డిజిటల్ సేవా క్యాంపుల కోసం కమ్యూనిటీ నోటిస్‌బోర్డ్."
    ],
    eligibilityTitle: "సహాయం ఎలా సరిపోల్చబడుతుంది",
    eligibility: [
      "విద్యార్థులు స్కాలర్‌షిప్ లేదా ఫారమ్ నింపే సహాయం కోరవచ్చు.",
      "పౌరులు సమీపంలోని క్యాంపులు, హెల్ప్‌డెస్క్‌లు మరియు అవగాహన కార్యక్రమాలు చూడవచ్చు.",
      "ధృవీకరించిన గుంపులు ఈవెంట్లు, వాలంటీర్ స్లాట్లు మరియు సపోర్ట్ పోస్టులు ప్రచురించవచ్చు."
    ],
    primaryAction: { label: "Find Volunteers", href: "https://www.mybharat.gov.in/" },
    secondaryAction: { label: "Learn More", href: "https://www.nss.gov.in/" },
    links: [
      { label: "MY Bharat", href: "https://www.mybharat.gov.in/" },
      { label: "NSS", href: "https://www.nss.gov.in/" },
      { label: "NYKS", href: "https://nyks.nic.in/" }
    ]
  }
];

services.mr = [
  {
    category: "education",
    pill: "शिक्षण",
    title: "शिष्यवृत्ती शोधक",
    text: "विद्यार्थ्यांना शिष्यवृत्तींची नावे, पात्रता नियम आणि विश्वासार्ह अर्ज संसाधने एकाच ठिकाणी समजून घेण्यास मदत करते.",
    details: [
      "National Scholarship Portal (NSP): केंद्रीय आणि राज्य शिष्यवृत्ती योजना शोधण्यासाठी आणि अर्ज करण्यासाठी एकच व्यासपीठ.",
      "CSSS: 12 वी नंतर उच्च शिक्षणासाठी प्रवेश घेणाऱ्या पात्र विद्यार्थ्यांसाठी मदत.",
      "NMMSS: आर्थिकदृष्ट्या दुर्बल आणि गुणवंत विद्यार्थ्यांसाठी 9 वीपासून मदत.",
      "INSPIRE Scholarship: नैसर्गिक आणि मूलभूत विज्ञान शिकणाऱ्या विद्यार्थ्यांसाठी लोकप्रिय पर्याय."
    ],
    eligibilityTitle: "पात्रता सारांश",
    eligibility: [
      "NSP: प्रत्येक योजनेची पात्रता मंत्रालय, अभ्यासक्रम, उत्पन्न मर्यादा आणि गटानुसार बदलते.",
      "CSSS: साधारणपणे महाविद्यालय किंवा विद्यापीठात प्रवेश घेणाऱ्या पात्र विद्यार्थ्यांसाठी.",
      "NMMSS: योजनेच्या निवड प्रक्रियेतून निवडल्या जाणाऱ्या गुणवंत व आर्थिकदृष्ट्या दुर्बल विद्यार्थ्यांसाठी.",
      "INSPIRE: सामान्यतः नैसर्गिक आणि मूलभूत विज्ञान शिकणाऱ्यांसाठी."
    ],
    primaryAction: { label: "Apply", href: "https://scholarships.gov.in/" },
    secondaryAction: { label: "Check Eligibility", href: "https://scholarships.gov.in/" },
    links: [
      { label: "Learn More: NSP", href: "https://scholarships.gov.in/" },
      {
        label: "Learn More: CSSS",
        href: "https://www.education.gov.in/en/central-sector-scheme-scholarship-college-and-university-student-csss-0"
      },
      { label: "Learn More: NMMSS", href: "https://dsel.education.gov.in/en/scheme/nmmss" }
    ]
  },
  {
    category: "governance",
    pill: "शासन",
    title: "दस्तऐवज सहाय्यक",
    text: "प्रमाणपत्र अर्ज, कागदपत्र अपलोड आणि अर्ज स्थिती तपासणे यासारख्या प्रक्रिया परिचित सार्वजनिक डिजिटल साधनांसह समजावतो.",
    details: [
      "DigiLocker द्वारे मार्कशीट, प्रमाणपत्रे आणि पडताळलेले दस्तऐवज यासाठी मदत.",
      "UMANG द्वारे सामान्य सरकारी सेवांसाठी मार्गदर्शन.",
      "eDistrict प्रकारच्या कार्यपद्धतीद्वारे उत्पन्न, जात, रहिवास आणि जन्म प्रमाणपत्र माहिती.",
      "Aadhaar अद्यतनापूर्वी आवश्यक कागदपत्रांची तपासणी."
    ],
    eligibilityTitle: "सामान्य आवश्यकता",
    eligibility: [
      "खाते तयार करण्यासाठी किंवा लॉगिनसाठी मोबाईल क्रमांक आणि ओळख तपशील.",
      "सेवेप्रमाणे आधार, मार्कशीट किंवा पत्त्याचा पुरावा यांसारखी कागदपत्रे.",
      "अर्जापूर्वी वैयक्तिक तपशीलांची पडताळणी."
    ],
    primaryAction: { label: "Learn More", href: "https://www.umang.gov.in/" },
    secondaryAction: { label: "Check Documents", href: "https://www.digilocker.gov.in/" },
    links: [
      { label: "DigiLocker", href: "https://www.digilocker.gov.in/" },
      { label: "UMANG", href: "https://www.umang.gov.in/" },
      { label: "UIDAI", href: "https://uidai.gov.in/" }
    ]
  },
  {
    category: "health",
    pill: "आरोग्य",
    title: "आरोग्य शिबिर सूचना",
    text: "नावांसह आरोग्य शिबिरे, टेलीहेल्थ सेवा आणि वेलनेस कार्यक्रम दाखवते, त्यामुळे वापरकर्ते लगेच योग्य पर्याय निवडू शकतात.",
    details: [
      "Ayushman Arogya Mandir द्वारे प्राथमिक आरोग्य, योग आणि आरोग्य जागरूकता सत्रे.",
      "eSanjeevani द्वारे दूरस्थ डॉक्टर सल्ला.",
      "Tele-MANAS 14416 किंवा 1800-89-14416 द्वारे 24x7 मानसिक आरोग्य टेली-काऊन्सेलिंग.",
      "District Mental Health Programme आणि स्थानिक वेलनेस शिबिरे."
    ],
    eligibilityTitle: "कोण वापरू शकतो",
    eligibility: [
      "eSanjeevani: दूरस्थ डॉक्टर सल्ला हवे असलेले रुग्ण.",
      "Tele-MANAS: मोफत टेली-मेंटल हेल्थ काऊन्सेलिंग हवे असलेला कुणीही.",
      "Ayushman Arogya Mandir: प्राथमिक आरोग्य आणि वेलनेस सेवा हवे असलेले स्थानिक नागरिक."
    ],
    primaryAction: { label: "Telehealth Link", href: "https://esanjeevani.mohfw.gov.in/" },
    secondaryAction: {
      label: "Mental Health Help",
      href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
    },
    links: [
      { label: "Learn More: eSanjeevani", href: "https://esanjeevani.mohfw.gov.in/" },
      {
        label: "Learn More: Tele-MANAS",
        href: "https://www.dghs.mohfw.gov.in/national-mental-health-programme.php"
      },
      { label: "Learn More: Ayushman Arogya Mandir", href: "https://aam.mohfw.gov.in/index.php/" }
    ]
  },
  {
    category: "community",
    pill: "समुदाय",
    title: "स्वयंसेवक जोडणी",
    text: "फॉर्म आणि सेवांसाठी मदत मिळावी म्हणून ओळखीच्या स्वयंसेवक जाळ्यांशी आणि समुदाय मदत चॅनेल्सशी नागरिकांना जोडते.",
    details: [
      "National Service Scheme (NSS) विद्यार्थी स्वयंसेवकांद्वारे अर्ज मदत आणि जनजागृती शिबिरे.",
      "MY Bharat आणि NYKS युवक स्वयंसेवकांद्वारे डिजिटल जागरूकता आणि स्थानिक मदत.",
      "स्थानिक NGO साठी हेल्पडेस्क आणि शिष्यवृत्ती सहाय्य दिवस आयोजित करण्यासाठी ऑनबोर्डिंग.",
      "नोकरी मेळावे, शिक्षण क्लिनिक आणि डिजिटल सेवा शिबिरांसाठी समुदाय सूचना फलक."
    ],
    eligibilityTitle: "मदत कशी जुळवली जाते",
    eligibility: [
      "विद्यार्थी शिष्यवृत्ती किंवा फॉर्म भरताना मदत मागू शकतात.",
      "नागरिक जवळची शिबिरे, हेल्पडेस्क आणि जनजागृती उपक्रम पाहू शकतात.",
      "पडताळलेले गट कार्यक्रम, स्वयंसेवक स्लॉट आणि मदत पोस्ट प्रकाशित करू शकतात."
    ],
    primaryAction: { label: "Find Volunteers", href: "https://www.mybharat.gov.in/" },
    secondaryAction: { label: "Learn More", href: "https://www.nss.gov.in/" },
    links: [
      { label: "MY Bharat", href: "https://www.mybharat.gov.in/" },
      { label: "NSS", href: "https://www.nss.gov.in/" },
      { label: "NYKS", href: "https://nyks.nic.in/" }
    ]
  }
];

export const learningModules = {
  en: [
    {
      title: "Safe Digital Payments",
      text: "Learn how to use UPI, verify payment requests, and avoid common scams."
    },
    {
      title: "How to Fill Online Forms",
      text: "Practice document upload, field validation, and secure submission in a guided flow."
    },
    {
      title: "Using Public Service Portals",
      text: "Understand service categories, IDs, verification, and application tracking in simple language."
    }
  ],
  hi: [
    {
      title: "सुरक्षित डिजिटल भुगतान",
      text: "UPI का सही उपयोग, भुगतान सत्यापन और धोखाधड़ी से बचाव सीखें।"
    },
    {
      title: "ऑनलाइन फॉर्म कैसे भरें",
      text: "दस्तावेज अपलोड, सही जानकारी भरना और सुरक्षित सबमिशन की प्रक्रिया समझें।"
    },
    {
      title: "पब्लिक सर्विस पोर्टल का उपयोग",
      text: "सेवा श्रेणियां, पहचान सत्यापन और आवेदन ट्रैकिंग को आसान भाषा में समझें।"
    }
  ],
  kn: [
    {
      title: "ಸುರಕ್ಷಿತ ಡಿಜಿಟಲ್ ಪಾವತಿಗಳು",
      text: "UPI ಬಳಸುವುದು, ಪಾವತಿ ವಿನಂತಿ ಪರಿಶೀಲನೆ ಮಾಡುವುದು ಮತ್ತು ಸಾಮಾನ್ಯ ಮೋಸಗಳನ್ನು ತಪ್ಪಿಸುವುದು ಕಲಿಯಿರಿ."
    },
    {
      title: "ಆನ್‌ಲೈನ್ ಫಾರ್ಮ್ ಹೇಗೆ ಭರ್ತಿ ಮಾಡುವುದು",
      text: "ದಾಖಲೆ ಅಪ್‌ಲೋಡ್, ಮಾಹಿತಿ ಪರಿಶೀಲನೆ ಮತ್ತು ಸುರಕ್ಷಿತ ಸಲ್ಲಿಕೆ ವಿಧಾನವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ."
    },
    {
      title: "ಸಾರ್ವಜನಿಕ ಸೇವಾ ಪೋರ್ಟಲ್‌ಗಳ ಬಳಕೆ",
      text: "ಸೇವಾ ವಿಭಾಗಗಳು, ಗುರುತು ಪರಿಶೀಲನೆ ಮತ್ತು ಅರ್ಜಿ ಟ್ರ್ಯಾಕಿಂಗ್ ಅನ್ನು ಸರಳ ಭಾಷೆಯಲ್ಲಿ ತಿಳಿಯಿರಿ."
    }
  ],
  ta: [
    {
      title: "பாதுகாப்பான டிஜிட்டல் கட்டணம்",
      text: "UPI பயன்படுத்துவது, பணப்பரிவர்த்தனையை சரிபார்ப்பது மற்றும் பொதுவான மோசடிகளைத் தவிர்ப்பது கற்றுக்கொள்ளுங்கள்."
    },
    {
      title: "ஆன்லைன் படிவம் எப்படி நிரப்புவது",
      text: "ஆவணப் பதிவேற்றம், தகவல் சரிபார்ப்பு மற்றும் பாதுகாப்பான சமர்ப்பிப்பை பயிற்சி செய்யுங்கள்."
    },
    {
      title: "பொது சேவை தளங்களை பயன்படுத்துவது",
      text: "சேவை பிரிவுகள், அடையாள சரிபார்ப்பு மற்றும் விண்ணப்ப நிலை கண்காணிப்பை எளிய மொழியில் அறியுங்கள்."
    }
  ],
  te: [
    {
      title: "సురక్షిత డిజిటల్ చెల్లింపులు",
      text: "UPI ఎలా ఉపయోగించాలి, చెల్లింపును ఎలా ధృవీకరించాలి మరియు సాధారణ మోసాలను ఎలా నివారించాలి తెలుసుకోండి."
    },
    {
      title: "ఆన్‌లైన్ ఫారమ్ ఎలా నింపాలి",
      text: "పత్రాల అప్‌లోడ్, సరైన వివరాల నమోదు మరియు సురక్షిత సమర్పణ ప్రక్రియను అభ్యసించండి."
    },
    {
      title: "ప్రజా సేవా పోర్టల్‌ల వినియోగం",
      text: "సేవా వర్గాలు, గుర్తింపు ధృవీకరణ మరియు దరఖాస్తు ట్రాకింగ్‌ను సరళమైన భాషలో అర్థం చేసుకోండి."
    }
  ],
  mr: [
    {
      title: "सुरक्षित डिजिटल पेमेंट",
      text: "UPI वापरणे, पेमेंट विनंत्या पडताळणे आणि सामान्य फसवणूक टाळणे शिका."
    },
    {
      title: "ऑनलाइन फॉर्म कसा भरावा",
      text: "दस्तऐवज अपलोड, माहिती पडताळणी आणि सुरक्षित सबमिशनची प्रक्रिया शिका."
    },
    {
      title: "सार्वजनिक सेवा पोर्टल्सचा वापर",
      text: "सेवा श्रेणी, ओळख पडताळणी आणि अर्ज ट्रॅकिंग सोप्या भाषेत समजून घ्या."
    }
  ]
};

export const impactItems = {
  en: [
    {
      title: "Improves accessibility",
      text: "Makes digital services usable for elderly users and persons with disabilities."
    },
    {
      title: "Increases awareness",
      text: "Brings schemes, jobs, and local programs together in one easy-to-understand place."
    },
    {
      title: "Builds independence",
      text: "Reduces dependence on intermediaries by helping users complete tasks themselves."
    }
  ],
  hi: [
    {
      title: "सुलभता बढ़ाता है",
      text: "बुजुर्गों और दिव्यांग उपयोगकर्ताओं के लिए डिजिटल सेवाओं को उपयोगी बनाता है।"
    },
    {
      title: "जागरूकता बढ़ाता है",
      text: "योजनाएं, नौकरियां और स्थानीय कार्यक्रम एक जगह सरल रूप में लाता है।"
    },
    {
      title: "स्वतंत्रता बढ़ाता है",
      text: "उपयोगकर्ताओं को स्वयं कार्य पूरा करने में सक्षम बनाकर बिचौलियों पर निर्भरता घटाता है।"
    }
  ],
  kn: [
    {
      title: "ಪ್ರವೇಶ ಸುಧಾರಿಸುತ್ತದೆ",
      text: "ಹಿರಿಯರು ಮತ್ತು ವಿಶೇಷ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿರುವ ಬಳಕೆದಾರರಿಗೆ ಡಿಜಿಟಲ್ ಸೇವೆಗಳನ್ನು ಸುಲಭವಾಗಿಸುತ್ತದೆ."
    },
    {
      title: "ಜಾಗೃತಿ ಹೆಚ್ಚಿಸುತ್ತದೆ",
      text: "ಯೋಜನೆಗಳು, ಉದ್ಯೋಗಗಳು ಮತ್ತು ಸ್ಥಳೀಯ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಒಂದೇ ಸುಲಭ ಸ್ಥಳದಲ್ಲಿ ತರುತ್ತದೆ."
    },
    {
      title: "ಸ್ವಾವಲಂಬನೆ ಬೆಳೆಸುತ್ತದೆ",
      text: "ಬಳಕೆದಾರರು ತಮ್ಮದೇ ಕಾರ್ಯಗಳನ್ನು ಪೂರ್ಣಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುವ ಮೂಲಕ ಮಧ್ಯವರ್ತಿಗಳ ಮೇಲಿನ ಅವಲಂಬನೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ."
    }
  ],
  ta: [
    {
      title: "அணுகலை மேம்படுத்துகிறது",
      text: "முதியவர்கள் மற்றும் மாற்றுத் திறனாளிகளுக்கு டிஜிட்டல் சேவைகளை எளிதாக பயன்படுத்த உதவுகிறது."
    },
    {
      title: "விழிப்புணர்வை அதிகரிக்கிறது",
      text: "திட்டங்கள், வேலை வாய்ப்புகள் மற்றும் உள்ளூர் நிகழ்ச்சிகளை ஒரே எளிய இடத்தில் கொண்டுவருகிறது."
    },
    {
      title: "சுயநிலையை உருவாக்குகிறது",
      text: "பயனர்கள் தாங்களே செயல்களை முடிக்க உதவி செய்து நடுநிலையாளர்களின் மீதான சார்பை குறைக்கிறது."
    }
  ],
  te: [
    {
      title: "అందుబాటును మెరుగుపరుస్తుంది",
      text: "వృద్ధులు మరియు దివ్యాంగులకు డిజిటల్ సేవలను సులభంగా ఉపయోగించేలా చేస్తుంది."
    },
    {
      title: "అవగాహన పెంచుతుంది",
      text: "పథకాలు, ఉద్యోగాలు మరియు స్థానిక కార్యక్రమాలను ఒకే సులభమైన వేదికపై అందిస్తుంది."
    },
    {
      title: "స్వతంత్రతను పెంచుతుంది",
      text: "వినియోగదారులు పనులను తాము పూర్తిచేసుకునేలా సహాయం చేసి మధ్యవర్తులపై ఆధారాన్ని తగ్గిస్తుంది."
    }
  ],
  mr: [
    {
      title: "प्रवेश सुलभ करतो",
      text: "ज्येष्ठ आणि दिव्यांग वापरकर्त्यांसाठी डिजिटल सेवा वापरणे सोपे करतो."
    },
    {
      title: "जागरूकता वाढवतो",
      text: "योजना, नोकऱ्या आणि स्थानिक कार्यक्रम एकाच सोप्या ठिकाणी आणतो."
    },
    {
      title: "स्वावलंबन वाढवतो",
      text: "वापरकर्त्यांना कामे स्वतः पूर्ण करता येतील अशी मदत करून मध्यस्थांवरील अवलंबित्व कमी करतो."
    }
  ]
};

export const notices = {
  en: [
    {
      tag: "Nearby NGO",
      title: "National Scholarship Portal help desk this Saturday",
      text: "Volunteers will help students shortlist schemes and complete scholarship applications faster.",
      details: [
        "Focused support for NSP, CSSS, and NMMSS applications.",
        "Document checklist review for marksheets, income proof, and bank details.",
        "Priority desk for first-generation college applicants."
      ]
    },
    {
      tag: "Health Alert",
      title: "Ayushman Arogya Mandir camp and eSanjeevani help session",
      text: "Residents can attend a named local health drive and get help accessing telehealth support.",
      details: [
        "Free BP, diabetes, and wellness screening camp registration.",
        "eSanjeevani onboarding for remote doctor consultation.",
        "Tele-MANAS awareness support for mental health counselling access."
      ]
    }
  ],
  hi: [
    {
      tag: "नजदीकी NGO",
      title: "इस शनिवार National Scholarship Portal हेल्प डेस्क",
      text: "स्वयंसेवक छात्रों को सही स्कीम चुनने और स्कॉलरशिप आवेदन पूरा करने में मदद करेंगे।",
      details: [
        "NSP, CSSS और NMMSS आवेदन पर केंद्रित सहायता।",
        "मार्कशीट, आय प्रमाण और बैंक विवरण की दस्तावेज़ चेकलिस्ट समीक्षा।",
        "पहली पीढ़ी के कॉलेज आवेदकों के लिए प्राथमिकता सहायता डेस्क।"
      ]
    },
    {
      tag: "हेल्थ अलर्ट",
      title: "Ayushman Arogya Mandir कैंप और eSanjeevani सहायता सत्र",
      text: "निवासी नाम सहित स्थानीय हेल्थ ड्राइव में शामिल होकर टेलीहेल्थ सहायता पा सकते हैं।",
      details: [
        "मुफ्त BP, डायबिटीज़ और वेलनेस स्क्रीनिंग कैंप पंजीकरण।",
        "eSanjeevani पर दूरस्थ डॉक्टर परामर्श के लिए ऑनबोर्डिंग सहायता।",
        "Tele-MANAS मानसिक स्वास्थ्य काउंसलिंग सेवा की जानकारी।"
      ]
    }
  ],
  kn: [
    {
      tag: "ಹತ್ತಿರದ NGO",
      title: "ಈ ಶನಿವಾರ National Scholarship Portal ಸಹಾಯ ಕೇಂದ್ರ",
      text: "ಸ್ವಯಂಸೇವಕರು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸರಿಯಾದ ಯೋಜನೆ ಆಯ್ಕೆಮಾಡಿ ವಿದ್ಯಾರ್ಥಿವೇತನ ಅರ್ಜಿಯನ್ನು ಬೇಗ ಪೂರ್ಣಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತಾರೆ.",
      details: [
        "NSP, CSSS ಮತ್ತು NMMSS ಅರ್ಜಿಗಳಿಗಾಗಿ ವಿಶೇಷ ನೆರವು.",
        "ಅಂಕಪಟ್ಟಿ, ಆದಾಯ ಸಾಕ್ಷ್ಯ ಮತ್ತು ಬ್ಯಾಂಕ್ ವಿವರಗಳ ದಾಖಲಾತಿ ಪರಿಶೀಲನೆ.",
        "ಮೊದಲ ತಲೆಮಾರಿನ ಕಾಲೇಜು ಅರ್ಜಿದಾರರಿಗೆ ಆದ್ಯತೆ ಡೆಸ್ಕ್."
      ]
    },
    {
      tag: "ಆರೋಗ್ಯ ಎಚ್ಚರಿಕೆ",
      title: "Ayushman Arogya Mandir ಶಿಬಿರ ಮತ್ತು eSanjeevani ಸಹಾಯ ಅಧಿವೇಶನ",
      text: "ನಿವಾಸಿಗಳು ಸ್ಥಳೀಯ ಆರೋಗ್ಯ ಶಿಬಿರಕ್ಕೆ ಹಾಜರಾಗಿ ಟೆಲಿಹೆಲ್ತ್ ಸಹಾಯವನ್ನು ಪಡೆಯಬಹುದು.",
      details: [
        "ಉಚಿತ BP, ಡಯಾಬಿಟೀಸ್ ಮತ್ತು ವೆಲ್‌ನೆಸ್ ತಪಾಸಣೆ ನೋಂದಣಿ.",
        "eSanjeevani ದೂರ ವೈದ್ಯರ ಸಲಹೆಗೆ ಆನ್‌ಬೋರ್ಡಿಂಗ್ ಸಹಾಯ.",
        "Tele-MANAS ಮಾನಸಿಕ ಆರೋಗ್ಯ ಕೌನ್ಸೆಲಿಂಗ್ ಪ್ರವೇಶ ಜಾಗೃತಿ."
      ]
    }
  ],
  ta: [
    {
      tag: "அருகிலுள்ள NGO",
      title: "இந்த சனிக்கிழமை National Scholarship Portal உதவி மையம்",
      text: "தன்னார்வலர்கள் மாணவர்களுக்கு சரியான திட்டங்களைத் தேர்ந்தெடுத்து உதவித்தொகை விண்ணப்பத்தை விரைவாக முடிக்க உதவுவார்கள்.",
      details: [
        "NSP, CSSS மற்றும் NMMSS விண்ணப்பங்களுக்கு சிறப்பு ஆதரம்.",
        "மதிப்பெண் பட்டியல், வருமானச் சான்று மற்றும் வங்கி விவரங்களுக்கான ஆவண சரிபார்ப்பு.",
        "முதல் தலைமுறை கல்லூரி விண்ணப்பதாரர்களுக்கு முன்னுரிமை மேசை."
      ]
    },
    {
      tag: "சுகாதார அறிவிப்பு",
      title: "Ayushman Arogya Mandir முகாம் மற்றும் eSanjeevani உதவி அமர்வு",
      text: "குடிமக்கள் பெயருடன் கூடிய உள்ளூர் சுகாதார முகாமில் கலந்து கொண்டு தொலைமருத்துவ உதவியைப் பெறலாம்.",
      details: [
        "இலவச BP, சர்க்கரை மற்றும் நலத் திரைச்சோதனை பதிவு.",
        "eSanjeevani தொலை மருத்துவர் சேவைக்கான தொடக்க உதவி.",
        "Tele-MANAS மனநல ஆலோசனை அணுகலுக்கான விழிப்புணர்வு."
      ]
    }
  ],
  te: [
    {
      tag: "సమీప NGO",
      title: "ఈ శనివారం National Scholarship Portal హెల్ప్ డెస్క్",
      text: "వాలంటీర్లు విద్యార్థులకు సరైన పథకాలను ఎంపిక చేసి స్కాలర్‌షిప్ దరఖాస్తును త్వరగా పూర్తిచేయడంలో సహాయపడతారు.",
      details: [
        "NSP, CSSS మరియు NMMSS దరఖాస్తులపై కేంద్రీకృత సహాయం.",
        "మార్కుల పట్టాలు, ఆదాయ రుజువు మరియు బ్యాంక్ వివరాల పత్రాల తనిఖీ.",
        "మొదటి తరం కళాశాల అభ్యర్థులకు ప్రాధాన్య సహాయక కేంద్రం."
      ]
    },
    {
      tag: "హెల్త్ అలర్ట్",
      title: "Ayushman Arogya Mandir క్యాంప్ మరియు eSanjeevani సహాయ సెషన్",
      text: "నివాసితులు పేరుతో ఉన్న స్థానిక ఆరోగ్య కార్యక్రమానికి హాజరై టెలీహెల్త్ సహాయం పొందవచ్చు.",
      details: [
        "ఉచిత BP, షుగర్ మరియు వెల్‌నెస్ స్క్రీనింగ్ నమోదు.",
        "eSanjeevani ద్వారా దూర వైద్య సేవకు ఆన్‌బోర్డింగ్ సహాయం.",
        "Tele-MANAS మానసిక ఆరోగ్య కౌన్సిలింగ్ యాక్సెస్ అవగాహన."
      ]
    }
  ],
  mr: [
    {
      tag: "जवळचे NGO",
      title: "या शनिवारी National Scholarship Portal हेल्प डेस्क",
      text: "स्वयंसेवक विद्यार्थ्यांना योग्य योजना निवडण्यास आणि शिष्यवृत्ती अर्ज लवकर पूर्ण करण्यास मदत करतील.",
      details: [
        "NSP, CSSS आणि NMMSS अर्जांसाठी केंद्रित मदत.",
        "मार्कशीट, उत्पन्न पुरावा आणि बँक तपशील यांची दस्तऐवज तपासणी.",
        "पहिल्या पिढीतील महाविद्यालयीन अर्जदारांसाठी प्राधान्य डेस्क."
      ]
    },
    {
      tag: "आरोग्य सूचना",
      title: "Ayushman Arogya Mandir शिबिर आणि eSanjeevani सहाय्य सत्र",
      text: "नागरिक स्थानिक आरोग्य मोहिमेत सहभागी होऊन टेलीहेल्थ मदत मिळवू शकतात.",
      details: [
        "मोफत BP, डायबेटीस आणि वेलनेस तपासणी नोंदणी.",
        "eSanjeevani दूरस्थ डॉक्टर सल्ल्यासाठी ऑनबोर्डिंग मदत.",
        "Tele-MANAS मानसिक आरोग्य समुपदेशन सेवेसाठी जागरूकता मदत."
      ]
    }
  ]
};

const officialServiceEnhancements = {
  education: {
    verifiedOn: "April 28, 2026",
    latestUpdates: [
      {
        date: "AY 2025-26",
        text: "The National Scholarship Portal is currently serving Academic Year 2025-26 scholarship services.",
        href: "https://scholarships.gov.in/"
      },
      {
        date: "Current NSP notice",
        text: "NSP says One Time Registration (OTR) is open and OTR is required for scholarship applications from AY 2024-25 onward.",
        href: "https://scholarships.gov.in/"
      },
      {
        date: "Last portal update: October 2025",
        text: "The NSP homepage notes that the portal was last updated in October 2025.",
        href: "https://scholarships.gov.in/"
      }
    ]
  },
  governance: {
    verifiedOn: "April 28, 2026",
    schemeLinks: [
      {
        label: "PM-KISAN",
        href: "https://pmkisan.gov.in/"
      },
      {
        label: "PMAY Urban",
        href: "https://pmaymis.gov.in/"
      },
      {
        label: "eShram",
        href: "https://eshram.gov.in/"
      },
      {
        label: "PM Surya Ghar",
        href: "https://pmsuryaghar.gov.in/"
      },
      {
        label: "DigiLocker",
        href: "https://www.digilocker.gov.in/"
      },
      {
        label: "UMANG",
        href: "https://www.umang.gov.in/"
      }
    ],
    latestUpdates: [
      {
        date: "24-Apr-2026",
        text: "PM-KISAN portal pages were updated in April 2026 and continue to provide beneficiary and farmer self-service access.",
        href: "https://fw.pmkisan.gov.in/"
      },
      {
        date: "20-Apr-2026",
        text: "The eShram helpdesk page lists multilingual support and shows an April 20, 2026 page update.",
        href: "https://eshram.gov.in/helpdesk"
      },
      {
        date: "Latest PMAY notice",
        text: "The PMAY(U) homepage latest news says NIC developed a new module to capture beneficiary payments through multiple instalments.",
        href: "https://pmaymis.gov.in/"
      }
    ]
  },
  health: {
    verifiedOn: "April 28, 2026",
    latestUpdates: [
      {
        date: "01-Apr-2025",
        text: "MoHFW said Tele-MANAS had 53 cells across 36 States and UTs, with services available in 20 languages.",
        href: "https://www.mohfw.gov.in/?q=pressrelease-242"
      },
      {
        date: "07-Feb-2025",
        text: "MoHFW reported over 18.27 lakh Tele-MANAS calls handled and noted app and video-consultation expansion.",
        href: "https://www.mohfw.gov.in/?q=%2Fpress-info%2F8322%C2%A0"
      },
      {
        date: "Current official portal",
        text: "eSanjeevani remains the official telemedicine portal for remote consultations and patient access.",
        href: "https://esanjeevani.mohfw.gov.in/"
      }
    ]
  },
  community: {
    verifiedOn: "April 28, 2026",
    latestUpdates: [
      {
        date: "27-Apr-2026",
        text: "The National Service Scheme website was last updated on April 27, 2026 and highlights the December 2025 newsletter in latest news.",
        href: "https://nss.gov.in/"
      },
      {
        date: "April 2026",
        text: "MY Bharat pages updated in April 2026 show active youth programs, volunteer opportunities, and support resources.",
        href: "https://mybharat.gov.in/"
      },
      {
        date: "Current homepage feature",
        text: "MY Bharat is currently highlighting that CV Builder functionality is live alongside experiential learning and volunteer programs.",
        href: "https://mybharat.gov.in/"
      }
    ]
  }
};

for (const locale of Object.keys(services)) {
  services[locale] = services[locale].map((service) => {
    const enhancement = officialServiceEnhancements[service.category];

    if (!enhancement) {
      return service;
    }

    return {
      ...service,
      verifiedOn: enhancement.verifiedOn,
      latestUpdates: enhancement.latestUpdates,
      schemeLinks:
        service.category === "governance"
          ? officialServiceEnhancements.governance.schemeLinks
          : service.schemeLinks
    };
  });
}
