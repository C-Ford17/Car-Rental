/*package com.example.car_rental;

import static org.mockito.ArgumentMatchers.any;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.example.car_rental.dto.car.CarDTO;
import com.example.car_rental.dto.renthistory.RentHistoryDTO;
import com.example.car_rental.dto.renthistory.RentHistoryMapperImpl;
import com.example.car_rental.dto.renthistory.RentHistoryToSaveDTO;
import com.example.car_rental.dto.user.UserDTO;
import com.example.car_rental.entities.Car;
import com.example.car_rental.entities.RentHistory;
import com.example.car_rental.entities.User;
import com.example.car_rental.repository.RentHistoryRepository;
import com.example.car_rental.service.RentHistoryService;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
public class TestRentHistoryServiceImpl {
    @Mock
    private RentHistoryRepository rentHistoryRepository;
    private RentHistoryService rentHistoryService;
    RentHistory rentHistory;

    @BeforeEach
    void setUp() {
        rentHistoryService = new RentHistoryService(rentHistoryRepository, new RentHistoryMapperImpl());

        rentHistory = RentHistory.builder()
                        .id(3L)
                        .car(new Car(1L,"nose","asd","asd12", 20000.0, "dawdasd","2024-06-12","2024-12-12"))
                        .user(new User(2L,"awd","awdawd","awdawd","awdawd","dawdwad")).build();
    }

    @Test
    void saveRentHistory() {
        given(rentHistoryRepository.save(any())).willReturn(rentHistory);

        RentHistoryToSaveDTO  rentHistoryToSaveDTO = new RentHistoryToSaveDTO(
             new UserDTO(2L,"awd","awdawd","awdawd","awdawd","dawdwad"),
             new CarDTO(1L,"nose","asd","asd12", 20000.0,"dawdasd","2024-06-12","2024-12-12"));

            RentHistoryDTO savedRentHistory = rentHistoryService.addRentHistory(rentHistoryToSaveDTO);

            assertThat(savedRentHistory.id()).isNotNull();
            assertThat(savedRentHistory.id()).isEqualTo(3L);
            assertThat(savedRentHistory.car().id()).isEqualTo(1L);
            assertThat(savedRentHistory.user().id()).isEqualTo(2L);

    }
}*/
