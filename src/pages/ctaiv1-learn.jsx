import LearnPage from "../components/LearnPage.jsx";
import { chapters } from "../data/ctaiv1";
import { getStudiedSectionsV1, setSectionStudiedV1 } from "../lib/progress.js";

export default function CTAIV1Learn() {
  return (
    <LearnPage
      chapters={chapters}
      getStudied={getStudiedSectionsV1}
      setStudied={setSectionStudiedV1}
      label="ISTQB CT-AI v1.0"
      intro="Teaching content for all 11 chapters of the v1.0 syllabus — the version some institutions still certify against. Study here first, then consolidate with the Summary and Quiz pages."
    />
  );
}
