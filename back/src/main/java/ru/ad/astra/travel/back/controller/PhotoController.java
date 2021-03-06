package ru.ad.astra.travel.back.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.ad.astra.travel.back.model.PhotoDto;
import ru.ad.astra.travel.back.service.PhotoStorageService;

import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Optional;
import java.util.UUID;

@RequiredArgsConstructor
@RestController
@RequestMapping("/photos")
public class PhotoController {

    private final PhotoStorageService photoStorageService;

    @GetMapping("/**")
    public ResponseEntity<Resource> getById(HttpServletRequest request) {
        Resource resource = photoStorageService.loadFileAsResource(request.getRequestURI()
                .split(request.getContextPath() + "/photos/")[1]);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, Arrays.stream(request.getRequestURI()
                        .split(request.getContextPath() + "/")).reduce((f,s) ->s).orElse(null))
                .contentType(MediaType.parseMediaType(PhotoStorageService.PNG))
                .body(resource);
    }

    @GetMapping
    public ResponseEntity<Resource> getById(@RequestParam("photo") String photo) {
        Resource resource = photoStorageService.loadFileAsResource(photo);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, photo)
                .contentType(MediaType.parseMediaType(PhotoStorageService.PNG))
                .body(resource);
    }

    @PostMapping
    public ResponseEntity<PhotoDto> uploadFile(@RequestParam("file") MultipartFile file) {
        String fileName = photoStorageService.storeFile(file);
        return ResponseEntity.ok(new PhotoDto(fileName));
    }

    @DeleteMapping("/{photo:.+}")
    public ResponseEntity<String> deleteFile(@PathVariable("photo") String photo) {
        photoStorageService.delete(photo);
        return ResponseEntity.ok(photo);
    }
}
