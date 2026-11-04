package mx.gob.asa.gestion_usuarios.Service;

import java.util.List;

import mx.gob.asa.gestion_usuarios.Dto.UsuarioDto;
import mx.gob.asa.gestion_usuarios.Model.Usuario;
import mx.gob.asa.gestion_usuarios.Pagination.PageResponse;

public interface UsuarioService {

    public List<Usuario> findAll();
    public PageResponse<UsuarioDto> paginate(Integer pageNumber, Integer pageSize);
    public Usuario findById(Long id);
    public UsuarioDto save(UsuarioDto usuarioDto);
    public void delete(Long id);
}
