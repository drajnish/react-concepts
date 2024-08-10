import { Route, Routes } from 'react-router-dom';
import './App.css';
// import FormComponent from './components/form';
import CommentsList from './pages/comments';
import RecipeList from './pages/recipe';
// import UseReducerExample from './components/useReducer';
// import ContextButton from './components/context/button';
// import ContextText from './components/context/text';
// import ProductList from './components/products';

function App() {
  return (
    <>
      <h1>React Router DOM</h1>
      {/* <ProductList /> */}
      {/* <ContextButton />
      <ContextText /> */}
      {/* <UseReducerExample /> */}
      {/* <FormComponent /> */}
      <Routes>
        <Route path="recipe" element={<RecipeList />} />
        <Route path="comments" element={<CommentsList />} />
      </Routes>
    </>
  );
}

export default App;
