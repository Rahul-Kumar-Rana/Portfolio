(() => {
"use strict";

/* ---------- config ---------- */
const CONFIG = {
  // Har project ke GitHub aur live demo link yahan likho. Khali ("") chhodoge to button dimmed rahega.
  projects: {
    p1: { github: "", live: "" },   // E-Commerce Backend REST API
    p2: { github: "", live: "" },   // Dynamic Kanban Dashboard
    p3: { github: "", live: "" },   // Expense Management App
    p4: { github: "", live: "" },    // Easy Home Services Platform
    p5: { github: "https://github.com/Rahul-Kumar-Rana/Number-Guessing-Game", live: "https://rahul-kumar-rana.github.io/Number-Guessing-Game/" }    // Number Guessing Game
  },
  // Certificate files "certificates" folder me rakho
  certs: { dsa: "certificates/dsa-160-days.pdf", oracle: "certificates/oracle-java-2023.pdf" },
  email: "rahulplace202327@gmail.com",
  linkedin: "https://www.linkedin.com/in/rahul-kumar-rana-701a46325/",
  github: "https://github.com/Rahul-Kumar-Rana",
  leetcode: "https://leetcode.com/u/vista_/"
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} }
};
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- translations ---------- */
const T = {
en: {
  "nav.home":"Home","nav.about":"About","nav.skills":"Skills","nav.projects":"Projects","nav.contact":"Contact",
  "menu.title":"Explore","menu.open":"Open section menu",
  "hero.eyebrow":"Portfolio","hero.hi":"Hi, I'm","hero.sub":"Java Backend & Web Developer focused on building practical, reliable digital experiences.",
  "type1":"Building Scalable REST APIs","type2":"Engineering Full-Stack Web Apps","type3":"Optimizing Microservices",
  "hero.cta1":"Explore projects","hero.cta2":"Let's connect","hero.tap":"Tap my photo to explore more",
  "tech.title":"Technologies I work with","tech.sub":"A quick look at my everyday toolkit.",
  "home.open":"Open",
  "home.about":"Who I am, what I study and what drives me.",
  "home.skills":"Languages, frameworks, tools, education and certifications.",
  "home.projects":"REST APIs, a Kanban dashboard, and a Home Services Platform.",
  "home.contact":"Open to internships and collaborations. Say hello.",
  "about.h":"A developer who <span class='grad'>learns by building.</span>",
  "about.sub":"A short introduction to who I am and what I'm working towards.",
  "about.p1":"I'm Rahul Kumar Rana, a B.Tech Computer Science student at Sharda University with a strong interest in Java backend and web development.",
  "about.p2":"I enjoy designing clean REST APIs, working with databases and turning ideas into small, working products. I practise data structures and algorithms regularly to sharpen my problem solving.",
  "about.p3":"I'm looking for internships and collaborative projects where I can contribute, learn from experienced engineers and keep growing.",
  "fact.role":"Role","fact.roleV":"Java Backend & Web Developer","fact.edu":"Education","fact.eduV":"B.Tech CSE · Sharda University","fact.open":"Open to","fact.openV":"Internships & collaborations",
  "focus1.t":"Backend development","focus1.d":"REST APIs with Spring Boot, Hibernate and MySQL.",
  "focus2.t":"Web interfaces","focus2.d":"Responsive front ends built with core JavaScript.",
  "focus3.t":"Problem solving","focus3.d":"160 days of consistent data structures and algorithms practice.",
  "stat1":"Days of DSA practice","stat2":"Projects built","stat3":"Programming languages",
  "skills.h":"Curious mind. <span class='grad'>Builder mindset.</span>",
  "skills.sub":"A snapshot of the technologies I use, the education behind my journey and the milestones I have earned.",
  "skills.card":"Skills & toolkit","skills.cardSub":"Tools I learn with and build with",
  "g.prog":"Programming","g.fw":"Frameworks & libraries","g.tools":"Tools & databases",
  "lv.medium":"Medium level","lv.basics":"Basics","lv.es6":"ES6+","lv.beginner":"Beginner",
  "edu.title":"Education","edu.sub":"Academic journey",
  "edu1.t":"B.Tech — Computer Science","edu1.s":"Sharda University","edu1.d":"Focus: programming, software development and problem solving",
  "edu2.t":"Backend development journey","edu2.d":"Building a foundation in Java, Spring and REST API design.",
  "cert.title":"Certifications & achievements",
  "cert1.t":"DSA 160 Days Problem Solving — GeeksforGeeks","cert1.d":"Consistent practice in data structures and algorithms",
  "cert2.t":"Oracle Java Programming Workshop (2023)","cert2.d":"Java programming workshop",
  "proj.h":"Projects that turn <span class='grad'>ideas into interfaces.</span>",
  "proj.sub":"A selection of backend, frontend and application projects. Filter the cards to explore each area.",
  "f.all":"All","f.backend":"Backend","f.frontend":"Frontend","count.one":"1 project","count.many":"{n} projects",
  "tag.backend":"Backend","tag.frontend":"Frontend","tag.full":"Full-stack app",
  "p1.t":"E-Commerce Backend REST API","p1.d":"Designed scalable RESTful API endpoints with Spring Boot, Hibernate and MySQL, including secure JWT authentication and Docker containers.",
  "p2.t":"Dynamic Kanban Dashboard","p2.d":"Built a responsive task manager interface with drag-and-drop interactions and clear client-side state management using core JavaScript.",
  "p3.t":"Expense Management App","p3.d":"Created an offline-first Android expense tracker with validated inputs and structured data across multiple database tables.",
  "f.full":"Full-Stack","tag.mobile":"Full-stack mobile app","btn.github":"GitHub","btn.live":"Live demo","btn.cert":"View certificate",
  "p4.t":"Easy Home Services Platform","p4.d":"Architected an on-demand service marketplace with dual React Native mobile apps (Customer & Provider) backend by a Spring Boot 3 & MySQL REST API. Engineered secure OTP login, BCrypt-hashed job verification PINs, duty tracking, and Dockerized deployment.",
  "p5.t":"Number Guessing Game in Bubble Form","p5.d":"Developed an interactive number guessing game using Java, HTML, CSS, and JavaScript. Implemented random number generation, backend-based guess validation, dynamic hints, and animated user interactions. Deployed the frontend on GitHub Pages and the Java backend using Docker on Render.",
  "c.eyebrow":"Let's build something","c.h":"Have an opportunity or an idea?",
  "c.p":"I'm interested in Java backend and web development internships, collaborative projects and opportunities to keep learning. Reach out through any of these links or the form.",
  "c.email":"Email me","li.sub":"Rahul Kumar Rana","gh.sub":"Code & projects","lc.sub":"Problem solving",
  "form.title":"Send me a message","form.sub":"Your message goes straight to my inbox.",
  "form.email":"Email Id","form.vEmail":"Enter a valid email address.","form.name":"Name","form.phone":"Phone number","form.alt":"Alternate phone (optional)","form.reason":"Reason for contact","form.note":"Note",
  "r1":"Internship / Job","r2":"Collaboration","r3":"Freelance","r4":"Feedback","r5":"Other",
  "form.send":"Send message","form.sending":"Sending…",
  "form.ok":"Thank you! Your message has been sent.","form.err":"Couldn't send automatically.","form.mail":"Send via your email app",
  "form.vName":"Please enter your name.","form.vPhone":"Enter a valid phone number.","form.vAlt":"Alternate phone looks invalid.","form.vReason":"Please choose a reason.",
  "foot":"© 2026 Rahul Kumar Rana. All rights reserved.",
  "d.hi":"Hi, I am Rano, the guide of this portfolio. Let me show you around!",
  "d.hero":"That's Rahul. Tap his photo to open About it or Contact.",
  "d.tech":"His technologies keep rotating here. Watch them spin out and back in.",
  "d.t-about":"About: who Rahul is, what he studies and what drives him.",
  "d.t-skills":"Skills: languages, frameworks, tools, education and certificates.",
  "d.t-projects":"Projects: REST APIs, a Kanban dashboard and an expense tracker.",
  "d.t-contact":"Contact: links and a form that lands straight in his inbox.",
  "d.end":"That's the tour! Click me anytime to replay it.",
  "d.a-bio":"His story: a B.Tech CSE student who loves Java and backend work.",
  "d.a-focus":"Three focus areas: backend, web interfaces and problem solving.",
  "d.a-stats":"The numbers: 160 days of DSA, 5 projects, 6 languages.",
  "d.s-skills":"Skills grouped by Programming, Frameworks and Tools.",
  "d.s-edu":"Education: B.Tech in Computer Science at Sharda University.",
  "d.s-cert":"Certificates: GeeksforGeeks DSA and Oracle Java workshop.",
  "d.p-filters":"Use these filters to switch between Frontend, Backend and Full-Stack.",
  "d.p-grid":"Five projects, each with its tech plus GitHub and live links.",
  "d.c-links":"Reach him on LinkedIn, GitHub, LeetCode or email.",
  "d.c-form":"Fill this form and it goes straight to his mail.",
  "d.again":"Welcome to {page}! Click me for a quick walkthrough.",
  "q1":"Hehe, that tickles!","q2":"Woohoo! I love clicks!","q3":"Need a hand? I'm your guide.","q4":"Beep boop. Exploring is fun!"
},
hi: {
  "nav.home":"होम","nav.about":"परिचय","nav.skills":"स्किल्स","nav.projects":"प्रोजेक्ट्स","nav.contact":"संपर्क",
  "menu.title":"एक्सप्लोर करें","menu.open":"सेक्शन मेनू खोलें",
  "hero.eyebrow":"पोर्टफोलियो","hero.hi":"नमस्ते, मैं हूँ","hero.sub":"जावा बैकएंड और वेब डेवलपर, जो व्यावहारिक और भरोसेमंद डिजिटल अनुभव बनाने पर ध्यान देता है।",
  "type1":"स्केलेबल REST API बनाना","type2":"फ़ुल-स्टैक वेब ऐप्स तैयार करना","type3":"माइक्रोसर्विसेज़ को ऑप्टिमाइज़ करना",
  "hero.cta1":"प्रोजेक्ट्स देखें","hero.cta2":"संपर्क करें","hero.tap":"एक्सप्लोर करने के लिए मेरी फ़ोटो पर टैप करें",
  "tech.title":"जिन तकनीकों पर मैं काम करता हूँ","tech.sub":"मेरे रोज़ के टूलकिट की एक झलक।",
  "home.open":"खोलें",
  "home.about":"मैं कौन हूँ, क्या पढ़ रहा हूँ और मुझे क्या प्रेरित करता है।",
  "home.skills":"भाषाएँ, फ़्रेमवर्क, टूल्स, शिक्षा और प्रमाणपत्र।",
  "home.projects":"REST API, कानबन डैशबोर्ड, एक्सपेंस ट्रैकर और होम सर्विसेज़ प्लेटफ़ॉर्म।",
  "home.contact":"इंटर्नशिप और सहयोग के लिए उपलब्ध। नमस्ते कहें।",
  "about.h":"एक डेवलपर जो <span class='grad'>बनाकर सीखता है।</span>",
  "about.sub":"मैं कौन हूँ और किस दिशा में काम कर रहा हूँ, इसका संक्षिप्त परिचय।",
  "about.p1":"मैं राहुल कुमार राणा हूँ, शारदा यूनिवर्सिटी में बी.टेक कंप्यूटर साइंस का छात्र, जिसकी जावा बैकएंड और वेब डेवलपमेंट में गहरी रुचि है।",
  "about.p2":"मुझे साफ़-सुथरे REST API डिज़ाइन करना, डेटाबेस के साथ काम करना और विचारों को छोटे, काम करने वाले प्रोडक्ट में बदलना पसंद है। समस्या-समाधान को निखारने के लिए मैं नियमित रूप से DSA का अभ्यास करता हूँ।",
  "about.p3":"मैं ऐसी इंटर्नशिप और सहयोगी प्रोजेक्ट्स की तलाश में हूँ जहाँ मैं योगदान दे सकूँ, अनुभवी इंजीनियरों से सीख सकूँ और आगे बढ़ता रहूँ।",
  "fact.role":"भूमिका","fact.roleV":"जावा बैकएंड और वेब डेवलपर","fact.edu":"शिक्षा","fact.eduV":"बी.टेक CSE · शारदा यूनिवर्सिटी","fact.open":"उपलब्ध","fact.openV":"इंटर्नशिप और सहयोग",
  "focus1.t":"बैकएंड डेवलपमेंट","focus1.d":"Spring Boot, Hibernate और MySQL के साथ REST API।",
  "focus2.t":"वेब इंटरफ़ेस","focus2.d":"कोर JavaScript से बने रेस्पॉन्सिव फ्रंट एंड।",
  "focus3.t":"समस्या-समाधान","focus3.d":"डेटा स्ट्रक्चर और एल्गोरिदम का 160 दिनों का लगातार अभ्यास।",
  "stat1":"दिन DSA अभ्यास","stat2":"बनाए गए प्रोजेक्ट्स","stat3":"प्रोग्रामिंग भाषाएँ",
  "skills.h":"जिज्ञासु मन। <span class='grad'>निर्माता सोच।</span>",
  "skills.sub":"मेरी तकनीकों, शिक्षा और अर्जित उपलब्धियों की एक झलक।",
  "skills.card":"स्किल्स और टूलकिट","skills.cardSub":"जिनसे मैं सीखता और बनाता हूँ",
  "g.prog":"प्रोग्रामिंग","g.fw":"फ़्रेमवर्क और लाइब्रेरी","g.tools":"टूल्स और डेटाबेस",
  "lv.medium":"मध्यम स्तर","lv.basics":"बेसिक्स","lv.es6":"ES6+","lv.beginner":"शुरुआती",
  "edu.title":"शिक्षा","edu.sub":"शैक्षणिक सफ़र",
  "edu1.t":"बी.टेक — कंप्यूटर साइंस","edu1.s":"शारदा यूनिवर्सिटी","edu1.d":"फोकस: प्रोग्रामिंग, सॉफ़्टवेयर डेवलपमेंट और समस्या-समाधान",
  "edu2.t":"बैकएंड डेवलपमेंट का सफ़र","edu2.d":"जावा, Spring और REST API डिज़ाइन की नींव तैयार करना।",
  "cert.title":"प्रमाणपत्र और उपलब्धियाँ",
  "cert1.t":"DSA 160 डेज़ प्रॉब्लम सॉल्विंग — GeeksforGeeks","cert1.d":"डेटा स्ट्रक्चर और एल्गोरिदम का लगातार अभ्यास",
  "cert2.t":"Oracle Java Programming Workshop (2023)","cert2.d":"जावा प्रोग्रामिंग वर्कशॉप",
  "proj.h":"प्रोजेक्ट्स जो <span class='grad'>विचारों को इंटरफ़ेस बनाते हैं।</span>",
  "proj.sub":"बैकएंड, फ्रंटएंड और एप्लिकेशन प्रोजेक्ट्स का चयन। हर क्षेत्र देखने के लिए फ़िल्टर करें।",
  "f.all":"सभी","f.backend":"बैकएंड","f.frontend":"फ्रंटएंड","count.one":"1 प्रोजेक्ट","count.many":"{n} प्रोजेक्ट्स",
  "tag.backend":"बैकएंड","tag.frontend":"फ्रंटएंड","tag.full":"फ़ुल-स्टैक ऐप",
  "p1.t":"ई-कॉमर्स बैकएंड REST API","p1.d":"Spring Boot, Hibernate और MySQL से स्केलेबल REST API बनाए, जिनमें सुरक्षित JWT ऑथेंटिकेशन और Docker कंटेनर शामिल हैं।",
  "p2.t":"डायनामिक कानबन डैशबोर्ड","p2.d":"कोर JavaScript से ड्रैग-एंड-ड्रॉप और साफ़ क्लाइंट-साइड स्टेट मैनेजमेंट वाला रेस्पॉन्सिव टास्क मैनेजर बनाया।",
  "p3.t":"एक्सपेंस मैनेजमेंट ऐप","p3.d":"ऑफ़लाइन-फ़र्स्ट Android एक्सपेंस ट्रैकर बनाया, जिसमें वैलिडेटेड इनपुट और कई डेटाबेस टेबल में संरचित डेटा है।",
  "f.full":"फ़ुल-स्टैक","tag.mobile":"फ़ुल-स्टैक मोबाइल ऐप","btn.github":"GitHub","btn.live":"लाइव डेमो","btn.cert":"प्रमाणपत्र देखें",
  "p4.t":"Easy Home Services Platform","p4.d":"ऑन-डिमांड सर्विस मार्केटप्लेस बनाया, जिसमें दो React Native मोबाइल ऐप (कस्टमर और प्रोवाइडर) हैं और बैकएंड Spring Boot 3 व MySQL REST API है। सुरक्षित OTP लॉगिन, BCrypt-हैश्ड जॉब वेरिफ़िकेशन PIN, ड्यूटी ट्रैकिंग और Docker डिप्लॉयमेंट बनाया।",
    "p5.t":"Number Guessing Game in Bubble Form","p5.d":"Java, HTML, CSS और JavaScript से इंटरैक्टिव नंबर गेसिंग गेम बनाया। रैंडम नंबर जनरेशन, बैकएंड-आधारित गेस वैलिडेशन, डायनामिक हिंट और एनिमेटेड इंटरैक्शन बनाए। फ्रंटएंड GitHub Pages पर और Java बैकएंड Render पर Docker से डिप्लॉय किया।",
  "c.eyebrow":"आइए कुछ बनाएँ","c.h":"कोई अवसर या विचार है?",
  "c.p":"मुझे जावा बैकएंड और वेब डेवलपमेंट इंटर्नशिप, सहयोगी प्रोजेक्ट्स और सीखते रहने के अवसरों में रुचि है। इन लिंक या फ़ॉर्म से संपर्क करें।",
  "c.email":"ईमेल करें","li.sub":"राहुल कुमार राणा","gh.sub":"कोड और प्रोजेक्ट्स","lc.sub":"प्रॉब्लम सॉल्विंग",
  "form.title":"मुझे संदेश भेजें","form.sub":"आपका संदेश सीधे मेरे इनबॉक्स में आएगा।",
  "form.email":"आपका ईमेल (ज़रूरी नहीं, जवाब के लिए)","form.vEmail":"सही ईमेल पता दर्ज करें।","form.name":"नाम","form.phone":"फ़ोन नंबर","form.alt":"वैकल्पिक फ़ोन (ज़रूरी नहीं)","form.reason":"संपर्क का कारण","form.note":"नोट",
  "r1":"इंटर्नशिप / जॉब","r2":"सहयोग","r3":"फ्रीलांस","r4":"फ़ीडबैक","r5":"अन्य",
  "form.send":"संदेश भेजें","form.sending":"भेज रहे हैं…",
  "form.ok":"धन्यवाद! आपका संदेश भेज दिया गया है।","form.err":"अपने आप नहीं भेज सके।","form.mail":"अपने ईमेल ऐप से भेजें",
  "form.vName":"कृपया अपना नाम लिखें।","form.vPhone":"सही फ़ोन नंबर दर्ज करें।","form.vAlt":"वैकल्पिक फ़ोन सही नहीं लगता।","form.vReason":"कृपया कारण चुनें।",
  "foot":"© 2026 राहुल कुमार राणा। सर्वाधिकार सुरक्षित।",
  "d.hi":"नमस्ते, मैं रानो हूँ, इस पोर्टफोलियो का गाइड। चलिए, मैं आपको घुमाता हूँ!",
  "d.hero":"ये राहुल हैं। About, Skills, Projects या Contact खोलने के लिए इनकी फ़ोटो पर टैप करें।",
  "d.tech":"इनकी तकनीकें यहाँ घूमती रहती हैं। देखिए कैसे घूमकर जाती और लौटती हैं।",
  "d.t-about":"परिचय: राहुल कौन हैं, क्या पढ़ते हैं और क्या प्रेरित करता है।",
  "d.t-skills":"स्किल्स: भाषाएँ, फ़्रेमवर्क, टूल्स, शिक्षा और प्रमाणपत्र।",
  "d.t-projects":"प्रोजेक्ट्स: REST API, कानबन डैशबोर्ड और एक्सपेंस ट्रैकर।",
  "d.t-contact":"संपर्क: लिंक और एक फ़ॉर्म जो सीधे इनके इनबॉक्स में जाता है।",
  "d.end":"टूर पूरा! दोबारा देखने के लिए मुझ पर कभी भी क्लिक करें।",
  "d.a-bio":"इनकी कहानी: बी.टेक CSE के छात्र जिन्हें जावा और बैकएंड पसंद है।",
  "d.a-focus":"तीन फोकस क्षेत्र: बैकएंड, वेब इंटरफ़ेस और समस्या-समाधान।",
  "d.a-stats":"आँकड़े: 160 दिन DSA, 5 प्रोजेक्ट्स, 6 भाषाएँ।",
  "d.s-skills":"स्किल्स प्रोग्रामिंग, फ़्रेमवर्क और टूल्स में बँटी हैं।",
  "d.s-edu":"शिक्षा: शारदा यूनिवर्सिटी से बी.टेक कंप्यूटर साइंस।",
  "d.s-cert":"प्रमाणपत्र: GeeksforGeeks DSA और Oracle Java वर्कशॉप।",
  "d.p-filters":"फ्रंटएंड, बैकएंड और फ़ुल-स्टैक के बीच बदलने के लिए ये फ़िल्टर इस्तेमाल करें।",
  "d.p-grid":"पाँच प्रोजेक्ट्स, हर एक के साथ तकनीक और GitHub व लाइव लिंक।",
  "d.c-links":"इन्हें LinkedIn, GitHub, LeetCode या ईमेल पर पाएँ।",
  "d.c-form":"यह फ़ॉर्म भरें, यह सीधे इनके मेल पर जाएगा।",
  "d.again":"{page} में स्वागत है! छोटे वॉकथ्रू के लिए मुझ पर क्लिक करें।",
  "q1":"हेहे, गुदगुदी हो रही है!","q2":"वाहू! मुझे क्लिक पसंद हैं!","q3":"मदद चाहिए? मैं आपका गाइड हूँ।","q4":"बीप बूप। एक्सप्लोर करना मज़ेदार है!"
},
bn: {
  "nav.home":"হোম","nav.about":"পরিচিতি","nav.skills":"দক্ষতা","nav.projects":"প্রজেক্ট","nav.contact":"যোগাযোগ",
  "menu.title":"ঘুরে দেখুন","menu.open":"সেকশন মেনু খুলুন",
  "hero.eyebrow":"পোর্টফোলিও","hero.hi":"হ্যালো, আমি","hero.sub":"জাভা ব্যাকএন্ড ও ওয়েব ডেভেলপার, যে বাস্তবসম্মত ও নির্ভরযোগ্য ডিজিটাল অভিজ্ঞতা তৈরিতে মনোযোগী।",
  "type1":"স্কেলেবল REST API তৈরি","type2":"ফুল-স্ট্যাক ওয়েব অ্যাপ ইঞ্জিনিয়ারিং","type3":"মাইক্রোসার্ভিস অপটিমাইজ করা",
  "hero.cta1":"প্রজেক্ট দেখুন","hero.cta2":"যোগাযোগ করুন","hero.tap":"ঘুরে দেখতে আমার ছবিতে ট্যাপ করুন",
  "tech.title":"যেসব প্রযুক্তিতে আমি কাজ করি","tech.sub":"আমার প্রতিদিনের টুলকিটের এক ঝলক।",
  "home.open":"খুলুন",
  "home.about":"আমি কে, কী পড়ছি এবং কী আমাকে অনুপ্রাণিত করে।",
  "home.skills":"ভাষা, ফ্রেমওয়ার্ক, টুল, শিক্ষা ও সার্টিফিকেশন।",
  "home.projects":"REST API, কানবান ড্যাশবোর্ড, এক্সপেন্স ট্র্যাকার ও হোম সার্ভিসেস প্ল্যাটফর্ম।",
  "home.contact":"ইন্টার্নশিপ ও সহযোগিতার জন্য উন্মুক্ত। হ্যালো বলুন।",
  "about.h":"একজন ডেভেলপার যে <span class='grad'>তৈরি করে শেখে।</span>",
  "about.sub":"আমি কে এবং কোন দিকে এগোচ্ছি, তার সংক্ষিপ্ত পরিচয়।",
  "about.p1":"আমি রাহুল কুমার রানা, শারদা বিশ্ববিদ্যালয়ে বি.টেক কম্পিউটার সায়েন্সের ছাত্র, জাভা ব্যাকএন্ড ও ওয়েব ডেভেলপমেন্টে আমার গভীর আগ্রহ।",
  "about.p2":"পরিচ্ছন্ন REST API ডিজাইন করা, ডেটাবেসে কাজ করা এবং ধারণাকে ছোট কার্যকর প্রোডাক্টে রূপ দেওয়া আমার পছন্দ। সমস্যা সমাধানের দক্ষতা বাড়াতে আমি নিয়মিত DSA অনুশীলন করি।",
  "about.p3":"আমি এমন ইন্টার্নশিপ ও সহযোগী প্রজেক্ট খুঁজছি যেখানে অবদান রাখতে, অভিজ্ঞ ইঞ্জিনিয়ারদের কাছ থেকে শিখতে এবং এগিয়ে যেতে পারি।",
  "fact.role":"ভূমিকা","fact.roleV":"জাভা ব্যাকএন্ড ও ওয়েব ডেভেলপার","fact.edu":"শিক্ষা","fact.eduV":"বি.টেক CSE · শারদা বিশ্ববিদ্যালয়","fact.open":"উন্মুক্ত","fact.openV":"ইন্টার্নশিপ ও সহযোগিতা",
  "focus1.t":"ব্যাকএন্ড ডেভেলপমেন্ট","focus1.d":"Spring Boot, Hibernate ও MySQL দিয়ে REST API।",
  "focus2.t":"ওয়েব ইন্টারফেস","focus2.d":"কোর JavaScript দিয়ে তৈরি রেসপন্সিভ ফ্রন্ট এন্ড।",
  "focus3.t":"সমস্যা সমাধান","focus3.d":"ডেটা স্ট্রাকচার ও অ্যালগরিদমের ১৬০ দিনের নিয়মিত অনুশীলন।",
  "stat1":"দিন DSA অনুশীলন","stat2":"তৈরি করা প্রজেক্ট","stat3":"প্রোগ্রামিং ভাষা",
  "skills.h":"কৌতূহলী মন। <span class='grad'>নির্মাতার মানসিকতা।</span>",
  "skills.sub":"আমার ব্যবহৃত প্রযুক্তি, শিক্ষা এবং অর্জিত মাইলফলকের এক ঝলক।",
  "skills.card":"দক্ষতা ও টুলকিট","skills.cardSub":"যা দিয়ে আমি শিখি ও তৈরি করি",
  "g.prog":"প্রোগ্রামিং","g.fw":"ফ্রেমওয়ার্ক ও লাইব্রেরি","g.tools":"টুল ও ডেটাবেস",
  "lv.medium":"মাঝারি স্তর","lv.basics":"বেসিক","lv.es6":"ES6+","lv.beginner":"শিক্ষানবিশ",
  "edu.title":"শিক্ষা","edu.sub":"একাডেমিক যাত্রা",
  "edu1.t":"বি.টেক — কম্পিউটার সায়েন্স","edu1.s":"শারদা বিশ্ববিদ্যালয়","edu1.d":"ফোকাস: প্রোগ্রামিং, সফটওয়্যার ডেভেলপমেন্ট ও সমস্যা সমাধান",
  "edu2.t":"ব্যাকএন্ড ডেভেলপমেন্ট যাত্রা","edu2.d":"জাভা, Spring ও REST API ডিজাইনের ভিত্তি গড়ে তোলা।",
  "cert.title":"সার্টিফিকেশন ও অর্জন",
  "cert1.t":"DSA ১৬০ ডেজ প্রবলেম সলভিং — GeeksforGeeks","cert1.d":"ডেটা স্ট্রাকচার ও অ্যালগরিদমে নিয়মিত অনুশীলন",
  "cert2.t":"Oracle Java Programming Workshop (2023)","cert2.d":"জাভা প্রোগ্রামিং ওয়ার্কশপ",
  "proj.h":"প্রজেক্ট যা <span class='grad'>ধারণাকে ইন্টারফেসে রূপ দেয়।</span>",
  "proj.sub":"ব্যাকএন্ড, ফ্রন্টএন্ড ও অ্যাপ্লিকেশন প্রজেক্টের বাছাই। প্রতিটি ক্ষেত্র দেখতে ফিল্টার করুন।",
  "f.all":"সব","f.backend":"ব্যাকএন্ড","f.frontend":"ফ্রন্টএন্ড","count.one":"১টি প্রজেক্ট","count.many":"{n}টি প্রজেক্ট",
  "tag.backend":"ব্যাকএন্ড","tag.frontend":"ফ্রন্টএন্ড","tag.full":"ফুল-স্ট্যাক অ্যাপ",
  "p1.t":"ই-কমার্স ব্যাকএন্ড REST API","p1.d":"Spring Boot, Hibernate ও MySQL দিয়ে স্কেলেবল REST API তৈরি করেছি, সঙ্গে নিরাপদ JWT অথেনটিকেশন ও Docker কন্টেইনার।",
  "p2.t":"ডায়নামিক কানবান ড্যাশবোর্ড","p2.d":"কোর JavaScript দিয়ে ড্র্যাগ-অ্যান্ড-ড্রপ ও পরিষ্কার ক্লায়েন্ট-সাইড স্টেট ম্যানেজমেন্টসহ রেসপন্সিভ টাস্ক ম্যানেজার তৈরি করেছি।",
  "p3.t":"এক্সপেন্স ম্যানেজমেন্ট অ্যাপ","p3.d":"অফলাইন-ফার্স্ট Android এক্সপেন্স ট্র্যাকার তৈরি করেছি, যাতে যাচাইকৃত ইনপুট ও একাধিক ডেটাবেস টেবিলে কাঠামোবদ্ধ ডেটা আছে।",
  "f.full":"ফুল-স্ট্যাক","tag.mobile":"ফুল-স্ট্যাক মোবাইল অ্যাপ","btn.github":"GitHub","btn.live":"লাইভ ডেমো","btn.cert":"সার্টিফিকেট দেখুন",
  "p4.t":"Easy Home Services Platform","p4.d":"অন-ডিমান্ড সার্ভিস মার্কেটপ্লেস তৈরি করেছি, যাতে দুটি React Native মোবাইল অ্যাপ (কাস্টমার ও প্রোভাইডার) এবং ব্যাকএন্ডে Spring Boot 3 ও MySQL REST API আছে। নিরাপদ OTP লগইন, BCrypt-হ্যাশড জব ভেরিফিকেশন PIN, ডিউটি ট্র্যাকিং ও Docker ডিপ্লয়মেন্ট তৈরি করেছি।",
  "p5.t":"Number Guessing Game in Bubble Form","p5.d":"Java, HTML, CSS ও JavaScript দিয়ে ইন্টারেক্টিভ নাম্বার গেসিং গেম তৈরি করেছি। র‍্যান্ডম নাম্বার জেনারেশন, ব্যাকএন্ড-ভিত্তিক গেস ভ্যালিডেশন, ডায়নামিক হিন্ট ও অ্যানিমেটেড ইন্টারঅ্যাকশন বানিয়েছি। ফ্রন্টএন্ড GitHub Pages-এ এবং Java ব্যাকএন্ড Render-এ Docker দিয়ে ডিপ্লয় করেছি।",
  "c.eyebrow":"চলুন কিছু তৈরি করি","c.h":"কোনো সুযোগ বা ধারণা আছে?",
  "c.p":"জাভা ব্যাকএন্ড ও ওয়েব ডেভেলপমেন্ট ইন্টার্নশিপ, সহযোগী প্রজেক্ট ও শেখার সুযোগে আমি আগ্রহী। এই লিংক বা ফর্মের মাধ্যমে যোগাযোগ করুন।",
  "c.email":"ইমেইল করুন","li.sub":"রাহুল কুমার রানা","gh.sub":"কোড ও প্রজেক্ট","lc.sub":"প্রবলেম সলভিং",
  "form.title":"আমাকে বার্তা পাঠান","form.sub":"আপনার বার্তা সরাসরি আমার ইনবক্সে যাবে।",
  "form.email":"আপনার ইমেইল (ঐচ্ছিক, উত্তরের জন্য)","form.vEmail":"সঠিক ইমেইল ঠিকানা দিন।","form.name":"নাম","form.phone":"ফোন নম্বর","form.alt":"বিকল্প ফোন (ঐচ্ছিক)","form.reason":"যোগাযোগের কারণ","form.note":"নোট",
  "r1":"ইন্টার্নশিপ / চাকরি","r2":"সহযোগিতা","r3":"ফ্রিল্যান্স","r4":"মতামত","r5":"অন্যান্য",
  "form.send":"বার্তা পাঠান","form.sending":"পাঠানো হচ্ছে…",
  "form.ok":"ধন্যবাদ! আপনার বার্তা পাঠানো হয়েছে।","form.err":"স্বয়ংক্রিয়ভাবে পাঠানো যায়নি।","form.mail":"আপনার ইমেইল অ্যাপে পাঠান",
  "form.vName":"অনুগ্রহ করে নাম লিখুন।","form.vPhone":"সঠিক ফোন নম্বর দিন।","form.vAlt":"বিকল্প ফোন সঠিক মনে হচ্ছে না।","form.vReason":"অনুগ্রহ করে একটি কারণ বেছে নিন।",
  "foot":"© ২০২৬ রাহুল কুমার রানা। সর্বস্বত্ব সংরক্ষিত।",
  "d.hi":"হ্যালো, আমি দেবো, এই পোর্টফোলিওর গাইড। চলুন, আপনাকে ঘুরিয়ে দেখাই!",
  "d.hero":"ইনি রাহুল। About, Skills, Projects বা Contact খুলতে ওঁর ছবিতে ট্যাপ করুন।",
  "d.tech":"ওঁর প্রযুক্তিগুলো এখানে ঘুরতে থাকে। দেখুন কীভাবে ঘুরে যায় আর ফিরে আসে।",
  "d.t-about":"পরিচিতি: রাহুল কে, কী পড়েন এবং কী অনুপ্রাণিত করে।",
  "d.t-skills":"দক্ষতা: ভাষা, ফ্রেমওয়ার্ক, টুল, শিক্ষা ও সার্টিফিকেট।",
  "d.t-projects":"প্রজেক্ট: REST API, কানবান ড্যাশবোর্ড ও এক্সপেন্স ট্র্যাকার।",
  "d.t-contact":"যোগাযোগ: লিংক ও একটি ফর্ম যা সরাসরি ওঁর ইনবক্সে যায়।",
  "d.end":"ট্যুর শেষ! আবার দেখতে যেকোনো সময় আমাকে ক্লিক করুন।",
  "d.a-bio":"ওঁর গল্প: বি.টেক CSE-র ছাত্র, জাভা ও ব্যাকএন্ড ভালোবাসেন।",
  "d.a-focus":"তিনটি ফোকাস: ব্যাকএন্ড, ওয়েব ইন্টারফেস ও সমস্যা সমাধান।",
  "d.a-stats":"সংখ্যায়: ১৬০ দিন DSA, ৫টি প্রজেক্ট, ৬টি ভাষা।",
  "d.s-skills":"দক্ষতা প্রোগ্রামিং, ফ্রেমওয়ার্ক ও টুলে ভাগ করা।",
  "d.s-edu":"শিক্ষা: শারদা বিশ্ববিদ্যালয়ে বি.টেক কম্পিউটার সায়েন্স।",
  "d.s-cert":"সার্টিফিকেট: GeeksforGeeks DSA ও Oracle Java ওয়ার্কশপ।",
  "d.p-filters":"ফ্রন্টএন্ড, ব্যাকএন্ড ও ফুল-স্ট্যাক বদলাতে এই ফিল্টার ব্যবহার করুন।",
  "d.p-grid":"পাঁচটি প্রজেক্ট, প্রতিটির সঙ্গে প্রযুক্তি এবং GitHub ও লাইভ লিংক।",
  "d.c-links":"ওঁকে পাবেন LinkedIn, GitHub, LeetCode বা ইমেইলে।",
  "d.c-form":"এই ফর্ম পূরণ করুন, এটি সরাসরি ওঁর মেইলে যাবে।",
  "d.again":"{page}-এ স্বাগতম! ছোট ওয়াকথ্রুর জন্য আমাকে ক্লিক করুন।",
  "q1":"হিহি, সুড়সুড়ি লাগছে!","q2":"ওয়াহু! আমি ক্লিক ভালোবাসি!","q3":"সাহায্য লাগবে? আমি আপনার গাইড।","q4":"বিপ বুপ। ঘুরে দেখা মজার!"
}
};
const DEVO_NAME = { en:"Rano", hi:"देवो", bn:"দেবো" };

