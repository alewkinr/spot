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
public class StringLocalDateTimeConverter implements Converter<String, LocalDateTime> {

    private final DateTimeFormatter FORMATTER;

    public StringLocalDateTimeConverter(@Value("${format.local-date-time}") String format) {
        this.FORMATTER = DateTimeFormatter.ofPattern(format);
    }

    @Override
    public LocalDateTime convert(MappingContext<String, LocalDateTime> mappingContext) {
        return LocalDateTime.parse(mappingContext.getSource(), FORMATTER);
    }
}
