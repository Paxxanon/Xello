package project.xello.server.repositories;

import org.springframework.data.repository.CrudRepository;

import project.xello.server.entities.Board;

public interface BoardRepository extends CrudRepository<Board, Integer> {
  
}
