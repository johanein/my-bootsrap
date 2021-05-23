import React, { memo } from "react";
import RowsAndColumns from "./RowsAndColumns";
import Offset from "./Offset";
import List from "./List";

const index = memo((props) => {
  return (
    <>
      <RowsAndColumns />
      <Offset />
      <List />
    </>
  );
});
export default index;
