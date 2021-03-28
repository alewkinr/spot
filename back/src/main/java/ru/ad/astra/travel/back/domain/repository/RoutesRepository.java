package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.ad.astra.travel.back.domain.model.RouteEntity;

public interface RoutesRepository extends PagingAndSortingRepository<RouteEntity, Long> {

}