let lang = store.get("lang");
if (!T[lang]) lang = "en";
const t = (k, vars) => {
  let s = (T[lang] && T[lang][k]) ?? T.en[k] ?? k;
  if (vars) for (const v in vars) s = s.replace("{" + v + "}", vars[v]);
  return s;
};

/* ---------- static data rendered by JS ---------- */
const SKILLS = [
  ["g.prog", [["Java","lv.medium"],["Python","lv.basics"],["C","lv.basics"],["JavaScript","lv.es6"],["HTML"],["CSS"]]],
  ["g.fw",   [["Spring Boot"],["Spring Framework"],["React.js","lv.beginner"]]],
  ["g.tools",[["MySQL"],["Git / GitHub"],["Docker"],["Postman"]]]
];
const TECH = [
  ["Java","#f89820"],["Python","#3b82f6"],["C","#94a3b8"],["JavaScript","#facc15"],["HTML","#fb923c"],["CSS","#38bdf8"],
  ["Spring Boot","#34d399"],["Spring Framework","#4ade80"],["React.js","#22d3ee"],["Hibernate","#a78bfa"],
  ["MySQL","#38bdf8"],["Git / GitHub","#fb7185"],["Docker","#60a5fa"],["Postman","#fb923c"]
];
const LINKS = [
  { key:"li", name:"LinkedIn", href:CONFIG.linkedin, icon:"in" },
  { key:"gh", name:"GitHub", href:CONFIG.github, svg:"i-github" },
  { key:"lc", name:"LeetCode", href:CONFIG.leetcode, icon:"&lt;/&gt;" },
  { key:"em", name:"Email", href:"mailto:" + CONFIG.email, icon:null, svg:"i-mail", sub:CONFIG.email }
];

