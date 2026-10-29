package mx.gob.asa.gestion_usuarios.Dto;

import lombok.Getter;
import lombok.Setter;

@Getter 
@Setter 
public class RolDto {

    private Long id;
    private String nombre;
    private String descripcion;
    private Boolean activo;

}
