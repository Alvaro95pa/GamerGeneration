package code.daw.library.comentario;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Comentario {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id = -1;
	
	private int idjuego;
	private int idcontenido;
	private String user;
	private String user_img;
	private String fecha;
	private double puntuacion;
	private String mensaje;

	public Comentario() {}
	
	public Comentario(int idjuego, int idcontenido, String user, String user_img, String fecha, double puntuacion,
			String mensaje) {
		super();
		this.idjuego = idjuego;
		this.idcontenido = idcontenido;
		this.user = user;
		this.user_img = user_img;
		this.fecha = fecha;
		this.puntuacion = puntuacion;
		this.mensaje = mensaje;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getIdjuego() {
		return idjuego;
	}

	public void setIdjuego(int idjuego) {
		this.idjuego = idjuego;
	}

	public int getIdcontenido() {
		return idcontenido;
	}

	public void setIdcontenido(int idcontenido) {
		this.idcontenido = idcontenido;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getUser_img() {
		return user_img;
	}

	public void setUser_img(String user_img) {
		this.user_img = user_img;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public double getPuntuacion() {
		return puntuacion;
	}

	public void setPuntuacion(double puntuacion) {
		this.puntuacion = puntuacion;
	}

	public String getMensaje() {
		return mensaje;
	}

	public void setMensaje(String mensaje) {
		this.mensaje = mensaje;
	}
}
