package ru.ad.astra.travel.back.domain.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.Map;

@ToString(exclude = {"spot", "owner"})
@EqualsAndHashCode(callSuper = true, exclude = {"spot", "owner"})
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "tikets")
public class TicketEntity extends BaseEntity<Long> {

    @Enumerated(EnumType.STRING)
    private TicketType type;

    @Column
    private BigDecimal price;

    @Column
    private String sellerLink;

    @ElementCollection
    @CollectionTable(name = "fields_mapping",
            joinColumns = {@JoinColumn(name = "ticket_id", referencedColumnName = "id")})
    @MapKeyColumn(name = "field_name")
    private Map<String, String> fields;

    @ManyToOne
    @JoinColumn(name = "spot_id", nullable = false)
    private SpotEntity spot;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private UserEntity owner;

}
