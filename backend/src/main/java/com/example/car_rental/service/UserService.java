package com.example.car_rental.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.car_rental.dto.user.UserDTO;
import com.example.car_rental.dto.user.UserMapper;
import com.example.car_rental.dto.user.UserToSaveDTO;
import com.example.car_rental.entities.User;
import com.example.car_rental.exception.NotAbleToDeleteException;
import com.example.car_rental.exception.UserNotFoundException;
import com.example.car_rental.repository.UserRepository;

@Service
public class UserService {
    private final UserRepository userRepository;  
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, UserMapper userMapper){
        this.userRepository = userRepository;
        this.userMapper = userMapper;
    }

    public List<UserDTO> getAllUsers() {
        List<User> users = userRepository.findAll();
        return users.stream().map(userMapper::userToUserDTO).toList();
    }

    public UserDTO addUser(UserToSaveDTO userSaveDTO) {
        User user = userMapper.userSaveDTOToUser(userSaveDTO);
        User userSaved = userRepository.save(user);
        return userMapper.userToUserDTO(userSaved);
    }

    public void deleteUser(Long id) {
        User user = userRepository.findById(id).orElseThrow(NotAbleToDeleteException::new);
        userRepository.delete(user);
    }

    public UserDTO findUserById(Long id) throws UserNotFoundException{
        User user = userRepository.findById(id).orElseThrow(UserNotFoundException::new);
        return userMapper.userToUserDTO(user);
    }
    
}
