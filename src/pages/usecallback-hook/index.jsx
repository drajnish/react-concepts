import { useCallback, useState } from 'react';
import Counter from './counter';

function UseCallbackHook() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const memoizedCountOne = useCallback(
    () => setCountOne(countOne + 1),
    [countOne]
  );
  const memoizedCountTwo = useCallback(
    () => setCountTwo(countTwo + 1),
    [countTwo]
  );

  return (
    <div>
      <h2>UseCallbackHook</h2>
      <Counter countValue={countOne} onClick={memoizedCountOne} />
      <Counter countValue={countTwo} onClick={memoizedCountTwo} />
    </div>
  );
}

export default UseCallbackHook;
