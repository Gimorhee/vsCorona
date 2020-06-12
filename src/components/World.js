import React, { Fragment } from "react";

export const World = ({ showSubNav }) => {
  return (
    <Fragment>
      <div className={showSubNav ? "world" : "world noSubNav"}>
        <p>World Component</p>
      </div>
    </Fragment>
  );
};
