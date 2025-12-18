import { Links } from "@/data/footerLinks";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterLink from "./FooterLink";

const Footer = () => {

  const showLinks = Links.map((el, key) => (
    <FooterLink key={key} name={el.name} />
  ));

  return (
    <div className="main-color center md:p-0 relative text-[#E7F2EF] min-h-20 border-t border-slate-100">
      <div className="container my-10">
        <div className="flex flex-col justify-between items-center gap-8">
          <FontAwesomeIcon icon={faListCheck} className="text-2xl" />
          <nav className="flex flex-col sm:flex-row items-center flex-wrap justify-center gap-x-8 gap-y-4">
            {showLinks}
          </nav>
          <div className="text-sm text-slate-400">
            &copy; 2025 MyTask. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
