package mx.gob.asa.gestion_usuarios.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import mx.gob.asa.gestion_usuarios.Model.Usuario;
import mx.gob.asa.gestion_usuarios.Repository.UsuarioRepository;

@Service 
@AllArgsConstructor 
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuRepository;

    @Override
    public List<Usuario> findAll() {
        return usuRepository.findAll();
    }

    @Override
    public Usuario findById(Long id) {
        return usuRepository.findById(id)
            .orElseThrow();
    }

    @Override
    public void save(Usuario usuario) {
        usuRepository.save(usuario);   
    }

    @Override
    public void delete(Long id) {
        usuRepository.deleteById(id);
    }

}
