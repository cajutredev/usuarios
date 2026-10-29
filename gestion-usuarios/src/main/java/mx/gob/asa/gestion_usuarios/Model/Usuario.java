package mx.gob.asa.gestion_usuarios.Model;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Setter 
@Getter 
@Entity 
@Table (name = "usuario")
public class Usuario {

    @Id 
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column 
    private String nombre;
    @Column 
    private String primerApellido;
    @Column 
    private String segundoApellido;
    @Column 
    private String email;
    @Column 
    private String passwordHash;
    @Column 
    private String telefono;
    @Column 
    private LocalDate fechaNacimiento;
    @Column 
    private Boolean activo;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "rol_id") 
    private Rol rol;
    @ManyToOne(fetch = FetchType.LAZY) 
    @JoinColumn(name = "departamento_id") 
    private Departamento departamento;
}
