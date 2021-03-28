package ru.ad.astra.travel.back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RequiredArgsConstructor
@RestController
@RequestMapping("/")
public class TestController {

    @GetMapping
    public void test(HttpServletRequest request) {
        System.out.println(request.getHeader("user-id"));
    }
}
