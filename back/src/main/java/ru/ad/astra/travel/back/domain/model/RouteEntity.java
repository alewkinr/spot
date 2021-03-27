package ru.ad.astra.travel.back.domain.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.HashSet;
import java.util.Set;

@ToString
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "routes")
public class RouteEntity extends BaseEntity<Long> {

    @Column
    private String title;

    @Lob
    @Column
    private String description;

    @Column
    private Double distance;

    @Column
    private Double duration;

    @Column
    private BigDecimal price;

    @OneToMany(mappedBy = "route", cascade = CascadeType.ALL)
    private Set<SpotEntity> spots = new HashSet<>();

    @OneToMany(mappedBy = "route", cascade = CascadeType.ALL)
    private Set<PostEntity> posts = new HashSet<>();

}
