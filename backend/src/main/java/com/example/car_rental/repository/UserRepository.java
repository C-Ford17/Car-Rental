package com.example.car_rental.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.car_rental.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
