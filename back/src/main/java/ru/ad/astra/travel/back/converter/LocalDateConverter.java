package ru.ad.astra.travel.back.converter;

import org.modelmapper.Converter;
import org.modelmapper.spi.MappingContext;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Transactional
@Component
public class LocalDateConverter implements Converter<LocalDate, String> {

    private final DateTimeFormatter FORMATTER;

    public LocalDateConverter(@Value("${format.local-date}") String format) {
        this.FORMATTER = DateTimeFormatter.ofPattern(format);
    }

    @Override
    public String convert(MappingContext<LocalDate, String> mappingContext) {
        return mappingContext.getSource().format(FORMATTER);
    }
}
