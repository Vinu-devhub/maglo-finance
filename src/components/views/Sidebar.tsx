import maglo_logo from "@/assets/MagloLogo.svg";
import { sidebar_above_links, sidebar_below_links } from "@/lib/data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (e: any) => {
    setHoveredLink(e.target.innerText);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <div className=" flex flex-col w-64 px-6 py-8 bg-slate-900 text-white">
      <Link to={"/"}>
        <div className=" flex gap-3 items-center mb-10 cursor-pointer">
          <img src={maglo_logo} alt="app-logo" />
          <span className=" text-xl font-bold text-white tracking-wider">
            Maglo.
          </span>
        </div>
      </Link>
      <div className=" flex flex-col justify-between gap-72">
        <div>
          {sidebar_above_links.map((link) => (
            <Link to={link.href}>
              <div
                key={link.name}
                className=" flex gap-3 p-4 cursor-pointer items-center text-primeColor font-medium hover:bg-primary hover:rounded-lg hover:text-darkColor hover:font-semibold "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={hoveredLink === link.name ? link.icon_active : link.icon}
                  alt={`${link.name}-icon`}
                />
                <span className=" text-base">{link.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {sidebar_below_links.map((link) => (
            <div
              key={link.name}
              className=" flex gap-3 p-4 cursor-pointer items-center text-primeColor font-medium hover:bg-primary hover:rounded-lg hover:text-darkColor hover:font-semibold "
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hoveredLink === link.name ? link.icon_active : link.icon}
                alt={`${link.name}-icon`}
              />
              <span className=" text-base">{link.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
