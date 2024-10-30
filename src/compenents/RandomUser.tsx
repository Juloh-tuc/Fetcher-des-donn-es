

const RandomUser = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUserData(data.results[0]);
      })
      .catch((error) => console.error("Erreur lors de la récupération des données : ", error));
  }, []);

  if (!userData) {
    return <div>Chargement...</div>;
  }

  return (
    <div>
      <h2>Données de l'utilisateur :</h2>
      <p>Nom : {userData.name.first} {userData.name.last}</p>
      <p>Email : {userData.email}</p>
      <img src={userData.picture.large} alt="User" />
    </div>
  );
};

export default RandomUser;