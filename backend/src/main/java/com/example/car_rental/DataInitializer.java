package com.example.car_rental;

import com.example.car_rental.entities.Car;
import com.example.car_rental.entities.RentHistory;
import com.example.car_rental.entities.User;
import com.example.car_rental.repository.CarRepository;
import com.example.car_rental.repository.RentHistoryRepository;
import com.example.car_rental.repository.UserRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {
    @Bean
    public CommandLineRunner loadData(CarRepository carRepository, UserRepository userRepository, RentHistoryRepository rentHistoryRepository) {
        if (carRepository.findAll().isEmpty()){
            return (args) -> {
                Car car = carRepository.save(new Car(null, "Car 1", "Nissan 2019", "Location 1", 20010.0, "2024-06-01", "2024-06-10", "https://via.placeholder.com/150"));
                carRepository.save(new Car(null, "Car 2", "Toyota 2010", "Location 2", 1500.0, "2024-06-05", "2024-06-15", "https://via.placeholder.com/150"));
                User user = userRepository.save(new User(null, "awdad","awdawd","awdawdawd","xcvxcvxcv","xcvxcv"));
                rentHistoryRepository.save(new RentHistory(null, user.getFirstName(), user.getIdNumber() , car.getName(), car.getImage()));
            };
        }
        else return args -> {};
    }
}
