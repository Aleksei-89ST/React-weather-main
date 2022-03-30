import React from "react";
import { ThisDay } from "./Components/ThisDay/ThisDay";
import { ThisDayInfo } from "./Components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";

type Props = {};

export const Home = (props: Props) => {
  return (
    <div className={s.home}>
      <div className={s.wrapper}>
      <ThisDay />
      <ThisDayInfo/>
      </div>
    </div>
  );
};
