package mx.gob.asa.gestion_usuarios.Service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import mx.gob.asa.gestion_usuarios.Dto.UsuarioDto;
import mx.gob.asa.gestion_usuarios.Model.Departamento;
import mx.gob.asa.gestion_usuarios.Model.Rol;
import mx.gob.asa.gestion_usuarios.Model.Usuario;
import mx.gob.asa.gestion_usuarios.Repository.DepartamentoRepository;
import mx.gob.asa.gestion_usuarios.Repository.RolRepository;
import mx.gob.asa.gestion_usuarios.Repository.UsuarioRepository;

@Service 
@AllArgsConstructor 
public class UsuarioServiceImpl implements UsuarioService {

    private final UsuarioRepository usuRepository;
    private final DepartamentoRepository depaRepository;
    private final RolRepository rolRepository;
    private final ModelMapper modelMapper;

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
    public UsuarioDto save(UsuarioDto usuarioDto) {
        Departamento deptoEncontrado = depaRepository.findById(
            usuarioDto.getDepartamentoId()).orElseThrow();

        Rol rolEncontrado = rolRepository.findById(
            usuarioDto.getRolId()).orElseThrow();
            
        Usuario usuario = modelMapper.map(
            usuarioDto, Usuario.class);

        usuario.setPasswordHash(usuarioDto.getPasswordHash());
        usuario.setDepartamento(deptoEncontrado);
        usuario.setRol(rolEncontrado);
        
        Usuario usuarioNuevo = usuRepository.save(usuario); 
        return modelMapper.map(
            usuarioNuevo, UsuarioDto.class);  
    }

    @Override
    public void delete(Long id) {
        usuRepository.deleteById(id);
    }

}
