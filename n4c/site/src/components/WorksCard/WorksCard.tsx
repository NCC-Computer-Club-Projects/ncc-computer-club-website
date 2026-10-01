import { Link } from 'react-router-dom';
import './WorksCard.scss';
import 'animate.css';

export default function WorksCard({ title, text, destination }) {
  return (
    <Link to={destination} className="works-card-link">
      <div className='works-card text-center animate__animated animate__fadeIn'>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </Link>
  );
}