package ru.ad.astra.travel.back.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.repository.RoutesRepository;
import ru.ad.astra.travel.back.domain.repository.TagsRepository;
import ru.ad.astra.travel.back.model.RouteDto;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@RequiredArgsConstructor
@Service
public class RoutesService {

    private final TagsRepository tagsRepository;
    private final RoutesRepository routesRepository;
    private final ModelMapper modelMapper;

    public Page<RouteDto> getAll(Pageable pageable) {
        return routesRepository.findAll(pageable).map(routeEntity -> modelMapper.map(routeEntity, RouteDto.class));
    }

    public RouteDto getById(Long routeId) {
        return modelMapper.map(routesRepository.findById(routeId).orElseThrow(), RouteDto.class);
    }

    public List<RouteDto> getByTagId(Long tagId) {
        return tagsRepository.findById(tagId).orElseThrow().getRoutes().stream().map(r -> modelMapper.map(r, RouteDto.class)).collect(Collectors.toList());
    }
}
