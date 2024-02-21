import { motion } from "framer-motion";
import { Button } from "./components/Button";
import TextField from "./components/TextField";
import "./styles/app.scss";

function App() {
  return (
    <motion.div
      className="app"
      animate={{ scale: 0 }}
      transition={{ duration: 5 }}
    >
      <p>vent away...</p>
      <TextField />
      <Button />
    </motion.div>
  );
}

export default App;
