import React from "react";
import SectionsTitle from "./SectionsTitle";

const Testimonial = () => {
  return (
    <section id="testimonial">
      <SectionsTitle
        title="What our users says"
        desc="Trusted by thousands of teams"
      />
      <div className="max-w-4xl mx-auto px-6">
        <div className="relative bg-[#E7F2EF] p-10 md:p-9 mb-5 rounded-4xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="relative z-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 main-color rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                AR
              </div>
              <h4 className="text-lg font-bold main-text-color tracking-wide">
                Alex Rivera
              </h4>
              <p className="text-slate-500 text-sm">
                Head of Operations at CloudScale
              </p>
            </div>
            <div className="mb-4 flex justify-center text-yellow-400 gap-1">
              {[0,0,0,0,0].map((el,key) => <span key={key}>★</span>)}
            </div>
            <p className="text-xl md:text-xl leading-relaxed italic font-medium tracking-tight">
              This task management tool has completely transformed how our team
              operates. Its intuitive, fast, and the analytics features are
              exactly what we needed to stay on track.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
