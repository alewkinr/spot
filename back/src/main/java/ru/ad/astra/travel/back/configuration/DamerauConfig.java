package ru.ad.astra.travel.back.configuration;

import info.debatty.java.stringsimilarity.Damerau;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DamerauConfig {

    @Bean
    public Damerau damerau() {
        return new Damerau();
    }
}
