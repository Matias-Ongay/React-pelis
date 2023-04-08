import palomita from "../img/palomita.png";
export function getMovieImg(path,width) {
  return path? `https://image.tmdb.org/t/p/w${width}${path}`:palomita;
}
//const imageUrl="https://image.tmdb.org/t/p/w300"+movie.poster_path;
