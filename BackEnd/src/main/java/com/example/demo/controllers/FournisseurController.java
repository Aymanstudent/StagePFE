package com.example.demo.controllers;


import com.example.demo.models.Fournisseur;
import com.example.demo.services.FournisseurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("fournisseur")
public class FournisseurController {

    @Autowired
    private FournisseurService fournisseurService;

    @GetMapping("afficher/tout")
    public List<Fournisseur> afficherFournisseurs() throws Exception{
        return this.fournisseurService.afficherFournisseurs();
    }

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouterFournisseur(@RequestBody Fournisseur fournisseur){
        return this.fournisseurService.ajouterFournisseur(fournisseur);
    }

    @PutMapping("modifier")
    public ResponseEntity<String> modifierFournisseur(@RequestBody Fournisseur fournisseur){
        return this.fournisseurService.modifierFournisseur(fournisseur);
    }

    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> supprimerFournisseur(@PathVariable Long id){
        return this.fournisseurService.supprimerFournisseur(id);
    }
}
