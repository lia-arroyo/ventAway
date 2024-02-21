import { useEffect, useRef, useState } from "react";
import "../styles/textfield.scss";
import { TIMEOUT_DURATION } from "../utils/consts";

const TextField = ({ isButtonClicked }: { isButtonClicked: boolean }) => {
  const [text, setText] = useState<string>("");
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isButtonClicked) {
      setTimeout(() => setText(""), TIMEOUT_DURATION);
      ref.current?.focus();
    }
  }, [isButtonClicked]);

  return (
    <textarea
      id="vent-area"
      autoFocus
      rows={17}
      value={text}
      onChange={(e) => setText(e.target.value)}
      ref={ref}
    />
  );
};

export default TextField;
