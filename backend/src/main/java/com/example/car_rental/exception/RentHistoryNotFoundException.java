package com.example.car_rental.exception;

public class RentHistoryNotFoundException extends ResourceNotFoundException{
    public RentHistoryNotFoundException() {
    }

    public RentHistoryNotFoundException(String message) {
        super(message);
    }

    public RentHistoryNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public RentHistoryNotFoundException(Throwable cause) {
        super(cause);
    }

    public RentHistoryNotFoundException(String message, Throwable cause, boolean enableSupression, boolean writableStackTrace) {
        super(message, cause, enableSupression, writableStackTrace);
    }
    
}
