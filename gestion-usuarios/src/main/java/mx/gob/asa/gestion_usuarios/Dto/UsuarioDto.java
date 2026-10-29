package mx.gob.asa.gestion_usuarios.Dto;

import java.time.LocalDate;

import lombok.Getter;
import lombok.Setter;

@Setter 
@Getter 
public class UsuarioDto {
    private Long id; 
    private String nombre;
    private String primerApellido;
    private String segundoApellido;
    private String email;
    private String passwordHash;
    private String telefono;
    private LocalDate fechaNacimiento;
    private Boolean activo;
}
