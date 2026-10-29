package mx.gob.asa.gestion_usuarios.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import mx.gob.asa.gestion_usuarios.Model.Departamento;
import mx.gob.asa.gestion_usuarios.Repository.DepartamentoRepository;

@Service 
@AllArgsConstructor 
public class DepartamentoServiceImpl implements DepartamentoService {
    
    private final DepartamentoRepository departamentoRepository;

    @Override
    public List<Departamento> findAll() {
        return departamentoRepository.findAll();
    }

}