function renderSkills() {
  $("#skillGroups").innerHTML = SKILLS.map(([g, items]) =>
    `<div class="group"><h3 data-i18n="${g}"></h3><div class="pills">${items.map(([n, lv]) =>
      `<span class="pill">${n}${lv ? ` <small data-i18n="${lv}"></small>` : ""}</span>`).join("")}</div></div>`).join("");
}
function renderLinks() {
  $("#links").innerHTML = LINKS.map(l =>
    `<a class="link-tile" href="${l.href}" target="_blank" rel="noopener noreferrer"><span class="ico">${l.svg ? `<svg class="i"><use href="#${l.svg}"/></svg>` : l.icon}</span><div><b>${l.name}</b><small ${l.sub ? "" : `data-i18n="${l.key}.sub"`}>${l.sub || ""}</small></div></a>`).join("");
  $("#mailBtn").href = "mailto:" + CONFIG.email;
}
function renderProjLinks() {
  const defs = [["github", "i-github", "btn.github"], ["live", "i-link", "btn.live"]];
  $$(".proj-links").forEach(box => {
    const l = CONFIG.projects[box.dataset.proj] || {};
    box.innerHTML = defs.map(([k, ic, lab]) => {
      const inner = `<svg class="i"><use href="#${ic}"/></svg><span data-i18n="${lab}"></span>`;
      return l[k] ? `<a class="repo" href="${l[k]}" target="_blank" rel="noopener noreferrer">${inner}</a>` : `<span class="repo off" aria-disabled="true">${inner}</span>`;
    }).join("");
  });
}
function renderCertLinks() {
  $$(".cert-link").forEach(box => {
    const f = CONFIG.certs[box.dataset.cert];
    box.innerHTML = f ? `<a class="repo cert" href="${f}" target="_blank" rel="noopener noreferrer"><svg class="i"><use href="#i-link"/></svg><span data-i18n="btn.cert"></span></a>` : "";
  });
}
function renderTech() {
  $("#techGrid").innerHTML = TECH.map(([n, c]) => `<div class="tech" style="--c:${c}"><i></i>${n}</div>`).join("");
}

