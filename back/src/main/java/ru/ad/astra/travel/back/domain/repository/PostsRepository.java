package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.ad.astra.travel.back.domain.model.PostEntity;

public interface PostsRepository extends PagingAndSortingRepository<PostEntity, Long> {

}
