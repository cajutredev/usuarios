package mx.gob.asa.gestion_usuarios.Pagination;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter 
@Setter 
public class PageResponse<T> {

    private Integer pageNumber;
    private Integer pageSize;
    private Long totalElements;
    private Integer totalPages;
    private Boolean isFirst;
    private Boolean isLast;
    private List<T> content;
}
