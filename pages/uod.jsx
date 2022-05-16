const UOD = ({ user }) => {
  console.log(user);
  return (
    <>
      <h1>UZ</h1>
      <button onClick={() => console.log(user)}>lol</button>
      <h2>{user.name}</h2>
    </>
  );
};

export default UOD;
