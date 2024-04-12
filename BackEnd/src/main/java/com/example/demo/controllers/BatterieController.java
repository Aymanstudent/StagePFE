package com.example.demo.controllers;


import com.example.demo.models.Batterie;
import com.example.demo.services.BatterieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("batterie")
public class BatterieController {

    @Autowired
    private BatterieService batterieService;

    @GetMapping("afficher/tout")
    public List<Batterie> afficher_batteries () throws Exception{
        return this.batterieService.afficher_batteries();
    }

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_batterie(@RequestBody Batterie batterie){
        return this.batterieService.ajouter_batterie(batterie);
    }

    @PutMapping("modifier")
    public ResponseEntity<String> modifier_batterie(@RequestBody Batterie batterie){
        return this.batterieService.modifier_batterie(batterie);
    }

    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> supprimer_batterie(@PathVariable Long id){
        return this.batterieService.supprimer_batterie(id);
    }

}
