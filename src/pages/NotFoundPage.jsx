import { useLocation, useNavigate } from 'react-router-dom';
import StatusBlock from '../components/StatusBlock.jsx';

export default function NotFoundPage() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <section className="page-shell">
      <StatusBlock
        title="Страница не найдена"
        text={`Похоже, адреса "${location.pathname}" нет в MovieBox.`}
        buttonText="На главную"
        onClick={() => navigate('/')}
      />
    </section>
  );
}