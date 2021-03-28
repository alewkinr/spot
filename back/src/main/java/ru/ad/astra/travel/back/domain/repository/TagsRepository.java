package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.ad.astra.travel.back.domain.model.TagEntity;

import java.util.List;
import java.util.Optional;

public interface TagsRepository extends PagingAndSortingRepository<TagEntity, Long> {

    List<TagEntity> findAll();

    Optional<TagEntity> findByName(String name);

}
