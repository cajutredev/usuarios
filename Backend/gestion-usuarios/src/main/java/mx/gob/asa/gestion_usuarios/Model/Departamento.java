package mx.gob.asa.gestion_usuarios.Model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter 
@Getter 
@Entity 
@Table(name = "departamento")
public class Departamento {

    @Id 
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false, unique = true, length = 100) 
    private String nombre;
    @Column(length = 250)
    private String descripcion;
    @Column(nullable = false)
    private Boolean activo;
}
