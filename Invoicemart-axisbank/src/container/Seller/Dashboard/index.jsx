import React from "react";
import ErrorBoundary from "../../../errors";
import Revenue from "./Revenue";
import Summary from "./Summary";

const index = () => {
  return (
    <div>
      Seller
      <ErrorBoundary>
        <Revenue />
      </ErrorBoundary>
      <ErrorBoundary>
        <Summary />
      </ErrorBoundary>
    </div>
  );
};

export default index;
