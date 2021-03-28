package ru.ad.astra.travel.back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.ad.astra.travel.back.model.UserDto;
import ru.ad.astra.travel.back.service.UserService;

@RequiredArgsConstructor
@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    @GetMapping
    public ResponseEntity<Page<UserDto>> getAllUsers(Pageable pageable) {
        return ResponseEntity.ok(userService.getAllUsers(pageable));
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserDto> getUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getById(userId));
    }

    @GetMapping("/post/{postId}")
    public ResponseEntity<UserDto> getUserByPost(@PathVariable Long postId) {
        return ResponseEntity.ok(userService.getByPostId(postId));
    }

    @PutMapping("/{userId}/photo/{photoId}")
    public ResponseEntity<UserDto> updatePhoto(@PathVariable Long userId, @PathVariable String photoId){
        return ResponseEntity.ok(userService.updatePhoto(userId, photoId));
    }
}
