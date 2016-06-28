package es.urjc.code.daw.library.productos;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductoRepositorio extends JpaRepository<Producto, Long> {

	Collection<Producto> findBytipoprod(int tipoprod);
	Producto findByname(String name);
	
	Collection<Producto> findBytipoprodAndGenero(int tipoprod,String genero);
	Collection<Producto> findBytipoprodAndPlataforma(int tipoprod,String plataforma);
}