import { Link, useLocation } from 'react-router-dom';
import useFetch from '../../custom-hooks/useFetch';

function RecipeList() {
  const location = useLocation();

  const { loading, fetchData, errorMsg } = useFetch(
    'https://dummyjson.com/recipes'
  );
  console.log(errorMsg);

  if (loading) return <h1>Fetching recipes! Please Wait...</h1>;

  return (
    <div>
      <h1>Recipe List</h1>

      <ul>
        {fetchData?.recipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <li>{recipe.name}</li>
              <Link to={`${location.pathname}/${recipe.id}`}>Detail</Link>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default RecipeList;
