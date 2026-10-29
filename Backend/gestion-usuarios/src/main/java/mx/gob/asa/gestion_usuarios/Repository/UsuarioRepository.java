package mx.gob.asa.gestion_usuarios.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mx.gob.asa.gestion_usuarios.Model.Usuario;

public interface UsuarioRepository 
    extends JpaRepository<Usuario, Long> {

}
