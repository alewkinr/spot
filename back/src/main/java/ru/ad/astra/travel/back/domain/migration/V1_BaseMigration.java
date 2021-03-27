package ru.ad.astra.travel.back.domain.migration;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.model.*;
import ru.ad.astra.travel.back.domain.repository.*;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.*;
import java.util.stream.IntStream;

@RequiredArgsConstructor
@Transactional
@Component
public class V1_BaseMigration implements Migration {

    private final SpotsRepository spotsRepository;
    private final UserRepository userRepository;
    private final RoutesRepository routesRepository;
    private final PostsRepository postsRepository;
    private final CommentRepository commentRepository;

    @Override
    public String getId() {
        return V1_BaseMigration.class.getName();
    }

    @Override
    public void migrate() {
        users();
        routes();
        tickets();
        posts();
    }

    private void posts() {
        UserEntity userEntity = userRepository.findById(1L).orElseThrow();
        RouteEntity routeEntity = routesRepository.findById(1L).orElseThrow();
        IntStream.range(1, 100).forEach(value -> {
            PostEntity postEntity = new PostEntity(UUID.randomUUID().toString(), userEntity, new HashSet<>(), new HashSet<>(), routeEntity);
            final PostEntity saved = postsRepository.save(postEntity);
            IntStream.range(1, 5).forEach(value1 -> {
                CommentEntity commentEntity = new CommentEntity(UUID.randomUUID().toString() + " comment", userEntity, saved);
                commentRepository.save(commentEntity);
            });
        });
        userRepository.save(userEntity);
    }

    private void tickets() {
        spotsRepository.findAll().forEach(spotEntity -> {
            if (spotEntity.getText().contains("A")) {
                Map<String, String> fields = new HashMap<>() {{
                    put("test", "test");
                }};
                spotEntity.getTickets().add(new TicketEntity(TicketType.BUS, BigDecimal.TEN, "http...",
                        fields, spotEntity, userRepository.findById(1L).orElseThrow()));
                spotsRepository.save(spotEntity);
            }
        });
    }

    private void routes() {
        IntStream.range(1, 10).forEach(i -> {
            RouteEntity saved = routesRepository.save(new RouteEntity("Route " + i, "Long-long-long desc", 0., 0., BigDecimal.ZERO,
                    new HashSet<>(), new HashSet<>()
            ));

            saved.getSpots().addAll(new HashSet<>(Arrays.asList(
                    new SpotEntity("A" + i, 10f, 10f, saved, new HashSet<>()),
                    new SpotEntity("B" + i, 10f, 10f, saved, new HashSet<>()))));
            routesRepository.save(saved);
        });
    }

    private void users() {
        userRepository.save(new UserEntity("admin",
                new ProfileEntity("Admin", "", Gender.NONE, LocalDate.now(), false),
                new HashSet<>(), new HashSet<>())
        );
        IntStream.range(1, 100).forEach(i -> {
            userRepository.save(new UserEntity("user" + i,
                    new ProfileEntity("name", "lastName", Gender.NONE, LocalDate.now(), false),
                    new HashSet<>(), new HashSet<>()));
        });
    }
}
