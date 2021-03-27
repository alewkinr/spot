package ru.ad.astra.travel.back.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ErrorResponse {

    private String message;

    private Class exceptionClass;

    private String cause;
}
