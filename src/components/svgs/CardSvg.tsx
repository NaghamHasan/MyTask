interface CardSvgParama {
  svg: string;
}
const CardSvg = ({ svg }: CardSvgParama) => {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d={svg}
      />
    </svg>
  );
};

export default CardSvg;
