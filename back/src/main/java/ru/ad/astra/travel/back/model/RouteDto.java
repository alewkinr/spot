package ru.ad.astra.travel.back.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class RouteDto {

    private Long id;

    private String title;

    private String description;

    private Double distance;

    private Double duration;

    private BigDecimal price;

    private List<SpotDto> spots;
}
