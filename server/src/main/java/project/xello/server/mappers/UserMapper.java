package project.xello.server.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import project.xello.server.dtos.SignUpDto;
import project.xello.server.dtos.UserDto;
import project.xello.server.entities.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
  UserDto toUserDto(User user);

  @Mapping(target = "password", ignore = true)
  User signUpToUser(SignUpDto signUpDto);
}
