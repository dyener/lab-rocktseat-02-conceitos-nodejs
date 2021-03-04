const express = require("express");
const cors = require("cors");
const Repository = require("../src/model/repository");

const { v4: uuid, validate: isUuid } = require('uuid');


const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories);
});

app.post("/repositories", (request, response) => {
  
  const {title, url, techs} = request.body;

  const repository = new Repository(uuid(),title,url, techs, 0);

  repositories.push(repository);

  return response.json(repository);

});

app.put("/repositories/:id", (request, response) => {
  
  const {title, url, techs} = request.body;
  const {id} = request.params;

  const index = repositories.findIndex(repository => repository.id === id);

  if(index === -1){
    return response.status(400).json({ error: 'Repository does not exists.' })
  }

  const updatedRepository = repositories[index];

  updatedRepository.setTite(title);
  updatedRepository.setUrl(url);
  updatedRepository.setTechs(techs);

  repositories[index] = updatedRepository;

  return response.json(updatedRepository);

});

app.delete("/repositories/:id", (request, response) => {
  
  const {id} = request.params;

  const index = repositories.findIndex(repository => repository.id === id);

  if(index === -1){
    return response.status(400).json({ error: 'Repository does not exists.' })
  }
  
  repositories.splice(index,1);
  
  return response.status(204).send();

});

app.post("/repositories/:id/like", (request, response) => {
  const {id} = request.params;

  const index = repositories.findIndex(repository => repository.id === id);

  if(index === -1){
    return response.status(400).json({ error: 'Repository does not exists.' })
  }

  repositories[index].likes ++;

  return response.json(repositories[index]);
});

module.exports = app;
