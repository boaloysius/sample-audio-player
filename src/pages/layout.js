import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/audio">Audio</Link>
          </li>
          <li>
            <Link to="/video">Video</Link>
          </li>
          <li>
            <Link to="/upload-video">Upload Video</Link>
          </li>
          <li>
            <Link to="/upload-audio">Upload Audio</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
