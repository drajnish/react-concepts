import { useReducer } from 'react';

const InitialState = {
  showText: true,
  changeStyle: false,
};

const HIDE_TEXT = 'HIDE_TEXT';
const SHOW_TEXT = 'SHOW_TEXT';
const CHANGE_STYLE = 'CHANGE_TEXT_STYLE';

const reducer = (state, action) => {
  if (action.type === HIDE_TEXT) {
    return {
      ...state,
      showText: false,
    };
  }
  if (action.type === SHOW_TEXT) {
    return {
      ...state,
      showText: true,
    };
  }
  if (action.type === CHANGE_STYLE) {
    return {
      ...state,
      changeStyle: !state.changeStyle,
    };
  }
};

const UserReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <>
      {state.showText ? (
        <h1
          style={
            state.changeStyle
              ? {
                  fontSize: '50px',
                  backgroundColor: 'lightskyblue',
                  color: 'black',
                }
              : { fontSize: '50px', backgroundColor: 'black', color: 'yellow' }
          }
        >
          Shiva Rama Krishnan
        </h1>
      ) : (
        ''
      )}
      <button
        onClick={() =>
          dispatch({
            type: HIDE_TEXT,
          })
        }
      >
        Hide Text
      </button>
      <button onClick={() => dispatch({ type: SHOW_TEXT })}>Show Text</button>
      <button onClick={() => dispatch({ type: CHANGE_STYLE })}>
        Change Text Style
      </button>
    </>
  );
};

export default UserReducerExample;
