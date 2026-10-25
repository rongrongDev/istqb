import chapter1 from "./chapter1.js";
import chapter2 from "./chapter2.js";
import chapter3 from "./chapter3.js";
import chapter4 from "./chapter4.js";
import chapter5 from "./chapter5.js";
import chapter6 from "./chapter6.js";
import chapter7 from "./chapter7.js";
import chapter8 from "./chapter8.js";
import chapter9 from "./chapter9.js";
import chapter10 from "./chapter10.js";
import chapter11 from "./chapter11.js";
import learn1 from "./learn/chapter1.js";
import learn2 from "./learn/chapter2.js";
import learn3 from "./learn/chapter3.js";
import learn4 from "./learn/chapter4.js";
import learn5 from "./learn/chapter5.js";
import learn6 from "./learn/chapter6.js";
import learn7 from "./learn/chapter7.js";
import learn8 from "./learn/chapter8.js";
import learn9 from "./learn/chapter9.js";
import learn10 from "./learn/chapter10.js";
import learn11 from "./learn/chapter11.js";

// Learn content (from syllabus v1.0) attached onto the chapter data — same
// mechanism as the v2 track in ../ctaiv2/index.js.
const learnByChapter = {
  1: learn1, 2: learn2, 3: learn3, 4: learn4, 5: learn5, 6: learn6,
  7: learn7, 8: learn8, 9: learn9, 10: learn10, 11: learn11,
};

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

export const chapters = [
  chapter1, chapter2, chapter3, chapter4, chapter5, chapter6,
  chapter7, chapter8, chapter9, chapter10, chapter11,
].map((ch) => attachLearn(ch, learnByChapter[ch.id]));
