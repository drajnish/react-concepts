import { useContext } from 'react';
import { GlobalContext } from '../../context';

const ContextButton = () => {
  const { handleChangeTheme } = useContext(GlobalContext);

  return <button onClick={handleChangeTheme}>Change Theme</button>;
};

export default ContextButton;
