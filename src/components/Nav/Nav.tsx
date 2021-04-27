import React from "react";
import css from "./Nav.module.scss";

interface INav {
   label: string;
}

const nav: INav[] = [
   { label: "top headlines" },
   { label: "business" },
   { label: "entertainment" },
   { label: "health" },
   { label: "sports" },
   { label: "technology" },
];

const Nav: React.FC = () => {
   return (
      <nav className={css.nav}>
         <ul>
            {nav.map((item) => (
               <li key={item.label}>{item.label}</li>
            ))}
         </ul>
      </nav>
   );
};

export default Nav;
