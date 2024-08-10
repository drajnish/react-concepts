import { Link, useLocation } from 'react-router-dom';

function RecipeList() {
  const location = useLocation();

  return (
    <div>
      <h1>Recipe List</h1>
      <Link to={`${location.pathname}/5`}>Detail</Link>
    </div>
  );
}

export default RecipeList;
