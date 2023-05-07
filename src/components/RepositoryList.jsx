import { RepositoryItem } from "./RepositoryItem"
import '../../styles/repositories.scss'
import { useState, useEffect } from "react"


export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(()=> {
        fetch('https://api.github.com/users/Juanzeen/repos')
         .then(response => response.json())
          .then(data=>setRepositories(data));
    }, []);

    console.log(repositories)

    return(
        <section className="repository-list">
        <h1>Repo do Juanzeen</h1>

        <ul>
        {repositories.map(repository=><RepositoryItem key={repository.name} repository={repository}/>)}   
        </ul>     
        </section>
    )
} 