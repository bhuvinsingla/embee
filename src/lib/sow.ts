export type SowRecord = {
  id: string;
  client: string;
  project: string;
  scope: string;
  deliverables: string;
  sowValue: string;
  billingTerms: string;
  start: string;
  end: string;
  milestones: string;
  approval: string;
  projectOwner: string;
  deliveryOwner: string;
  allocation: string;
  budgetedHours: string;
  actualHours: string;
  balanceHours: string;
  invoicing: string;
  payment: string;
  renewal: string;
  risks: string;
  pending: string;
};

export const sowRecords: SowRecord[] = [
  {
    id: "cm-welding-s2",
    client: "CM Welding",
    project: "Shop operations - Sprint 2",
    scope:
      "GCP and IAM access, environment dependencies, and the training and support requirement.",
    deliverables:
      "Environment dependency note. Sprint status report with pending actions, role owners, and target dates.",
    sowValue: "Fixed engagement",
    billingTerms: "Milestone acceptance",
    start: "2026-10-01",
    end: "2026-10-31",
    milestones: "Sprint 2 environment pack",
    approval: "In review",
    projectOwner: "Client engineer",
    deliveryOwner: "Delivery lead",
    allocation: "Platform engineer, delivery lead",
    budgetedHours: "40",
    actualHours: "18",
    balanceHours: "22",
    invoicing: "Not invoiced",
    payment: "Not due",
    renewal: "Not set",
    risks: "Environment cannot be treated as ready until IAM and dependencies are written down.",
    pending: "Document IAM. Close the training and support question with the client engineer.",
  },
  {
    id: "sunbridge-s2",
    client: "Sunbridge",
    project: "SCADA feed - Sprint 2",
    scope:
      "SCADA data fetching, API integration, source-table validation, screenshots, and proactive email when a fetch is partial.",
    deliverables:
      "Validated fetch path, hourly retry for partial data, screenshot pack, notification on a failed or partial cycle.",
    sowValue: "Fixed engagement",
    billingTerms: "Milestone acceptance",
    start: "2026-10-01",
    end: "2026-10-31",
    milestones: "Sprint 2 fetch and notification",
    approval: "In review",
    projectOwner: "Client engineer",
    deliveryOwner: "Delivery lead",
    allocation: "Platform engineer, delivery lead",
    budgetedHours: "48",
    actualHours: "22",
    balanceHours: "26",
    invoicing: "Not invoiced",
    payment: "Not due",
    renewal: "Not set",
    risks: "Partial payloads and refresh lag until source tables are confirmed and the hourly retry is proven.",
    pending: "Validate database source and tables. Attach screenshots. Switch on the partial-fetch email.",
  },
];

export const sowColumns: { key: keyof SowRecord; label: string }[] = [
  { key: "client", label: "Client" },
  { key: "project", label: "Project" },
  { key: "scope", label: "Scope" },
  { key: "deliverables", label: "Deliverables" },
  { key: "sowValue", label: "SOW value" },
  { key: "billingTerms", label: "Billing terms" },
  { key: "start", label: "Start" },
  { key: "end", label: "End" },
  { key: "milestones", label: "Milestones" },
  { key: "approval", label: "Approval / signature" },
  { key: "projectOwner", label: "Project owner" },
  { key: "deliveryOwner", label: "Delivery owner" },
  { key: "allocation", label: "Resource allocation" },
  { key: "budgetedHours", label: "Budgeted hours" },
  { key: "actualHours", label: "Actual hours" },
  { key: "balanceHours", label: "Balance hours" },
  { key: "invoicing", label: "Invoicing" },
  { key: "payment", label: "Payment" },
  { key: "renewal", label: "Renewal date" },
  { key: "risks", label: "Risks" },
  { key: "pending", label: "Pending actions" },
];
