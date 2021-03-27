package ru.ad.astra.travel.back.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.ad.astra.travel.back.domain.model.TicketType;

import java.math.BigDecimal;
import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class TicketDto {

    private TicketType type;

    private BigDecimal price;

    private String sellerLink;

    private Map<String, String> fields;

}
