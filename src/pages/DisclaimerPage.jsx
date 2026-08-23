import LegalPage from "./LegalPage";

const sections = [
  ["General information only", "Content on the RB Corp corporate website is provided for general informational and brand-communication purposes. It should not be treated as professional, legal, financial, investment, tax, medical or other regulated advice."],
  ["RB Finance content", "References to RB Finance describe the company at a high level only. Nothing on this corporate website is an offer, recommendation, solicitation, promise of return, credit approval, investment advice or representation regarding any regulated financial product or service."],
  ["Employment and recruitment", "Information about jobs and recruitment is routed through RB Service Connect. Nothing on the RB Corp corporate website constitutes a guarantee of employment, placement, interview selection, recruiter engagement or hiring outcome."],
  ["Charitable participation", "RB Charity Foundation manages its own campaigns, donations, volunteering and impact reporting. Any participation should be based on the information and terms published on the foundation's own platform."],
  ["Hospitality and consumer businesses", "Product availability, pricing, dining experiences, reservations, offers and other consumer-facing details may change and should be confirmed through the relevant operating-company website or channel."],
  ["External links", "RB Corp may link to separate operating-company or third-party websites. Those destinations are independently maintained, and their content, availability, security and policies may change without notice on this website."],
];

export default function DisclaimerPage() {
  return <LegalPage eyebrow="Disclaimer" title="Corporate context without overstated claims." intro="RB Corp presents group-level information here. Specific services, transactions and regulated activities belong to the relevant operating company and its own platform." sections={sections} />;
}
