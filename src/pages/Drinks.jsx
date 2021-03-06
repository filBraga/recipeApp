import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MainCard from '../components/MainCard';
import AppContext from '../context/AppContext';
import Footer from '../components/Footer';
import Header from '../components/Header';
// import MainCardDrinks from '../components/MainCard';

const LIM_MAP = 12;
const LIM_BUTTON = 5;

export default function Drinks() {
  const {
    dataDrinks,
    dataCategoryDrinks,
    handleClick,
    handleAllClick,
  } = useContext(AppContext);

  return (
    <div>
      <Header title="Drinks" loadingSearch />
      <div>
        <section>
          <button
            type="button"
            data-testid="All-category-filter"
            onClick={ () => handleAllClick('allDrinks') }
          >
            All
          </button>
          {dataCategoryDrinks.slice(0, LIM_BUTTON).map(({ strCategory }, index) => (
            <button
              data-testid={ `${strCategory}-category-filter` }
              key={ index }
              name={ strCategory }
              onClick={ (e) => handleClick('drinks', e) }
              type="button"
            >
              {strCategory}
            </button>
          ))}
        </section>
        {dataDrinks !== undefined
        && dataDrinks !== null
        && dataDrinks.slice(0, LIM_MAP).map((drink, index) => (
          <Link key={ drink.idDrink } to={ `/drinks/${drink.idDrink}` }>
            <div className="containerMainCard">
              <MainCard
                idMeal={ drink.idDrink }
                strMeal={ drink.strDrink }
                strMealThumb={ drink.strDrinkThumb }
                index={ index }
              />
            </div>
          </Link>
        ))}
        <Footer />
      </div>
    </div>
  );
}
