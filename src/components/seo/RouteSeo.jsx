import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteUrl = "https://royaltiesbeautycorp.vercel.app";
const baseTitle = "Royalties Beauty Corp";
const defaultDescription = "Royalties Beauty Corp is a diversified group building responsible businesses across beauty, services, finance, hospitality and social impact.";
const socialImage = `${siteUrl}/rb-corp-logo.png`;

const routeMeta = {
  "/": [baseTitle, defaultDescription],
  "/about": ["About RB Corp | Royalties Beauty Corp", "Learn about Royalties Beauty Corp, its group philosophy, leadership, values and diversified business portfolio."],
  "/companies": ["Our Companies | Royalties Beauty Corp", "Explore the RB Corp portfolio across beauty, recruitment, finance, social impact and hospitality."],
  "/companies/beyonist": ["Beyonist | RB Corp", "Discover Beyonist, RB Corp's beauty business focused on confidence, individuality and intentional care."],
  "/companies/rb-service-connect": ["RB Service Connect | RB Corp", "Discover RB Service Connect, the group's recruitment and career platform connecting candidates, recruiters and opportunities."],
  "/companies/rb-finance": ["RB Finance | RB Corp", "Explore RB Finance and its focus on financial clarity, responsible access and disciplined decision-making."],
  "/companies/royalties-charity": ["RB Charity Foundation | RB Corp", "Explore RB Charity Foundation and the group's dedicated platform for community participation and documented social impact."],
  "/companies/royalties-buffet": ["Royalties Buffet | RB Corp", "Discover Royalties Buffet, RB Corp's hospitality business focused on generous dining, live experiences and celebrations."],
  "/impact": ["Impact | Royalties Beauty Corp", "See how RB Corp approaches responsible enterprise, opportunity, accountability and social impact through RB Charity Foundation."],
  "/insights": ["Insights | Royalties Beauty Corp", "Read RB Corp perspectives on enterprise, consumers, opportunity, hospitality and responsible growth."],
  "/contact": ["Contact RB Corp | Royalties Beauty Corp", "Contact Royalties Beauty Corp for group enquiries, partnerships, media, business opportunities or general questions."],
  "/privacy": ["Privacy Policy | Royalties Beauty Corp", "Read the Royalties Beauty Corp privacy policy."],
  "/terms": ["Terms of Use | Royalties Beauty Corp", "Read the terms governing use of the Royalties Beauty Corp website."],
  "/disclaimer": ["Disclaimer | Royalties Beauty Corp", "Read the Royalties Beauty Corp website disclaimer."],
  "/error": ["Something Went Wrong | Royalties Beauty Corp", "An unexpected error occurred while loading the Royalties Beauty Corp website."],
  "/admin/login": ["Admin Login | RB Corp", "Secure administrator access for Royalties Beauty Corp."],
  "/admin/messages": ["Contact Messages | RB Corp Admin", "Protected Royalties Beauty Corp contact-message management workspace."],
};

function upsertMeta(name, content, property = false) {
  const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement("meta");
    node.setAttribute(property ? "property" : "name", name);
    document.head.appendChild(node);
  }
  node.setAttribute("content", content);
}

function upsertCanonical(href) {
  let node = document.head.querySelector('link[rel="canonical"]');
  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", "canonical");
    document.head.appendChild(node);
  }
  node.setAttribute("href", href);
}

function RouteSeo() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isAdmin = pathname.startsWith("/admin");
    const isIndexable = Boolean(routeMeta[pathname]) && !isAdmin && pathname !== "/error";
    const [title, description] = routeMeta[pathname] || ["Page Not Found | Royalties Beauty Corp", "The requested Royalties Beauty Corp page could not be found."];
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;

    document.title = title;
    upsertMeta("description", description);
    upsertMeta("robots", isIndexable ? "index,follow,max-image-preview:large" : "noindex,nofollow");
    upsertMeta("og:title", title, true);
    upsertMeta("og:description", description, true);
    upsertMeta("og:type", "website", true);
    upsertMeta("og:site_name", baseTitle, true);
    upsertMeta("og:url", canonicalUrl, true);
    upsertMeta("og:image", socialImage, true);
    upsertMeta("twitter:card", "summary_large_image");
    upsertMeta("twitter:title", title);
    upsertMeta("twitter:description", description);
    upsertMeta("twitter:image", socialImage);
    upsertCanonical(canonicalUrl);
  }, [pathname]);

  return null;
}

export default RouteSeo;
