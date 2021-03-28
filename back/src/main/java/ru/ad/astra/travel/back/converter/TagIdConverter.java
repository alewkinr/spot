package ru.ad.astra.travel.back.converter;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.model.TagEntity;

@Transactional
@Component
public class TagIdConverter implements Converter<TagEntity, Long> {
    @Override
    public Long convert(MappingContext<TagEntity, Long> mappingContext) {
        return mappingContext.getSource().getId();
    }
}
