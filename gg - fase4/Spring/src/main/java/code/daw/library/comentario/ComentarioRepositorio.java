package code.daw.library.comentario;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ComentarioRepositorio extends JpaRepository<Comentario, Long> {
	
	Collection<Comentario> findByidcontenido(int idcontenido);
	Collection<Comentario> findByidjuego(int idcontenido);
}