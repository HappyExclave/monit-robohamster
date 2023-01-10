import React, { Fragment } from "react";
import Btn from "../components/Btn";
import { WhiteList } from "../Modals/WhiteList";

export const NotFoundPage = () => {
  return (
    <Fragment>
      <WhiteList>
        <Btn link="/sk" nameForm="Мониторинг СК" />
        <Btn link="/moj" nameForm="Мониторинг МЮ" />
      </WhiteList>
    </Fragment>
  );
};
