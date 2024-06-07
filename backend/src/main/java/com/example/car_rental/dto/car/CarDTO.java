package com.example.car_rental.dto.car;

public record CarDTO(
    Long id,
    String name,
    String model,
    String location,
    Double price,
    String availableFrom,
    String availableTo,
    String image) {}
