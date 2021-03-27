package ru.ad.astra.travel.back.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.repository.PostsRepository;
import ru.ad.astra.travel.back.domain.repository.UserRepository;
import ru.ad.astra.travel.back.model.UserDto;

@Transactional
@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final PostsRepository postsRepository;

    public Page<UserDto> getAllUsers(Pageable pageable) {
        return userRepository.findAll(pageable).map(userEntity -> modelMapper.map(userEntity, UserDto.class));
    }

    public UserDto getById(Long userId) {
        return modelMapper.map(userRepository.findById(userId).orElseThrow(), UserDto.class);
    }

    public UserDto getByPostId(Long postId) {
        return modelMapper.map(postsRepository.findById(postId).orElseThrow().getAuthor(), UserDto.class);
    }
}
