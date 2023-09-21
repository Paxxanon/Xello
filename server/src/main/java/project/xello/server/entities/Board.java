package project.xello.server.entities;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
//import jakarta.persistence.OneToMany;

@Entity
public class Board {
  
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;
  
  private String background;
  private String title;
  private boolean visibility;
  
  @ManyToOne
  @JoinColumn(name = "workspace_id")
  private Workspace workspace;

  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public String getBackground() {
    return background;
  }

  public void setBackground(String background) {
    this.background = background;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public boolean isVisibility() {
    return visibility;
  }

  public void setVisibility(boolean visibility) {
    this.visibility = visibility;
  }

  public Workspace getWorkspace() {
    return workspace;
  }

  public void setWorkspace(Workspace workspace) {
    this.workspace = workspace;
  }

  

}
