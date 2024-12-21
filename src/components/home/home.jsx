import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Home Page</h1>
      <Link to="/non-existent-page">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Go to 404 Page
        </button>
      </Link>
    </div>
  );
};

export default Home;
