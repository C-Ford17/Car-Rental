package com.example.car_rental.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.car_rental.entities.RentHistory;
import com.example.car_rental.service.RentHistoryService;

@RestController
@RequestMapping("/api/rentHistory")
@CrossOrigin(origins = "*")
public class RentHistoryController {
    @Autowired
    RentHistoryService rentHistoryService;

    @PostMapping
    public RentHistory addRentHistory(@RequestBody RentHistory rentHistory) {
        return rentHistoryService.addRentHistory(rentHistory);
    }

    @GetMapping
    public List<RentHistory> getAllRentHistories() {
        return rentHistoryService.getAllRentHistories();
    }

    @DeleteMapping("/{id}")
    public void deleteRentHistory(@PathVariable Long id) {
        rentHistoryService.deleteRentHistory(id);
    }
}
