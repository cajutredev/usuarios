package mx.gob.asa.gestion_usuarios.Config;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import mx.gob.asa.gestion_usuarios.Dto.DepartamentoDto;
import mx.gob.asa.gestion_usuarios.Dto.RolDto;
import mx.gob.asa.gestion_usuarios.Dto.UsuarioDto;
import mx.gob.asa.gestion_usuarios.Model.Departamento;
import mx.gob.asa.gestion_usuarios.Model.Rol;
import mx.gob.asa.gestion_usuarios.Model.Usuario;

@Configuration 
public class BeanConfiguration {

    @Bean 
    @SuppressWarnings({"all","null"})
    public ModelMapper modelMapper() {

        ModelMapper modelMapper = new ModelMapper();

        modelMapper.typeMap(
            DepartamentoDto.class, 
            Departamento.class)
            .addMappings(mapper ->mapper.skip(Departamento::setId));
        modelMapper.typeMap(
            RolDto.class, 
            Rol.class)
            .addMappings(mapper ->mapper.skip(Rol::setId));
        modelMapper.emptyTypeMap(
            UsuarioDto.class, 
            Usuario.class)
            .addMappings(mapper -> {
                mapper.skip(Usuario::setId);
                mapper.skip(Usuario::setPasswordHash);
                mapper.skip(Usuario::setDepartamento);
                mapper.skip(Usuario::setRol);
            }).implicitMappings();
        return modelMapper;
    }
}
