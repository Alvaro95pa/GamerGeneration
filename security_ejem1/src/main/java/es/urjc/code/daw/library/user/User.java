package es.urjc.code.daw.library.user;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;

import es.urjc.code.daw.library.imagenes.Image;
import es.urjc.code.daw.library.productos.Producto;

@Entity
public class User {
	//Datos esenciales
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	private String usuario;
	
	@JsonIgnore
	private String passwordHash;
	
	private String correo;
	
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;
	
	//Datos principales
	private String nombre;
	private String apellidos;
	private String nacionalidad;
	private String cumpleanos;
	
	@OneToOne(cascade=CascadeType.ALL)
	private Image imagen;
	
	//Datos secundarios
	private int nAmigos;
	private int nPelis;
	private int nSeries;
	private int nJuegos;
	
	private String ultima;
	private String tUsuario;
	
	@OneToOne
	private Producto fPeli;
	
	@OneToOne
	private Producto fSerie;
	
	@OneToOne
	private Producto fJuego;
	
	private boolean pPerfilTodos;
	private boolean cPerfilTodos;
	private boolean aPerfilTodos;
	
	@OneToMany(fetch = FetchType.EAGER)
	private List<Producto> contenido;
	
	@OneToMany(fetch = FetchType.EAGER)
	private List<User> amigos;
	
	public User() {
	}

	public User(String usuario, String password, String correo, String... roles) {
		this.usuario = usuario;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.correo = correo;
		this.contenido = new ArrayList <Producto>();
		this.amigos = new ArrayList <User>();
		this.roles = new ArrayList<>(Arrays.asList(roles));
	}
	
	public User(String usuario, String password, String correo, String nombre, String apellidos, String nacionalidad, String cumpleanos, 
			int nAmigos, int nPelis, int nSeries, int nJuegos, String ultima, String tUsuario,
			Producto fPeli, Producto fSerie, Producto fJuego, boolean pPerfilTodos, boolean cPerfilTodos, 
			boolean aPerfilTodos, String... roles) {
		this.usuario = usuario;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.correo = correo;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.nacionalidad = nacionalidad;
		this.cumpleanos = cumpleanos;
		this.nAmigos = nAmigos;
		this.nPelis = nPelis;
		this.nSeries = nSeries;
		this.nJuegos = nJuegos;
		this.ultima = ultima;
		this.tUsuario = tUsuario;
		this.fPeli = fPeli;
		this.fSerie = fSerie;
		this.fJuego = fJuego;
		this.pPerfilTodos = pPerfilTodos;
		this.cPerfilTodos = cPerfilTodos;
		this.aPerfilTodos = aPerfilTodos;
		this.contenido = new ArrayList <Producto>();
		this.amigos = new ArrayList <User>();
		this.roles = new ArrayList<>(Arrays.asList(roles));
	}
	
	public long getId() {
		return this.id;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	public String getUsuario() {
		return this.usuario;
	}

	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}

	public String getPasswordHash() {
		return this.passwordHash;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}
	
	public String getCorreo() {
		return this.correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}

	public String getNombre() {
		return this.nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	public String getApellidos() {
		return this.apellidos;
	}

	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	
	public String getNacionalidad() {
		return this.nacionalidad;
	}

	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}
	
	public String getCumpleanos() {
		return this.cumpleanos;
	}

	public void setCumpleanos(String cumpleanos) {
		this.cumpleanos = cumpleanos;
	}
	
	public Image getImagen() {
		return this.imagen;
	}

	public void setImagen(Image imagen) {
		this.imagen = imagen;
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
		this.nSeries = nSeries;
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
		
	public Producto getFPeli() {
		return this.fPeli;
	}

	public void setFPeli(Producto fPeli) {
		this.fPeli = fPeli;
	}

	public Producto getFSerie() {
		return this.fSerie;
	}

	public void setFSerie(Producto fSerie) {
		this.fSerie = fSerie;
	}

	public Producto getFJuego() {
		return this.fJuego;
	}

	public void setFJuego(Producto fJuego) {
		this.fJuego = fJuego;
	}

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

	public List<Producto> getContenido() {
		return this.contenido;
	}
	
	public void setContenido(List<Producto> contenido) {
		this.contenido = contenido;
	}

	public List<User> getAmigos() {
		return this.amigos;
	}
	
	public void setAmigos(List<User> amigos) {
		this.amigos = amigos;
	}
	
	public void addAmigo(User usuario){
		this.amigos.add(usuario);
	}
	
	public void removeAmigo(User usuario){
		this.amigos.remove(usuario);
	}
	
	public void addContenido(Producto p){
		this.contenido.add(p);
	}
	
	public void removeContenido(Producto p){
		this.amigos.remove(p);
	}
}