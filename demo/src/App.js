import "./App.css";
import { Link } from "react-router-dom";
import { Button } from "antd";

const App = () => {
  return (
    <Link to="/telescope">
      <Button>
        <p>Click Me!</p>
      </Button>
    </Link>
  );
};

export default App;