/* ---------- i18n apply ---------- */
function applyLang() {
  document.documentElement.lang = lang;
  $$("[data-i18n]").forEach(e => { e.textContent = t(e.dataset.i18n); });
  $$("[data-i18n-html]").forEach(e => { e.innerHTML = t(e.dataset.i18nHtml); });
  $$("[data-i18n-aria]").forEach(e => e.setAttribute("aria-label", t(e.dataset.i18nAria)));
  $("#langLabel").textContent = lang.toUpperCase();
  $$("#langList button").forEach(b => b.setAttribute("aria-selected", b.dataset.lang === lang));
  $(".devo-bubble b").textContent = DEVO_NAME[lang];
  updateCount();
  restartTyping();
}

/* ---------- theme ---------- */
function setTheme(th) {
  document.documentElement.dataset.theme = th;
  store.set("theme", th);
  readNetColors();
}
(function initTheme() {
  const saved = store.get("theme");
  document.documentElement.dataset.theme = saved || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
})();
$("#themeBtn").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

/* ---------- language dropdown ---------- */
const langBox = $("#lang");
$("#langBtn").addEventListener("click", e => {
  e.stopPropagation();
  const open = langBox.classList.toggle("open");
  $("#langBtn").setAttribute("aria-expanded", open);
});
$("#langList").addEventListener("click", e => {
  const b = e.target.closest("[data-lang]");
  if (!b) return;
  lang = b.dataset.lang; store.set("lang", lang);
  langBox.classList.remove("open"); $("#langBtn").setAttribute("aria-expanded", "false");
  applyLang();
});

