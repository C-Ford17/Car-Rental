package com.example.car_rental.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.car_rental.entities.RentHistory;
import com.example.car_rental.repository.RentHistoryRepository;

@Service
public class RentHistoryService {

    @Autowired
    private RentHistoryRepository rentHistoryRepository;

    public List<RentHistory> getAllRentHistories() {
        return rentHistoryRepository.findAll();
    }

    public RentHistory addRentHistory(RentHistory rentHistory) {
        return rentHistoryRepository.save(rentHistory);
    }

    public void deleteRentHistory(Long id) {
        rentHistoryRepository.deleteById(id);
    }
}
