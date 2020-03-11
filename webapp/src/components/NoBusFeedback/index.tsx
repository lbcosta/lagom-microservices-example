import React, { FunctionComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.scss";

const NoBusFeedback: FunctionComponent = () => {
  return (
    <div className="feedback">
      <div className="icon">
        <FontAwesomeIcon
          className="bus-icon"
          icon="bus"
          color="red"
          size="lg"
        />
        <FontAwesomeIcon
          className="x-icon"
          icon="times-circle"
          color="red"
          size="lg"
        />
      </div>
      <span>Nenhum ônibus nesta rota</span>
    </div>
  );
};

export default NoBusFeedback;
