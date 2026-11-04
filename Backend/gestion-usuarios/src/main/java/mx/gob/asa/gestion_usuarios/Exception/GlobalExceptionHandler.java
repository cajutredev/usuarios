package mx.gob.asa.gestion_usuarios.Exception;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;

@RestControllerAdvice 
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<DetailException> handleNotFoundException(
        ResourceNotFoundException exception,
        WebRequest request) {
        
            DetailException detail = new DetailException(
                new Date(), exception.getMessage(), request.getDescription(false));

            return new ResponseEntity<>(detail, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(AppException.class)
    public ResponseEntity<DetailException> handleAppException(
        AppException exception,
        WebRequest request) {
        
            DetailException detail = new DetailException(
                new Date(), exception.getMessage(), request.getDescription(false));

            return new ResponseEntity<>(detail, HttpStatus.BAD_REQUEST);
    }
    
}
