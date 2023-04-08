import "../components/card.css";
import { Link } from "react-router-dom";
export function Card({movie}) {
  const imageUrl="https://image.tmdb.org/t/p/w300"+movie.poster_path;
  return (
    <li className="card">
      <Link to={"/movies/"+movie.id}>
        <img width={230}
        height={345}
        src={imageUrl}
        alt={movie.title}
        className="movieImage"
        />
        
      </Link>
        <div>
        {movie.title}
        </div>


    </li>
    
  );
}
