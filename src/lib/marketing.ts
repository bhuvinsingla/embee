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
    slug: "cm-welding",
    title: "CM Welding",
    text: "Sprint 2 closed the record of finished work, open items, blockers, and the environment the next step depended on.",
    href: "/work/cm-welding",
  },
  {
    slug: "sunbridge",
    title: "Sunbridge",
    text: "Sprint 2 fetched SCADA data through an API and showed when a refresh was partial, late, or incomplete.",
    href: "/work/sunbridge",
  },
  {
    slug: "hour-tracker",
    title: "Hour Tracker",
    text: "Hours are recorded by person and by project, with billable time kept separate and an approval status on what was submitted.",
    href: "/work/hour-tracker",
  },
  {
    slug: "sow-tracker",
    title: "SOW Tracker",
    text: "Each engagement sits in one record: scope, dates, owners, hours, and renewal actions. Commercial figures stay off this site.",
    href: "/work/sow-tracker",
  },
] as const;

export const projects = [
  {
    slug: "cm-welding",
    title: "CM Welding",
    category: "Industrial delivery",
    status: "Completed",
    challenge: "Sprint 2 needed a single view of finished work, open items, and the environment the next step depended on.",
    solution: "Sprint 2 for CM Welding closed the sprint record: completed tasks, pending actions, blockers, deliverables, and next steps. Cloud environment and access dependencies were documented for the team, along with the training and support the delivery needed.",
    capabilities: [
      "Sprint status with completed tasks",
      "Pending items, blockers, and owners",
      "Updated deliverables and next steps",
      "Cloud environment and access dependencies",
      "Training and support requirements for the delivery team",
    ],
    technologies: ["Cloud environment", "Access setup", "Sprint reporting"],
    note: "Access credentials, internal document paths, and unpublished client files are not shown on this site.",
  },
  {
    slug: "sunbridge",
    title: "Sunbridge",
    category: "Industrial data",
    status: "Completed",
    challenge: "Sprint 2 had to fetch SCADA data through an API and show when a refresh was partial, late, or incomplete.",
    solution: "Sprint 2 for Sunbridge connected SCADA data fetching with the API, including refresh timing, an hourly retry, and checks against the database source and tables. Screenshots, proactive email notifications, and the remaining fixes were tracked to closure.",
    capabilities: [
      "SCADA data fetching",
      "API integration",
      "Partial-data handling",
      "Refresh timing and hourly retry",
      "Database source and table validation",
      "Screenshot record, email notifications, and closed fixes",
    ],
    technologies: ["SCADA", "APIs", "Data validation", "Notifications"],
    note: "Source credentials, table names, and internal screenshots stay off this page.",
  },
  {
    slug: "hour-tracker",
    title: "Hour Tracker",
    category: "Resource tracking",
    status: "Completed",
    challenge: "Working hours were not visible by person and by project, and billable time was mixed with other work.",
    solution: "A standard hour tracker records who worked, on which project and client, for how long, and what they did. Monthly totals roll up by person and by project, and submitted hours carry an approval status.",
    capabilities: [
      "Employee or resource name",
      "Project and client",
      "Date and hours worked",
      "Task or activity description",
      "Billable and non-billable hours",
      "Person-wise and project-wise monthly totals",
      "Approval status of submitted hours",
    ],
    technologies: ["Web application", "Reporting", "Approvals"],
    note: "The working tracker is a delivery system. It is not embedded on this marketing site. Submission and approval follow the team's reporting cycle.",
  },
  {
    slug: "sow-tracker",
    title: "SOW Tracker",
    category: "Commercial tracking",
    status: "Completed",
    challenge: "Active engagements were spread across notes, so scope, hours, and renewal actions were hard to see together.",
    solution: "A centralized statement-of-work tracker holds each engagement: client, scope, dates, milestones, owners, budgeted hours, hours consumed, and the balance. Renewal dates, risks, and pending actions sit on the same record.",
    capabilities: [
      "Client and project",
      "Scope of work and deliverables",
      "Start date, end date, and milestones",
      "Approval status",
      "Project owner and delivery owner",
      "Resource allocation and budgeted hours",
      "Actual hours and the remaining balance",
      "Renewal dates, risks, and pending actions",
    ],
    technologies: ["Project records", "Milestones", "Hour balance"],
    note: "SOW values, billing terms, invoices, and payment status are kept in the tracker and are not published here.",
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
