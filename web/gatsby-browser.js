import React from "react";
import Layout from "./src/components/Layout";
import "./global.css";

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
