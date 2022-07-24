import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const Spinner = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    >
      <Spin
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 40,
            }}
            spin
          />
        }
      />
    </div>
  );
};

export default Spinner;
