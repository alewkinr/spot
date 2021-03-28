package ru.ad.astra.travel.back.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import ru.ad.astra.travel.back.exception.CustomException;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class PhotoStorageService {

    public static final String PNG = "image/png";

    private final Path fileStorageLocation;

    @Autowired
    public PhotoStorageService(@Value("${photostorage.location}") String photoStorageLocation) {
        this.fileStorageLocation = Paths.get(photoStorageLocation)
                .toAbsolutePath().normalize();

        try {
            Files.createDirectories(this.fileStorageLocation);
        } catch (Exception ex) {
            throw new CustomException("Could not create the directory where the uploaded files will be stored.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public String storeFile(MultipartFile file) {
        // Normalize file name
        String fileName = StringUtils.cleanPath(UUID.randomUUID().toString() + "." + file.getOriginalFilename().split("\\.")[1]);

        try {
            // Check if the file's name contains invalid characters
            if (fileName.contains("..")) {
                throw new CustomException("Sorry! Filename contains invalid path sequence " + fileName, HttpStatus.INTERNAL_SERVER_ERROR);
            }

            // Copy file to the target location (Replacing existing file with the same name)
            Path targetLocation = this.fileStorageLocation.resolve(fileName);
            while (Files.exists(targetLocation)) {
                fileName = StringUtils.cleanPath(UUID.randomUUID().toString() + "." + file.getOriginalFilename().split("\\.")[1]);
                targetLocation = this.fileStorageLocation.resolve(fileName);
            }
            Files.copy(file.getInputStream(), targetLocation, StandardCopyOption.REPLACE_EXISTING);

            return fileName;
        } catch (IOException ex) {
            throw new CustomException("Could not store file " + fileName + ". Please try again!", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public Resource loadFileAsResource(String fileName) {
        try {
            Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
            Resource resource = new UrlResource(filePath.toUri());
            if (resource.exists()) {
                return resource;
            } else {
                throw new CustomException("File not found " + fileName, HttpStatus.NOT_FOUND);
            }
        } catch (MalformedURLException ex) {
            throw new CustomException("File not found " + fileName, HttpStatus.NOT_FOUND);
        }
    }

    public void delete(String fileName) {
        Path filePath = this.fileStorageLocation.resolve(fileName).normalize();
        try {
            Files.delete(filePath);
        } catch (IOException e) {
            throw new CustomException(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