/* ---------- typing effect ---------- */
let typeTimer = 0, typeRun = 0;
function restartTyping() {
  clearTimeout(typeTimer);
  const run = ++typeRun, el = $("#typing");
  const phrases = ["type1", "type2", "type3"].map(t);
  if (reduced) { el.textContent = phrases[0]; return; }
  let p = 0, i = 0, del = false;
  (function tick() {
    if (run !== typeRun) return;
    const s = phrases[p];
    el.textContent = s.slice(0, i);
    let d = del ? 28 : 65;
    if (!del && i === s.length) { del = true; d = 1700; }
    else if (del && i === 0) { del = false; p = (p + 1) % phrases.length; d = 350; }
    else i += del ? -1 : 1;
    typeTimer = setTimeout(tick, d);
  })();
}

/* ---------- rotating technologies ---------- */
function startTechRotation() {
  if (reduced) return;
  $$("#techGrid .tech").forEach((chip, idx) => {
    const cycle = delay => setTimeout(() => {
      chip.classList.add("out");
      setTimeout(() => { chip.classList.remove("out"); cycle(2500 + Math.random() * 3500); }, 2000 + Math.random() * 1000);
    }, delay);
    cycle(1200 + idx * 450 + Math.random() * 1500);
  });
}

/* ---------- view routing ---------- */
const VIEWS = ["home", "about", "skills", "projects", "contact"];
let current = null;
const visited = new Set();
function viewFromHash() {
  const h = location.hash.replace("#", "");
  return VIEWS.includes(h) ? h : "home";
}
function showView(name, first) {
  const next = $("#view-" + name), prev = current && $("#view-" + current);
  const finish = () => {
    $$(".view").forEach(v => v.classList.remove("active", "leave"));
    next.classList.add("active");
    window.scrollTo({ top: 0, behavior: "auto" });
    current = name;
    $$("#menu button").forEach(b => b.classList.toggle("current", b.dataset.go === name));
    observeReveals();
  };
  if (first || !prev || reduced) { finish(); return Promise.resolve(); }
  prev.classList.add("leave");
  return sleep(220).then(finish);
}
function go(name) {
  closeMenu();
  if (name === current) { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
  if (location.hash !== "#" + name) location.hash = name; else onRoute();
}
async function onRoute() {
  const name = viewFromHash();
  if (name === current) return;
  const first = current === null;
  if (!first) devoSwapOut();
  await showView(name, first);
  if (!first) devoSwapIn();
  if (!first) devoOnView(name);
}
window.addEventListener("hashchange", onRoute);
document.addEventListener("click", e => {
  const g = e.target.closest("[data-go]");
  if (g) { e.preventDefault(); go(g.dataset.go); }
});

/* ---------- reveal on scroll ---------- */
const io = "IntersectionObserver" in window
  ? new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: .12 })
  : null;
