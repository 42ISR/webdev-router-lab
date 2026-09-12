import { Outlet } from 'react-router-dom';
import Header from '../components/Header.jsx';

const Layout = () => {
  return (
    <>
      <Header />
      <div className="page-area">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;