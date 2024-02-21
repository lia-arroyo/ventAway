import { MotionProps, motion } from "framer-motion";
import { Button } from "./components/Button";
import TextField from "./components/TextField";
import "./styles/app.scss";
import { useState } from "react";

function App() {
  const [isButtonClicked, setIsButtonClicked] = useState<boolean>(false);

  const animations: MotionProps = {
    animate: { scale: 0 },
    transition: { duration: 1.5 },
  };

  return (
    <motion.div className="app" {...(isButtonClicked && animations)}>
      <p>vent away...</p>
      <TextField />
      <Button onClick={() => setIsButtonClicked(true)} />
    </motion.div>
  );
}

export default App;
