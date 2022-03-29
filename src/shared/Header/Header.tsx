import React from "react";
import { GlobalSwgSelector } from "../../assets/icons/global/GlobalSwgSelector";
import s from "./Header.module.scss";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSwgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}></div>
    </header>
  );
};
