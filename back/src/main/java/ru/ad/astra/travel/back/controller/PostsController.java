package ru.ad.astra.travel.back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.ad.astra.travel.back.model.PostDto;
import ru.ad.astra.travel.back.service.PostsService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class PostsController {

    private final PostsService postsService;

    @GetMapping
    public ResponseEntity<Page<PostDto>> getAllPosts(Pageable pageable) {
        return ResponseEntity.ok(postsService.getAllPosts(pageable));
    }

    @GetMapping("/{postId}")
    public ResponseEntity<PostDto> getUser(@PathVariable Long postId) {
        return ResponseEntity.ok(postsService.getById(postId));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<PostDto>> getByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(postsService.getByUserId(userId));
    }

    @GetMapping("/tag/{tagId}")
    public ResponseEntity<List<PostDto>> getByTag(@PathVariable Long tagId) {
        return ResponseEntity.ok(postsService.getByTagId(tagId));
    }

}
