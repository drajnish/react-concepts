import { memo } from 'react';

// eslint-disable-next-line react/prop-types
function Counter({ countValue, onClick }) {
  console.log(countValue, onClick);

  return (
    <div>
      <p>{countValue}</p>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default memo(Counter);
