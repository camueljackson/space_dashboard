import "./App.css";
import { Link } from "react-router-dom";
import { PageHeader } from "antd";

const App = () => {
  return (
    <div>
      <PageHeader title="Welcome to the Space Dashboard" />
      <div>
        <Link to="/neos">Visit today's list of terrifying space orbiters</Link>
      </div>
      <div>
        <Link to="/pod">Decompress with a pretty picture</Link>
      </div>
    </div>
  );
};

export default App;
