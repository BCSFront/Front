import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-blue-300 flex flex-col justify-center items-center min-h-screen">
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
      <Link to="/learning1" className="btn-sample">
        Learning1
      </Link>
      <Link to="/learning2" className="btn-sample">
        Learning2
      </Link>
      <Link to="/learning3" className="btn-sample">
        Learning3
      </Link>
    </div>
  );
};
export default Main;
