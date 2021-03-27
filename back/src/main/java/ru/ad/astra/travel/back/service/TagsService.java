package ru.ad.astra.travel.back.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.repository.TagsRepository;
import ru.ad.astra.travel.back.model.TagDto;

@Transactional
@RequiredArgsConstructor
@Service
public class TagsService {

    private final TagsRepository tagsRepository;
    private final ModelMapper modelMapper;

    public Page<TagDto> getAll(Pageable pageable) {
        return tagsRepository.findAll(pageable).map(userEntity -> modelMapper.map(userEntity, TagDto.class));
    }

    public TagDto getById(Long tagId) {
        return modelMapper.map(tagsRepository.findById(tagId).orElseThrow(), TagDto.class);
    }
}
