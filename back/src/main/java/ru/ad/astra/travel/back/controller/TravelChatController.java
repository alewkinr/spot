package ru.ad.astra.travel.back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.ad.astra.travel.back.model.TravelChatDto;
import ru.ad.astra.travel.back.service.ChatService;

@RequiredArgsConstructor
@RestController
@RequestMapping("/chats")
public class TravelChatController {

    private final ChatService chatService;

    @GetMapping("/{id}")
    public ResponseEntity<TravelChatDto> getById(@PathVariable Long id) {
        return ResponseEntity.ok(chatService.getChatById(id));
    }
}
