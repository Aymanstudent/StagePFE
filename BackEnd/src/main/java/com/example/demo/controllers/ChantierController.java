package com.example.demo.controllers;


import com.example.demo.models.Chantier;
import com.example.demo.services.ChantierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("chantier")
public class ChantierController {

    @Autowired
    private ChantierService chantierService;

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_chantier(@RequestBody Chantier chantier){
        return this.chantierService.ajouter_chantier(chantier);
    }

    @GetMapping("afficher/tout")
    public List<Chantier> afficher_chantiers() throws Exception{
        return this.chantierService.afficher_chantier();
    }
}
