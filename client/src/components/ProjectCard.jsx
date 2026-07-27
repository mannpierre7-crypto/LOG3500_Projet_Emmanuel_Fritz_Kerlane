function ProjectCard({projet}){


return(

<div className="project-card">


<h3>
{projet.name}
</h3>


<p>
{projet.description || "Aucune description"}
</p>


<p>
Langage : {projet.language || "Non spécifié"}
</p>


<a 
href={projet.html_url}
target="_blank"
>

Voir GitHub

</a>


</div>


);


}


export default ProjectCard;