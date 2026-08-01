import { useEffect, useState } from "react";

import ProjectCard from "../components/ProjectCard";


function Projets() {

  const [projets, setProjets] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch("https://api.github.com/users/mannpierre7-crypto/repos")

      .then(response => response.json())

      .then(data => {

        setProjets(data);

        setLoading(false);

      })

      .catch(error => {

        console.log(error);

        setLoading(false);

      });


  }, []);


  return (

    <section>

      <h1>
        Nos projets GitHub
      </h1>


      {

        loading ?

        <p>
          Chargement...
        </p>


        :


        <div>

          {

            projets.map(projet => (

              <ProjectCard

                key={projet.id}

                projet={projet}

              />

            ))

          }


        </div>

      }


    </section>

  );

}


export default Projets;