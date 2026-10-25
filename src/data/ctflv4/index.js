import chapter1 from "./chapter1.js";
import chapter2 from "./chapter2.js";
import chapter3 from "./chapter3.js";
import chapter4 from "./chapter4.js";
import chapter5 from "./chapter5.js";
import chapter6 from "./chapter6.js";
import learn1 from "./learn/chapter1.js";
import learn2 from "./learn/chapter2.js";
import learn3 from "./learn/chapter3.js";
import learn4 from "./learn/chapter4.js";
import learn5 from "./learn/chapter5.js";
import learn6 from "./learn/chapter6.js";

// Hand-authored learn content (from syllabus v4.0.1) attached onto the chapter data.
const learnByChapter = { 1: learn1, 2: learn2, 3: learn3, 4: learn4, 5: learn5, 6: learn6 };

function attachLearn(chapter, learn) {
  if (!learn) return chapter;
  return {
    ...chapter,
    learn: { intro: learn.intro, keywords: learn.keywords, objectives: learn.objectives },
    sections: chapter.sections.map((s) =>
      learn.sections[s.id] ? { ...s, learn: learn.sections[s.id] } : s
    ),
  };
}

export const chapters = [chapter1, chapter2, chapter3, chapter4, chapter5, chapter6].map(
  (ch) => attachLearn(ch, learnByChapter[ch.id])
);
