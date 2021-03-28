package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.ad.astra.travel.back.domain.model.LikeEntity;

public interface LikeRepository extends PagingAndSortingRepository<LikeEntity, Long> {

}
