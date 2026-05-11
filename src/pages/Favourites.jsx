import { Link } from "react-router-dom";
import CountryCard from "../components/CountryCard";
import { useFavourites } from "../context/FavouritesContext";

function Favourites() {
  const { favourites } = useFavourites();

  if (favourites.length === 0) {
    return (
      <div className="favourites">
        <h2>No saved countries yet</h2>
        <p>Save a country from the Home page to see it here.</p>
        <Link to="/" className="favourites__link">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="favourites">
      <h2>Your Saved Countries</h2>
      <div className="cards-grid">
        {favourites.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Favourites;
