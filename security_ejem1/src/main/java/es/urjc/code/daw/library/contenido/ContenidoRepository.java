package es.urjc.code.daw.library.contenido;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContenidoRepository extends JpaRepository<Contenido, Long> {
	 Collection<Contenido> findBytipo(String tipo);
}