function Equipe() {

  const membres = [
    {
      nom: "Emmanuel Pierre",
      role: "Développement React (Frontend)"
    },
    {
      nom: "Kerlane Nestant",
      role: "Intégration HTML / CSS"
    },
    {
      nom: "Jean-Fritz Celestin",
      role: "Gestion de la base de données"
    }
  ];


  return (

    <section>

      <h1>Notre équipe</h1>

      <div className="team-container">

        {membres.map((membre, index) => (

          <div className="team-card" key={index}>

            <h2>
              {membre.nom}
            </h2>

            <p>
              {membre.role}
            </p>

          </div>

        ))}

      </div>

    </section>

  );

}


export default Equipe;