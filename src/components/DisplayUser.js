const DisplayUser = ({gender, name}) => {
  const trial = '';
  return (
    <ul>
      <li>
        <h1>
          {name.title} {name.first}
          {name.last}
        </h1>
        </li>
    </ul>
  );
}

export default DisplayUser;
