package ru.ad.astra.travel.back.domain.model;

import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@ToString(exclude = {"posts", "tags"})
@EqualsAndHashCode(callSuper = true, exclude = {"posts", "tags"})
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
    private LocalDate fromDate;

    @Column
    private LocalDate toDate;

    @Column
    private BigDecimal price;

    @Column
    private String icon;

    @OneToMany(mappedBy = "route", cascade = CascadeType.ALL)
    private Set<SpotEntity> spots = new HashSet<>();

    @OneToMany(mappedBy = "route", cascade = CascadeType.ALL)
    private Set<PostEntity> posts = new HashSet<>();

    @ManyToMany(cascade = {
            CascadeType.PERSIST,
            CascadeType.MERGE}, mappedBy = "routes")
    private Set<TagEntity> tags = new HashSet<>();
}
