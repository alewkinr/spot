package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.ad.astra.travel.back.domain.model.RouteEntity;
import ru.ad.astra.travel.back.domain.model.TicketEntity;

public interface TicketRepository extends PagingAndSortingRepository<TicketEntity, Long> {

}
