package ru.ad.astra.travel.back.domain.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@EqualsAndHashCode(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "profiles")
public class ProfileEntity extends BaseEntity<Long> {

    @Column
    private String name;

    @Column
    private String lastName;

    @Enumerated(EnumType.STRING)
    private Gender gender;

    @Column
    private LocalDate birthDate;

    @Column
    private Boolean isPublic;

    @Column
    private String personalChatLink;
}
