import './page-link.scss';
import { Link } from 'react-router-dom';
import upperCaseAll from '@scripts/utils/uppercase-all.js';

interface PageLinkProps {
  pageName: string;
  isActive: boolean;
  handleClick: () => void;
}

export default function PageLink({
  pageName,
  isActive,
  handleClick,
}: PageLinkProps) {
  const destination = pageName === 'home' ? '/' : pageName;

  return (
    <li
      className="nav-item d-inline-flex align-items-center"
      onClick={handleClick}
    >
      <Link
        to={destination}
        className={`nav-link${isActive ? ' active' : ''}`}
        aria-current={isActive ? 'page' : undefined}
      >
        {pageName === 'PcRepairClinic' ? 'PC Repair Clinic' : upperCaseAll(pageName)}
      </Link>
    </li>
  );
}