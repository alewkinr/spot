package ru.ad.astra.travel.back.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class SpotDto {

    private Long id;

    private String text;

    private Float latitude;

    private Float longitude;

    private String country;

    private String city;
}
