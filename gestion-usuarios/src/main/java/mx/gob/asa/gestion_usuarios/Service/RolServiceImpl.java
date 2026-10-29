package mx.gob.asa.gestion_usuarios.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import mx.gob.asa.gestion_usuarios.Model.Rol;
import mx.gob.asa.gestion_usuarios.Repository.RolRepository;

@Service
@AllArgsConstructor  
public class RolServiceImpl implements RolService {

    private final RolRepository rolRepository;

    @Override
    public List<Rol> findAll() {
        return rolRepository.findAll();
    }
}
