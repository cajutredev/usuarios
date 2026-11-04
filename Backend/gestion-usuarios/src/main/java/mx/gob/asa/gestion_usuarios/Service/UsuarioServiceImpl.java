package mx.gob.asa.gestion_usuarios.Service;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import mx.gob.asa.gestion_usuarios.Dto.UsuarioDto;
import mx.gob.asa.gestion_usuarios.Exception.ResourceNotFoundException;
import mx.gob.asa.gestion_usuarios.Model.Departamento;
import mx.gob.asa.gestion_usuarios.Model.Rol;
import mx.gob.asa.gestion_usuarios.Model.Usuario;
import mx.gob.asa.gestion_usuarios.Pagination.PageResponse;
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
    private final PageResponse<UsuarioDto> pageResponse;

    @Override
    public List<Usuario> findAll() {
        return usuRepository.findAll();
    }

    @Override
    public Usuario findById(Long id) {
        return usuRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException(
                "No se encontro el usuario", 
                "Ususario", "id", id));
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
        Usuario usuarioAEliminar = usuRepository.findById(id)
            .orElseThrow();
        
        usuRepository.delete(usuarioAEliminar);
    }

    @Override
    public PageResponse<UsuarioDto> paginate(Integer pageNumber, Integer pageSize) {
        // Crear y configurar una pagina
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
        // Consultar la BD con la pagina configurada
        Page<Usuario> usuarios = usuRepository.findAll(pageable);
        // Obtener solo la lista de usuarios del objeto tipo Page
        List<Usuario> usuariosList = usuarios.getContent();
        // Convertir o mapear la lista de tipo Usuario a UsuarioDto
        List<UsuarioDto> usuariosDto = usuariosList.stream()
            .map(usuario -> modelMapper.map(usuario, UsuarioDto.class))
            .collect(Collectors.toList());
        
        pageResponse.setContent(usuariosDto);
        pageResponse.setPageNumber(usuarios.getNumber());
        pageResponse.setPageSize(usuarios.getSize());
        pageResponse.setTotalElements(usuarios.getTotalElements());
        pageResponse.setTotalPages(usuarios.getTotalPages());
        pageResponse.setIsFirst(usuarios.isFirst());
        pageResponse.setIsLast(usuarios.isLast());
        return pageResponse;
    }

}
