package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.ad.astra.travel.back.domain.model.TagEntity;

import java.util.Optional;

public interface TagsRepository extends PagingAndSortingRepository<TagEntity, Long> {

    Optional<TagEntity> findByName(String name);

}
