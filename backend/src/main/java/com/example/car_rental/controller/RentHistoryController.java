package com.example.car_rental.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.car_rental.dto.renthistory.RentHistoryDTO;
import com.example.car_rental.dto.renthistory.RentHistoryToSaveDTO;
import com.example.car_rental.exception.NotAbleToDeleteException;
import com.example.car_rental.exception.RentHistoryNotFoundException;
import com.example.car_rental.service.RentHistoryService;


@RestController
@RequestMapping("/api/rentHistory")
@CrossOrigin(origins = "*")
public class RentHistoryController {

    RentHistoryService rentHistoryService;

    public RentHistoryController(RentHistoryService rentHistoryService){
        this.rentHistoryService = rentHistoryService;
    }

    @PostMapping
    public ResponseEntity<RentHistoryDTO> createRentHistory(@RequestBody RentHistoryToSaveDTO rentHistorySaveDTO) {
        RentHistoryDTO rentHistoryDTO = rentHistoryService.addRentHistory(rentHistorySaveDTO);
        return ResponseEntity.ok(rentHistoryDTO);
       
    }

    @GetMapping
    public ResponseEntity<List<RentHistoryDTO>> getAllRentHistories() {
        try{
            return ResponseEntity.ok(rentHistoryService.getAllRentHistories());
        } catch (RentHistoryNotFoundException err) {
            return ResponseEntity.notFound().build();
        }
        
    }

    @GetMapping("/{id}")
    public ResponseEntity<RentHistoryDTO> get(@PathVariable("id") Long id) {
        try{
            RentHistoryDTO rentHistoryDTO = rentHistoryService.findRentHistoryById(id);
            return ResponseEntity.ok(rentHistoryDTO);
        } catch (RentHistoryNotFoundException err) {
            return ResponseEntity.notFound().build();
        }
        
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteRentHistory(@PathVariable("id") Long id) {
        try{
            rentHistoryService.deleteRentHistory(id);
            return ResponseEntity.ok("removed");
        } catch (NotAbleToDeleteException err) {
            return ResponseEntity.badRequest().body("id doesn't exist");
        }
    }
    @DeleteMapping("/clear")
    public ResponseEntity<Void> clearRentHistory() {
        rentHistoryService.deleteAllRentHistories();
        return ResponseEntity.noContent().build();
    }
}
