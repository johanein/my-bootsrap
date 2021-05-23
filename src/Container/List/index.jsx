import React, { memo } from "react";

const index = memo((props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <ul className="list-inline">
            <li className="list-inline-item">albert</li>
            <li className="list-inline-item">albert</li>
            <li className="list-inline-item">albert</li>
            <li className="list-inline-item">albert</li>
          </ul>
        </div>
        <ul className="list-unstyled">
          <li>albert</li>
          <li>albert</li>
          <li>albert</li>
          <li>albert</li>
        </ul>
      </div>
      <button className="btn btn-primary btn-lg disabled" disabled="disabled">
        button
      </button>
    </div>
  );
});

export default index;
