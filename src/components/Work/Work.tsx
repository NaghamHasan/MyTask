import React from "react";
import SectionsTitle from "../SectionsTitle";
import { workSteps } from "@/data/work";
import WorkStep from "./WorkStep";

const Work = () => {
  const showSteps = workSteps.map((el,key) => 
  <WorkStep key={key} num={el.num} step={el.step} desc={el.desc} />
)
  return (
    <section id="how-work">
      <div className="max-w-7xl mx-auto px-6">
        <SectionsTitle
          title={"How It Works"}
          desc={"Three simple steps to boost your productivity."}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {showSteps}
        </div>
      </div>
    </section>
  );
};

export default Work;
