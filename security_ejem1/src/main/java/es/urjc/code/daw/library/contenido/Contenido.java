package es.urjc.code.daw.library.contenido;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;

import es.urjc.code.daw.library.expositor.Expositor;
import es.urjc.code.daw.library.imagenes.Image;

@Entity
public class Contenido {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private String nProducto;
	private String tipo;
	private String categoria;
	private String titulo;
	private String fecha;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Image multimedia;
	
	private String resumen;
	
	private String cuerpo;
	private String ratio;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Expositor expo;
	

	public Contenido() {}

	public Contenido(String nProducto, String tipo, String categoria, 
			String titulo, String fecha, Image multimedia, String resumen, 
			String cuerpo, String ratio, Expositor expo) {
		super();
		this.nProducto = nProducto;
		this.tipo = tipo;
		this.categoria = categoria;
		this.titulo = titulo;
		this.fecha = fecha;
		this.multimedia = multimedia;
		this.resumen = resumen;
		this.cuerpo = cuerpo;
		this.ratio = ratio;
		this.expo = expo;
	}
	
	public String getNombreProducto() {
	 return this.nProducto;
	}

	public void setNombreProducto(String nProd) {
		this.nProducto = nProd;
	}
	
	public String getTipo() {
		return this.tipo;
	}

	public void setTipo(String tipo) {
		this.tipo = tipo;
	}
	
	public String getCategoria() {
		return this.categoria;
	}
	
	public void setCategoria(String categoria) {
		this.categoria = categoria;
	}
	
	public String getTitulo() {
		return this.titulo;
	}
	
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	public String getFecha() {
		return this.fecha;
	}
	
	public void setFecha(String fecha) {
		this.fecha = fecha;
	}
	
	public Image getMultimedia() {
		return this.multimedia;
	}
	
	public void setMultimedia(Image multimedia) {
		this.multimedia = multimedia;
	}
	
	public String getResumen() {
		return this.resumen;
	}
	
	public void setResumen(String resumen) {
		this.resumen = resumen;
	}
	
	public String getCuerpo() {
		return this.cuerpo;
	}
	
	public void setCuerpo(String cuerpo) {
		this.cuerpo = cuerpo;
	}
	
	public String getRatio() {
		return this.ratio;
	}
	
	public void setRatio(String ratio) {
		this.ratio = ratio;
	}
	
	public Expositor getExpositor() {
		return this.expo;
	}
	
	public void setExpositor(Expositor expo) {
		this.expo = expo;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	@Override
	public String toString() {
		return "Contenido [id=" +this.id +", nProducto=" +this.nProducto 
				+", tipo=" +this.tipo +", categoria=" +this.categoria 
				+", titulo=" +this.titulo +", fecha=" +this.fecha +", multimedia=" 
				+this.multimedia.toString() +", resumen=" +this.resumen +", resumen=" +this.resumen 
				+", cuerpo=" +this.cuerpo +", expo=" +this.expo.toString() +"]";
	}
}