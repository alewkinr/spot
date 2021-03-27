package ru.ad.astra.travel.back.domain.model;

import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@ToString(exclude = {"comments", "likes"})
@EqualsAndHashCode(callSuper = true, exclude = {"comments", "likes"})
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "posts")
public class PostEntity extends BaseEntity<Long> {

    @Column
    private String text;

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private UserEntity author;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private Set<CommentEntity> comments = new HashSet<>();

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private Set<LikeEntity> likes = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "route_id", nullable = false)
    private RouteEntity route;
}
