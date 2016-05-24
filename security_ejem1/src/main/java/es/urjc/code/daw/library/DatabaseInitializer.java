package es.urjc.code.daw.library;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Controller;

import es.urjc.code.daw.library.user.User;
import es.urjc.code.daw.library.user.UserRepository;

@Controller
public class DatabaseInitializer implements CommandLineRunner {

	@Autowired
	private UserRepository usuarioRepositorio;

	@Override
	public void run(String... args) throws Exception {
		//Usuario 1
		usuarioRepositorio.save(new User("castorTresDientes", "1234", "pepitogrillo32@gmail.com", "Pepito", 
				"Matarile Motos", "Española", "22/02", 0, 3, 3, 2, "Ayer", 
				"hace 1 año", true, false, false, "ROLE_USER"));
		//Usuario 2
		usuarioRepositorio.save(new User("velocidadEscarlata", "5678", "soyLoMas@gmail.com", "Iván", 
				"", "Española", "", 0, 0, 0, 0, "Hoy", 
				"hace 1 día", true, false, true, "ROLE_USER"));
		//Usuario ADMIN
		usuarioRepositorio.save(new User("admin", "admin", "", "", 
				"", "", "", 0, 0, 0, 0, "", 
				"", false, false, false, "ROLE_USER", "ROLE_ADMIN"));
	}
}
