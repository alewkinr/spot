package ru.ad.astra.travel.back.converter;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import ru.ad.astra.travel.back.domain.model.UserEntity;

@Transactional
@Component
public class UserIdConverter implements Converter<UserEntity, Long> {
    @Override
    public Long convert(MappingContext<UserEntity, Long> mappingContext) {
        return mappingContext.getSource().getId();
    }
}
