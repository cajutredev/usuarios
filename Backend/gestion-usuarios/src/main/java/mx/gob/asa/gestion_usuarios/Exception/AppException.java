package mx.gob.asa.gestion_usuarios.Exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import lombok.Getter;
import lombok.Setter;

@Getter 
@Setter 
@ResponseStatus(value = HttpStatus.BAD_REQUEST)
public class AppException extends RuntimeException {

    private HttpStatus state;
    private String message;

    public AppException(String message, HttpStatus state, String message2) {
        super(message);
        this.state = state;
        message = message2;
    }
}
