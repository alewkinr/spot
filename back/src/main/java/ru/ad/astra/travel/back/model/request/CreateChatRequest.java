package ru.ad.astra.travel.back.model.request;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class CreateChatRequest {

    private Set<Long> members;

    private String chatLink;

}
