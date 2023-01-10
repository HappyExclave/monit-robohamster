import React, { Fragment } from "react";
import { Forma } from "../components/Forma";
import { WhiteList } from "../Modals/WhiteList";

export const Moj = () => {
  return (
    <Fragment>
      <WhiteList>
        <Forma org="МЮ" />
      </WhiteList>
    </Fragment>
  );
};
