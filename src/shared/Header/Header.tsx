import React from "react";
import Select from "react-select";
import { GlobalSwgSelector } from "../../assets/icons/global/GlobalSwgSelector";
import s from "./Header.module.scss";

interface Props {}

export const Header = (props: Props) => {
  const options = [
    { value: "city-1", label: "Batumi" },
    { value: "city-2", label: "Minsk" },
    { value: "city-3", label: "NY" },
  ];
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: "rgba(71 ,147 ,255 ,0.2)",
      weidth: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
      zIndex: 100,
    }),
  };
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
        <Select 
        defaultValue={options[0]}
        styles={colourStyles}
        options={options} />
      </div>
    </header>
  );
};
