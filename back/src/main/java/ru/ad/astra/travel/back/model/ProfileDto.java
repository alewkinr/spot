package ru.ad.astra.travel.back.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.ad.astra.travel.back.domain.model.Gender;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class ProfileDto {

    private Long id;

    private String name;

    private String lastName;

    private Gender gender;

    private LocalDate birthDate;

    private Boolean isPublic;
}
