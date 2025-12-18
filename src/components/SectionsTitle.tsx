interface SectionsTitleParams {
  title: string;
  desc: string;
}

const SectionsTitle = ({ title, desc }: SectionsTitleParams) => {
  return (
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-3xl font-bold tracking-widest text-slate-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-slate-600">{desc}</p>
    </div>
  );
};

export default SectionsTitle;
