package ru.ad.astra.travel.back.domain.migration;

/**
 * Conventional naming by order
 */
public interface Migration {
    String getId();

    void migrate();
}
