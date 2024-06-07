package com.example.car_rental.dto.user;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.car_rental.entities.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDTO userToUserDTO(User user);
    User userDTOToUser(UserDTO userDTO);
    @Mapping(target = "id", ignore = true)
    User userSaveDTOToUser(UserToSaveDTO userToSaveDTO);
}
