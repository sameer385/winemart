import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import { useParams, Link } from "react-router-dom";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

function CocktailDetails() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  useEffect(() => {
    setLoading(true);
    async function getDrink() {
      try {
        const response = await fetch(`${url}${id}`);
        const data = await response.json();
        console.log(data);
        if (data.drinks) {
          const {
            strDrink,
            strAlcoholic,
            strDrinkThumb,
            strGlass,
            strInstructions,
            strCategory,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0];
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];
          const newCocktail = {
            name: strDrink,
            img: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
            category: strCategory,
            instructions: strInstructions,
            ingredients,
          };
          setCocktail(newCocktail);
          console.log(newCocktail);
        } else {
          setCocktail(null);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    getDrink();
  }, [id]);
  if (loading) {
    return <Loader />;
  }
  if (!cocktail) {
    return <h2 className="section-title">No cocktail to display</h2>;
  }
  const { name, info, img, glass, category, instructions, ingredients } =
    cocktail;
  return (
    <section className="section cocktail-section">
      <h2 className="section-title">{name}</h2>

      <div className="drink">
        <img src={img} alt={name} />

        <div className="drink-info">
          <p>
            <span className="drink-data">Name: </span>
            {name}
          </p>
          <p>
            <span className="drink-data">category: </span>
            {category}
          </p>
          <p>
            <span className="drink-data">info: </span>
            {info}
          </p>

          <p>
            <span className="drink-data">glass: </span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instructions: </span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients: </span>
            {ingredients.map((item, index) => {
              return item ? <span key={index}>{item},</span> : null;
            })}
          </p>
        </div>
      </div>
      <Link to="/" className="btn btn-primary btn-margin-top">
        Back to Home
      </Link>
    </section>
  );
}

export default CocktailDetails;
