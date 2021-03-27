package ru.ad.astra.travel.back.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.model.TravelChatEntity;
import ru.ad.astra.travel.back.domain.repository.ChatsRepository;
import ru.ad.astra.travel.back.domain.repository.UserRepository;
import ru.ad.astra.travel.back.model.TravelChatDto;
import ru.ad.astra.travel.back.model.request.CreateChatRequest;

@Transactional
@RequiredArgsConstructor
@Service
public class ChatService {

    private final UserRepository userRepository;
    private final ChatsRepository chatsRepository;
    private final ModelMapper modelMapper;

    public TravelChatDto getChatById(Long id) {
        return modelMapper.map(chatsRepository.findById(id).orElseThrow(), TravelChatDto.class);
    }

    public TravelChatDto createChat(CreateChatRequest request) {
        TravelChatEntity chat = new TravelChatEntity();
        chat.setChatLink(request.getChatLink());
        request.getMembers().forEach(userId -> chat.getMembers().add(userRepository.findById(userId).orElseThrow()));
        TravelChatEntity saved = chatsRepository.save(chat);
        return modelMapper.map(saved, TravelChatDto.class);
    }
}