function observeReveals() {
  $$(".view.active .reveal:not(.in)").forEach(el => io ? io.observe(el) : el.classList.add("in"));
}

/* ---------- section menu (photo click) ---------- */
const menu = $("#menu");
let menuTrigger = null;
function openMenu(trigger) {
  if (touring) { stopTour(); window.scrollTo({ top: scrollY, behavior: "auto" }); }
  menuTrigger = trigger; menuY = scrollY;
  const r = trigger.getBoundingClientRect(), w = 230, h = menu.offsetHeight || 250;
  const hero = trigger.id === "heroPhoto";
  let left = r.left + r.width / 2 - w / 2;
  let top = hero ? Math.min(r.bottom - h - 18, innerHeight - h - 16) : r.bottom + 12;
  left = Math.max(12, Math.min(left, innerWidth - w - 12));
  top = Math.max(76, top);
  menu.style.left = left + "px"; menu.style.top = top + "px";
  menu.classList.add("open");
  trigger.setAttribute("aria-expanded", "true");
  $("#menu button").focus({ preventScroll: true });
}
function closeMenu() {
  menu.classList.remove("open");
  if (menuTrigger) menuTrigger.setAttribute("aria-expanded", "false");
  menuTrigger = null;
}
[$("#avatarBtn"), $("#heroPhoto")].forEach(b => b.addEventListener("click", e => {
  e.stopPropagation();
  menu.classList.contains("open") && menuTrigger === b ? closeMenu() : openMenu(b);
}));
document.addEventListener("click", e => {
  if (!e.target.closest("#menu")) closeMenu();
  if (!e.target.closest("#lang")) { langBox.classList.remove("open"); $("#langBtn").setAttribute("aria-expanded", "false"); }
});
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeMenu(); langBox.classList.remove("open"); }
});
let menuY = 0;
window.addEventListener("scroll", () => { if (menu.classList.contains("open") && Math.abs(scrollY - menuY) > 60) closeMenu(); }, { passive: true });

