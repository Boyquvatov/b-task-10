import { NavLink, useLocation } from "react-router-dom";
import routes from "@routes";
import "./index.css";
const Index = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <header>
      <ul className="header">
        {routes?.map((item, index) => (
          <li key={index} className="list-unstyled color">
            <NavLink
              to={item.path}
              className={
                item.path === pathname
                  ? item.active
                  : "text-success py-2 px-4 fs-3 text-decoration-none"
              }
            >
              {item.content}
            </NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Index;
