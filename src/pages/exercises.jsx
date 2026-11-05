import { useState } from "react";
import { Link } from "react-router-dom";
import { Exercise } from "../components/LearnExtras.jsx";
import { getTrack } from "../lib/tracks.js";
import { sectionLink, useLearning, useSectionTitles } from "../lib/learning.js";
import { exercises } from "../data/learning/exercises.js";

// All hands-on exercises, grouped by track, with a filter for the ones not done yet.
export default function Exercises() {
  const { exercisesDone } = useLearning();
  const [todo, setTodo] = useState(false);
  const titles = useSectionTitles(exercises.map((e) => [e.track, e.section]));
  const list = todo ? exercises.filter((e) => !exercisesDone.includes(e.id)) : exercises;
  const doneCount = exercises.filter((e) => exercisesDone.includes(e.id)).length;

  const source = (ex) => {
    const t = getTrack(ex.track);
    return (
      <span className="mu sm">
        Technique: <Link to={sectionLink(ex.track, ex.section)}>{titles[`${ex.track}:${ex.section}`] || ex.section}</Link> · {t.shortName}
      </span>
    );
  };

  return (
    <div className="page narrow">
      <div className="stack" style={{ gap: 6 }}>
        <span className="lbl">Hands-on exercises</span>
        <h2>Practise the techniques on realistic tasks</h2>
        <span className="mu sm">
          These are practice for real work, written for this site — not exam questions. Some check your answer automatically; all have a worked solution.
          They also appear under the Learn section that teaches each technique.
        </span>
      </div>
      <div className="crow wrap">
        <div className="seg" role="radiogroup" aria-label="Show">
          <button role="radio" aria-checked={!todo} className={!todo ? "on" : ""} onClick={() => setTodo(false)}>All ({exercises.length})</button>
          <button role="radio" aria-checked={todo} className={todo ? "on" : ""} onClick={() => setTodo(true)}>Not done ({exercises.length - doneCount})</button>
        </div>
        <span className="mu sm push">{doneCount} of {exercises.length} done</span>
      </div>
      {list.length === 0 && <span className="mu">All exercises done. Nice work.</span>}
      {list.map((e) => <Exercise key={e.id} ex={e} showSource={source} />)}
    </div>
  );
}
