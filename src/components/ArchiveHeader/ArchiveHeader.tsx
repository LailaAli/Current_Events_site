import React from "react";
import css from "./ArchiveHeader.module.scss";

const ArchiveHeader = () => {
   return (
      <div className={css.archiveHeader}>
         <div className={css.blueBackground}></div>
         <span className={css.leftSide}></span>
         <span className={css.rightSide}></span>
         <div className={css.text}>
            <h1 className={css.title}>Current Events</h1>
            <p className={css.titleDescription}>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Expedita fugiat perspiciatis assumenda vitae provident voluptatum
               distinctio aspernatur accusamus saepe, adipisci reprehenderit
               voluptas impedit minima perferendis soluta magni officia
               similique aliquid?
            </p>
         </div>
      </div>
   );
};

export default ArchiveHeader;
