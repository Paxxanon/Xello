package project.xello.server.services;

import java.nio.CharBuffer;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import project.xello.server.dtos.SignUpDto;
import project.xello.server.dtos.UserDto;
import project.xello.server.entities.User;
import project.xello.server.exceptions.AppException;
import project.xello.server.mappers.UserMapper;
import project.xello.server.repositories.UserRepository;

@RequiredArgsConstructor
@Service
public class UserService {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final UserMapper userMapper;

  public UserDto register(SignUpDto userDto) {
    Optional<User> optionalUser = userRepository.findByLogin(
      userDto.getLogin()
    );

    if (optionalUser.isPresent()) {
      throw new AppException("Login already exists", HttpStatus.BAD_REQUEST);
    }

    User user = userMapper.signUpToUser(userDto);
    user.setPassword(
      passwordEncoder.encode(CharBuffer.wrap(userDto.getPassword()))
    );

    User savedUser = userRepository.save(user);

    return userMapper.toUserDto(savedUser);
  }

  public Iterable<User> getUsers() {
    return userRepository.findAll();
  }
}
