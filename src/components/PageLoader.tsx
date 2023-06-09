import logo from "../assets/images/logo.svg";
import arrowImgUrl from "../assets/images/icon-arrow-down.svg";
import moonImg from "../assets/images/icon-moon.svg";

import React, { useState, useEffect } from "react";
import { useSearch } from "../context/SearchContext";
import { useLocation } from "react-router-dom";

const PageLoader = () => {
  const { handleTextInput, text, setText, searchedText, getEntries } =
    useSearch();
  const location = useLocation();

  useEffect(() => {
    const word = location.pathname.split("/")[2];
    setText(word);
    getEntries(word);
  }, [window.onclose]);

  React.useEffect(() => {
    window.onpopstate = () => {
      const word = location.pathname.split("/")[2];
      setText(word);
      getEntries(word);
    };
  });
  return <></>;
};

export default PageLoader;
