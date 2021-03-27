package ru.ad.astra.travel.back.domain.repository;

import org.springframework.data.repository.PagingAndSortingRepository;
import ru.ad.astra.travel.back.domain.model.CommentEntity;

public interface CommentRepository extends PagingAndSortingRepository<CommentEntity, Long> {

}
