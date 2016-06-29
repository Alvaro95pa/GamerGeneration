package code.daw.library.productos;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import code.daw.library.comentario.Comentario;
import code.daw.library.imagenes.Image;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Producto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private int tipoprod;
	private String name;
	
	@OneToOne
	private Image img;
	
	private String fecha;
	private String genero;
	
	private String plataforma;
	private String desarrollador;
	private String editor;

	private String procesador;
	private String memoria;
	private String grafica;
	private String almacenamiento;
	
	private String trailer;
	private String sinopsis;
	
	@OneToMany(fetch = FetchType.EAGER, cascade=CascadeType.ALL)
	private List<Comentario> comentarios;

	public Producto() {}

	public Producto(int tipoprod, String name, String fecha, String genero, String plataforma,
			String desarrollador, String editor, String procesador, String memoria, String grafica,
			String almacenamiento, String trailer, String sinopsis) {
		super();
		this.tipoprod = tipoprod;
		this.name = name;
		this.fecha = fecha;
		this.genero = genero;
		this.plataforma = plataforma;
		this.desarrollador = desarrollador;
		this.editor = editor;
		this.procesador = procesador;
		this.memoria = memoria;
		this.grafica = grafica;
		this.almacenamiento = almacenamiento;
		this.trailer = trailer;
		this.sinopsis = sinopsis;
		this.comentarios = new ArrayList <Comentario>();
	}

	public void addComentario (Comentario comment){
		this.comentarios.add(comment);
	}

	public List<Comentario> getComentarios() {
		return comentarios;
	}

	public void setComentarios(List<Comentario> comentarios) {
		this.comentarios = comentarios;
	}

	public int getTipoprod() {
		return tipoprod;
	}
	
	public void setTipoprod(int tipoprod) {
		this.tipoprod = tipoprod;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Image getImg() {
		return img;
	}

	public void setImg(Image img) {
		this.img = img;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public String getGenero() {
		return genero;
	}

	public void setGenero(String genero) {
		this.genero = genero;
	}

	public String getPlataforma() {
		return plataforma;
	}

	public void setPlataforma(String plataforma) {
		this.plataforma = plataforma;
	}

	public String getDesarrollador() {
		return desarrollador;
	}

	public void setDesarrollador(String desarrollador) {
		this.desarrollador = desarrollador;
	}

	public String getEditor() {
		return editor;
	}

	public void setEditor(String editor) {
		this.editor = editor;
	}

	public String getProcesador() {
		return procesador;
	}

	public void setProcesador(String procesador) {
		this.procesador = procesador;
	}

	public String getMemoria() {
		return memoria;
	}

	public void setMemoria(String memoria) {
		this.memoria = memoria;
	}

	public String getGrafica() {
		return grafica;
	}

	public void setGrafica(String grafica) {
		this.grafica = grafica;
	}

	public String getAlmacenamiento() {
		return almacenamiento;
	}

	public void setAlmacenamiento(String almacenamiento) {
		this.almacenamiento = almacenamiento;
	}

	public String getTrailer() {
		return trailer;
	}

	public void setTrailer(String trailer) {
		this.trailer = trailer;
	}

	public String getSinopsis() {
		return sinopsis;
	}

	public void setSinopsis(String sinopsis) {
		this.sinopsis = sinopsis;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}
}
