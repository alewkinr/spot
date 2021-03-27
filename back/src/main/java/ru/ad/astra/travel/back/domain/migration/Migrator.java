package ru.ad.astra.travel.back.domain.migration;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import ru.ad.astra.travel.back.domain.model.MigrationEntity;
import ru.ad.astra.travel.back.domain.repository.MigrationRepository;

import javax.annotation.PostConstruct;
import java.util.Comparator;
import java.util.List;

@RequiredArgsConstructor
@Component
public class Migrator {

    private final List<Migration> dataBaseMigrations;
    private final MigrationRepository migrationRepository;

    @PostConstruct
    public void migrate() {
        dataBaseMigrations.stream()
                .filter(migration -> !migrationRepository.existsByClassName(migration.getId()))
                .sorted(Comparator.comparing(m -> m.getClass().getName()))
                .forEach(migration -> {
                    migration.migrate();
                    migrationRepository.save(new MigrationEntity(migration.getId()));
                });
    }

}
