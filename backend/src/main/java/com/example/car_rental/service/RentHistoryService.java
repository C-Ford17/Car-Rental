package com.example.car_rental.service;

import java.util.List;
import org.springframework.stereotype.Service;

import com.example.car_rental.dto.renthistory.RentHistoryDTO;
import com.example.car_rental.dto.renthistory.RentHistoryMapper;
import com.example.car_rental.dto.renthistory.RentHistoryToSaveDTO;
import com.example.car_rental.entities.RentHistory;
import com.example.car_rental.exception.NotAbleToDeleteException;
import com.example.car_rental.exception.RentHistoryNotFoundException;
import com.example.car_rental.repository.RentHistoryRepository;

@Service
public class RentHistoryService {

    private RentHistoryRepository rentHistoryRepository;

    private RentHistoryMapper rentHistoryMapper;

    public RentHistoryService(RentHistoryRepository rentHistoryRepository, RentHistoryMapper rentHistoryMapper){
        this.rentHistoryRepository = rentHistoryRepository;
        this.rentHistoryMapper = rentHistoryMapper;
    }

    public List<RentHistoryDTO> getAllRentHistories() {
        List<RentHistory> rentHistories = rentHistoryRepository.findAll();
        return rentHistories.stream().map(rentHistoryMapper::rentHistoryToRentHistoryDTO).toList();
    }

    public RentHistoryDTO addRentHistory(RentHistoryToSaveDTO rentHistorySaveDTO) {
        RentHistory rentHistory = rentHistoryMapper.rentHistorySaveDTOToRentHistory(rentHistorySaveDTO);
        RentHistory rentHistorySaved = rentHistoryRepository.save(rentHistory);
        return rentHistoryMapper.rentHistoryToRentHistoryDTO(rentHistorySaved);
    }

    public void deleteRentHistory(Long id) {
        RentHistory rentHistory = rentHistoryRepository.findById(id).orElseThrow(NotAbleToDeleteException::new);
        rentHistoryRepository.delete(rentHistory);
    }

    public RentHistoryDTO findRentHistoryById(Long id) throws RentHistoryNotFoundException{
        RentHistory rentHistory = rentHistoryRepository.findById(id).orElseThrow(RentHistoryNotFoundException::new);
        return rentHistoryMapper.rentHistoryToRentHistoryDTO(rentHistory);
    }
}
