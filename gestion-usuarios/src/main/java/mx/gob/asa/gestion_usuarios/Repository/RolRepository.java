package mx.gob.asa.gestion_usuarios.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mx.gob.asa.gestion_usuarios.Model.Rol;

public interface RolRepository 
    extends JpaRepository<Rol, Long> {

}
