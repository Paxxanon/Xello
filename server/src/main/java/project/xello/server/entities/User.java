package project.xello.server.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;
import lombok.Data;

@Data
@Entity
public class User {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  private String email;
  private String username;
  private String firstName;
  private String lastName;
  private String login;
  private String password;

  @OneToMany(mappedBy = "user")
  private List<Workspace> workspaces;
  
}
