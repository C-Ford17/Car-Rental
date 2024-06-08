package com.example.car_rental;

import com.example.car_rental.entities.Car;
import com.example.car_rental.entities.RentHistory;
import com.example.car_rental.entities.User;
import com.example.car_rental.repository.CarRepository;
import com.example.car_rental.repository.RentHistoryRepository;
import com.example.car_rental.repository.UserRepository;

import java.time.LocalDateTime;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {
    @Bean
    public CommandLineRunner loadData(CarRepository carRepository, UserRepository userRepository, RentHistoryRepository rentHistoryRepository) {
        if (carRepository.findAll().isEmpty()){
            return (args) -> {
                carRepository.save(new Car(null, "Mazda", "Sedan 2010", "Singapur", 1500.0, "2024-06-05", "2024-06-15", "https://th.bing.com/th/id/OIP.Nj8ckwWwtMCDNUArgFCx8QAAAA?rs=1&pid=ImgDetMain"));
                carRepository.save(new Car(null, "Toyota", "Corolla 2018", "Japón", 1800.0, "2024-06-06", "2024-06-16", "https://th.bing.com/th/id/OIP.RYmaSBe0AqduzyxWOCE84QAAAA?rs=1&pid=ImgDetMain"));
                carRepository.save(new Car(null, "Honda", "Civic 2015", "Estados Unidos", 1700.0, "2024-06-07", "2024-06-17", "https://carroecarros.com.br/wp-content/uploads/2014/06/novo-honda-civic-2015-6.jpg"));
                carRepository.save(new Car(null, "BMW", "X5 2020", "Alemania", 2500.0, "2024-06-08", "2024-06-18", "https://cdcssl.ibsrv.net/autodata/images/?IMG=USC90BMS191A01300.JPG&WIDTH=1200"));
                carRepository.save(new Car(null, "Audi", "A4 2019", "Alemania", 2400.0, "2024-06-09", "2024-06-19", "https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/1-audi-a4-2019-fd-hero-front.jpg?itok=La8Ux4lC"));
                carRepository.save(new Car(null, "Mercedes", "C-Class 2021", "Alemania", 2600.0, "2024-06-10", "2024-06-20", "https://s.aolcdn.com/os/ab/_cms/2020/11/11164233/F8A2961.jpg"));
                carRepository.save(new Car(null, "Ford", "Mustang 2017", "Estados Unidos", 2000.0, "2024-06-11", "2024-06-21", "https://www.hdcarwallpapers.com/download/2017_ford_mustang_4k-2560x1440.jpg"));
                carRepository.save(new Car(null, "Chevrolet", "Camaro 2016", "Estados Unidos", 2100.0, "2024-06-12", "2024-06-22", "https://st.motortrendenespanol.com/uploads/sites/45/2015/10/2016-Chevrolet-Camaro-SS-V-8-homepage.jpg"));
                carRepository.save(new Car(null, "Tesla", "Model S 2022", "Estados Unidos", 3000.0, "2024-06-13", "2024-06-23", "https://th.bing.com/th/id/OIP.Li-96tdoSeo5JnZZ7bNIKQHaE3?rs=1&pid=ImgDetMain"));
                carRepository.save(new Car(null, "Nissan", "Altima 2013", "Japón", 1600.0, "2024-06-14", "2024-06-24", "https://cdn.carbuzz.com/gallery-images/1600/529000/700/529704.jpg"));
            };
        }
        else return args -> {};
    }
}
