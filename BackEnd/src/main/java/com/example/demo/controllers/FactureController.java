package com.example.demo.controllers;


import com.example.demo.models.Facture;
import com.example.demo.services.FactureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("facture")
public class FactureController {

    @Autowired
    private FactureService factureService;

    @GetMapping("afficher/chantier/{id}")
    public Optional<Facture> afficher_ParChantier(@PathVariable Long id) throws Exception{
        return this.factureService.afficher_factureParChantier(id);
    }

    @GetMapping("afficher/tout")
    public List<Facture> afficher_factures() throws Exception{
        return this.factureService.afficher_Factures();
    }

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_facture(@RequestBody Facture facture){
        return this.factureService.ajouter_facture(facture);
    }


}
