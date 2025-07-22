import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      header: {
        title: "Famous Muslim Astrologer",
        name: "Ahmed Ali Khan",
        tagline: "YOU CAN TRUST ME ONLY ONE TIME",
        banner: "Are You Experiencing Difficulties In Your Life? Feel Free To Consult Muslim Astrologer Muhammad Ali.",
        callChange: "One Call Can Change Your Life",
        phone: "+91-8290657409",
        satisfied: "100% SATISFIED CLIENTS",
        menu: {
          home: "Home",
          about: "About Us",
          loveMarriage: "Love Marriage",
          blackMagic: "Black Magic",
          vashikaran: "Vashikaran",
          services: "Our Services",
          blog: "Blog",
          contact: "Contact Us"
        }
      },
      hero: {
        title: "Expert Islamic Astrology Solutions",
        subtitle: "Get Expert Guidance from Muhammad Ali - Your Trusted Muslim Astrologer",
        description: "Solve all your life problems with the power of Islamic astrology. From love marriage to black magic removal, get instant solutions that actually work.",
        cta: "Get Instant Solution",
        whatsapp: "WhatsApp Now",
        features: [
          "100% Safe & Halal Methods",
          "24/7 Available Worldwide", 
          "25+ Years Experience",
          "1000+ Satisfied Clients"
        ]
      },
      whyConsult: {
        title: "Why Consult Islamic Astrologer?",
        subtitle: "Discover the power of authentic Islamic astrology guidance",
        reasons: [
          {
            title: "Halal & Pure Methods",
            description: "All solutions are based on Quranic verses and Islamic traditions, ensuring complete spiritual safety."
          },
          {
            title: "Instant Results",
            description: "Experience positive changes within 24-48 hours with our proven Islamic astrological remedies."
          },
          {
            title: "Expert Guidance",
            description: "Over 30 years of experience in Islamic astrology with thousands of successful cases worldwide."
          },
          {
            title: "Complete Privacy", 
            description: "Your problems and personal information are kept completely confidential and secure."
          }
        ]
      },
      services: {
        title: "Our Specialized Services",
        subtitle: "Expert solutions for all your life problems",
        list: [
          {
            title: "Love Marriage Solutions",
            description: "Get your parents' approval for love marriage with Islamic remedies"
          },
          {
            title: "Black Magic Removal",
            description: "Remove all types of black magic and evil eye effects permanently"
          },
          {
            title: "Husband-Wife Problems",
            description: "Restore love and harmony in your married life instantly"
          },
          {
            title: "Business Problems",
            description: "Overcome business obstacles and achieve financial success"
          },
          {
            title: "Child Problems",
            description: "Solutions for child-related issues and family harmony"
          },
          {
            title: "Career & Job Issues",
            description: "Get the right career path and job opportunities"
          }
        ]
      },
      allServices: {
        title: "Complete Range of Islamic Astrology Services",
        categories: [
          {
            name: "Love & Relationship",
            services: [
              "Love Marriage Solutions",
              "Get Lost Love Back", 
              "Convince Parents for Marriage",
              "Stop Divorce Proceedings",
              "Love Problem Solutions",
              "Breakup Problem Solutions"
            ]
          },
          {
            name: "Marriage & Family",
            services: [
              "Husband Wife Dispute Resolution",
              "Family Problem Solutions", 
              "In-Laws Problems",
              "Childless Couple Solutions",
              "Marriage Delay Solutions",
              "Second Marriage Issues"
            ]
          },
          {
            name: "Spiritual Protection",
            services: [
              "Black Magic Removal",
              "Evil Eye Protection",
              "Negative Energy Cleansing",
              "Spiritual Healing",
              "Protection Amulets",
              "House Blessing"
            ]
          },
          {
            name: "Career & Business",
            services: [
              "Business Growth Solutions",
              "Job Problem Solutions",
              "Financial Crisis Resolution",
              "Court Case Solutions",
              "Enemy Problems",
              "Property Disputes"
            ]
          }
        ]
      },
      whyChoose: {
        title: "Why Choose Muhammad Ali?",
        subtitle: "Your most trusted Islamic astrologer with proven results",
        points: [
          {
            number: "01",
            title: "Authentic Islamic Methods",
            description: "All remedies are based on Quran and authentic Islamic traditions"
          },
          {
            number: "02", 
            title: "25+ Years Experience",
            description: "Over three decades of successful practice in Islamic astrology"
          },
          {
            number: "03",
            title: "Guaranteed Results",
            description: "100% satisfaction guarantee with all our astrological solutions"
          },
          {
            number: "04",
            title: "24/7 Availability",
            description: "Available round the clock for urgent consultations worldwide"
          },
          {
            number: "05",
            title: "Complete Privacy",
            description: "Your personal information and problems are kept strictly confidential"
          },
          {
            number: "06",
            title: "No Side Effects",
            description: "All Islamic remedies are completely safe with no negative effects"
          }
        ]
      },
      testimonials: {
        title: "What Our Clients Say",
        subtitle: "Real stories from satisfied clients worldwide",
        reviews: [
          {
            name: "Aisha Khan",
            location: "Mumbai, India",
            text: "Muhammad Ali ji helped me get my parents' approval for love marriage. Within 15 days, everything was sorted. Highly recommended!",
            rating: 5
          },
          {
            name: "Ahmed Hassan", 
            location: "Dubai, UAE",
            text: "I was facing severe business losses. After consulting Muhammad Ali ji, my business started growing within a month. Amazing results!",
            rating: 5
          },
          {
            name: "Fatima Ali",
            location: "London, UK", 
            text: "Had black magic issues for 2 years. Muhammad Ali ji removed it completely in just 3 days. I feel so much better now.",
            rating: 5
          }
        ]
      },
      certificates: {
        title: "Certified & Trusted",
        subtitle: "Recognized expertise in Islamic astrology"
      },
      footer: {
        contact: "Contact Information",
        phone: "Phone: +91-8290657409",
        email: "Email: info@muhammedali.com",
        address: "Address: New Delhi, India",
        services: "Our Services",
        servicesList: [
          "Love Marriage Solutions",
          "Black Magic Removal", 
          "Family Problem Solutions",
          "Business Growth Solutions"
        ],
        quickLinks: "Quick Links",
        links: [
          "About Us",
          "Contact Us",
          "Privacy Policy", 
          "Terms of Service"
        ],
        copyright: "© 2024 Muhammad Ali - Islamic Astrologer. All rights reserved.",
        description: "Expert Islamic astrologer providing authentic solutions for love, marriage, business, and spiritual problems. Trusted by thousands worldwide."
      }
    }
  },
  ur: {
    translation: {
      header: {
        title: "مشہور مسلمان نجومی",
        name: "محمد علی",
        tagline: "آپ صرف ایک بار مجھ پر بھروسہ کر سکتے ہیں",
        banner: "کیا آپ اپنی زندگی میں مشکلات کا سامنا کر رہے ہیں؟ مسلمان نجومی محمد علی سے رابطہ کرنے میں تردد نہ کریں۔",
        callChange: "ایک کال آپ کی زندگی بدل سکتی ہے",
        phone: "+91-8290657409",
        satisfied: "100% مطمئن کلائنٹس",
        menu: {
          home: "ہوم",
          about: "ہمارے بارے میں",
          loveMarriage: "محبت کی شادی",
          blackMagic: "کالا جادو",
          vashikaran: "وشیکرن",
          services: "ہماری خدمات",
          blog: "بلاگ",
          contact: "رابطہ کریں"
        }
      },
      hero: {
        title: "ماہر اسلامی نجوم کے حل",
        subtitle: "محمد علی سے ماہرانہ رہنمائی حاصل کریں - آپ کے قابل اعتماد مسلمان نجومی",
        description: "اسلامی نجوم کی طاقت سے اپنی تمام زندگی کے مسائل حل کریں۔ محبت کی شادی سے لے کر کالے جادو کے خاتمے تک، فوری حل حاصل کریں جو واقعی کام کرتے ہیں۔",
        cta: "فوری حل حاصل کریں",
        whatsapp: "واٹس ایپ ابھی",
        features: [
          "100% محفوظ اور حلال طریقے",
          "24/7 دنیا بھر میں دستیاب",
          "30+ سال کا تجربہ",
          "1000+ مطمئن کلائنٹس"
        ]
      },
      whyConsult: {
        title: "اسلامی نجومی سے کیوں مشورہ کریں؟",
        subtitle: "مستند اسلامی نجوم کی رہنمائی کی طاقت دریافت کریں",
        reasons: [
          {
            title: "حلال اور پاک طریقے",
            description: "تمام حل قرآنی آیات اور اسلامی روایات پر مبنی ہیں، مکمل روحانی تحفظ یقینی بناتے ہیں۔"
          },
          {
            title: "فوری نتائج",
            description: "ہمارے ثابت شدہ اسلامی نجومی علاج کے ساتھ 24-48 گھنٹوں میں مثبت تبدیلیاں محسوس کریں۔"
          },
          {
            title: "ماہرانہ رہنمائی",
            description: "اسلامی نجوم میں 30 سال سے زیادہ کا تجربہ دنیا بھر میں ہزاروں کامیاب کیسز کے ساتھ۔"
          },
          {
            title: "مکمل رازداری",
            description: "آپ کے مسائل اور ذاتی معلومات مکمل طور پر خفیہ اور محفوظ رکھی جاتی ہیں۔"
          }
        ]
      },
      services: {
        title: "ہماری خصوصی خدمات",
        subtitle: "آپ کی تمام زندگی کے مسائل کے لیے ماہرانہ حل",
        list: [
          {
            title: "محبت کی شادی کے حل",
            description: "اسلامی علاج کے ساتھ والدین سے محبت کی شادی کی منظوری حاصل کریں"
          },
          {
            title: "کالے جادو کا خاتمہ",
            description: "تمام قسم کے کالے جادو اور بری نظر کے اثرات کو مستقل طور پر ختم کریں"
          },
          {
            title: "شوہر بیوی کے مسائل",
            description: "اپنی ازدواجی زندگی میں محبت اور ہم آہنگی فوری طور پر بحال کریں"
          },
          {
            title: "کاروباری مسائل",
            description: "کاروباری رکاوٹوں پر قابو پائیں اور مالی کامیابی حاصل کریں"
          },
          {
            title: "بچوں کے مسائل",
            description: "بچوں سے متعلق مسائل اور خاندانی ہم آہنگی کے حل"
          },
          {
            title: "کیریئر اور ملازمت کے مسائل",
            description: "صحیح کیریئر پاتھ اور ملازمت کے مواقع حاصل کریں"
          }
        ]
      },
      allServices: {
        title: "اسلامی نجوم کی خدمات کی مکمل رینج",
        categories: [
          {
            name: "محبت اور رشتے",
            services: [
              "محبت کی شادی کے حل",
              "کھوئی ہوئی محبت واپس پائیں",
              "والدین کو شادی کے لیے راضی کریں",
              "طلاق کی کارروائی روکیں",
              "محبت کے مسائل کے حل",
              "بریک اپ کے مسائل کے حل"
            ]
          },
          {
            name: "شادی اور خاندان",
            services: [
              "میاں بیوی کے تنازعات کا حل",
              "خاندانی مسائل کے حل",
              "سسرال کے مسائل",
              "بے اولاد جوڑوں کے حل",
              "شادی میں تاخیر کے حل",
              "دوسری شادی کے مسائل"
            ]
          },
          {
            name: "روحانی تحفظ",
            services: [
              "کالے جادو کا خاتمہ",
              "بری نظر سے تحفظ",
              "منفی توانائی کی صفائی",
              "روحانی شفا",
              "حفاظتی تعویذ",
              "گھر کی برکت"
            ]
          },
          {
            name: "کیریئر اور کاروبار",
            services: [
              "کاروباری ترقی کے حل",
              "ملازمت کے مسائل کے حل",
              "مالی بحران کا حل",
              "عدالتی کیس کے حل",
              "دشمن کے مسائل",
              "جائیداد کے تنازعات"
            ]
          }
        ]
      },
      whyChoose: {
        title: "محمد علی کو کیوں منتخب کریں؟",
        subtitle: "ثابت شدہ نتائج کے ساتھ آپ کے سب سے قابل اعتماد اسلامی نجومی",
        points: [
          {
            number: "01",
            title: "مستند اسلامی طریقے",
            description: "تمام علاج قرآن اور مستند اسلامی روایات پر مبنی ہیں"
          },
          {
            number: "02",
            title: "30+ سال کا تجربہ",
            description: "اسلامی نجوم میں تین دہائیوں سے زیادہ کا کامیاب ممارست"
          },
          {
            number: "03",
            title: "ضمانت شدہ نتائج",
            description: "ہمارے تمام نجومی حل کے ساتھ 100% اطمینان کی ضمانت"
          },
          {
            number: "04",
            title: "24/7 دستیابی",
            description: "دنیا بھر میں فوری مشاورت کے لیے چوبیس گھنٹے دستیاب"
          },
          {
            number: "05",
            title: "مکمل رازداری",
            description: "آپ کی ذاتی معلومات اور مسائل سختی سے خفیہ رکھے جاتے ہیں"
          },
          {
            number: "06",
            title: "کوئی منفی اثرات نہیں",
            description: "تمام اسلامی علاج مکمل طور پر محفوظ ہیں کوئی منفی اثرات کے بغیر"
          }
        ]
      },
      testimonials: {
        title: "ہمارے کلائنٹس کیا کہتے ہیں",
        subtitle: "دنیا بھر کے مطمئن کلائنٹس کی حقیقی کہانیاں",
        reviews: [
          {
            name: "عائشہ خان",
            location: "ممبئی، بھارت",
            text: "محمد علی جی نے محبت کی شادی کے لیے والدین کی رضامندی دلانے میں میری مدد کی۔ 15 دنوں میں سب کچھ ٹھیک ہو گیا۔ بہت تجویز کرتا ہوں!",
            rating: 5
          },
          {
            name: "احمد حسن",
            location: "دبئی، متحدہ عرب امارات",
            text: "میں شدید کاروباری نقصان کا سامنا کر رہا تھا۔ محمد علی جی سے مشورہ کرنے کے بعد، میرا کاروبار ایک ماہ میں بڑھنا شروع ہو گیا۔ حیرت انگیز نتائج!",
            rating: 5
          },
          {
            name: "فاطمہ علی",
            location: "لندن، برطانیہ",
            text: "2 سال سے کالے جادو کے مسائل تھے۔ محمد علی جی نے صرف 3 دنوں میں اسے مکمل طور پر ہٹا دیا۔ اب میں بہت بہتر محسوس کرتا ہوں۔",
            rating: 5
          }
        ]
      },
      certificates: {
        title: "تصدیق شدہ اور قابل اعتماد",
        subtitle: "اسلامی نجوم میں تسلیم شدہ مہارت"
      },
      footer: {
        contact: "رابطہ کی معلومات",
        phone: "فون: +91-8290657409",
        email: "ای میل: info@muhammedali.com",
        address: "پتہ: نئی دہلی، بھارت",
        services: "ہماری خدمات",
        servicesList: [
          "محبت کی شادی کے حل",
          "کالے جادو کا خاتمہ",
          "خاندانی مسائل کے حل",
          "کاروباری ترقی کے حل"
        ],
        quickLinks: "فوری لنکس",
        links: [
          "ہمارے بارے میں",
          "رابطہ کریں",
          "پرائیویسی پالیسی",
          "سروس کی شرائط"
        ],
        copyright: "© 2024 محمد علی - اسلامی نجومی۔ تمام حقوق محفوظ ہیں۔",
        description: "ماہر اسلامی نجومی محبت، شادی، کاروبار، اور روحانی مسائل کے لیے مستند حل فراہم کرتا ہے۔ دنیا بھر میں ہزاروں لوگوں کا اعتماد۔"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;