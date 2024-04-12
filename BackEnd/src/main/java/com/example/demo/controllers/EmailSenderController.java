package com.example.demo.controllers;


import com.example.demo.models.Email;
import com.example.demo.services.EmailSenderService;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("mail")
public class EmailSenderController {

    @Autowired
    private EmailSenderService emailSenderService;

    @PostMapping("envoier")
    public ResponseEntity<String> envoier(@RequestParam  (value = "attchement", required = false)MultipartFile[] attchement, String to, String body, String subject) throws MessagingException, IOException {
        this.emailSenderService.sendEmail(to,subject,body,attchement);
        return new ResponseEntity<>("Votre Email a été Bien envoier", HttpStatus.OK);
    }
}
