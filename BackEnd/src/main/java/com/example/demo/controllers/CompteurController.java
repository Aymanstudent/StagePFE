package com.example.demo.controllers;


import com.example.demo.models.Compteur;
import com.example.demo.services.CompteurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("compteur")
public class CompteurController {

    @Autowired
    private CompteurService compteurService;

    @GetMapping("afficher/tout")
    public List<Compteur> afficher_compteurs() throws Exception{
        return this.compteurService.afficher_compteurs();
    }

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_compteur(@RequestBody Compteur compteur){
        return this.compteurService.ajouter_compteur(compteur);
    }

    @PutMapping("modifier")
    public ResponseEntity<String> modifier_compteur(@RequestBody Compteur compteur){
        return this.compteurService.modifier_compteur(compteur);
    }

    @PostMapping("supprimer/{id}")
    public ResponseEntity<String> supprimer_compteur(@RequestBody Long id){
        return this.compteurService.supprimer_compteur(id);
    }

}
