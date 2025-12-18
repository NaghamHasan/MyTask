import { features } from "@/data/features";
import SectionsTitle from "../SectionsTitle";
import FeaturesCard from "./FeaturesCard";

const FeaturesSection = () => {

  const showFeatures = features.map((el,key)=>
    <FeaturesCard key={key} svg={el.svg} title={el.title} desc={el.desc}/>
  )

  return (
    <section id="features">
      <div className="max-w-7xl mx-auto px-6">
        <SectionsTitle title="Everything you need to ship faster" desc={"Our platform provides all the tools necessary for modern teams to manage complex projects without the friction."}/>
        <div className="grid grid-cols-1 sm:w-fit md:grid-cols-3 gap-10">
          {showFeatures}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
