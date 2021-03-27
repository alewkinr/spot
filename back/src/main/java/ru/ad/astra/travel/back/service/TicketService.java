package ru.ad.astra.travel.back.service;

import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.repository.UserRepository;
import ru.ad.astra.travel.back.model.TicketDto;

import java.util.List;
import java.util.stream.Collectors;

@Transactional
@RequiredArgsConstructor
@Service
public class TicketService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;

    public List<TicketDto> getByUserId(Long userId) {
        return userRepository.findById(userId).orElseThrow().getTickets().stream().map(t -> modelMapper.map(t, TicketDto.class)).collect(Collectors.toList());
    }
}
