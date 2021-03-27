package ru.ad.astra.travel.back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.ad.astra.travel.back.model.TicketDto;
import ru.ad.astra.travel.back.service.TicketService;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping("/tickets")
public class TicketController {

    private final TicketService ticketService;

    @GetMapping("/{userId}")
    public ResponseEntity<List<TicketDto>> getByUser(@PathVariable Long userId){
        return ResponseEntity.ok(ticketService.getByUserId(userId));
    }

}
