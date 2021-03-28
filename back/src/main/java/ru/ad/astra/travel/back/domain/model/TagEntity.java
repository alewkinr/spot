package ru.ad.astra.travel.back.domain.model;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@ToString(exclude = {"path", "routes"})
@EqualsAndHashCode(callSuper = true, exclude = {"path", "routes"})
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

    @ManyToMany
    private Set<RouteEntity> routes;
}
