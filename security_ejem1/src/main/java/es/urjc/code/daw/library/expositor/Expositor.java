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
	private Image imgn;
	
	public Expositor(){}
	
	public Expositor(boolean dest, Image img){
		super();
		this.destacado = dest;
		this.imgn = img;
	}
	
	public boolean getDestacado(){
		return this.destacado;
	}
	
	public void setDestacado(boolean dest){
		this.destacado = dest;
	}
	
	public Image getImgn(){
		return this.imgn;
	}
	
	public void setImgn(Image img){
		this.imgn = img;
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
				+this.destacado +", imgn=" +this.imgn.toString() +"]";
	}
}	