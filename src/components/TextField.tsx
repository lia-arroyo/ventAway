import { useEffect, useState } from "react";
import "../styles/textfield.scss";
import { TIMEOUT_DURATION } from "../utils/consts";

const TextField = ({ isButtonClicked }: { isButtonClicked: boolean }) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    isButtonClicked && setTimeout(() => setText(""), TIMEOUT_DURATION);
  }, [isButtonClicked]);

  return (
    <textarea
      id="vent-area"
      autoFocus
      rows={17}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default TextField;
