import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  function handleSearchKeyDown(event) {
    if (event.key === 'Enter' && event.target.value.trim()) {
      navigate('/search?q=' + encodeURIComponent(event.target.value.trim()));
      event.target.value = '';
    }
  }

  return (
    <header className="header">
      <div className="header-inner">
        <NavLink to="/" className="logo">
          <span className="logo-icon">▶</span>
          <span>MovieBox</span>
        </NavLink>

        <nav className="nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => 'nav-item' + (isActive ? ' active' : '')}
          >
            О проекте
          </NavLink>
        </nav>

        <div className="search">
          <span className="search-icon">⌕</span>
          <input
            type="text"
            placeholder="Поиск фильмов"
            onKeyDown={handleSearchKeyDown}
          />
        </div>
      </div>
    </header>
  );
}