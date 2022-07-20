import { useState, useEffect } from "react";
import "../styles/repositories.scss";
import { RepositoryItem } from "./RepositoryItem";
const repositoryName = 'unform';

//https:api.github.com/users/Romario-gomes

export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https:api.github.com/users/Romario-gomes/repos')
      .then(response => response.json())
      .then(data => setRepositories(data))
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositório</h1>

      <ul>
        { repositories.map(repository => {
          return <RepositoryItem key={repository.name} repository={repository} />
        }) }
      </ul>
    </section>
  )
}