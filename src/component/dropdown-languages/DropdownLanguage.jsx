import "./languages.scss";
import iconLanguageEn from "../../assets/icons/icon-english.png";
import iconLanguageVn from "../../assets/icons/icon-vn.png";
import iconLineAroww from "../../assets/icons/linear-arrow.png";
import iconExpand from "../../assets/icons/icon-expand-menu.png";

import React, { useState, useEffect, useRef } from "react";

const DropdownLanguages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState({
    id: 1,
    icon: iconLanguageEn,
    name: "ENLISH",
    shortName: "EN",
  });
  const dropdownRef = useRef(null);

  const listLanguage = [
    {
      id: 1,
      icon: iconLanguageEn,
      name: "ENLISH",
      shortName: "EN",
    },
    {
      id: 2,
      icon: iconLanguageVn,
      name: "VIET NAM",
      shortName: "VN",
    },
  ];

  const handleOptionClick = (event, language) => {
    event.stopPropagation();
    setLanguage(language);
    setIsOpen(false);
  };

  const openDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div onClick={() => openDropdown()} className="flex-row item-center" ref={dropdownRef}>
      <div className="language flex-row item-center space-between">
        <img width={20} height={20} src={language.icon} alt="" />
        <span>{language.shortName}</span>
        <img
          width={20}
          height={20}
          src={iconLineAroww}
          alt=""
          className={`arrow ${isOpen ? "rotated" : ""}`}
        />
      </div>
      <img className="hidden-lg icon-expand" src={iconExpand} alt="" />
      {isOpen && (
        <div className="dropdown-menu flex-column">
          {listLanguage.map((language) => (
            <div
              className="item-language flex-row item-center"
              onClick={(event) => handleOptionClick(event, language)}
              key={language.id}
            >
              <img
                width={20}
                height={20}
                src={language.icon}
                alt={language.name}
              />
              <span className="small-text">
                {language.name.toLocaleUpperCase()}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownLanguages;
