package com.example.car_rental.dto.renthistory;

import java.time.LocalDate;

public record RentHistoryToSaveDTO(String userName, String userIdNumber,  String carName, String carImage, LocalDate rentDate) {

}
