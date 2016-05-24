package es.urjc.code.daw.library.imagenes;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Image {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private String description;
	private String fileName;
	
	public Image(){}
	
	public Image(String description, String fileName) {
		super();
		this.description = description;
		this.fileName = fileName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "Image [id=" +this.id +", description=" + description + ", fileName=" + fileName + "]";
	}

}
