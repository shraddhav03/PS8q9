import { NavLink } from "react-router-dom";

export const Home = () => {
  const getActiveStyle = ({ isActive }) => ({
    margin: "1 rem 0",
    fontWeight: isActive ? "600" : "400",
    padding: isActive ? "1rem" : "0.5rem",
    color: isActive ? "red" : ""
  });

  return (
    <>
      <div>
        <h2 className="product-listing-page">Welcome Shraddha</h2>
        <nav className="nav-links">
          <NavLink style={getActiveStyle} to="/questionspage">
            Show Questions List
          </NavLink>
        </nav>
      </div>
    </>
  );
};
