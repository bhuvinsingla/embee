export function HeroVisual() {
  return (
    <svg viewBox="0 0 520 420" role="img" aria-label="Diagram of business applications connected to an AI agent and a workflow" className="h-auto w-full">
      <rect width="520" height="420" rx="16" fill="#141414" />
      <rect x="28" y="28" width="200" height="120" rx="10" fill="#000000" stroke="#8B1A1A" />
      <text x="46" y="62" fill="#8B1A1A" fontSize="12" fontFamily="Inter, sans-serif">Microsoft 365</text>
      <text x="46" y="92" fill="#FFFFFF" fontSize="16" fontFamily="Inter, sans-serif">Apps and files</text>
      <rect x="292" y="28" width="200" height="120" rx="10" fill="#000000" stroke="#FFFFFF" />
      <text x="310" y="62" fill="#8B1A1A" fontSize="12" fontFamily="Inter, sans-serif">Operations</text>
      <text x="310" y="92" fill="#FFFFFF" fontSize="16" fontFamily="Inter, sans-serif">Data and APIs</text>
      <rect x="150" y="190" width="220" height="88" rx="10" fill="#8B1A1A" />
      <text x="168" y="224" fill="#FFFFFF" fontSize="12" fontFamily="Inter, sans-serif">AI agent</text>
      <text x="168" y="250" fill="#FFFFFF" fontSize="16" fontFamily="Inter, sans-serif">Approved context</text>
      <rect x="110" y="318" width="300" height="70" rx="10" fill="#FFFFFF" />
      <text x="128" y="348" fill="#8B1A1A" fontSize="12" fontFamily="Inter, sans-serif">Workflow</text>
      <text x="128" y="370" fill="#141414" fontSize="15" fontFamily="Inter, sans-serif">Person approves the next step</text>
      <path d="M128 148 V190" stroke="#8B1A1A" fill="none" />
      <path d="M392 148 V190" stroke="#FFFFFF" fill="none" />
      <path d="M260 278 V318" stroke="#8B1A1A" fill="none" />
    </svg>
  );
}
