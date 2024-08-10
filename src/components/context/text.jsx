import { useContext } from 'react';
import { GlobalContext } from '../../context';

const ContextText = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <h1
      style={{
        fontSize: theme === 'light' ? '50px' : '100px',
        backgroundColor: theme === 'light' ? 'lightblue' : 'black',
        color: theme === 'light' ? 'black' : 'yellow',
      }}
    >
      Shiva Rama Krishanan
    </h1>
  );
};

export default ContextText;
