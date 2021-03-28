package ru.ad.astra.travel.back.converter;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.model.RouteEntity;

@Transactional
@Component
public class RouteIdConverter implements Converter<RouteEntity, Long> {
    @Override
    public Long convert(MappingContext<RouteEntity, Long> mappingContext) {
        return mappingContext.getSource().getId();
    }
}
