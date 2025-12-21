export type Insight = {
  slug: string;
  title: string;
  intro: string;
  metaDescription: string;
  audience: string;
  wordCount: string;
  keywords: string[];
  outline: string[];
  body: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  image: string;
  dateLabel: string;
};

export const INSIGHTS: Insight[] = [
  {
    slug: 'improve-chatbots-with-rag-and-fine-tuning',
    title: 'Improve Chatbots with RAG and Model Fine‑Tuning',
    intro:
      'To make your AI chatbot more accurate and reliable, Retrieval‑Augmented Generation (RAG) is key. RAG grounds responses in domain knowledge by retrieving relevant context and feeding it into generation — reducing hallucinations and improving factuality.',
    metaDescription:
      'How to improve chatbot accuracy using RAG, better retrieval, and targeted fine‑tuning with measurable evaluation.',
    audience: 'AI engineers, ML engineers, product engineers.',
    wordCount: '900–1400',
    keywords: ['RAG', 'retrieval', 'reranking', 'embeddings', 'fine-tuning', 'evaluation'],
    outline: [
      'What RAG is and why it improves chatbot reliability',
      'Better chunking & indexing (context-preserving retrieval)',
      'Hybrid search + re-ranking for relevance',
      'Fine-tune embeddings & models (domain adaptation)',
      'Query expansion to improve hit rate',
      'Fine-tuning tips: domain pre-training and task tuning',
      'Evaluation: Recall@K, ranking precision, generation quality',
    ],
    body: [
      {
        heading: 'Why RAG matters for chatbot accuracy',
        paragraphs: [
          'Large language models are strong at language, but they do not automatically know your business policies, product details, or the latest information. RAG fixes that by retrieving the most relevant internal context and grounding the answer in real data.',
          'In practice, a good RAG system can make a chatbot dramatically more factual and consistent—especially in complex, domain-heavy support scenarios.',
        ],
        bullets: [
          'Fewer hallucinations because answers are anchored to retrieved sources.',
          'More consistent responses across edge cases and long-tail questions.',
          'Faster updates: change documents/knowledge base without retraining the whole model.',
        ],
      },
      {
        heading: 'How to improve RAG quality (retrieval + ranking)',
        paragraphs: [
          'Most “bad RAG” is a retrieval problem. If the system retrieves low-quality chunks, the model will produce low-quality answers (even if the model is excellent). Start with chunking and indexing, then improve retrieval with hybrid methods and re-ranking.',
        ],
        bullets: [
          'Better chunking: split by meaning (headings/sections), add overlap so context isn’t fragmented.',
          'Hybrid search: combine semantic vector search with keyword/BM25 style matching.',
          'Re-ranking: use a secondary model to re-score top results for relevance before generation.',
        ],
      },
      {
        heading: 'Fine‑tuning: embeddings and (optionally) the model',
        paragraphs: [
          'Fine‑tuning helps the system understand your domain vocabulary and retrieve more relevant information. Start with embedding fine‑tuning (or selecting a stronger embedding model), then consider model fine‑tuning if you need better response style, tool usage, or policy adherence.',
        ],
        bullets: [
          'Domain-specific pre-training improves understanding of business terms and context.',
          'Fine-tuned embeddings often improve Recall@K and reduce irrelevant retrieval.',
          'Teach the model to cite/use retrieved context (avoid “ignoring” the best chunk).',
        ],
      },
      {
        heading: 'Measure improvements with the right metrics',
        paragraphs: [
          'If you can’t measure retrieval quality, you can’t improve it. Track retrieval accuracy and ranking precision separately from generation quality.',
        ],
        bullets: [
          'Retrieval: Recall@K on labeled question→document pairs.',
          'Ranking: precision of top-N after re-ranking.',
          'Generation: factuality checks + human eval on real queries.',
        ],
      },
      {
        heading: 'Practical checklist',
        paragraphs: ['A short checklist you can apply immediately:'],
        bullets: [
          'Improve chunking (meaningful splits + overlap).',
          'Add hybrid retrieval + re-ranking.',
          'Tune embeddings on domain content.',
          'Track Recall@K and ranking precision before tuning generation.',
        ],
      },
    ],
    image: '/images/real/insight-1.png',
    dateLabel: 'Dec 2025',
  },
  {
    slug: 'improve-document-processing-and-ocr',
    title: 'Improve Document Processing & OCR for Better Data',
    intro:
      'OCR (Optical Character Recognition) turns scanned text into machine-readable content — essential for document AI and RAG systems. Better OCR means cleaner data, stronger indexing, and higher retrieval accuracy.',
    metaDescription:
      'Practical steps to improve OCR pipelines: preprocessing, AI OCR/ICR, cleanup, metadata, and human-in-the-loop validation.',
    audience: 'Data engineers, AI engineers, operations teams.',
    wordCount: '800–1200',
    keywords: ['OCR', 'document AI', 'ICR', 'preprocessing', 'metadata', 'human-in-the-loop'],
    outline: [
      'Why OCR quality impacts downstream AI and RAG',
      'Preprocessing images (denoise, contrast, skew correction)',
      'AI OCR & ICR for layout/context understanding',
      'Clean, normalize, and structure extracted text',
      'Metadata enrichment for better indexing and retrieval',
      'Human-in-the-loop validation for high-importance docs',
    ],
    body: [
      {
        heading: 'Why OCR quality matters',
        paragraphs: [
          'OCR errors are amplified downstream: bad extraction creates bad indexing, and bad indexing creates bad retrieval. If your RAG system searches noisy text, it will return irrelevant chunks and reduce answer quality.',
          'Improving OCR is often the highest ROI change in document-heavy enterprise pipelines.',
        ],
        bullets: [
          'Cleaner text → better embeddings → better retrieval.',
          'Fewer exceptions and manual corrections in operations.',
          'More reliable automation and compliance workflows.',
        ],
      },
      {
        heading: 'Preprocess scans before OCR',
        paragraphs: [
          'Simple image preprocessing can dramatically increase OCR accuracy. Most pipelines should include basic cleanup steps before text extraction.',
        ],
        bullets: [
          'Denoising and contrast enhancement for low-quality scans.',
          'Skew correction so lines are horizontal for the OCR engine.',
          'Cropping/segmentation for multi-page or multi-column documents.',
        ],
      },
      {
        heading: 'Use AI OCR/ICR for layout + context',
        paragraphs: [
          'Traditional OCR focuses on characters. AI OCR/ICR goes further by understanding document structure—tables, headers, fields, and even handwriting—improving extraction from complex documents.',
        ],
        bullets: [
          'Extract fields (invoice number, dates, totals) from semi-structured forms.',
          'Preserve layout signals (table rows/columns) for downstream processing.',
          'Use confidence scores to route low-confidence pages for review.',
        ],
      },
      {
        heading: 'Clean, normalize, and enrich text for indexing',
        paragraphs: [
          'After OCR, normalize text (remove noise, fix common errors), structure it, and attach metadata. This makes retrieval dramatically stronger and improves RAG accuracy.',
        ],
        bullets: [
          'Normalize whitespace, encoding, and common OCR mistakes.',
          'Add metadata: doc type, customer, date, region, source system.',
          'Human-in-the-loop validation for high-importance workflows.',
        ],
      },
    ],
    image: '/images/real/insight-2.png',
    dateLabel: 'Dec 2025',
  },
  {
    slug: 'improve-hr-with-ai-chatbots',
    title: 'Improve HR with AI Chatbots',
    intro:
      'AI chatbots in HR streamline repetitive tasks, improve employee experience, and free HR teams to focus on strategic work. The best HR bots automate routine queries, support onboarding and recruitment, and surface insights through analytics.',
    metaDescription:
      'How HR chatbots improve employee experience: automate FAQs, support recruitment and onboarding, personalize journeys, and add analytics feedback loops.',
    audience: 'HR leaders, people ops teams, enterprise IT.',
    wordCount: '800–1200',
    keywords: ['HR chatbots', 'employee experience', 'onboarding', 'recruitment', 'analytics', 'automation'],
    outline: [
      'Automate routine HR queries (policies, leave, payroll, benefits)',
      'Recruitment & onboarding support (screening, scheduling, guidance)',
      'Integrate feedback loops and analytics',
      'Personalize employee journeys using profiles',
      'Governance: privacy, access control, and human-in-the-loop',
    ],
    body: [
      {
        heading: 'Automate routine HR queries (24×7)',
        paragraphs: [
          'HR teams spend huge time answering repetitive questions about policies, leave, payroll, and benefits. A chatbot can answer instantly, consistently, and at scale—improving employee experience while reducing ticket volume.',
        ],
        bullets: [
          'Policy and FAQ automation (leave rules, reimbursements, benefits).',
          'Workflow guidance (forms, required documents, escalation routing).',
          'Multilingual support for global teams.',
        ],
      },
      {
        heading: 'Recruitment and onboarding support',
        paragraphs: [
          'HR bots can pre-screen candidates, answer hiring questions, schedule interviews, and guide new hires through onboarding checklists, documents, and training.',
        ],
        bullets: [
          'Candidate pre-screening and interview scheduling.',
          'Onboarding assistants for document collection and policy training.',
          'Automated reminders and progress tracking.',
        ],
      },
      {
        heading: 'Analytics + feedback loops',
        paragraphs: [
          'The best HR chatbots improve over time by tracking questions, sentiment, and escalation patterns—surfacing trends that help HR leadership refine policies and workforce programs.',
        ],
        bullets: [
          'Identify common pain points and policy confusion.',
          'Measure resolution rate vs escalation to humans.',
          'Spot workforce trends (engagement, concerns, skill gaps).',
        ],
      },
      {
        heading: 'Personalization and governance',
        paragraphs: [
          'HR bots should tailor responses based on employee profiles (role, location, eligibility) and respect privacy and access controls. They should augment HR—not replace it.',
        ],
        bullets: [
          'Role-based access: show only what the employee is allowed to see.',
          'Human-in-the-loop for sensitive cases (grievances, performance, legal).',
          'Audit logs and data retention policies for compliance.',
        ],
      },
    ],
    image: '/images/real/insight-3.png',
    dateLabel: 'Nov 2025',
  },
];


