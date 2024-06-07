package com.example.car_rental.dto.renthistory;

import org.mapstruct.Mapper;
import com.example.car_rental.entities.RentHistory;

@Mapper(componentModel = "spring")
public interface RentHistoryMapper {
    RentHistoryDTO rentHistoryToRentHistoryDTO(RentHistory rentHistory);
    RentHistory rentHistoryDTOToRentHistory(RentHistoryDTO rentHistoryDTO);
    RentHistory rentHistorySaveDTOToRentHistory(RentHistoryToSaveDTO rentHistoryToSaveDTO);
}
