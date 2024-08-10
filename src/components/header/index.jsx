function Header() {
  return (
    <div>
      <h2>Header Page</h2>
      <ul style={{ listStyleType: 'none' }}>
        <li
          style={{
            backgroundColor: 'lightgray',
            display: 'inline-block',
            margin: '5px',
            padding: '5px 10px',
            borderRadius: '15px',
            cursor: 'pointer',
          }}
        >
          Recipe
        </li>
        <li
          style={{
            backgroundColor: 'lightgray',
            display: 'inline-block',
            margin: '5px',
            padding: '5px 10px',
            borderRadius: '15px',
            cursor: 'pointer',
          }}
        >
          Comments
        </li>
      </ul>
    </div>
  );
}

export default Header;
