package mx.gob.asa.gestion_usuarios.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import mx.gob.asa.gestion_usuarios.Model.Departamento;

public interface DepartamentoRepository 
    extends JpaRepository<Departamento, Long> {

}
