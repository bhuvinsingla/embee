export const brand = {
  name: "Embee Finsoft",
  groupName: "Embee Group",
  legalName: "Embee Financial Services Ltd",
  description:
    "Embee Finsoft helps businesses modernize operations through Microsoft solutions, AI-powered agents, intelligent workflow automation, and custom enterprise software.",
  email: "info@embeegroup.in",
  phoneDisplay: "+91-8699902381",
  phoneTel: "+918699902381",
  linkedin: "https://www.linkedin.com/company/embee-financial-services-limmited/",
  instagram: "https://www.instagram.com/groupembee/",
  groupSite: "https://www.embeegroup.in/",
  privacy: "https://www.embeegroup.in/privacy/",
  terms: "https://www.embeegroup.in/terms/",
  address: {
    line1: "Unit No. 513, 5th Floor, Elante Offices",
    line2: "Plot No. 178-178A, Industrial Area, Phase-1",
    city: "Chandigarh - 160002, India",
  },
  maps: "https://www.google.com/maps/search/?api=1&query=Unit%20No.%20513%2C%205th%20Floor%2C%20Elante%20Offices%2C%20Chandigarh%20160002",
} as const;

export const services = [
  {
    slug: "ai-agents",
    title: "AI Agents & Intelligent Solutions",
    short: "Build intelligent assistants and AI-powered agents that help teams access information, automate tasks, streamline workflows, and make better-informed decisions.",
    href: "/services/ai-agents",
    cta: "Explore AI Solutions",
    featured: true,
    challenges: [
      "Teams spend time searching across documents and inboxes.",
      "Repetitive questions interrupt the people who know the answers.",
      "Approvals stall because the context is scattered.",
    ],
    capabilities: [
      "AI agents and enterprise assistants",
      "Retrieval-augmented generation (RAG)",
      "Enterprise knowledge search",
      "Document intelligence and information extraction",
      "AI-powered workflow orchestration",
      "Agent integrations with business applications",
      "Human approval and escalation workflows",
    ],
    useCases: [
      "An assistant that answers from approved internal documents.",
      "Extraction of fields from incoming operational documents.",
      "A workflow that drafts a response and waits for a person to approve it.",
    ],
    approach: "Start with the questions people already ask, the documents they are allowed to use, and the step that still needs a person. The agent is scoped to that work.",
    technologies: ["AI agents", "RAG", "Document intelligence", "Application APIs"],
  },
  {
    slug: "microsoft-solutions",
    title: "Microsoft Solutions",
    short: "Connect people, data, and business processes through the Microsoft ecosystem, building connected digital experiences across the enterprise.",
    href: "/services/microsoft-solutions",
    cta: "Explore Microsoft Solutions",
    featured: true,
    challenges: [
      "Work is split across mail, files, spreadsheets, and chat.",
      "Approvals and status updates are copied by hand.",
      "Leaders cannot see the same numbers the teams are using.",
    ],
    capabilities: [
      "Microsoft Power Apps",
      "Microsoft Power Automate",
      "Microsoft SharePoint",
      "Microsoft Teams integrations",
      "Microsoft Copilot Studio and agent solutions, where supported",
      "Microsoft 365 workflow automation",
      "Power BI dashboards and reporting",
      "Microsoft Graph and API integrations",
      "Enterprise document and knowledge management",
    ],
    useCases: [
      "A Power App for a request that today lives in email.",
      "A Power Automate flow for approvals and notifications.",
      "A SharePoint library with a Power BI view of what is waiting.",
    ],
    approach: "Map the process onto the Microsoft tools the organisation already uses, then add a custom application only where those tools stop.",
    technologies: ["Power Apps", "Power Automate", "SharePoint", "Teams", "Power BI", "Microsoft 365"],
  },
  {
    slug: "custom-software",
    title: "Custom Software Development",
    short: "Build tailored business applications that address operational challenges, improve productivity, and support evolving business requirements.",
    href: "/services/custom-software",
    cta: "Explore Software Development",
    featured: false,
    challenges: [
      "A packaged product is close, but the workflow does not fit.",
      "An internal tool has outgrown the spreadsheet it started in.",
      "Two systems need a screen that neither product provides.",
    ],
    capabilities: [
      "Web application development",
      "Enterprise portals",
      "Internal management systems",
      "Custom dashboards",
      "API development and integrations",
      "Application modernization",
    ],
    useCases: [
      "An internal portal for requests, status, and documents.",
      "A management view that joins data from more than one system.",
      "A replacement for a spreadsheet that several teams now share.",
    ],
    approach: "Define the workflow and the system of record first. The application is built around those decisions, not around a feature list.",
    technologies: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs"],
  },
  {
    slug: "automation",
    title: "Business Process Automation",
    short: "Reduce repetitive manual work by connecting systems, automating approvals, and creating structured digital workflows.",
    href: "/services/automation",
    cta: "Explore Automation",
    featured: false,
    challenges: [
      "The same details are typed into more than one system.",
      "Approvals wait in a personal inbox.",
      "Exceptions are noticed late.",
    ],
    capabilities: [
      "Approval workflows",
      "Document processing",
      "Automated notifications",
      "Reporting automation",
      "Cross-application integrations",
      "Operational process digitization",
    ],
    useCases: [
      "A request that routes to the right approver and records the decision.",
      "A notice when a document or data feed is incomplete.",
      "A weekly report assembled from systems the team already uses.",
    ],
    approach: "Automate the repeatable path and leave a clear stop for the exceptions a person should see.",
    technologies: ["Power Automate", "Approvals", "Notifications", "APIs"],
  },
  {
    slug: "data-analytics",
    title: "Data, Analytics & Business Intelligence",
    short: "Turn business data into useful insights through dashboards, data integrations, reporting systems, and analytics-driven applications.",
    href: "/services/data-analytics",
    cta: "Explore Data Solutions",
    featured: false,
    challenges: [
      "Reports are rebuilt by hand each month.",
      "Leaders and operators are looking at different numbers.",
      "Incoming data is incomplete and nobody sees it until later.",
    ],
    capabilities: [
      "Power BI reporting",
      "Operational dashboards",
      "Data integration",
      "Data validation and monitoring",
      "Management reporting",
      "Decision-support solutions",
    ],
    useCases: [
      "An operational dashboard for the numbers a team checks every day.",
      "A check that flags a feed when expected records are missing.",
      "A management report that uses one agreed definition of the metric.",
    ],
    approach: "Agree the source and the definition of each figure before the dashboard is designed.",
    technologies: ["Power BI", "Data integration", "Validation", "Dashboards"],
  },
  {
    slug: "cloud-integration",
    title: "Cloud, Integration & Application Support",
    short: "Connect existing systems, modernize applications, and support reliable delivery across enterprise technology environments.",
    href: "/services/cloud-integration",
    cta: "Explore Integration Services",
    featured: false,
    challenges: [
      "A new application cannot see the system of record.",
      "A deployment depends on access and environments that are undocumented.",
      "A live application needs a clear owner after launch.",
    ],
    capabilities: [
      "API integrations",
      "Cloud deployment and migration",
      "Enterprise application integration",
      "Application maintenance",
      "Performance improvements",
      "Ongoing technical support",
    ],
    useCases: [
      "An API between an operational system and a business application.",
      "A documented environment for a cloud deployment.",
      "A support arrangement for an application already in use.",
    ],
    approach: "Name the systems, the owner of each interface, and what happens when a call fails. Then connect them.",
    technologies: ["REST APIs", "Cloud deployment", "Application integration"],
  },
] as const;

