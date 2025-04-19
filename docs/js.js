// Translation Data
const translations = {
  en: {
    "nav.home": "Home",
    "nav.careers": "Careers",
    "nav.contact": "Contact",
    "language.english": "English",
    "language.urdu": "اردو",
    "hero.title":
      "Your Trusted Partner for Smart Homes, Livestock, Water & Auto Parts",
    "services.smart_home.title": "Smart Home Solutions",
    "services.smart_home.description":
      "Cutting-edge smart home automation systems that enhance security, energy efficiency, and comfort in your home and business.",
    "services.livestock.title": "Livestock & Farming",
    "services.livestock.description":
      "Premium livestock services for farmers and traders, including livestock sales, animal care, and modern management solutions.",
    "services.water.title": "Drinking Water Solutions",
    "services.water.description":
      "Clean, safe, and reliable drinking water solutions, including water purification systems and bottled water supply.",
    "services.auto_parts.title": "Auto Spare Parts",
    "services.auto_parts.description":
      "High-quality automotive spare parts for all vehicle types, ensuring durability, performance, and affordability.",
    "about.title": "Welcome to Dost Muhammad & Co.",
    "about.description":
      "We are dedicated to providing premium services in mineral water supply, auto spare parts, smart home solutions, and livestock services. Our commitment is to quality, reliability, and customer satisfaction. With years of experience in these diverse fields, we've established ourselves as a trusted name in the industry.",
    "careers.title": "Join Our Team",
    "careers.description":
      "At Dost Muhammad & Co., we're building the future across multiple industries in Pakistan. Explore career opportunities in our different business divisions.",
    "careers.tabs.water": "Water Services",
    "careers.tabs.auto": "Auto Parts",
    "careers.tabs.livestock": "Livestock",
    "careers.tabs.tech": "Tech Solutions",
    "careers.locations.mansehra": "Mansehra",
    "careers.locations.rural": "Rural Areas",
    "careers.locations.various": "Various Locations",
    "careers.locations.remote": "Remote/Office",
    "careers.employment.full_time": "Full-time",
    "careers.experience.1_year": "1+ years",
    "careers.experience.2_years": "2+ years",
    "careers.experience.3_years": "3+ years",
    "careers.experience.5_years": "5+ years",
    "careers.responsibilities": "Responsibilities:",
    "careers.requirements": "Requirements:",
    "careers.apply": "Apply Now",
    "careers.positions.water_tech.title": "Water Quality Technician",
    "careers.positions.water_tech.responsibilities.1":
      "Conduct regular water quality tests and analysis",
    "careers.positions.water_tech.responsibilities.2":
      "Monitor purification processes and equipment",
    "careers.positions.water_tech.responsibilities.3":
      "Maintain accurate records of water quality data",
    "careers.positions.water_tech.responsibilities.4":
      "Ensure compliance with health and safety standards",
    "careers.positions.water_tech.requirements.1":
      "Diploma in Chemistry or related field",
    "careers.positions.water_tech.requirements.2":
      "Knowledge of water testing procedures",
    "careers.positions.water_tech.requirements.3":
      "Attention to detail and analytical skills",
    "careers.positions.distribution_manager.title": "Distribution Manager",
    "careers.positions.distribution_manager.responsibilities.1":
      "Oversee water distribution operations",
    "careers.positions.distribution_manager.responsibilities.2":
      "Manage delivery schedules and routes",
    "careers.positions.distribution_manager.responsibilities.3":
      "Coordinate with production and sales teams",
    "careers.positions.distribution_manager.responsibilities.4":
      "Optimize logistics for efficiency",
    "careers.positions.distribution_manager.requirements.1":
      "Degree in Business or Logistics preferred",
    "careers.positions.distribution_manager.requirements.2":
      "Experience in distribution management",
    "careers.positions.distribution_manager.requirements.3":
      "Strong organizational skills",
    "careers.positions.parts_specialist.title": "Parts Specialist",
    "careers.positions.parts_specialist.responsibilities.1":
      "Assist customers in identifying correct auto parts",
    "careers.positions.parts_specialist.responsibilities.2":
      "Maintain inventory and stock levels",
    "careers.positions.parts_specialist.responsibilities.3":
      "Process orders and shipments",
    "careers.positions.parts_specialist.responsibilities.4":
      "Provide technical product information",
    "careers.positions.parts_specialist.requirements.1":
      "Knowledge of automotive systems",
    "careers.positions.parts_specialist.requirements.2":
      "Customer service experience",
    "careers.positions.parts_specialist.requirements.3":
      "Detail-oriented with strong memory",
    "careers.positions.inventory_controller.title": "Inventory Controller",
    "careers.positions.inventory_controller.responsibilities.1":
      "Manage auto parts inventory system",
    "careers.positions.inventory_controller.responsibilities.2":
      "Conduct regular stock audits",
    "careers.positions.inventory_controller.responsibilities.3":
      "Coordinate with suppliers and vendors",
    "careers.positions.inventory_controller.responsibilities.4":
      "Forecast inventory needs",
    "careers.positions.inventory_controller.requirements.1":
      "Experience in inventory management",
    "careers.positions.inventory_controller.requirements.2":
      "Proficiency with inventory software",
    "careers.positions.inventory_controller.requirements.3":
      "Strong analytical skills",
    "careers.positions.livestock_manager.title": "Livestock Manager",
    "careers.positions.livestock_manager.responsibilities.1":
      "Oversee daily livestock operations",
    "careers.positions.livestock_manager.responsibilities.2":
      "Implement animal health programs",
    "careers.positions.livestock_manager.responsibilities.3":
      "Manage breeding and feeding programs",
    "careers.positions.livestock_manager.responsibilities.4":
      "Train and supervise farm staff",
    "careers.positions.livestock_manager.requirements.1":
      "Degree in Animal Science or related field",
    "careers.positions.livestock_manager.requirements.2":
      "Extensive livestock experience",
    "careers.positions.livestock_manager.requirements.3":
      "Leadership and management skills",
    "careers.positions.animal_tech.title": "Animal Health Technician",
    "careers.positions.animal_tech.responsibilities.1":
      "Provide basic veterinary care",
    "careers.positions.animal_tech.responsibilities.2":
      "Administer vaccinations and medications",
    "careers.positions.animal_tech.responsibilities.3":
      "Monitor animal health and nutrition",
    "careers.positions.animal_tech.responsibilities.4":
      "Maintain health records",
    "careers.positions.animal_tech.requirements.1":
      "Diploma in Veterinary Technology",
    "careers.positions.animal_tech.requirements.2":
      "Experience with farm animals",
    "careers.positions.animal_tech.requirements.3":
      "Compassion for animal welfare",
    "careers.positions.iot_dev.title": "IoT Developer",
    "careers.positions.iot_dev.responsibilities.1":
      "Develop IoT solutions for smart homes",
    "careers.positions.iot_dev.responsibilities.2":
      "Integrate hardware and software systems",
    "careers.positions.iot_dev.responsibilities.3":
      "Create automation workflows",
    "careers.positions.iot_dev.responsibilities.4":
      "Troubleshoot technical issues",
    "careers.positions.iot_dev.requirements.1":
      "Degree in Computer Science or Engineering",
    "careers.positions.iot_dev.requirements.2": "Experience with IoT platforms",
    "careers.positions.iot_dev.requirements.3":
      "Programming skills (Python, C++, etc.)",
    "careers.positions.mobile_dev.title": "Mobile App Developer",
    "careers.positions.mobile_dev.responsibilities.1":
      "Develop and maintain mobile applications",
    "careers.positions.mobile_dev.responsibilities.2":
      "Collaborate with UI/UX designers",
    "careers.positions.mobile_dev.responsibilities.3":
      "Implement new features and improvements",
    "careers.positions.mobile_dev.responsibilities.4":
      "Ensure app performance and quality",
    "careers.positions.mobile_dev.requirements.1":
      "Experience with React Native or Flutter",
    "careers.positions.mobile_dev.requirements.2":
      "JavaScript/TypeScript proficiency",
    "careers.positions.mobile_dev.requirements.3":
      "Portfolio of published apps",
    "careers.benefits.title": "Why Work With Us?",
    "careers.benefits.training.title": "Training & Development",
    "careers.benefits.training.description":
      "Continuous learning opportunities to grow your skills and advance your career",
    "careers.benefits.salaries.title": "Competitive Salaries",
    "careers.benefits.salaries.description":
      "Attractive compensation packages with performance bonuses",
    "careers.benefits.health.title": "Health Benefits",
    "careers.benefits.health.description":
      "Comprehensive health insurance for you and your family",
    "careers.benefits.balance.title": "Work-Life Balance",
    "careers.benefits.balance.description":
      "Flexible schedules and paid time off to maintain healthy balance",
    "team.title": "Meet Our Team",
    "team.description":
      "Our dedicated team brings together diverse expertise across all our business sectors to deliver exceptional service and innovative solutions.",
    "team.dost_description":
      "Founder and visionary behind our diversified business ventures. Dost Muhammad brings decades of experience, wisdom, and leadership in the fields of livestock, logistics, and mineral water services.",
    "team.ahsan_description":
      "Lead Software Developer and Entrepreneur, Ahsan oversees the digital side of our company, managing web development, IT services, and business automation projects.",
    "team.awais_description":
      "Business Administration specialist currently pursuing his degree while actively contributing to company operations. He helps manage day-to-day business activities, financial planning, and strategic development.",
    "contact.title": "Contact Us",
    "contact.description":
      "Feel free to reach out for inquiries, feedback, or any questions. We'd love to hear from you!",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.phone": "Your Phone Number",
    "contact.form.select_department": "Select Department",
    "contact.form.message": "Your Message",
    "contact.form.submit": "Send Message",
    "contact.form.other": "Other Inquiry",
    "footer.copyright": "© 2025 Dost Muhammad & Co. All rights reserved.",
    "social.facebook": "Facebook",
    "social.linkedin": "LinkedIn",
  },
  ur: {
    "nav.home": "ہوم",
    "nav.careers": "کیریئرز",
    "nav.contact": "رابطہ",
    "language.english": "English",
    "language.urdu": "اردو",
    "hero.title":
      "اسمارٹ ہومز، لائیو سٹاک، پانی اور آٹو پارٹس کے لیے آپ کا قابل اعتماد پارٹنر",
    "services.smart_home.title": "اسمارٹ ہوم حل",
    "services.smart_home.description":
      "جدید ترین اسمارٹ ہوم آٹومیشن سسٹم جو آپ کے گھر اور کاروبار میں سیکورٹی، توانائی کی بچت اور آرام کو بڑھاتے ہیں۔",
    "services.livestock.title": "مویشی اور کاشتکاری",
    "services.livestock.description":
      "کسانوں اور تاجروں کے لیے اعلیٰ معیار کے مویشیوں کی خدمات، بشمول مویشیوں کی فروخت، جانوروں کی دیکھ بھال اور جدید انتظامی حل۔",
    "services.water.title": "پینے کے پانی کے حل",
    "services.water.description":
      "صاف، محفوظ اور قابل اعتماد پینے کے پانی کے حل، بشمول واٹر پیوریفیکیشن سسٹم اور بوتل بند پانی کی فراہمی۔",
    "services.auto_parts.title": "آٹو سپیئر پارٹس",
    "services.auto_parts.description":
      "ہر قسم کی گاڑیوں کے لیے اعلیٰ معیار کے آٹو موبائل سپیئر پارٹس، جو پائیداری، کارکردگی اور affordability کو یقینی بناتے ہیں۔",
    "about.title": "دوست محمد اینڈ کمپنی میں خوش آمدید",
    "about.description":
      "ہم معدنی پانی کی فراہمی، آٹو سپیئر پارٹس، اسمارٹ ہوم حل اور مویشیوں کی خدمات میں اعلیٰ معیار کی خدمات فراہم کرنے کے لیے وقف ہیں۔ ہماری کوشش معیار، اعتماد اور گاہک کی تسلی پر ہے۔ ان مختلف شعبوں میں سالوں کے تجربے کے ساتھ، ہم نے صنعت میں ایک قابل اعتماد نام قائم کیا ہے۔",
    "careers.title": "ہماری ٹیم میں شامل ہوں",
    "careers.description":
      "دوست محمد اینڈ کمپنی میں، ہم پاکستان میں متعدد صنعتوں میں مستقبل کی تعمیر کر رہے ہیں۔ ہمارے مختلف کاروباری شعبوں میں کیریئر کے مواقع دریافت کریں۔",
    "careers.tabs.water": "پانی کی خدمات",
    "careers.tabs.auto": "آٹو پارٹس",
    "careers.tabs.livestock": "مویشی",
    "careers.tabs.tech": "ٹیک حل",
    "careers.locations.mansehra": "مانسہرہ",
    "careers.locations.rural": "دیہی علاقے",
    "careers.locations.various": "مختلف مقامات",
    "careers.locations.remote": "ریموٹ/دفتر",
    "careers.employment.full_time": "فل ٹائم",
    "careers.experience.1_year": "1+ سال",
    "careers.experience.2_years": "2+ سال",
    "careers.experience.3_years": "3+ سال",
    "careers.experience.5_years": "5+ سال",
    "careers.responsibilities": "ذمہ داریاں:",
    "careers.requirements": "ضروریات:",
    "careers.apply": "ابھی درخواست دیں",
    "careers.positions.water_tech.title": "پانی کا معیار ٹیکنیشن",
    "careers.positions.water_tech.responsibilities.1":
      "پانی کے معیار کے باقاعدہ ٹیسٹ اور تجزیہ کروائیں",
    "careers.positions.water_tech.responsibilities.2":
      "صفائی کے عمل اور سامان کی نگرانی کریں",
    "careers.positions.water_tech.responsibilities.3":
      "پانی کے معیار کے اعداد و شمار کا درست ریکارڈ رکھیں",
    "careers.positions.water_tech.responsibilities.4":
      "صحت اور حفاظت کے معیارات کی پابندی یقینی بنائیں",
    "careers.positions.water_tech.requirements.1":
      "کیمسٹری یا متعلقہ فیلڈ میں ڈپلومہ",
    "careers.positions.water_tech.requirements.2":
      "پانی کے ٹیسٹ کرنے کے طریقہ کار کا علم",
    "careers.positions.water_tech.requirements.3":
      "تفصیلات پر توجہ اور تجزیاتی مہارت",
    "careers.positions.distribution_manager.title": "ڈسٹریبیوشن مینیجر",
    "careers.positions.distribution_manager.responsibilities.1":
      "پانی کی تقسیم کے عمل کی نگرانی کریں",
    "careers.positions.distribution_manager.responsibilities.2":
      "ڈیلیوری شیڈول اور راستوں کا انتظام کریں",
    "careers.positions.distribution_manager.responsibilities.3":
      "پروڈکشن اور سیلز ٹیموں کے ساتھ کوآرڈینیٹ کریں",
    "careers.positions.distribution_manager.responsibilities.4":
      "کارکردگی کے لیے لاجسٹکس کو بہتر بنائیں",
    "careers.positions.distribution_manager.requirements.1":
      "بزنس یا لاجسٹکس میں ڈگری ترجیحاً",
    "careers.positions.distribution_manager.requirements.2":
      "ڈسٹریبیوشن مینجمنٹ کا تجربہ",
    "careers.positions.distribution_manager.requirements.3":
      "مضبوط تنظیمی مہارتیں",
    "careers.positions.parts_specialist.title": "پارٹس سپیشلسٹ",
    "careers.positions.parts_specialist.responsibilities.1":
      "گاہکوں کو صحیح آٹو پارٹس کی شناخت میں مدد کریں",
    "careers.positions.parts_specialist.responsibilities.2":
      "انوینٹری اور اسٹاک لیول کو برقرار رکھیں",
    "careers.positions.parts_specialist.responsibilities.3":
      "آرڈرز اور شپمنٹس پر کارروائی کریں",
    "careers.positions.parts_specialist.responsibilities.4":
      "تکنیکی مصنوعات کی معلومات فراہم کریں",
    "careers.positions.parts_specialist.requirements.1": "آٹوموٹو سسٹمز کا علم",
    "careers.positions.parts_specialist.requirements.2": "کسٹمر سروس کا تجربہ",
    "careers.positions.parts_specialist.requirements.3":
      "تفصیلات پر توجہ اور مضبوط یادداشت",
    "careers.positions.inventory_controller.title": "انوینٹری کنٹرولر",
    "careers.positions.inventory_controller.responsibilities.1":
      "آٹو پارٹس انوینٹری سسٹم کا انتظام کریں",
    "careers.positions.inventory_controller.responsibilities.2":
      "اسٹاک کے باقاعدہ آڈٹ کروائیں",
    "careers.positions.inventory_controller.responsibilities.3":
      "سپلائرز اور وینڈرز کے ساتھ کوآرڈینیٹ کریں",
    "careers.positions.inventory_controller.responsibilities.4":
      "انوینٹری کی ضروریات کا اندازہ لگائیں",
    "careers.positions.inventory_controller.requirements.1":
      "انوینٹری مینجمنٹ کا تجربہ",
    "careers.positions.inventory_controller.requirements.2":
      "انوینٹری سافٹ ویئر کی مہارت",
    "careers.positions.inventory_controller.requirements.3":
      "مضبوط تجزیاتی مہارتیں",
    "careers.positions.livestock_manager.title": "مویشی مینیجر",
    "careers.positions.livestock_manager.responsibilities.1":
      "روزانہ مویشیوں کے عمل کی نگرانی کریں",
    "careers.positions.livestock_manager.responsibilities.2":
      "جانوروں کے صحت کے پروگراموں کو نافذ کریں",
    "careers.positions.livestock_manager.responsibilities.3":
      "نسل بندی اور کھلانے کے پروگراموں کا انتظام کریں",
    "careers.positions.livestock_manager.responsibilities.4":
      "فارم کے عملے کو تربیت دیں اور نگرانی کریں",
    "careers.positions.livestock_manager.requirements.1":
      "اینیمل سائنس یا متعلقہ فیلڈ میں ڈگری",
    "careers.positions.livestock_manager.requirements.2":
      "مویشیوں کا وسیع تجربہ",
    "careers.positions.livestock_manager.requirements.3":
      "قیادت اور انتظامی مہارتیں",
    "careers.positions.animal_tech.title": "جانوروں کا صحت ٹیکنیشن",
    "careers.positions.animal_tech.responsibilities.1":
      "بنیادی ویٹرنری کیئر فراہم کریں",
    "careers.positions.animal_tech.responsibilities.2": "ٹیکے اور ادویات دیں",
    "careers.positions.animal_tech.responsibilities.3":
      "جانوروں کی صحت اور غذائیت کی نگرانی کریں",
    "careers.positions.animal_tech.responsibilities.4":
      "صحت کے ریکارڈ برقرار رکھیں",
    "careers.positions.animal_tech.requirements.1":
      "ویٹرنری ٹیکنالوجی میں ڈپلومہ",
    "careers.positions.animal_tech.requirements.2": "فارم جانوروں کا تجربہ",
    "careers.positions.animal_tech.requirements.3":
      "جانوروں کی بہبود کے لیے ہمدردی",
    "careers.positions.iot_dev.title": "آئی او ٹی ڈویلپر",
    "careers.positions.iot_dev.responsibilities.1":
      "اسمارٹ ہومز کے لیے آئی او ٹی حل تیار کریں",
    "careers.positions.iot_dev.responsibilities.2":
      "ہارڈ ویئر اور سافٹ ویئر سسٹمز کو انٹیگریٹ کریں",
    "careers.positions.iot_dev.responsibilities.3": "آٹومیشن ورک فلو بنائیں",
    "careers.positions.iot_dev.responsibilities.4": "تکنیکی مسائل کا حل کریں",
    "careers.positions.iot_dev.requirements.1":
      "کمپیوٹر سائنس یا انجینئرنگ میں ڈگری",
    "careers.positions.iot_dev.requirements.2": "آئی او ٹی پلیٹ فارمز کا تجربہ",
    "careers.positions.iot_dev.requirements.3":
      "پروگرامنگ مہارتیں (پائتھن، سی++، وغیرہ)",
    "careers.positions.mobile_dev.title": "موبائل ایپ ڈویلپر",
    "careers.positions.mobile_dev.responsibilities.1":
      "موبائل ایپلیکیشنز تیار اور برقرار رکھیں",
    "careers.positions.mobile_dev.responsibilities.2":
      "UI/UX ڈیزائنرز کے ساتھ تعاون کریں",
    "careers.positions.mobile_dev.responsibilities.3":
      "نئی خصوصیات اور بہتریوں کو نافذ کریں",
    "careers.positions.mobile_dev.responsibilities.4":
      "ایپ کی کارکردگی اور معیار کو یقینی بنائیں",
    "careers.positions.mobile_dev.requirements.1":
      "ری ایکٹ نیٹیو یا فلٹر کا تجربہ",
    "careers.positions.mobile_dev.requirements.2":
      "جاوا اسکرپٹ/ٹائپ اسکرپٹ کی مہارت",
    "careers.positions.mobile_dev.requirements.3":
      "شائع شدہ ایپس کا پورٹ فولیو",
    "careers.benefits.title": "ہمارے ساتھ کام کیوں کریں؟",
    "careers.benefits.training.title": "تربیت اور ترقی",
    "careers.benefits.training.description":
      "اپنی مہارتوں کو بڑھانے اور اپنے کیریئر کو آگے بڑھانے کے لیے مسلسل سیکھنے کے مواقع",
    "careers.benefits.salaries.title": "مسابقتی تنخواہیں",
    "careers.benefits.salaries.description":
      "کارکردگی کے بونس کے ساتھ پرکشش معاوضے کے پیکجز",
    "careers.benefits.health.title": "صحت کے فوائد",
    "careers.benefits.health.description":
      "آپ اور آپ کے خاندان کے لیے جامع صحت انشورنس",
    "careers.benefits.balance.title": "کام اور زندگی کا توازن",
    "careers.benefits.balance.description":
      "صحت مند توازن برقرار رکھنے کے لیے لچکدار شیڈول اور معاوضہ چھٹیاں",
    "team.title": "ہماری ٹیم سے ملیں",
    "team.description":
      "ہماری پرعزم ٹیم ہمارے تمام کاروباری شعبوں میں متنوع مہارت کو اکٹھا کرتی ہے تاکہ غیر معمولی خدمات اور اختراعی حل فراہم کیے جا سکیں۔",
    "team.dost_description":
      "ہمارے متنوع کاروباری منصوبوں کے بانی اور ویژنری۔ دوست محمد مویشیوں، لاجسٹکس اور معدنی پانی کی خدمات کے شعبوں میں دہائیوں کا تجربہ، حکمت اور قیادت لاتے ہیں۔",
    "team.ahsan_description":
      "لیڈ سافٹ ویئر ڈویلپر اور انٹرپرینیور، احسان ہماری کمپنی کے ڈیجیٹل پہلو کی نگرانی کرتے ہیں، ویب ڈویلپمنٹ، آئی ٹی سروسز اور کاروباری آٹومیشن پروجیکٹس کا انتظام کرتے ہیں۔",
    "team.awais_description":
      "بزنس ایڈمنسٹریشن کے ماہر جو فی الحال اپنی ڈگری حاصل کرنے کے ساتھ ساتھ کمپنی کے آپریشنز میں فعال طور پر حصہ ڈالتے ہیں۔ وہ روزمرہ کے کاروباری سرگرمیوں، مالی منصوبہ بندی اور اسٹریٹجک ترقی کے انتظام میں مدد کرتے ہیں۔",
    "contact.title": "ہم سے رابطہ کریں",
    "contact.description":
      "استفسارات، فیڈ بیک یا کسی بھی سوال کے لیے ہم سے رابطہ کرنے میں آزاد محسوس کریں۔ ہم آپ سے سننا پسند کریں گے!",
    "contact.form.name": "آپ کا نام",
    "contact.form.email": "آپ کا ای میل",
    "contact.form.phone": "آپ کا فون نمبر",
    "contact.form.select_department": "محکمہ منتخب کریں",
    "contact.form.message": "آپ کا پیغام",
    "contact.form.submit": "پیغام بھیجیں",
    "contact.form.other": "دیگر استفسار",
    "footer.copyright": "© 2025 دوست محمد اینڈ کمپنی۔ تمام حقوق محفوظ ہیں۔",
    "social.facebook": "فیس بک",
    "social.linkedin": "لنکڈ ان",
  },
};

