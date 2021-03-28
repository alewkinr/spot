package ru.ad.astra.travel.back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.ad.astra.travel.back.model.RouteDto;
import ru.ad.astra.travel.back.service.RoutesService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/routes")
public class RoutesController {

    private final RoutesService routesService;

    @GetMapping
    public ResponseEntity<Page<RouteDto>> getAllRoutes(Pageable pageable) {
        return ResponseEntity.ok(routesService.getAll(pageable));
    }

    @GetMapping("/{routeId}")
    public ResponseEntity<RouteDto> getRoute(@PathVariable Long routeId) {
        return ResponseEntity.ok(routesService.getById(routeId));
    }

    @GetMapping("tags/{tagId}")
    public ResponseEntity<List<RouteDto>> getRouteByTag(@PathVariable Long tagId) {
        return ResponseEntity.ok(routesService.getByTagId(tagId));
    }
}
