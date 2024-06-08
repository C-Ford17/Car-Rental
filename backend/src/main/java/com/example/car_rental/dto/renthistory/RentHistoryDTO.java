package com.example.car_rental.dto.renthistory;

import java.time.LocalDateTime;

public record RentHistoryDTO(Long id, String userName, String userIdNumber, String carName, String carImage, LocalDateTime rentDate) {
    
}
