import { useEffect, useRef } from 'react';

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
      <h1>Hooks (useRef, useCallback and useMemo)</h1>
      <button onClick={handleClick}>Click Me</button>
      <div ref={divRefEl}>
        Div Ref element text color changed using useRef hook
      </div>
      <input type="text" name="useRef" ref={inputRefEl} />
    </div>
  );
}

export default Hooks;
