package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.ad.astra.travel.back.domain.model.UserEntity;

public interface UserRepository extends PagingAndSortingRepository<UserEntity, Long> {

}
