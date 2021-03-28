package ru.ad.astra.travel.back.converter;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Transactional
@Component
public class LocalDateTimeConverter implements Converter<LocalDateTime, String> {

    private final DateTimeFormatter FORMATTER;

    public LocalDateTimeConverter(@Value("${format.local-date-time}") String format) {
        this.FORMATTER = DateTimeFormatter.ofPattern(format);
    }

    @Override
    public String convert(MappingContext<LocalDateTime, String> mappingContext) {
        return mappingContext.getSource().format(FORMATTER);
    }
}
