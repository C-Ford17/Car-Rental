package com.example.car_rental.dto.user;

public record UserDTO(
    Long id,
    String firstName,
    String lastName,
    String idNumber,
    String address,
    String phone) {
}
