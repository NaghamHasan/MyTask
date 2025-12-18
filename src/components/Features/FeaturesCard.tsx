import CardSvg from "../svgs/CardSvg";

interface FeaturesCardParam {
  svg: string;
  title: string;
  desc: string;
}
const FeaturesCard = ({ svg, title, desc }: FeaturesCardParam) => {
  return (
    <div className="relative featuresCard p-8 text-center sm:text-start bg-[#E7F2EF] rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group">
      <div className="inline-flex items-center justify-center w-12 h-12 bg-[#a1c2bd] text-[#19183b] rounded-xl mb-6 group-hover:bg-[#19183b] group-hover:text-[#E7F2EF] transition-colors">
        <CardSvg svg={svg} />
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
        {title}
      </h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
};

export default FeaturesCard;
