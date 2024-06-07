/*package com.example.car_rental;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import com.example.car_rental.controller.RentHistoryController;
import com.example.car_rental.dto.car.CarDTO;
import com.example.car_rental.dto.renthistory.RentHistoryDTO;
import com.example.car_rental.dto.renthistory.RentHistoryToSaveDTO;
import com.example.car_rental.dto.user.UserDTO;
import com.example.car_rental.service.RentHistoryService;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;

@ExtendWith(MockitoExtension.class)
@WebMvcTest(RentHistoryController.class)
public class TestRentHistoryController {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RentHistoryService rentHistoryService;

    CarDTO carDTO = new CarDTO(1L, "awdawd", "awdsa", "cve", 20100.0, "asxc", "34asd", "asd21");
    UserDTO userDTO = new UserDTO(2L,"asdax", "asd2", "312s", "afxz", "Asd");

    @Test
    public void testCreate() throws Exception {
        // Arrange
        RentHistoryToSaveDTO rentHistoryToSaveDTO = new RentHistoryToSaveDTO(userDTO, carDTO);
        RentHistoryDTO expectedSavedRentHisotry = new RentHistoryDTO(1L, userDTO, carDTO);
        when(rentHistoryService.addRentHistory(rentHistoryToSaveDTO)).thenReturn(expectedSavedRentHisotry);

        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson=ow.writeValueAsString(rentHistoryToSaveDTO);
        System.out.println(requestJson);

        // Act & Assert
        mockMvc.perform(MockMvcRequestBuilders.post("/api/rentHistory")
                    .contentType(MediaType.APPLICATION_JSON)
                    .content(requestJson))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(expectedSavedRentHisotry.id()));

        verify(rentHistoryService, times(1)).addRentHistory(rentHistoryToSaveDTO);
    }
}*/
