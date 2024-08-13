import { useEffect, useRef } from 'react';
import UseMemoHook from '../usememo-hook';
import UseCallbackHook from '../usecallback-hook';

function Hooks() {
  const countValue = useRef(0);
  const divRefEl = useRef();
  const inputRefEl = useRef('hello');

  function handleClick() {
    countValue.current++;
    console.log(countValue);
  }

  useEffect(() => {
    const getDivRefEl = divRefEl.current;

    getDivRefEl.style.color = 'red';

    inputRefEl.current.focus();
  }, []);

  return (
    <div>
      <h1>Hooks</h1>
      <h2>useRef Hook</h2>
      <button onClick={handleClick}>Click Me</button>
      <div ref={divRefEl}>
        Div Ref element text color changed using useRef hook
      </div>
      <input type="text" name="useRef" ref={inputRefEl} />
      <div>
        <h2>useMemo Hook</h2>
        <UseMemoHook />
      </div>
      <div>
        <h2>useCallback Hook</h2>
        <UseCallbackHook />
      </div>
    </div>
  );
}

export default Hooks;
