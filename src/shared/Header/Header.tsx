import React from "react";
import Select from "react-select";
import { GlobalSwgSelector } from "../../assets/icons/global/GlobalSwgSelector";
import s from "./Header.module.scss";

type Props = {};

export const Header = (props: Props) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSwgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
        <GlobalSwgSelector id="change-theme" />
        </div>
        <Select options={options} />
      </div>
    </header>
  );
};
