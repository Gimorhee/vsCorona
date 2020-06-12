import React, { Fragment } from "react";

export const Korea = ({ showSubNav }) => {
  return (
    <Fragment>
      <div className={showSubNav ? "korea" : "korea noSubNav"}>
        <p>Korea Component</p>
      </div>
    </Fragment>
  );
};
