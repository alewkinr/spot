package ru.ad.astra.travel.back.domain.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@ToString(exclude = {"post"})
@EqualsAndHashCode(callSuper = true, exclude = {"post"})
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "likes")
public class LikeEntity extends BaseEntity<Long> {

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private UserEntity author;

    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private PostEntity post;
}
