import { MotionProps, motion } from "framer-motion";
import { Button } from "./components/Button";
import TextField from "./components/TextField";
import "./styles/app.scss";
import { useEffect, useState } from "react";
import { TIMEOUT_DURATION } from "./utils/consts";

function App() {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  const animations: MotionProps = {
    animate: { scale: 0 },
    transition: { duration: TIMEOUT_DURATION / 1000 - 0.5 },
  };

  useEffect(() => {
    isButtonClicked &&
      setTimeout(() => {
        setIsButtonClicked(false);
      }, TIMEOUT_DURATION);
  }, [isButtonClicked]);

  return (
    <motion.div className="app" {...(isButtonClicked && animations)}>
      <p>vent away...</p>
      <TextField isButtonClicked={isButtonClicked} />
      <Button onClick={() => setIsButtonClicked(true)} />
    </motion.div>
  );
}

export default App;
