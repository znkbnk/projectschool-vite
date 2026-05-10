import { Link } from "react-router-dom";
import { KEYWORD_LINKS } from "./linkifyConstants"; // Import from the new file

const linkifyKeywords = (text, exclude = []) => {
  if (!text || typeof text !== "string") return text;

  const activeLinks = KEYWORD_LINKS.filter(
    ({ term, to }) => !exclude.includes(term) && !exclude.includes(to)
  );

  if (activeLinks.length === 0) return text;

  const pattern = new RegExp(
    `(${activeLinks
      .map(({ term }) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
      .join("|")})`,
    "g"
  );

  const parts = text.split(pattern);

  return (
    <span>
      {parts.map((part, i) => {
        const match = activeLinks.find(({ term }) => term === part);
        if (match) {
          return (
            <Link key={i} to={match.to} className="guide-inline-link">
              {part}
            </Link>
          );
        }
        return part;
      })}
    </span>
  );
};

export { linkifyKeywords };