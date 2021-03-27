package ru.ad.astra.travel.back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.ad.astra.travel.back.model.TagDto;
import ru.ad.astra.travel.back.model.UserDto;
import ru.ad.astra.travel.back.service.TagsService;

@RequiredArgsConstructor
@RestController
@RequestMapping("/tags")
public class TagsController {

    private final TagsService tagService;

    @GetMapping
    public ResponseEntity<Page<TagDto>> getAll(Pageable pageable) {
        return ResponseEntity.ok(tagService.getAll(pageable));
    }

    @GetMapping("/{tagId}")
    public ResponseEntity<TagDto> getTag(@PathVariable Long tagId) {
        return ResponseEntity.ok(tagService.getById(tagId));
    }
}
