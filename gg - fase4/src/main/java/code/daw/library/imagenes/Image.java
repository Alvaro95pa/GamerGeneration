package code.daw.library.imagenes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Image {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private String descripcion;
	private String url;
	
	public Image(){}
	
	public Image(String description, String fileName) {
		super();
		this.descripcion = description;
		this.url = fileName;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String description) {
		this.descripcion = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String fileName) {
		this.url = fileName;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Image [id=" +this.id +", descripcion=" + this.descripcion + ", url=" + this.url + "]";
	}

}
