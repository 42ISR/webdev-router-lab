import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function handleSearchKeyDown(e) {
    if (e.key === 'Enter') {
      console.log('Search query:', e.target.value);
      const query = e.target.value.trim();
      if (query) {
        navigate('/search?q=' + encodeURIComponent(query));
        e.target.value = '';
      }
    }
  }

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" end className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </NavLink>

        <nav className="nav">
          <NavLink className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/" end>
            Главная
          </NavLink>
          <NavLink className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/movies">
            Фильмы
          </NavLink>
          <NavLink className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/about">
            О проекте
          </NavLink>
          <NavLink className={({ isActive }) => `nav-item${isActive ? ' active' : ''}`} to="/contacts">
            Контакты
          </NavLink>
        </nav>

        <div className="header-search">
          <input type="text" onKeyDown={handleSearchKeyDown} placeholder="Поиск фильмов" />
        </div>
      </div>
    </header>
  );
}