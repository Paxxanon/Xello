package project.xello.server.repositories;

import org.springframework.data.repository.CrudRepository;

import project.xello.server.entities.Workspace;

public interface WorkspaceRepository extends CrudRepository<Workspace, Integer> {
  
}
