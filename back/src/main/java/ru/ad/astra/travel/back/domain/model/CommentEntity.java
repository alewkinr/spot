package ru.ad.astra.travel.back.domain.model;

import lombok.*;

import javax.persistence.*;

@ToString(exclude = {"post", "author"})
@EqualsAndHashCode(callSuper = true, exclude = {"post", "author"})
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "comments")
public class CommentEntity extends BaseEntity<Long> {

    @Column
    private String text;

    @ManyToOne
    @JoinColumn(name = "author_id", nullable = false)
    private UserEntity author;

    @ManyToOne
    @JoinColumn(name = "post_id", nullable = false)
    private PostEntity post;
}
