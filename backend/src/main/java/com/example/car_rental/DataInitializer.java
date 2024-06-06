package com.example.car_rental;

import com.example.car_rental.entities.Car;
import com.example.car_rental.repository.CarRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {
    @Bean
    public CommandLineRunner loadData(CarRepository carRepository) {
        if (carRepository.findAll().isEmpty()){
            return (args) -> {
                carRepository.save(new Car(null, "Car 1", "Nissan 2019", "Location 1", "2024-06-01", "2024-06-10", "https://via.placeholder.com/150"));
                carRepository.save(new Car(null, "Car 2", "Toyota 2010", "Location 2", "2024-06-05", "2024-06-15", "https://via.placeholder.com/150"));
            };
        }
        else return args -> {};
    }
}
