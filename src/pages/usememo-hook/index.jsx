import { useMemo, useState } from 'react';
import useFetch from '../../custom-hooks/useFetch';

function UseMemoHook() {
  const [textColor, setTextColor] = useState(false);
  const { fetchData, loading } = useFetch('https://dummyjson.com/products');

  const filteredData = (getFetchData) => {
    console.log(getFetchData);

    return getFetchData?.length > 0
      ? getFetchData?.filter((item) => item.price > 10)
      : [];
  };

  function handleClick() {
    setTextColor(!textColor);
  }

  const memoizedData = useMemo(
    () => filteredData(fetchData?.products),
    [fetchData?.products]
  );

  if (loading) return <p>Fetching data! Please Wait.</p>;
  return (
    <div>
      <div>
        <h2 style={{ color: textColor ? 'blue' : 'black' }}>
          useMemo hook example
        </h2>
        <button onClick={handleClick}>Click to change color</button>
      </div>
      <ul>
        {memoizedData?.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default UseMemoHook;
