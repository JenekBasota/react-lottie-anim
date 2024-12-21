import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound__container">
      <div className="lottie__player">
        <DotLottieReact src="/utils/data.json" loop autoplay />
      </div>
      <h1 className="notfound__title">404 - Page Not Found</h1>
      <p className="notfound__text">
        The page you are looking for does not exist. Try going back to the
        homepage.
      </p>
      <Link to="/">
        <button className="notfound__link">Go Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
