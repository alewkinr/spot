package ru.ad.astra.travel.back.domain.model;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@ToString(exclude = "path")
@EqualsAndHashCode(callSuper = true, exclude = "path")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "tags")
public class TagEntity extends BaseEntity<Long> {

    @Column
    private String name;

    @Column
    private Float popularityRate;

    @ManyToMany(cascade = CascadeType.ALL)
    private Set<TagEntity> path = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "route_id", nullable = false)
    private RouteEntity route;
}
