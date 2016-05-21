package es.urjc.code.daw.library.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Datos {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private int nAmigos;
	private int nPelis;
	private int nSeries;
	private int nJuegos;
	
	private String ultima;
	private String tUsuario;
	
	//private Prod fPeli;
	//private Prod fSerie;
	//private Prod fJuego;
	
	private boolean pPerfilTodos;
	private boolean cPerfilTodos;
	private boolean aPerfilTodos;
	
	/*@ElementCollection(fetch = FetchType.EAGER)
	private List<Prod> contenido;*/
	
	@ElementCollection(fetch = FetchType.EAGER)
	private List<User> amigos;
	
	public Datos() {
	}

	public Datos(int nAmigos, int nPelis, int nSeries, int nJuegos, String ultima, String tUsuario, /*Prod fPeli, Prod fSerie, Prof fJuegos,*/ boolean pPerfilTodos, boolean cPerfilTodos, boolean aPerfilTodos, /*Prod[] contenido,*/ User[] amigos ) {
		super();
		this.nAmigos = nAmigos;
		this.nPelis = nPelis;
		this.nSeries = nSeries;
		this.nJuegos = nJuegos;
		this.ultima = ultima;
		this.tUsuario = tUsuario;
		/*this.fPeli = fPeli;
		this.fSerie = fSerie;
		this.fJuego = fJuego;*/
		this.pPerfilTodos = pPerfilTodos;
		this.cPerfilTodos = cPerfilTodos;
		this.aPerfilTodos = aPerfilTodos;
		//this.contenido = new ArrayList<>(Arrays.asList(contenido));
		this.amigos = new ArrayList<>(Arrays.asList(amigos));
	}

	public int getNAmigos() {
		return this.nAmigos;
	}

	public void setNAmigos(int nAmigos) {
		this.nAmigos = nAmigos;
	}
	
	public int getNPelis() {
		return this.nPelis;
	}

	public void setNPelis(int nPelis) {
		this.nPelis = nPelis;
	}
	
	public int getNSeries() {
		return this.nSeries;
	}

	public void setNSeries(int nSeries) {
		this.nSeries= nSeries;
	}
	
	public int getNJuegos() {
		return this.nJuegos;
	}

	public void setNJuegos(int nJuegos) {
		this.nJuegos = nJuegos;
	}

	public String getUltima() {
		return this.ultima;
	}

	public void setUltima(String ultima) {
		this.ultima = ultima;
	}
	
	public String getTUsuario() {
		return this.tUsuario;
	}

	public void setTUsuario(String tUsuario) {
		this.tUsuario = tUsuario;
	}
	
	/*public Prod getFPeli() {
		return this.fPeli;
	}

	public void setFPeli(Prod fPeli) {
		this.fPeli = fPeli;
	}
	
	public Prod getFSerie() {
		return this.fSerie;
	}

	public void setFSerie(Prod fSerie) {
		this.fSerie = fSerie;
	}
	
	public Prod getFJuego() {
		return this.fJuego;
	}

	public void setFPeli(Prod fJuego) {
		this.fJuego = fJuego;
	}*/
	
	public boolean getPPerfilTodos() {
		return this.pPerfilTodos;
	}

	public void setPPerfilTodos(boolean pPerfilTodos) {
		this.pPerfilTodos = pPerfilTodos;
	}
	
	public boolean getCPerfilTodos() {
		return this.cPerfilTodos;
	}

	public void setCPerfilTodos(boolean cPerfilTodos) {
		this.cPerfilTodos = cPerfilTodos;
	}
	
	public boolean getAPerfilTodos() {
		return this.aPerfilTodos;
	}

	public void setAPerfilTodos(boolean aPerfilTodos) {
		this.aPerfilTodos = aPerfilTodos;
	}
	
	/*public List<Prod> getContenido() {
		return this.contenido;
	}

	public void setContenido(List<Prod> contenido) {
		this.contenido = contenido;
	}*/
	
	public List<User> getAmigos() {
		return this.amigos;
	}

	public void setAmigos(List<User> amigos) {
		this.amigos = amigos;
	}
	
	@Override
	public String toString() {
		return "Usuario [nAmigos=" + this.nAmigos + ", nPelis=" + this.nPelis + ", nSeries=" + this.nSeries + ", nJuegos=" + this.nJuegos + ", ultima=" + this.ultima + ", tUsuario=" + this.tUsuario + /*", fPeli=" + this.fPeli + ", fSerie=" + this.fSerie + ", fJuego=" + this.fJuego +*/ ", pPerfilTodos=" + this.pPerfilTodos + ", cPerfilTodos=" + this.cPerfilTodos + ", aPerfilTodos=" + this.aPerfilTodos + "]";
	}

}