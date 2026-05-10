import { useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../components/firebase";

const FREE_GUIDES = new Set([
  "jstoreact",
  "reactintro",
  "componentsprops",
  "reacttodo",
]);

const useGuideAccess = (slug) => {
  const isFree = slug && FREE_GUIDES.has(slug);

  // We track which slug we last processed to know if we need to "reset" 
  // our internal view without calling setState inside the effect.
  const [state, setState] = useState({
    hasAccess: isFree ? true : null,
    isChecking: isFree ? false : true,
    lastSlug: slug
  });

  // If the slug changes, we update the state during the RENDER phase.
  // This is a standard React pattern for "adjusting state based on props".
  if (state.lastSlug !== slug) {
    setState({
      hasAccess: isFree ? true : null,
      isChecking: isFree ? false : true,
      lastSlug: slug,
    });
  }

  useEffect(() => {
    if (!slug || isFree) return;

    let isMounted = true;

    const checkAccess = async () => {
      try {
        const user = auth.currentUser;
        if (!user) {
          if (isMounted) setState(s => ({ ...s, hasAccess: false, isChecking: false }));
          return;
        }

        const idToken = await user.getIdToken(true);
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/guides/${slug}/access`,
          { headers: { Authorization: `Bearer ${idToken}` } }
        );

        if (isMounted) {
          setState(s => ({ ...s, hasAccess: data.access, isChecking: false }));
        }
      } catch (error) {
        console.error("[useGuideAccess] Error:", error.message);
        if (isMounted) setState(s => ({ ...s, hasAccess: false, isChecking: false }));
      }
    };

    checkAccess();

    return () => { isMounted = false; };
  }, [slug, isFree]);

  return { hasAccess: state.hasAccess, isChecking: state.isChecking };
};

export default useGuideAccess;