/* ---------- project filters ---------- */
let filter = "all";
function updateCount() {
  const n = $$("#projGrid .proj:not([hidden])").length;
  $("#projCount").textContent = n === 1 ? t("count.one") : t("count.many", { n });
}
$$(".chip[data-filter]").forEach(c => c.addEventListener("click", () => {
  filter = c.dataset.filter;
  $$(".chip[data-filter]").forEach(x => x.setAttribute("aria-pressed", x === c));
  $$("#projGrid .proj").forEach(card => { card.hidden = filter !== "all" && card.dataset.cat !== filter; });
  updateCount();
}));

/* ---------- contact form ---------- */
const form = $("#form"), statusEl = $("#status");
const phoneOk = v => { const d = v.replace(/\D/g, ""); return /^[+\d][\d\s\-()]*$/.test(v.trim()) && d.length >= 7 && d.length <= 15; };
function setStatus(msg, cls, html) {
  statusEl.className = "status " + (cls || "");
  html ? statusEl.innerHTML = msg : statusEl.textContent = msg;
}
form.addEventListener("submit", async e => {
  e.preventDefault();
  const fd = new FormData(form);
  const name = (fd.get("name") || "").trim(), phone = (fd.get("phone") || "").trim();
  const alt = (fd.get("alt") || "").trim(), email = (fd.get("email") || "").trim(), reason = fd.get("reason"), note = (fd.get("note") || "").trim();
  if (fd.get("_honey")) return;
  const bad = !name ? ["name", "form.vName"] : !phoneOk(phone) ? ["phone", "form.vPhone"]
    : alt && !phoneOk(alt) ? ["alt", "form.vAlt"] : email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) ? ["email", "form.vEmail"] : !reason ? ["reason", "form.vReason"] : null;
  if (bad) { setStatus(t(bad[1]), "err"); const f = form.elements[bad[0]]; (f.focus ? f : f[0]).focus(); return; }

  const btn = $("#sendBtn");
  btn.disabled = true; $("#sendLabel").textContent = t("form.sending"); setStatus("");
  const subject = `Portfolio contact: ${reason} — ${name}`;
  const body = `Name: ${name}\nPhone: ${phone}\nAlternate phone: ${alt || "-"}\nEmail: ${email || "-"}\nReason: ${reason}\n\nNote:\n${note || "-"}`;
  try {
    const res = await fetch("https://formsubmit.co/ajax/" + CONFIG.email, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, ...(email && { email }), phone, alternate_phone: alt || "-", reason, note: note || "-", _subject: subject, _captcha: "false", _template: "table" })
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok || data.success === "false" || data.success === false) throw new Error("send failed");
    setStatus(t("form.ok"), "ok"); form.reset();
  } catch {
    const href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus(`${t("form.err")} <a href="${href}">${t("form.mail")}</a>`, "err", true);
  } finally {
    btn.disabled = false; $("#sendLabel").textContent = t("form.send");
  }
});

/* ---------- Devo: the guide ball ---------- */
const devo = $("#devo"), devoFx = $(".devo-fx"), ball = $("#devoBall"), face = $("#devoFace");
const bubble = $("#devoBubble"), bubbleText = $("#devoText");
const SIZE = 58, MOODS = ["😆", "😍", "🤩", "😎", "🥳", "😜", "🤗"];
let pos = { x: 0, y: 0 }, token = 0, touring = false, moodIdx = 0, quipIdx = 0, bubbleTimer = 0;

function dock() { return { x: innerWidth - SIZE - 18, y: innerHeight - SIZE - 18 }; }
function moveTo(p, instant) {
  p = { x: Math.max(8, Math.min(p.x, innerWidth - SIZE - 8)), y: Math.max(76, Math.min(p.y, innerHeight - SIZE - 8)) };
  pos = p;
  if (instant) { devo.style.transition = "none"; }
  devo.style.transform = `translate3d(${p.x}px,${p.y}px,0)`;
  if (instant) { devo.offsetHeight; devo.style.transition = ""; }
  placeBubble();
}
function placeBubble() {
  const up = pos.y > innerHeight * .45, lft = pos.x > innerWidth * .4;
  bubble.classList.toggle("up", up); bubble.classList.toggle("down", !up);
  bubble.classList.toggle("lft", lft); bubble.classList.toggle("rgt", !lft);
}
function say(text, ms) {
  clearTimeout(bubbleTimer);
  bubbleText.textContent = text;
  placeBubble();
  bubble.classList.add("show");
  if (ms) bubbleTimer = setTimeout(hideBubble, ms);
}
function hideBubble() { bubble.classList.remove("show"); }
function setFace(f) { face.textContent = f; }

