package ru.ad.astra.travel.back.configuration;

import io.swagger.v3.oas.annotations.enums.ParameterIn;
import io.swagger.v3.oas.models.Operation;
import io.swagger.v3.oas.models.media.StringSchema;
import io.swagger.v3.oas.models.parameters.Parameter;
import org.springdoc.core.customizers.OperationCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.method.HandlerMethod;

@Configuration
public class SwaggerConfig {

//    @Bean
    public OperationCustomizer customGlobalHeaders() {

        return (Operation operation, HandlerMethod handlerMethod) -> {

            Parameter missingParam1 = new Parameter().in(ParameterIn.HEADER.toString()).schema(new StringSchema())
                    .name("X-S7-USER-ID").description("User id").required(true);

            operation.addParametersItem(missingParam1);

            return operation;
        };
    }
}
