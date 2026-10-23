// Edit this file to update the site content.
const WA_TEXT = encodeURIComponent("Hi Mamta, I saw your portfolio and I'd like to discuss a project.");

export const profile = {
  name: 'Mamta',
  email: 'mamta.ya26@gmail.com',
  github: 'https://github.com/MamtaCreator',
  linkedin: 'https://www.linkedin.com/in/mamta-yadav-buildsystems/',
  medium: 'https://medium.com/@mamta.ya26',
  // WhatsApp lead link (country code 91 + number)
  whatsapp: `https://wa.me/919987200797?text=${WA_TEXT}`,
};

export const expertise = [
  { art: 'agents', title: 'agentic ai systems', text: 'Multi-step agents that plan, call tools and APIs, keep memory and check their own work, with a human in the loop where it matters.' },
  { art: 'genai', title: 'gen ai & llm apps', text: 'RAG over company documents, chat assistants, content and report generation, prompt design and evaluation.' },
  { art: 'fullstack', title: 'website design & development', text: 'Fast, SEO-ready business websites and fullstack web apps: clean-architecture .NET 8 APIs with Angular and React frontends, 3D-rich design for every screen.' },
  { art: 'automation', title: 'cloud & automation', text: 'Azure deployment, CI/CD and monitoring, plus WhatsApp and email automations that capture and answer leads.' },
];

// A trailing * highlights a tool you reach for first.
export const stack = [
  { group: 'agentic ai', items: ['LangChain*', 'LangGraph*', 'CrewAI', 'Model Context Protocol', 'Tool calling', 'Agent memory', 'Copilot agents'] },
  { group: 'gen ai & llms', items: ['OpenAI API*', 'Claude API*', 'Azure OpenAI', 'Hugging Face', 'RAG*', 'Embeddings', 'FAISS / Pinecone', 'Prompt engineering'] },
  { group: 'ml & nlp', items: ['Python*', 'Pandas', 'NumPy', 'scikit-learn', 'NLP', 'Sentiment analysis', 'Clustering', 'Jupyter'] },
  { group: 'backend', items: ['C# / .NET 8*', 'ASP.NET Core', 'FastAPI', 'SQL Server', 'Azure Functions', 'Moq'] },
  { group: 'frontend', items: ['React*', 'Angular*', 'TypeScript', 'JavaScript', 'HTML / CSS', 'Three.js'] },
  { group: 'cloud & devops', items: ['Microsoft Azure*', 'App Service', 'Azure SQL', 'App Insights', 'GitHub Actions', 'Git'] },
];

// layout: 'feature' = wide card with overlay, 'card' = half-width card
export const projects = [
  {
    layout: 'feature', art: 'dashboard', tag: 'ai-powered bi platform',
    title: 'nous estrategia consulting platform',
    text: '360° company assessments, executive dashboards, KPIs and reports across finance, marketing and operations, with an AI automation module. .NET 8, Angular, SQL Server, Azure.',
  },
  {
    layout: 'card', art: 'leads', tag: 'lead automation',
    title: 'websites that answer their own enquiries',
    text: 'Business sites where every enquiry lands on WhatsApp and email, with automated quotes. Built for EPC, ISA Interior, Dream Maker Architects, SDM Enterprises and Durga Steel.',
    link: { href: 'https://www.epc.aimgenxtechsol.in/', label: 'view epc site' },
  },
  {
    layout: 'card', art: 'nlp', tag: 'nlp',
    title: 'three-layer movie review analysis',
    text: 'Sentiment classification, emotion profiling and aspect-based analysis of IMDB reviews, showing which aspects drove each opinion.',
  },
  {
    layout: 'feature', art: 'clusters', tag: 'machine learning', flip: true,
    title: 'socio-economic country segmentation',
    text: 'K-Means pipeline that groups countries by development indicators, delivered with a technical walkthrough and a plain-language guide.',
  },
];

export const jobs = [
  { when: '2026 — present', title: 'agentic ai & fullstack engineer', org: 'Freelance',
    text: 'AI-assisted business websites and automations for clients in India and the US: lead capture, WhatsApp and email workflows, automated quotations and 3D interfaces.' },
  { when: '2026 — present', title: 'fullstack engineer', org: 'NOUS Estrategia (contract)',
    text: 'Architecting the .NET 8 backend and Angular frontend of a BI and consulting platform with an AI automation module. Backend phases 1–5 delivered; GitHub CI/CD and Azure hosting set up.' },
  { when: 'earlier', title: 'fullstack developer', org: '.NET & Azure',
    text: 'Angular, TypeScript, C#/.NET, Azure Functions, Application Insights and Azure SQL, with unit testing in Moq and AI-assisted development using Copilot agents.' },
];

// Medium articles. The first one is featured.
export const articles = [
  { title: 'Adapter Design Pattern Explained: Why Every Developer Has Already Used It', url: 'https://medium.com/@mamta.ya26/adapter-design-pattern-explained-why-every-developer-has-already-used-it-without-realizing-it-73168622d9c5', date: 'Aug 1, 2026', tag: 'structural', summary: 'How an adapter lets two systems work together without changing either one.' },
  { title: 'Prototype Design Pattern: Why Copying an Object Can Beat Creating a New One', url: 'https://medium.com/@mamta.ya26/prototype-design-pattern-explained-why-copying-an-object-can-be-better-than-creating-a-new-one-0aa9798544f0', date: 'Jul 28, 2026', tag: 'creational' },
  { title: 'Builder Pattern: Why Was It Invented?', url: 'https://medium.com/@mamta.ya26/builder-pattern-why-was-it-invented-2d803e427231', date: 'Jul 27, 2026', tag: 'creational' },
  { title: 'Why Is It Called “Abstract Factory”? The Most Misunderstood Pattern', url: 'https://medium.com/@mamta.ya26/the-most-misunderstood-design-pattern-in-software-engineering-why-is-it-called-abstract-factory-9e4410af4f54', date: 'Jul 26, 2026', tag: 'creational' },
  { title: 'Creational Patterns Explained Simply, Part 1: Singleton', url: 'https://medium.com/@mamta.ya26/creational-design-patterns-explained-simply-part-1-singleton-pattern-with-real-world-examples-1db50fdb480e', date: 'Jul 22, 2026', tag: 'creational' },
];
