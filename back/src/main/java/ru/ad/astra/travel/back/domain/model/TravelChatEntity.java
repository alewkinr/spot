package ru.ad.astra.travel.back.domain.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.HashSet;
import java.util.Set;

@ToString
@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "chats")
public class TravelChatEntity extends BaseEntity<Long> {

    @ManyToMany
    private Set<UserEntity> members = new HashSet<>();

    @Column
    private String chatLink;
}
