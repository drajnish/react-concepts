import { useNavigate, useRoutes } from 'react-router-dom';
import './App.css';
// import FormComponent from './components/form';
import CommentsList from './pages/comments';
import RecipeList from './pages/recipe';
import RecipeDetails from './pages/recipe-details';
import PageNotFound from './pages/not-found';
import Layout from './components/layout';
// import UseReducerExample from './components/useReducer';
// import ContextButton from './components/context/button';
// import ContextText from './components/context/text';
// import ProductList from './components/products';

function CustomRoutes() {
  const element = useRoutes([
    {
      path: '/home',
      element: <Layout />,
      children: [
        {
          path: 'recipe',
          element: <RecipeList />,
        },
        {
          path: 'comments',
          element: <CommentsList />,
        },
        {
          path: 'recipe/:id',
          element: <RecipeDetails />,
        },
      ],
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);
  return element;
}

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
        <button
          style={{
            backgroundColor: 'lightgray',
            display: 'inline-block',
            margin: '5px',
            padding: '5px 10px',
            borderRadius: '15px',
          }}
          onClick={() => navigate('/home/recipe')}
        >
          Recipe
        </button>
        <button
          style={{
            backgroundColor: 'lightgray',
            display: 'inline-block',
            margin: '5px',
            padding: '5px 10px',
            borderRadius: '15px',
          }}
          onClick={() => navigate('/home/comments')}
        >
          Comments
        </button>
      </div>
      {/* <Routes>
        <Route path="/home" element={<Layout />}>
          <Route path="recipe" element={<RecipeList />} />
          <Route path="comments" element={<CommentsList />} />
          <Route path="recipe/:id" element={<RecipeDetails />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes> */}
      <CustomRoutes />
    </>
  );
}

export default App;
