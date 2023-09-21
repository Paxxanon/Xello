package project.xello.server.repositories;

import org.springframework.data.repository.CrudRepository;

import project.xello.server.entities.User;

public interface UserRepository extends CrudRepository<User, Integer> {
  
}