// Language Toggle Functionality
const languageToggle = document.getElementById("languageToggle");
let currentLanguage = localStorage.getItem("language") || "en";

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("language", lang);

  // Update body class for RTL
  document.body.classList.toggle("urdu", lang === "ur");

  // Update all elements with data-i18n attributes
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update all placeholder attributes
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Update select options
  document.querySelectorAll("option[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Initialize language
setLanguage(currentLanguage);

// Toggle language on button click
languageToggle.addEventListener("click", () => {
  const newLang = currentLanguage === "en" ? "ur" : "en";
  setLanguage(newLang);
});

// Hero Image Rotator
const hero = document.querySelector(".hero");
const images = [
  "images/hero-1.jpg",
  "images/hero-2.jpg",
  "images/hero-3.png",
  "images/hero-4.jpg",
];
let current = 0;

function changeHeroImage() {
  current = (current + 1) % images.length;
  hero.style.backgroundImage = `url(${images[current]})`;
}

function preloadImages() {
  images.forEach((img) => {
    const image = new Image();
    image.src = img;
  });
}

// Initialize
preloadImages();
setInterval(changeHeroImage, 3000);

// Department tabs functionality
function showDepartment(department) {
  // Hide all position sections
  document.querySelectorAll(".department-positions").forEach((section) => {
    section.classList.remove("active");
  });

  // Deactivate all tabs
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected department
  document.getElementById(`${department}-positions`).classList.add("active");

  // Activate clicked tab
  event.currentTarget.classList.add("active");
}

// Dark mode toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  const icon = darkModeToggle.querySelector("i");
  if (document.body.classList.contains("light-mode")) {
    icon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("darkMode", "disabled");
  } else {
    icon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("darkMode", "enabled");
  }
});

// Check for saved dark mode preference
if (localStorage.getItem("darkMode") === "disabled") {
  document.body.classList.add("light-mode");
  darkModeToggle.querySelector("i").classList.replace("fa-sun", "fa-moon");
}

// Form submission
const contactForm = document.querySelector(".contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(
    currentLanguage === "en"
      ? "Thank you for your message! We'll get back to you soon."
      : "آپ کے پیغام کا شکریہ! ہم جلد ہی آپ سے رابطہ کریں گے۔"
  );
  contactForm.reset();
});
