package ru.ad.astra.travel.back.model.response;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.ad.astra.travel.back.model.Reason;
import ru.ad.astra.travel.back.model.TagDto;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class TagResponse {
    private TagDto body;
    private Reason reason;
}
