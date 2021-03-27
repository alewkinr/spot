package ru.ad.astra.travel.back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.ad.astra.travel.back.model.PostDto;
import ru.ad.astra.travel.back.model.TicketDto;
import ru.ad.astra.travel.back.service.PostsService;
import ru.ad.astra.travel.back.service.TicketService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/posts")
public class PostsController {

    private final PostsService postsService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<PostDto>> getByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(postsService.getByUserId(userId));
    }

}
