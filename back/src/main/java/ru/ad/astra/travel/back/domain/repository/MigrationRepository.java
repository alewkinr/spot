package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.ad.astra.travel.back.domain.model.MigrationEntity;

public interface MigrationRepository extends JpaRepository<MigrationEntity, Long> {

    boolean existsByClassName(String className);
}
