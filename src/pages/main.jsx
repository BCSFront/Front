import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-red-100 ">
      <Link to="/login" className="btn-sample">
        login
      </Link>
      <Link to="/home" className="btn-sample">
        home
      </Link>
      <Link to="/start" className="btn-sample">
        start
      </Link>
      <Link to="/welcome" className="btn-sample">
        welcome
      </Link>
      <Link to="/selection" className="btn-sample">
        selection
      </Link>
      <Link to="/welcome1" className="btn-sample">
        Welcome1
      </Link>
      <Link to="/welcome2" className="btn-sample">
        Welcome2
      </Link>
      <Link to="/welcome3" className="btn-sample">
        Welcome3
      </Link>
    </div>
  );
};
export default Main;
