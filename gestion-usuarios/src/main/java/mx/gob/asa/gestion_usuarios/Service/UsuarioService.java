package mx.gob.asa.gestion_usuarios.Service;

import java.util.List;
import mx.gob.asa.gestion_usuarios.Model.Usuario;

public interface UsuarioService {

    public List<Usuario> findAll();
    public Usuario findById(Long id);
    public void save(Usuario usuario);
    public void delete(Long id);
}
