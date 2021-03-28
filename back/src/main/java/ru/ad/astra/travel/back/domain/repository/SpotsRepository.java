package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.ad.astra.travel.back.domain.model.SpotEntity;

public interface SpotsRepository extends PagingAndSortingRepository<SpotEntity, Long> {

}
