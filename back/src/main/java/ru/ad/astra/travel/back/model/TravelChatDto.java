package ru.ad.astra.travel.back.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class TravelChatDto {

    private Long id;

    private Set<Long> members;

    private String chatLink;

}
