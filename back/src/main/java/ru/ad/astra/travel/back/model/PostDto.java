package ru.ad.astra.travel.back.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PostDto {

    private Long id;

    private String text;

    private UserDto author;

    private List<CommentDto> comments;
}
