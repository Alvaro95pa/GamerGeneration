package es.urjc.code.daw.library.expositor;


import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import es.urjc.code.daw.library.imagenes.Image;


@Entity
public class Expositor {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private boolean destacado;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Image imagen;
	
	public Expositor(){}
	
	public Expositor(boolean dest, Image img){
		super();
		this.destacado = dest;
		this.imagen = img;
	}
	
	public boolean getDestacado(){
		return this.destacado;
	}
	
	public void setDestacado(boolean dest){
		this.destacado = dest;
	}
	
	public Image getImagen(){
		return this.imagen;
	}
	
	public void setImagen(Image img){
		this.imagen = img;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	@Override
	public String toString() {
		return "Expositor [id=" +this.id +", destacado=" 
				+this.destacado +", imagen=" +this.imagen.toString() +"]";
	}
}	