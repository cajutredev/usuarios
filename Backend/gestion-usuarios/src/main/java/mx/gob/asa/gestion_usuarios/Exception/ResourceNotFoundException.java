package mx.gob.asa.gestion_usuarios.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException
        extends RuntimeException {

    private String resourceName;
    private String nameField;
    private Object value;

    public ResourceNotFoundException(
            String message, String resourceName, String nameField, Object value) {
        super(String.format("%s no encontrado con %s:%s",
                resourceName, nameField, value));
        this.resourceName = resourceName;
        this.nameField = nameField;
        this.value = value;
    }
}
