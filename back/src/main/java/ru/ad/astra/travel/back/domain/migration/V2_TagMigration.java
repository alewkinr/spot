package ru.ad.astra.travel.back.domain.migration;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.model.RouteEntity;
import ru.ad.astra.travel.back.domain.model.TagEntity;
import ru.ad.astra.travel.back.domain.repository.RoutesRepository;
import ru.ad.astra.travel.back.domain.repository.TagsRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;

@RequiredArgsConstructor
@Transactional
@Component
public class V2_TagMigration implements Migration {

    private final TagsRepository tagsRepository;
    private final RoutesRepository routesRepository;

    @Override
    public String getId() {
        return V2_TagMigration.class.getName();
    }

    @Override
    public void migrate() {
        List<TagEntity> tags = tags();
        link(tags);
    }

    private void link(List<TagEntity> tags) {
        Iterator<RouteEntity> iterator = routesRepository.findAll().iterator();
        if (iterator.hasNext()) {
            RouteEntity route = iterator.next();
            route.getTags().addAll(tags);
            routesRepository.save(route);
        }
    }

    private List<TagEntity> tags() {
        List<TagEntity> result = new ArrayList<>();
        result.add(saveSimpleTag("Азия", "places/1.png"));
        result.add(saveSimpleTag("Европа", "places/2.png"));
        result.add(saveSimpleTag("Африка", "places/3.png"));
        result.add(saveSimpleTag("Северная Америка", "places/4.png"));
        result.add(saveSimpleTag("Южная Америка", "places/5.png"));
        result.add(saveSimpleTag("Австралия", "places/6.png"));

        result.add(saveSimpleTag("Семья", "places/1.png"));
        result.add(saveSimpleTag("Отдых", "places/2.png"));
        result.add(saveSimpleTag("Бизнес", "places/3.png"));
        result.add(saveSimpleTag("Тематический", "places/4.png"));
        result.add(saveSimpleTag("Спорт", "places/5.png"));

        result.add(saveSimpleTag("История", "places/1.png"));
        result.add(saveSimpleTag("Природа", "places/2.png"));
        result.add(saveSimpleTag("Вечеринки", "places/3.png"));
        result.add(saveSimpleTag("Культура", "places/4.png"));
        result.add(saveSimpleTag("Работа", "places/5.png"));
        result.add(saveSimpleTag("Хобби", "places/6.png"));

        return result;
    }

    private TagEntity saveSimpleTag(String title, String link) {
        return tagsRepository.save(new TagEntity(title, 0f, new HashSet<>(), new HashSet<>(), link));
    }
}
