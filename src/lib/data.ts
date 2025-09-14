import type { Service, Testimonial } from './types';
import { Code, Smartphone, BrainCircuit, Cloud, BarChart, ShieldCheck, Megaphone, Briefcase } from 'lucide-react';
import placeholderImages from '@/lib/placeholder-images.json';

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Crafting responsive, high-performance websites and web applications.',
    longDescription: 'Our web development team builds custom websites and applications tailored to your business needs. We focus on modern technologies, performance optimization, and scalable architectures to deliver a seamless user experience across all devices.',
    icon: Code,
    projects: [
      { title: 'E-commerce Platform "ShopSphere"', description: 'Developed a fully-featured online store for a fashion retailer, resulting in a 40% increase in online sales.', image: placeholderImages.webDev1.src, aiHint: placeholderImages.webDev1.aiHint },
      { title: 'Corporate Portal for "Financore"', description: 'A sleek, professional portal for a major financial services firm, improving client data access and security.', image: placeholderImages.webDev2.src, aiHint: placeholderImages.webDev2.aiHint },
    ],
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    shortDescription: 'Building intuitive and engaging mobile apps for iOS and Android.',
    longDescription: 'We design and develop native and cross-platform mobile applications that provide real value to your users. From initial concept to App Store submission, we handle the entire lifecycle of your mobile project.',
    icon: Smartphone,
    projects: [
      { title: 'Community App "Connect-U"', description: 'A community-based app for sharing local events and experiences, achieving 50k+ downloads in 6 months.', image: placeholderImages.mobile1.src, aiHint: placeholderImages.mobile1.aiHint },
      { title: 'Fitness Tracker "FitLife"', description: 'An iOS & Android app to monitor workouts, nutrition, and connect with trainers, featured on the App Store.', image: placeholderImages.mobile2.src, aiHint: placeholderImages.mobile2.aiHint },
    ],
  },
  {
    slug: 'ai-ml',
    title: 'AI/ML',
    shortDescription: 'Leveraging AI and Machine Learning to unlock business insights.',
    longDescription: 'Our AI/ML experts help you harness the power of your data. We develop custom models for predictive analytics, natural language processing, computer vision, and more to automate processes and drive intelligent decision-making.',
    icon: BrainCircuit,
    projects: [
      { title: 'Predictive Analytics Engine', description: 'An AI-powered system that provides personalized product recommendations, increasing user engagement by 25%.', image: placeholderImages.ai1.src, aiHint: placeholderImages.ai1.aiHint },
      { title: 'Customer Support Chatbot "AssistAI"', description: 'A 24/7 customer service chatbot that resolves over 80% of user queries automatically, reducing support tickets.', image: placeholderImages.ai2.src, aiHint: placeholderImages.ai2.aiHint },
    ],
  },
  {
    slug: 'cloud',
    title: 'Cloud Solutions',
    shortDescription: 'Scalable cloud infrastructure and DevOps solutions.',
    longDescription: 'We help you migrate, manage, and optimize your infrastructure on leading cloud platforms like AWS, GCP, and Azure. Our DevOps practices ensure continuous integration, delivery, and robust security for your applications.',
    icon: Cloud,
    projects: [
      { title: 'SaaS Backend for "InnovateSaaS"', description: 'Designed a multi-tenant, scalable cloud backend for a B2B SaaS company, supporting rapid user growth.', image: placeholderImages.cloud1.src, aiHint: placeholderImages.cloud1.aiHint },
      { title: 'Data Warehouse Modernization', description: 'Migrated a legacy on-premise data warehouse to a modern cloud solution, enabling real-time analytics.', image: placeholderImages.cloud2.src, aiHint: placeholderImages.cloud2.aiHint },
    ],
  },
  {
    slug: 'seo',
    title: 'SEO',
    shortDescription: 'Boosting your online visibility and driving organic traffic.',
    longDescription: 'Our SEO strategies are designed to increase your search engine rankings, attract qualified leads, and grow your online presence. We cover everything from technical SEO and content strategy to link building and local search.',
    icon: BarChart,
    projects: [
      { title: 'Organic Growth for "EcoGoods"', description: 'Increased organic traffic by 300% in 6 months for an e-commerce client through targeted content strategy.', image: placeholderImages.seo1.src, aiHint: placeholderImages.seo1.aiHint },
      { title: 'Local SEO for "CityDiner"', description: 'Achieved top 3 Google rankings for all target keywords in the client\'s local area, doubling foot traffic.', image: placeholderImages.seo2.src, aiHint: placeholderImages.seo2.aiHint },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription: 'Protecting your digital assets with robust security measures.',
    longDescription: 'We provide comprehensive cybersecurity services, including vulnerability assessments, penetration testing, security audits, and incident response. Protect your business from evolving threats with our proactive security solutions.',
    icon: ShieldCheck,
    projects: [
      { title: 'Fintech Security Audit', description: 'Identified and remediated critical vulnerabilities for a fast-growing fintech startup, securing millions in assets.', image: placeholderImages.security1.src, aiHint: placeholderImages.security1.aiHint },
      { title: 'HIPAA Compliance for "HealthTrack"', description: 'Helped a healthcare provider achieve and maintain HIPAA compliance for their patient data systems.', image: placeholderImages.security2.src, aiHint: placeholderImages.security2.aiHint },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Integrated marketing strategies to grow your brand online.',
    longDescription: 'Our digital marketing services encompass PPC, social media marketing, content marketing, and email campaigns. We create data-driven strategies to engage your audience, generate leads, and maximize your ROI.',
    icon: Megaphone,
    projects: [
      { title: 'Google Ads for "StyleNow"', description: 'Managed a Google Ads campaign that achieved a 5x return on ad spend, driving significant e-commerce revenue.', image: placeholderImages.marketing1.src, aiHint: placeholderImages.marketing1.aiHint },
      { title: 'Social Media for "GourmetBox"', description: 'Grew a food subscription client\'s Instagram following from 1k to 50k in one year through engaging content.', image: placeholderImages.marketing2.src, aiHint: placeholderImages.marketing2.aiHint },
    ],
  },
  {
    slug: 'consulting',
    title: 'IT Consulting',
    shortDescription: 'Strategic guidance to align your technology with business goals.',
    longDescription: 'Our IT consulting services provide you with a strategic roadmap for your technology investments. We help with digital transformation, IT strategy, and project management to ensure your technology drives business success.',
    icon: Briefcase,
    projects: [
      { title: 'Digital Transformation Strategy', description: 'Advised a traditional manufacturing company on their successful transition to a modern, automated IT infrastructure.', image: placeholderImages.consulting1.src, aiHint: placeholderImages.consulting1.aiHint },
      { title: '5-Year Tech Roadmap', description: 'Developed a comprehensive 5-year technology plan for a large non-profit organization to scale their impact.', image: placeholderImages.consulting2.src, aiHint: placeholderImages.consulting2.aiHint },
    ],
  },
];

export const allTestimonials: Testimonial[] = [
    { quote: "RudraCode's web development team delivered a sleek, fast website that has significantly boosted our online presence. Their process was transparent and collaborative from start to finish.", author: "Jane Doe", company: "Innovate Inc." },
    { quote: "The mobile app developed by RudraCode is a core part of our business. It's intuitive, reliable, and our users love it. Their team's expertise in mobile development is unmatched.", author: "John Smith", company: "ConnectApp" },
    { quote: "We approached RudraCode with a complex AI/ML problem, and they delivered an elegant solution that has transformed our data analytics capabilities. They are true experts in machine learning.", author: "Emily White", company: "DataDriven Co." },
    { quote: "Migrating to the cloud was a daunting task, but RudraCode's cloud solutions team made it seamless. Our infrastructure is now more scalable and secure than ever before.", author: "Michael Brown", company: "ScaleUp Solutions" },
    { quote: "Our organic traffic has skyrocketed thanks to RudraCode's SEO services. They provided a clear strategy and executed it flawlessly, delivering results beyond our expectations.", author: "Sarah Green", company: "MarketBloom" },
    { quote: "The cybersecurity audit from RudraCode was incredibly thorough. They identified vulnerabilities we didn't know existed and helped us secure our systems completely. I can finally sleep at night.", author: "David Black", company: "SecureTransact" },
    { quote: "Their digital marketing campaigns have been a game-changer for our lead generation. RudraCode understands our market and knows how to reach our target audience effectively.", author: "Laura Blue", company: "GrowthLeap" },
    { quote: "The IT consulting from RudraCode provided us with a clear technology roadmap that aligns perfectly with our business goals. Their strategic advice has been invaluable.", author: "Chris Pine", company: "Strategic Ventures" }
];
