//NPM Packages
import { FC } from "react";

export const BoxError: FC = () => {
  return (
    <div className="load-error">
      Cannot load data . Please check your connection
    </div>
  );
};

export const Spinner: FC = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </div>
    </div>
  );
};
