package com.example.car_rental.dto.user;

public record UserToSaveDTO(
    String firstName,
    String lastName,
    String idNumber,
    String address,
    String phone
) {
    
}
