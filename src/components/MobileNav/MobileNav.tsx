import React, { useState } from "react";
import css from "./MobileNav.module.scss";
import classes from "classnames";

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

const MobileNav = () => {
   const [show, setShow] = useState<boolean>(false);
   return (
      <>
         <div className={css.mobileNav}>
            <div
               className={classes(css.buttonContainer, { [css.active]: show })}
               onClick={() => setShow(!show)}
            >
               <div className={css.nameContainer}>
                  <span className={css.menuLabel}>
                     ME
                     <br />
                     NU
                  </span>
                  <span className={css.openLabel}>
                     OP
                     <br />
                     EN
                  </span>
               </div>
               <span className={css.lineOne}></span>
               <span className={css.lineTwo}></span>
            </div>
            <div className={classes(css.menu, { [css.open]: show })}>
               <nav>
                  {nav.map((item) => (
                     <a href="#">{item.label}</a>
                  ))}
               </nav>
               <span className={css.divisionLine}></span>
               <div className={css.iconContainer}>
                  <i
                     className={classes("fa", "fa-instagram", "fa-2x")}
                     aria-hidden="true"
                  ></i>
                  <i
                     className={classes("fa", "fa-behance", "fa-2x")}
                     aria-hidden="true"
                  ></i>
                  <i
                     className={classes("fa", "fa-codepen", "fa-2x")}
                     aria-hidden="true"
                  ></i>
               </div>
            </div>
         </div>
      </>
   );
};

export default MobileNav;
