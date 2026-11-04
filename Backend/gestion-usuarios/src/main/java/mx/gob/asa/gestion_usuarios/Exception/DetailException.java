package mx.gob.asa.gestion_usuarios.Exception;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter 
@Setter 
@AllArgsConstructor 
public class DetailException {

    private Date dateException;
    private String message;
    private String detail;

}
