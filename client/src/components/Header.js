import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PaymentsStripe from "./PaymentsStripe";

const Header = () => {
  const auth = useSelector((state) => state.auth);

  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="payments">
            <PaymentsStripe />
          </li>,
          <li key="credits" style={{ margin: "0 10px" }}>
            Credits: {auth.credits}
          </li>,
          <li key="logout">
            <a href="/api/logout">Logout</a>
          </li>,
        ];
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link
          to={auth ? "/surveys" : "/"}
          className="left brand-logo"
          style={{ marginLeft: "10px" }}
        >
          Emaily
        </Link>
        <ul className="right">{renderContent()}</ul>
      </div>
    </nav>
  );
};

export default Header;
