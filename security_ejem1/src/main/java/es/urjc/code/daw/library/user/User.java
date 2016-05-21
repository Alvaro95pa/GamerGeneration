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

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * This is the entity to store in database user information. It contains the
 * following basic information:
 * <ul>
 * <li>name: The name of the user. This name have to be used to logIn into the
 * service</li>
 * <li>passwordHash: The hash of the password. The password in never stored in
 * plain text to avoid information leak</li>
 * <li>roles: The roles of this user</li>
 * 
 * To check if a user can be logged into the service, this object is loaded from
 * database and password is verified. If user is authenticated, then this
 * database object is returned to the user.
 * 
 * NOTE: This class is intended to be extended by developer adding new
 * attributes. Current attributes can not be removed because they are used in
 * authentication procedures.
 */

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	private String usuario;
	
	@JsonIgnore
	private String passwordHash;
	
	@ElementCollection(fetch = FetchType.EAGER)
	private List<String> roles;
	
	private String nombre;
	private String apellidos;
	private String nacionalidad;
	private String cumpleanos;
	private String correo;
	private String imagen;
	private Datos datos;
	
	public User() {
	}

	public User(String usuario, String password, String correo, String... roles) {
		this.usuario = usuario;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.correo = correo;
		this.roles = new ArrayList<>(Arrays.asList(roles));
	}
	
	public User(String usuario, String password, String correo, String nombre, String apellidos, String nacionalidad, String cumpleanos, String imagen, Datos datos, String... roles) {
		this.usuario = usuario;
		this.passwordHash = new BCryptPasswordEncoder().encode(password);
		this.correo = correo;
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.nacionalidad = nacionalidad;
		this.cumpleanos = cumpleanos;
		this.imagen = imagen;
		this.datos = datos;
		this.roles = new ArrayList<>(Arrays.asList(roles));
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
	
	public String getCorreo() {
		return this.correo;
	}

	public void setCorreo(String correo) {
		this.correo = correo;
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
	
	public String getImagen() {
		return this.imagen;
	}

	public void setImagen(String imagen) {
		this.imagen = imagen;
	}
	
	public Datos getDatos() {
		return this.datos;
	}

	public void setDatos(Datos datos) {
		this.datos = datos;
	}
	
	public Long getId() {
		return this.id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<String> getRoles() {
		return roles;
	}

	public void setRoles(List<String> roles) {
		this.roles = roles;
	}
	
	@Override
	public String toString() {
		return "Usuario [id=" + id + ", usuario=" + this.usuario + ", nombre=" + this.nombre + ", apellidos=" + this.apellidos + ", nacionalidad=" + this.nacionalidad + ", correo=" + this.correo + ", cumpleanos=" + this.cumpleanos + ", imagen=" + this.imagen + this.datos.toString() + "]";
	}

}