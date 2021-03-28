package ru.ad.astra.travel.back.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.repository.PostsRepository;
import ru.ad.astra.travel.back.domain.repository.UserRepository;
import ru.ad.astra.travel.back.model.PostDto;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@RequiredArgsConstructor
@Service
public class PostsService {

    private final PostsRepository postsRepository;
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public List<PostDto> getByUserId(Long userId) {
        return userRepository.findById(userId).orElseThrow().getPosts().stream().map(p -> modelMapper.map(p, PostDto.class)).collect(Collectors.toList());

    }

    public List<PostDto> getByTagId(Long tagId) {
        return userRepository.findById(tagId).orElseThrow().getPosts().stream().map(p -> modelMapper.map(p, PostDto.class)).collect(Collectors.toList());
    }

    public Page<PostDto> getAllPosts(Pageable pageable) {
        return postsRepository.findAll(pageable).map(postEntity -> modelMapper.map(postEntity, PostDto.class));
    }

    public PostDto getById(Long postId) {
        return modelMapper.map(postsRepository.findById(postId).orElseThrow(), PostDto.class);
    }
}
