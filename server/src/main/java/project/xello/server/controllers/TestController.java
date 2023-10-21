package project.xello.server.controllers;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import project.xello.server.dtos.SignUpDto;
import project.xello.server.dtos.UserDto;
import project.xello.server.entities.User;
import project.xello.server.services.UserService;

@RequiredArgsConstructor
@RestController
public class TestController {

  private final UserService userService;

  @PostMapping(path = "/register")
  public ResponseEntity<UserDto> register(@RequestBody @Valid SignUpDto user) {
    UserDto createdUser = userService.register(user);
    return ResponseEntity.ok(createdUser);
  }

  @GetMapping(path = "/users")
  public ResponseEntity<Iterable<User>> getAllUsers() {
    return new ResponseEntity<Iterable<User>>(
      userService.getUsers(),
      HttpStatus.OK
    );
  }
  // public @ResponseBody Iterable<User> getAllUsers() {
  //   return userService.getUsers();
  // }
}
