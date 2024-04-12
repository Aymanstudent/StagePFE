package com.example.demo.controllers;


import com.example.demo.models.Devis;
import com.example.demo.services.DevisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RequestMapping("devis")
@RestController
public class DevisController {

    @Autowired
    private DevisService devisService;

    @GetMapping("afficher/tout")
    public List<Devis> afficher_tout() throws Exception{
        return this.devisService.afficher_tout();
    }
    @GetMapping("afficher/{id}")
    public Optional<Devis> afficher_devis(@PathVariable Long id) throws Exception{
        return this.devisService.afficher_devis(id);
    }
    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_devis(@RequestBody Devis devis){
        return this.devisService.ajouter_devis(devis);
    }
    @PutMapping("modifier")
    public ResponseEntity<String> modifier_devis(@RequestBody Devis devis){
        return this.devisService.modifier_devis(devis);
    }
    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> supprimer_devis(@PathVariable Long id){
        return this.devisService.supprimer_devis(id);
    }
    @DeleteMapping("supprimer/tout")
    public ResponseEntity<String> supprimer_tout(){
        return this.devisService.supprimer_tout();
    }

}
