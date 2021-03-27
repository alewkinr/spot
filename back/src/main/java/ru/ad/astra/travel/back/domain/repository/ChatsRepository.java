package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.ad.astra.travel.back.domain.model.TravelChatEntity;

public interface ChatsRepository extends PagingAndSortingRepository<TravelChatEntity, Long> {

}
