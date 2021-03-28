package ru.ad.astra.travel.back.model.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class TagRequest {

    private String name;

    private Float popularityRate;

    private Set<Long> path = new HashSet<>();

    private List<Long> routes;

}
