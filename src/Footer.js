import React from 'react';

const CONTAINER_STYLE = {
  marginTop: "30px",
};
const THANKS_STYLE = {
  fontWeight: "bold",
  fontSize: "18px"
};
const SOURCE_STYLE = {};
const SHEET_URL = "https://docs.google.com/spreadsheets/d/174f0WBSVNSdcQ5_S6rWPGB3pNCsruyyM_ZRQ6QUhGmo/edit#gid=114941615";

module.exports = function Footer () {
  return (
    <div style={CONTAINER_STYLE}>
      <div style={THANKS_STYLE}>
        Thanks for taking action!
      </div>
      <div style={SOURCE_STYLE}>
        Script source: <a href={SHEET_URL}>We're his problem now</a>
      </div>
    </div>
  );
}
