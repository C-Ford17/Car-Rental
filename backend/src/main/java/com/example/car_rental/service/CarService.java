package com.example.car_rental.service;

import com.example.car_rental.dto.car.CarDTO;
import com.example.car_rental.dto.car.CarMapper;
import com.example.car_rental.dto.car.CarToSaveDTO;
import com.example.car_rental.entities.Car;
import com.example.car_rental.exception.CarNotFoundException;
import com.example.car_rental.exception.NotAbleToDeleteException;
import com.example.car_rental.repository.CarRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarService {

    private CarRepository carRepository;
    private CarMapper carMapper;

    public CarService(CarRepository carRepository, CarMapper carMapper){
        this.carRepository = carRepository;
        this.carMapper = carMapper;
    }

    public List<CarDTO> getAllCars() {
        List<Car> cars = carRepository.findAll();
        return cars.stream().map(carMapper::carToCarDTO).toList();
    }

    public CarDTO addCar(CarToSaveDTO carSaveDTO) {
        Car car = carMapper.CarSaveDTOToCar(carSaveDTO);
        Car carSaved = carRepository.save(car);
        return carMapper.carToCarDTO(carSaved);
    }

    public void deleteCar(Long id) {
        Car car = carRepository.findById(id).orElseThrow(NotAbleToDeleteException::new);
        carRepository.delete(car);
    }

    public CarDTO findCarById(Long id) throws CarNotFoundException{
        Car car = carRepository.findById(id).orElseThrow(CarNotFoundException::new);
        return carMapper.carToCarDTO(car);
    }
}
