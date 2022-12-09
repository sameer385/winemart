import React from "react";
import Cocktail from "./Cocktail";
import Loader from "./Loader";
import { useGlobalContext } from "../Context";

function CocktailList() {
  const { loading, cocktails } = useGlobalContext();
  console.log("list of drinks", cocktails);

  if (loading) {
    return <Loader />;
  }
  if(cocktails.length < 1){
    return <h2 className="section-title">No cocktails matched to your search criteria</h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {
          cocktails.map((item)=>{
            return <Cocktail key={item.id} {...item}/>
          })
        }
      </div>

    </section>
  );
}

export default CocktailList;
