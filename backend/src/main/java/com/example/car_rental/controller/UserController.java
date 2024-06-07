package com.example.car_rental.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.car_rental.dto.user.UserDTO;
import com.example.car_rental.dto.user.UserToSaveDTO;
import com.example.car_rental.exception.NotAbleToDeleteException;
import com.example.car_rental.exception.UserNotFoundException;
import com.example.car_rental.service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {
    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<UserDTO> addUser(@RequestBody UserToSaveDTO userSaveDTO) {
        UserDTO userDTO = userService.addUser(userSaveDTO);
        return ResponseEntity.ok(userDTO);
    }

    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        try{
            return ResponseEntity.ok(userService.getAllUsers());
        } catch (UserNotFoundException err) {
            return ResponseEntity.notFound().build();
        }
        
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> get(@PathVariable("id") Long id){
        try{
            UserDTO userDTO = userService.findUserById(id);
            return ResponseEntity.ok(userDTO);
        } catch (UserNotFoundException err) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        try{
            userService.deleteUser(id);
            return ResponseEntity.ok("removed");
        } catch (NotAbleToDeleteException err) {
            return ResponseEntity.badRequest().body("id doesn't exist");
        }
    }
}
