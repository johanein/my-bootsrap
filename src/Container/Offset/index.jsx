import React, { memo, useContext } from "react";
import { myContext } from "../../Reducer";

const index = memo((props) => {
  const {
    state: { offset },
  } = useContext(myContext);

  return (
    <div className="container">
      container-fluid
      <div className="row">
        <div className="offset-sm-2 offset-md-0 col-sm-8  col-md-4 bg-light border">
          {`${offset}`}
        </div>
        <div className="col-xs-12  col-md-12 bg-light border">
          {`${offset}`}
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 bg-light border">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
          adipisci magnam fugit porro illo minus explicabo, facilis consequuntur
          fugiat, quas maiores sit accusantium deserunt sequi earum mollitia
          eveniet quasi consectetur. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Esse adipisci magnam fugit porro illo minus
          explicabo, facilis consequuntur fugiat, quas maiores sit accusantium
          deserunt sequi earum mollitia eveniet quasi consectetur.{" "}
        </div>
        <div className="col-md-6 bg-light border">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, amet
          quae quod, ipsam asperiores iste voluptatibus quibusdam laboriosam
          eligendi delectus animi ut. Dolores amet, ipsum sapiente adipisci
          tempora obcaecati cumque?{" "}
        </div>
        <div className="col-md-6 bg-light border">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, amet
          quae quod, ipsam asperiores iste voluptatibus quibusdam laboriosam
          eligendi delectus animi ut. Dolores amet, ipsum sapiente adipisci
          tempora obcaecati cumque?{" "}
        </div>
        <div className="col-md-6 bg-light border">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, amet
          quae quod, ipsam asperiores iste voluptatibus quibusdam laboriosam
          eligendi delectus animi ut. Dolores amet, ipsum sapiente adipisci
          tempora obcaecati cumque?{" "}
        </div>
      </div>
    </div>
  );
});

export default index;
