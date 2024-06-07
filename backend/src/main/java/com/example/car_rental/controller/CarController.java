package com.example.car_rental.controller;

import com.example.car_rental.dto.car.CarDTO;
import com.example.car_rental.dto.car.CarToSaveDTO;
import com.example.car_rental.exception.CarNotFoundException;
import com.example.car_rental.exception.NotAbleToDeleteException;
import com.example.car_rental.service.CarService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "*")
public class CarController {

    private CarService carService;

    public CarController(CarService carService){
        this.carService = carService;
    }

    @GetMapping
    public ResponseEntity<List<CarDTO>> getAllCars() {
        try{
            return ResponseEntity.ok(carService.getAllCars());
        } catch (CarNotFoundException err) {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<CarDTO> get(@PathVariable("id") Long id) {
        try{
            CarDTO carDTO = carService.findCarById(id);
            return ResponseEntity.ok(carDTO);
        } catch (CarNotFoundException err){
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<CarDTO> addCar(@RequestBody CarToSaveDTO carsSaveDTO) {
        CarDTO carDTO = carService.addCar(carsSaveDTO);
        return ResponseEntity.ok(carDTO);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable("id") Long id) {
       try{
        carService.deleteCar(id);
        return ResponseEntity.ok("removed");
       } catch (NotAbleToDeleteException err){
        return ResponseEntity.badRequest().body("id doesn't exist");
       }
    }
}
