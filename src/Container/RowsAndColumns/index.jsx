import React, { memo, useContext } from "react";
import { myContext } from "../../Reducer";

const index = memo((props) => {
  const {
    state: { column, row },
  } = useContext(myContext);
  const arrayDummy = [...Array(12).keys()];

  return (
    <div className="container-fluid">
      container-fluid
      <div className="row">
        {row} :{" "}
        {arrayDummy.map((item, index) => (
          <div
            key={String(index)}
            className="col-xs-12 col-sm-6 col-md-3 col-lg-1 bg-light border"
          >
            {`${column} : ${index + 1}`}
          </div>
        ))}
      </div>
    </div>
  );
});

export default index;
