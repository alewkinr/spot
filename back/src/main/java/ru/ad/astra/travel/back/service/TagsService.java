package ru.ad.astra.travel.back.service;

import info.debatty.java.stringsimilarity.Damerau;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.model.TagEntity;
import ru.ad.astra.travel.back.domain.repository.TagsRepository;
import ru.ad.astra.travel.back.model.Reason;
import ru.ad.astra.travel.back.model.TagDto;
import ru.ad.astra.travel.back.model.request.TagRequest;
import ru.ad.astra.travel.back.model.response.TagResponse;

@Transactional
@RequiredArgsConstructor
@Service
public class TagsService {

    @Value("${damerau.boundary}")
    private Float boundary;

    private final Damerau damerau;
    private final TagsRepository tagsRepository;
    private final ModelMapper modelMapper;

    public Page<TagDto> getAll(Pageable pageable) {
        return tagsRepository.findAll(pageable).map(tag -> modelMapper.map(tag, TagDto.class));
    }

    public TagDto getById(Long tagId) {
        return modelMapper.map(tagsRepository.findById(tagId).orElseThrow(), TagDto.class);
    }

    public TagResponse createTag(TagRequest request) {
        TagEntity tag = tagsRepository.findAll().stream()
                .filter(tagEntity ->
                        damerau.distance(request.getName(), tagEntity.getName()) <= boundary
                ).findFirst().orElse(modelMapper.map(request, TagEntity.class));
        TagResponse result = new TagResponse();
        result.setReason(tag.getId() == null ? Reason.CREATED : Reason.REPLACED);
        result.setBody(modelMapper.map(tagsRepository.save(tag), TagDto.class));
        return result;
    }
}
