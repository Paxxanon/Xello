package project.xello.server.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {

  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;
  
  private String email;
  private String username;
  private String password;
  
  @OneToMany(mappedBy = "user")
  private List<Workspace> workspaces;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public List<Workspace> getWorkspaces() {
    return workspaces;
  }

  public void setWorkspaces(List<Workspace> workspaces) {
    this.workspaces = workspaces;
  }
  
  

}