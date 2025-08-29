import type { Service, Testimonial } from './types';
import { Code, Smartphone, BrainCircuit, Cloud, BarChart, ShieldCheck, Megaphone, Briefcase } from 'lucide-react';

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    shortDescription: 'Crafting responsive, high-performance websites and web applications.',
    longDescription: 'Our web development team builds custom websites and applications tailored to your business needs. We focus on modern technologies, performance optimization, and scalable architectures to deliver a seamless user experience across all devices.',
    icon: Code,
    projects: [
      { title: 'E-commerce Platform', description: 'A fully-featured online store with Stripe integration and a custom CMS.', image: 'https://picsum.photos/600/400', aiHint: 'e-commerce website' },
      { title: 'Corporate Website', description: 'A sleek, professional website for a major financial services firm.', image: 'https://picsum.photos/600/400', aiHint: 'corporate business' },
    ],
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    shortDescription: 'Building intuitive and engaging mobile apps for iOS and Android.',
    longDescription: 'We design and develop native and cross-platform mobile applications that provide real value to your users. From initial concept to App Store submission, we handle the entire lifecycle of your mobile project.',
    icon: Smartphone,
    projects: [
      { title: 'Social Media App', description: 'A community-based app for sharing photos and experiences.', image: 'https://picsum.photos/600/400', aiHint: 'mobile application' },
      { title: 'Fitness Tracker', description: 'An iOS and Android app to monitor workouts and nutrition.', image: 'https://picsum.photos/600/400', aiHint: 'fitness app' },
    ],
  },
  {
    slug: 'ai-ml',
    title: 'AI/ML',
    shortDescription: 'Leveraging AI and Machine Learning to unlock business insights.',
    longDescription: 'Our AI/ML experts help you harness the power of your data. We develop custom models for predictive analytics, natural language processing, computer vision, and more to automate processes and drive intelligent decision-making.',
    icon: BrainCircuit,
    projects: [
      { title: 'Recommendation Engine', description: 'An AI-powered system to provide personalized product recommendations.', image: 'https://picsum.photos/600/400', aiHint: 'artificial intelligence' },
      { title: 'Chatbot Assistant', description: 'A customer service chatbot that resolves 80% of user queries automatically.', image: 'https://picsum.photos/600/400', aiHint: 'chatbot interface' },
    ],
  },
  {
    slug: 'cloud',
    title: 'Cloud Solutions',
    shortDescription: 'Scalable cloud infrastructure and DevOps solutions.',
    longDescription: 'We help you migrate, manage, and optimize your infrastructure on leading cloud platforms like AWS, GCP, and Azure. Our DevOps practices ensure continuous integration, delivery, and robust security for your applications.',
    icon: Cloud,
    projects: [
      { title: 'SaaS Architecture', description: 'Designed a multi-tenant, scalable cloud backend for a growing SaaS company.', image: 'https://picsum.photos/600/400', aiHint: 'cloud computing' },
      { title: 'Data Warehouse Migration', description: 'Migrated a legacy on-premise data warehouse to a modern cloud solution.', image: 'https://picsum.photos/600/400', aiHint: 'data analytics' },
    ],
  },
  {
    slug: 'seo',
    title: 'SEO',
    shortDescription: 'Boosting your online visibility and driving organic traffic.',
    longDescription: 'Our SEO strategies are designed to increase your search engine rankings, attract qualified leads, and grow your online presence. We cover everything from technical SEO and content strategy to link building and local search.',
    icon: BarChart,
    projects: [
      { title: 'Organic Growth Campaign', description: 'Increased organic traffic by 300% in 6 months for a retail client.', image: 'https://picsum.photos/600/400', aiHint: 'search engine' },
      { title: 'Local SEO Domination', description: 'Achieved top 3 rankings for all target keywords in the client\'s local area.', image: 'https://picsum.photos/600/400', aiHint: 'marketing chart' },
    ],
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity',
    shortDescription: 'Protecting your digital assets with robust security measures.',
    longDescription: 'We provide comprehensive cybersecurity services, including vulnerability assessments, penetration testing, security audits, and incident response. Protect your business from evolving threats with our proactive security solutions.',
    icon: ShieldCheck,
    projects: [
      { title: 'Security Audit', description: 'Identified and remediated critical vulnerabilities for a fintech startup.', image: 'https://picsum.photos/600/400', aiHint: 'cyber security' },
      { title: 'Compliance Implementation', description: 'Helped a healthcare provider achieve HIPAA compliance.', image: 'https://picsum.photos/600/400', aiHint: 'data protection' },
    ],
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Integrated marketing strategies to grow your brand online.',
    longDescription: 'Our digital marketing services encompass PPC, social media marketing, content marketing, and email campaigns. We create data-driven strategies to engage your audience, generate leads, and maximize your ROI.',
    icon: Megaphone,
    projects: [
      { title: 'PPC Campaign', description: 'Managed a Google Ads campaign with a 5x return on ad spend.', image: 'https://picsum.photos/600/400', aiHint: 'digital marketing' },
      { title: 'Social Media Growth', description: 'Grew a client\'s Instagram following from 1k to 50k in one year.', image: 'https://picsum.photos/600/400', aiHint: 'social media' },
    ],
  },
  {
    slug: 'consulting',
    title: 'IT Consulting',
    shortDescription: 'Strategic guidance to align your technology with business goals.',
    longDescription: 'Our IT consulting services provide you with a strategic roadmap for your technology investments. We help with digital transformation, IT strategy, and project management to ensure your technology drives business success.',
    icon: Briefcase,
    projects: [
      { title: 'Digital Transformation', description: 'Advised a manufacturing company on their transition to a modern IT infrastructure.', image: 'https://picsum.photos/600/400', aiHint: 'business meeting' },
      { title: 'Technology Roadmap', description: 'Developed a 5-year technology plan for a non-profit organization.', image: 'https://picsum.photos/600/400', aiHint: 'strategy planning' },
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
