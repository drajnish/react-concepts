import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
// import FormComponent from './components/form';
import CommentsList from './pages/comments';
import RecipeList from './pages/recipe';
import RecipeDetails from './pages/recipe-details';
import PageNotFound from './pages/not-found';
// import UseReducerExample from './components/useReducer';
// import ContextButton from './components/context/button';
// import ContextText from './components/context/text';
// import ProductList from './components/products';

function App() {
  const navigate = useNavigate();
  return (
    <>
      <h1>React Router DOM</h1>
      {/* <ProductList /> */}
      {/* <ContextButton />
      <ContextText /> */}
      {/* <UseReducerExample /> */}
      {/* <FormComponent /> */}
      <div>
        <ul style={{ listStyleType: 'none' }}>
          <li
            style={{
              backgroundColor: 'lightgray',
              display: 'inline-block',
              margin: '5px',
              padding: '5px 10px',
              borderRadius: '15px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/recipe')}
          >
            Recipe
          </li>
          <li
            style={{
              backgroundColor: 'lightgray',
              display: 'inline-block',
              margin: '5px',
              padding: '5px 10px',
              borderRadius: '15px',
              cursor: 'pointer',
            }}
            onClick={() => navigate('/comments')}
          >
            Comments
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/recipe" element={<RecipeList />} />
        <Route path="/comments" element={<CommentsList />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
