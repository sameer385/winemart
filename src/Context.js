import React, { useContext, useEffect, useState, useCallback} from "react";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchDrink, setSearchDrink] = useState("a");
  const [cocktails, setCocktails] = useState([]);
  const fetchDrink = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${searchDrink}`);
      const data = await response.json();
      // console.log(data);
      if(data.drinks){
        const newCocktails = data.drinks.map((item)=>{
          const {idDrink, strDrink, strAlcoholic, strDrinkThumb, strGlass} = item
          return {id: idDrink, name: strDrink, info: strAlcoholic, img: strDrinkThumb, glass: strGlass}
        })
        setCocktails(newCocktails)
      }
      else{
        setCocktails([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  }, [searchDrink])
  useEffect(()=>{
    fetchDrink();
  }, [searchDrink, fetchDrink])
  return <AppContext.Provider value={{loading, cocktails, setSearchDrink}}>{children}</AppContext.Provider>;
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
