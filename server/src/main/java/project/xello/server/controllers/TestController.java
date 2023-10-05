package project.xello.server.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import project.xello.server.entities.User;
import project.xello.server.services.UserService;

@RequiredArgsConstructor
@RestController
public class TestController {

  private final UserService userService;

  //@PostMapping(path = "/register")
  @GetMapping(path = "/users")
  public @ResponseBody Iterable<User> getAllUsers() {
    return userService.getUsers();
  }
}
