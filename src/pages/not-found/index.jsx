import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>This page does not exist</p>
      <p>
        Go back to <Link to={'/recipe'}>Recipe Page</Link>
      </p>
    </div>
  );
}

export default PageNotFound;
