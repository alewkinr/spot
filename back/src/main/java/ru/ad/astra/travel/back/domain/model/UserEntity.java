package ru.ad.astra.travel.back.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "back_users")
public class UserEntity extends BaseEntity<Long> {

    @Column(nullable = false, unique = true)
    private String username;

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "profile_id", referencedColumnName = "id")
    private ProfileEntity profile;

    @OneToMany(mappedBy = "author", cascade = CascadeType.ALL)
    private Set<PostEntity> posts = new HashSet<>();

    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)
    private Set<TicketEntity> tickets = new HashSet<>();

}

