package com.example.demo.controllers;


import com.example.demo.models.Tache;
import com.example.demo.services.TacheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("tache")
public class TacheController {

    @Autowired
    private TacheService tacheService;

    @GetMapping("afficher/tout")
    public List<Tache> afficherTaches () throws Exception{
        return this.tacheService.afficherTaches();
    }
}
