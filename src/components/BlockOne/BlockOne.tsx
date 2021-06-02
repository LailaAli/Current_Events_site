import React from "react";
import css from "./BlockOne.module.scss";
import classes from "classnames";

const BlockOne = () => {
   return (
      <div className={css.blockOne}>
         <div className={css.row}>
            <div className={classes(css.articleInfo, css.textColumn)}>
               <span className={css.category}>//&nbsp;Category</span>
               <span className={css.articleTitle}>Title of news article</span>
               <span className={css.articleExcerpt}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat impedit necessitatibus hic quia nostrum magni itaque.
               </span>
            </div>
            <div className={css.imageTop}></div>
         </div>
         <div className={css.row}>
            <div className={classes(css.articleInfoBottom, css.textColumn)}>
               <span className={css.category}>//&nbsp;Category</span>
               <span className={css.articleTitle}>Title of news article</span>
               <span className={css.articleExcerpt}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat impedit necessitatibus hic quia nostrum magni itaque.
               </span>
            </div>
            <div className={css.imageBottom}></div>
         </div>
      </div>
   );
};

export default BlockOne;
