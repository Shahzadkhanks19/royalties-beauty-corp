import LegalPage from "./LegalPage";

const sections = [
  ["Using this website", "The RB Corp corporate website is provided for general information about the group, its operating companies, impact approach, insights and contact pathways. You may use the website only for lawful purposes and in a way that does not interfere with its operation, security or other users."],
  ["Corporate information", ["Content on this website is intended to describe RB Corp at a group level and may change as businesses, services and priorities evolve.", "Nothing on the website creates a contractual commitment, guarantee, employment offer, franchise agreement, investment offer or other binding obligation unless expressly confirmed through an authorized written agreement."]],
  ["Operating-company websites", "Beyonist, RB Service Connect, RB Charity Foundation and Royalties Buffet operate separate online experiences. Transactions, applications, donations, bookings, recruitment activity or other interactions on those platforms are subject to the terms and policies published by the relevant operating company."],
  ["Intellectual property", "Unless otherwise indicated, RB Corp website content, branding, layouts, written material and other original site elements are protected by applicable intellectual-property rights. Third-party and operating-company marks remain the property of their respective owners."],
  ["Links and availability", "Links to operating-company or external websites are provided for convenience. RB Corp does not guarantee uninterrupted availability of this website or the availability, accuracy or security of external destinations."],
  ["Limitation of responsibility", "To the extent permitted by applicable law, RB Corp is not responsible for losses arising solely from reliance on general informational content, temporary website unavailability, or the independent acts and policies of external websites."],
  ["Changes", "These Terms of Use may be revised as the website or its services evolve. Continued use of the website after an updated version is published means the current published terms apply to that use."],
];

export default function TermsPage() {
  return <LegalPage eyebrow="Terms of Use" title="Clear terms for a corporate information platform." intro="These terms govern use of the RB Corp corporate website. Separate operating-company platforms may apply their own terms to their specific services." sections={sections} />;
}
