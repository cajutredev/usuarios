package mx.gob.asa.gestion_usuarios.Service;

import java.util.List;

import mx.gob.asa.gestion_usuarios.Dto.UsuarioDto;
import mx.gob.asa.gestion_usuarios.Model.Usuario;

public interface UsuarioService {

    public List<Usuario> findAll();
    public Usuario findById(Long id);
    public UsuarioDto save(UsuarioDto usuarioDto);
    public void delete(Long id);
}
