import LegalPage from "./LegalPage";

const sections = [
  ["Information we collect", ["When you use the RB Corp contact form, we may collect the name, email address, phone number, organization, inquiry type and message that you choose to provide.", "Administrative authentication uses a secure session cookie for authorized RB Corp administrators. The public website does not require visitors to create an RB Corp account."]],
  ["How we use information", ["Contact information is used to understand, route and respond to group-level enquiries, partnerships, media enquiries and business opportunities.", "Messages may be routed internally to the relevant RB Corp company when the subject of the enquiry relates to that operating business."]],
  ["Storage and security", ["Contact enquiries may be stored in RB Corp's configured database and made available only through protected administrative access.", "Reasonable technical and organizational safeguards are used, but no internet transmission or electronic storage system can be guaranteed to be completely secure."]],
  ["Third-party and operating-company websites", ["The RB Corp website links to separate websites operated for Beyonist, RB Service Connect, RB Charity Foundation and Royalties Buffet. Those platforms may collect information independently and may maintain their own privacy policies.", "RB Corp is not responsible for the privacy practices of third-party websites or services reached through external links."]],
  ["Retention and requests", "Information may be retained for as long as reasonably necessary to manage the enquiry, maintain business records, protect legitimate interests or meet applicable obligations. You may contact RB Corp through the Contact page with privacy-related questions or requests."],
  ["Changes to this policy", "This policy may be updated as the RB Corp website, its systems or applicable requirements change. The version published on this website is the current version."],
];

export default function PrivacyPage() {
  return <LegalPage eyebrow="Privacy Policy" title="Privacy built around what we actually collect." intro="This policy explains how the RB Corp corporate website handles information submitted through its contact experience and protected administrative systems." sections={sections} />;
}