export const verticals = [
  {
    slug: "financial-operations",
    title: "Financial Services & Business Operations",
    text: "A proposed market. Work often involves approvals, document handling, management reporting, and internal portals. These are target problems, not a claim of completed client work in this industry.",
    solutions: ["Approval workflows", "Management reporting", "Internal portals", "Document handling"],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Industrial Operations",
    text: "A proposed market. Plants and operations teams often need a clearer view of incoming data, exceptions, and the next action.",
    solutions: ["Operational dashboards", "Industrial data integrations", "Monitoring and reporting workflows", "Automated notifications and exception handling"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    text: "A proposed market. Firms often need a cleaner path for documents, client work, and the hours or approvals attached to a job.",
    solutions: ["Document management", "Client and project workflows", "Resource tracking", "Approval automation"],
  },
  {
    slug: "healthcare",
    title: "Healthcare & Service Operations",
    text: "A proposed market. Service operations often depend on handoffs, status, and information that should stay with the right role.",
    solutions: ["Handoff workflows", "Status visibility", "Role-based information access", "Operational reporting"],
  },
  {
    slug: "documents",
    title: "Enterprise Workflow & Document Management",
    text: "A proposed business function. Documents, requests, and approvals are spread across mail and shared drives.",
    solutions: ["SharePoint document structures", "Request and approval flows", "Knowledge assistants on approved files", "Management dashboards"],
  },
  {
    slug: "digital",
    title: "Technology & Digital Businesses",
    text: "A proposed market. Product and operations teams often need internal tools, integrations, and a clearer operational view.",
    solutions: ["Internal tools", "API integrations", "Operational dashboards", "Workflow automation"],
  },
] as const;

export const projects = [
  {
    slug: "enterprise-knowledge",
    title: "Enterprise Knowledge & Workflow Assistant",
    category: "Microsoft and AI",
    status: "Capability demonstration",
    challenge: "Teams need a way to find approved information and move a piece of work forward without searching several applications.",
    solution: "A solution concept that combines Microsoft business applications, document access, workflow automation, and AI-powered retrieval. It is shown here as a capability demonstration, not as a named client engagement.",
    capabilities: [
      "SharePoint-style document access, where implemented",
      "A Power Apps style interface, where implemented",
      "Power Automate orchestration, where implemented",
      "An assistant that retrieves approved information",
      "A point where a person approves the next step",
    ],
    technologies: ["SharePoint", "Power Apps", "Power Automate", "AI retrieval"],
    note: "Client names, logos, screenshots, and internal architecture are omitted until disclosure is approved. Items above are in scope for this kind of solution. They are not all claimed as finished.",
  },
  {
    slug: "industrial-monitoring",
    title: "Industrial Data Integration & Monitoring",
    category: "Data and operations",
    status: "Capability demonstration",
    challenge: "Operations teams need incoming data checked, stored, and visible, including when a cycle is incomplete.",
    solution: "A demonstration of retrieving operational data, integrating an API, validating what arrived, and supporting visibility into operating conditions.",
    capabilities: [
      "API-based data retrieval",
      "Operational dashboards",
      "Data refresh and validation",
      "Exception handling",
      "Automated notifications",
      "Monitoring and reporting",
    ],
    technologies: ["APIs", "Validation", "Dashboards", "Notifications"],
    note: "Named plant or client details are withheld. Do not read this page as a statement that every retry, alert, or screen is complete.",
  },
  {
    slug: "time-management",
    title: "Resource & Project Time Management",
    category: "Operations software",
    status: "Proposed solution",
    challenge: "Hours are hard to see by person and by project, and billable time is mixed with other work.",
    solution: "A proposed way to record work hours, attach them to a project, and see monthly use of people. The working tracker lives in a separate project application, not on this marketing site.",
    capabilities: [
      "Person-wise and project-wise hours",
      "Activity descriptions",
      "Billable and non-billable classifications",
      "Monthly summaries",
      "Submission and approval status",
      "Reporting views",
    ],
    technologies: ["Web application", "Reporting", "Approvals"],
    note: "Described as a proposed solution. It is not presented as a completed client project.",
  },
  {
    slug: "commercial-management",
    title: "Project & Commercial Management",
    category: "Delivery operations",
    status: "Internal solution concept",
    challenge: "Scope, milestones, budgeted effort, and billing status sit in separate notes.",
    solution: "A structured record for scope, milestones, allocation, budgeted and consumed hours, billing milestones, and renewal actions. Commercial figures from live clients are not published here.",
    capabilities: [
      "Centralized project records",
      "SOW and deliverable tracking",
      "Budgeted versus actual hours",
      "Resource allocation",
      "Milestone and approval status",
      "Billing and renewal visibility",
    ],
    technologies: ["Project records", "Milestones", "Reporting"],
    note: "An internal business solution concept. No client fees, contracts, or commercial terms are shown.",
  },
] as const;

export const differentiators = [
  {
    title: "Business-First Thinking",
    text: "Understand the underlying business problem before selecting the technology.",
  },
  {
    title: "Microsoft-Centric Expertise",
    text: "Build connected applications and automated workflows using relevant Microsoft platforms.",
  },
  {
    title: "Practical AI Adoption",
    text: "Apply AI to real workflows, information access, document processing, and business operations.",
  },
  {
    title: "End-to-End Delivery",
    text: "Support discovery, solution design, development, integration, deployment, and ongoing improvements.",
  },
] as const;

export const steps = [
  { title: "Discover", text: "Understand the business problem, stakeholders, and requirements." },
  { title: "Design", text: "Define the solution architecture, workflow, and implementation approach." },
  { title: "Build", text: "Develop applications, automations, integrations, and AI capabilities." },
  { title: "Deploy", text: "Test the solution, validate requirements, and support implementation." },
  { title: "Improve", text: "Monitor performance, address feedback, and evolve the solution." },
] as const;

export const technologyGroups = [
  {
    title: "Microsoft",
    items: ["Power Apps", "Power Automate", "SharePoint", "Microsoft Teams", "Power BI", "Microsoft 365", "Copilot Studio, where supported"],
  },
  {
    title: "AI & Intelligent Solutions",
    items: ["AI agents", "LLM integrations", "RAG and knowledge retrieval", "Document intelligence", "AI workflow orchestration"],
  },
  {
    title: "Application Development",
    items: ["React", "Next.js", "TypeScript", "Node.js", "Python", "REST APIs and databases"],
  },
  {
    title: "Cloud & Integration",
    items: ["Cloud deployment", "Enterprise APIs", "Application integrations", "Deployment and monitoring"],
  },
] as const;

export const insightTopics = [
  "How Microsoft Power Automate can reduce repetitive business processes.",
  "Building AI agents for enterprise workflows.",
  "Designing knowledge assistants around approved business documents.",
  "When to use Power Apps versus custom software.",
  "Connecting business applications through APIs.",
  "Improving operational visibility with dashboards and automated alerts.",
] as const;

export const interestOptions = [
  "AI Agents & Intelligent Solutions",
  "Microsoft Solutions",
  "Custom Software Development",
  "Business Process Automation",
  "Data & Analytics",
  "Cloud & Integration",
  "Other",
] as const;

export type Service = (typeof services)[number];
export type Project = (typeof projects)[number];

export function getService(slug: string) {
  return services.find((item) => item.slug === slug);
}

export function getProject(slug: string) {
  return projects.find((item) => item.slug === slug);
}
