package com.example.car_rental.dto.car;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.car_rental.entities.Car;

@Mapper(componentModel = "spring")
public interface CarMapper {
    CarDTO carToCarDTO(Car car);
    Car CarDTOToCar(CarDTO carDTO);
    @Mapping(target = "id", ignore = true)
    Car CarSaveDTOToCar(CarToSaveDTO carToSaveDTO);
}