function burst() {
  const bits = ["✨", "💙", "⭐", "💜"];
  for (let i = 0; i < 7; i++) {
    const s = document.createElement("span");
    s.textContent = bits[i % bits.length];
    s.style.cssText = "position:absolute;left:22px;top:20px;font-size:14px;pointer-events:none";
    devo.appendChild(s);
    const a = (Math.PI * 2 * i) / 7 + Math.random() * .5, d = 45 + Math.random() * 30;
    s.animate([{ transform: "translate(0,0) scale(.4)", opacity: 1 }, { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d}px) scale(1.1)`, opacity: 0 }],
      { duration: 800, easing: "cubic-bezier(.2,.8,.3,1)" }).onfinish = () => s.remove();
  }
}
function react() {
  ball.classList.remove("react"); void ball.offsetWidth; ball.classList.add("react");
  setFace(MOODS[moodIdx++ % MOODS.length]);
  burst();
}

function anchorFor(el) {
  const r = el.getBoundingClientRect();
  return { x: r.right - 34, y: r.top < 90 ? r.top + 12 : r.top - 26 };
}
async function scrollToEl(el) {
  el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
  let last = -1, still = 0;
  for (let i = 0; i < 40 && still < 3; i++) {
    await sleep(60);
    still = Math.abs(scrollY - last) < 1 ? still + 1 : 0;
    last = scrollY;
  }
}
async function visit(el, text, mood, ms) {
  const my = token;
  if (el) {
    await scrollToEl(el);
    if (my !== token) return false;
    moveTo(anchorFor(el));
    await sleep(reduced ? 50 : 1000);
    if (my !== token) return false;
  }
  setFace(mood || "😊");
  say(text, ms);
  await sleep(ms + 250);
  return my === token;
}
function stepsFor(view) {
  return $$(`#view-${view} [data-devo]`).map(el => ({ el, key: el.dataset.devo }));
}
const MOOD_BY_KEY = { hero:"👋", tech:"🤓", "t-about":"🙂", "t-skills":"💡", "t-projects":"🚀", "t-contact":"💌" };
async function tour(view, withGreeting) {
  const my = ++token;
  touring = true;
  if (withGreeting) {
    moveTo(dock());
    setFace("👋"); say(t("d.hi"), 3200);
    await sleep(3450);
    if (my !== token) return;
  }
  for (const s of stepsFor(view)) {
    if (!(await visit(s.el, t("d." + s.key), MOOD_BY_KEY[s.key] || "😊", 2800))) return;
  }
  if (view === "home") {
    $("#view-home").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    moveTo(dock()); setFace("😊"); say(t("d.end"), 2800); await sleep(3000);
    if (my !== token) return;
  }
  endTour();
}
function endTour() {
  touring = false; hideBubble(); setFace("😊");
  moveTo(dock());
}
function stopTour() { token++; endTour(); }

function devoSwapOut() { stopTour(); devoFx.classList.remove("swap-in"); devoFx.classList.add("swap-out"); }
function devoSwapIn() {
  moveTo(dock(), true);
  devoFx.classList.remove("swap-out"); void devoFx.offsetWidth; devoFx.classList.add("swap-in");
}
async function devoOnView(name) {
  await sleep(reduced ? 0 : 700);
  if (name !== current) return;
  if (!visited.has(name)) { visited.add(name); tour(name, false); }
  else {
    setFace("🙂"); say(t("d.again", { page: t("nav." + name) }), 3000);
    token++; touring = false;
    const my = token; await sleep(3200);
    if (my === token) { hideBubble(); setFace("😊"); }
  }
}

ball.addEventListener("click", () => {
  react();
  if (touring) return;
  const my = ++token;
  say(t("q" + (1 + (quipIdx++ % 4))), 2200);
  sleep(2500).then(() => { if (my === token) tour(current, false); });
});
$("#devoX").addEventListener("click", stopTour);
window.addEventListener("resize", () => { if (!touring) moveTo(dock(), true); });

/* ---------- interactive network background ---------- */
const cv = $("#net"), ctx = cv.getContext("2d");
let W = 0, H = 0, pts = [], netLine = "120,150,255", netDot = "251,191,36";
const mouse = { x: -9999, y: -9999 };
function readNetColors() {
  const cs = getComputedStyle(document.documentElement);
  netLine = cs.getPropertyValue("--net-line").trim(); netDot = cs.getPropertyValue("--net-dot").trim();
}
function resizeNet() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  W = innerWidth; H = innerHeight;
  cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const n = Math.round(Math.min(110, (W * H) / 15000));
  pts = Array.from({ length: n }, () => ({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3, r: Math.random() * 1.4 + .7 }));
}
function drawNet() {
  ctx.clearRect(0, 0, W, H);
  for (const p of pts) {
    const dx = mouse.x - p.x, dy = mouse.y - p.y, d = Math.hypot(dx, dy);
    if (d < 190 && d > 1) { p.vx += (dx / d) * .012; p.vy += (dy / d) * .012; }
    p.vx *= .985; p.vy *= .985;
    const sp = Math.hypot(p.vx, p.vy);
    if (sp < .08) { p.vx += (Math.random() - .5) * .02; p.vy += (Math.random() - .5) * .02; }
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0 || p.x > W) p.vx *= -1;
    if (p.y < 0 || p.y > H) p.vy *= -1;
  }
  ctx.lineWidth = 1;
  for (let i = 0; i < pts.length; i++) {
    const a = pts[i];
    for (let j = i + 1; j < pts.length; j++) {
      const b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d < 135) { ctx.strokeStyle = `rgba(${netLine},${(1 - d / 135) * .22})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
    }
    const dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
    if (dm < 190) { ctx.strokeStyle = `rgba(${netLine},${(1 - dm / 190) * .55})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
    ctx.fillStyle = `rgba(${netDot},${dm < 190 ? .9 : .5})`;
    ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fill();
  }
}
let raf = 0;
function loop() { drawNet(); raf = requestAnimationFrame(loop); }
window.addEventListener("resize", resizeNet);
window.addEventListener("pointermove", e => {
  mouse.x = e.clientX; mouse.y = e.clientY;
  const s = $("#spot").style; s.setProperty("--mx", e.clientX + "px"); s.setProperty("--my", e.clientY + "px");
}, { passive: true });
document.addEventListener("pointerleave", () => { mouse.x = mouse.y = -9999; });
document.addEventListener("visibilitychange", () => {
  if (document.hidden) cancelAnimationFrame(raf); else if (!reduced) loop();
});

/* ---------- photo fallback (initials stay if photo.jpg is missing) ---------- */
$$("img.ph").forEach(img => {
  const drop = () => img.remove();
  img.addEventListener("error", drop);
  if (img.complete && img.naturalWidth === 0) drop();
});

/* ---------- init ---------- */
renderSkills(); renderLinks(); renderTech(); renderProjLinks(); renderCertLinks();
applyLang();
readNetColors(); resizeNet();
reduced ? drawNet() : loop();
startTechRotation();
moveTo(dock(), true);
devoFx.classList.add("swap-in");
onRoute().then(async () => {
  visited.add(current);
  await sleep(reduced ? 200 : 1000);
  tour(current, true);
});
})();
