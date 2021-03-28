package ru.ad.astra.travel.back.domain.migration;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.model.RouteEntity;
import ru.ad.astra.travel.back.domain.model.TagEntity;
import ru.ad.astra.travel.back.domain.repository.RoutesRepository;
import ru.ad.astra.travel.back.domain.repository.TagsRepository;

import java.util.*;

@RequiredArgsConstructor
@Transactional
@Component
public class V2_TagMigration implements Migration {

    private final TagsRepository tagsRepository;
    private final RoutesRepository routesRepository;
    @Autowired
    private V2_TagMigration v2_tagMigration;

    @Override
    public String getId() {
        return V2_TagMigration.class.getName();
    }

    @Override
    public void migrate() {
        v2_tagMigration.tags();
        v2_tagMigration.link();
    }

    @Transactional
    public void link() {
        routesRepository.findAll().forEach( route -> {
            Set<TagEntity> r = tagsRepository.findByName("Направления").orElseThrow().getPath();
            route.getTags().addAll(r);
            r.forEach(r_ -> r_.getRoutes().add(route));
            routesRepository.save(route);
        });
    }

    @Transactional(propagation = Propagation.REQUIRES_NEW)
    public void tags() {
        List<TagEntity> result = new ArrayList<>();

        List<TagEntity> r1 = new ArrayList<>();
        r1.add(saveSimpleTag("Азия", "places/1.png"));
        r1.add(saveSimpleTag("Европа", "places/2.png"));
        r1.add(saveSimpleTag("Африка", "places/3.png"));
        r1.add(saveSimpleTag("Северная Америка", "places/4.png"));
        r1.add(saveSimpleTag("Южная Америка", "places/5.png"));
        r1.add(saveSimpleTag("Австралия", "places/6.png"));
        result.addAll(r1);
        TagEntity routes = saveSimpleTag("Направления", "places/1.png");
        routes.getPath().addAll(r1);
        tagsRepository.save(routes);

        List<TagEntity> r2 = new ArrayList<>();
        r2.add(saveSimpleTag("Семья", "places/1.png"));
        r2.add(saveSimpleTag("Отдых", "places/2.png"));
        r2.add(saveSimpleTag("Бизнес", "places/3.png"));
        r2.add(saveSimpleTag("Тематический", "places/4.png"));
        r2.add(saveSimpleTag("Спорт", "places/5.png"));
        result.addAll(r2);
        routes = saveSimpleTag("Увлечения", "places/1.png");
        routes.getPath().addAll(r2);
        tagsRepository.save(routes);

        List<TagEntity> r3 = new ArrayList<>();
        r3.add(saveSimpleTag("История", "places/1.png"));
        r3.add(saveSimpleTag("Природа", "places/2.png"));
        r3.add(saveSimpleTag("Вечеринки", "places/3.png"));
        r3.add(saveSimpleTag("Культура", "places/4.png"));
        r3.add(saveSimpleTag("Работа", "places/5.png"));
        r3.add(saveSimpleTag("Хобби", "places/6.png"));
        result.addAll(r3);
        routes = saveSimpleTag("Досуг", "places/1.png");
        routes.getPath().addAll(r3);
        tagsRepository.save(routes);
    }

    private TagEntity saveSimpleTag(String title, String link) {
        return tagsRepository.save(new TagEntity(title, 0f, new HashSet<>(), new HashSet<>(), link));
    }
}
