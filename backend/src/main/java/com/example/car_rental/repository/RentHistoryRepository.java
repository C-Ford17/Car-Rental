package com.example.car_rental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.car_rental.entities.RentHistory;


public interface RentHistoryRepository extends JpaRepository<RentHistory, Long> {
}
