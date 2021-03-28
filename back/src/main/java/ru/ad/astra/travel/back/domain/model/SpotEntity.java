package ru.ad.astra.travel.back.domain.model;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@ToString(exclude = {"route"})
@EqualsAndHashCode(callSuper = true, exclude = {"route"})
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "spots")
public class SpotEntity extends BaseEntity<Long> {

    @Column
    private String text;

    @Column
    private Float latitude;

    @Column
    private Float longitude;

    @Column
    private String country;

    @Column
    private String city;

    @ManyToOne
    @JoinColumn(name = "route_id", nullable = false)
    private RouteEntity route;

    @OneToMany(mappedBy = "spot", cascade = CascadeType.ALL)
    private Set<TicketEntity> tickets = new HashSet<>();
}
