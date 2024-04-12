package com.example.demo.controllers;


import com.example.demo.models.DemandeDevis;
import com.example.demo.services.DemandeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RequestMapping("demande")
@RestController
public class DemandeController {

    @Autowired
    private DemandeService demandeService;

    @GetMapping("afficher/tout")
    public List<DemandeDevis> afficher_tout() throws Exception{
        return this.demandeService.afficher_tout();
    }
    @GetMapping("afficher/{id}")
    public Optional<DemandeDevis> afficher(@PathVariable Long id)throws Exception{
        return this.demandeService.afficher(id);
    }
    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_demande(@RequestBody DemandeDevis demande ){
        return this.demandeService.ajouter_demande(demande);
    }
    @PutMapping("modifier")
    public ResponseEntity<String> modifier_demande(@RequestBody DemandeDevis demande ){
        return this.demandeService.modifier_demande(demande);
    }
    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> supprimer_demande(@PathVariable Long id ){
        return this.demandeService.supprimer_demande(id);
    }
    @DeleteMapping("supprimer/tout")
    public ResponseEntity<String> supprimer_tout(){
        return this.demandeService.supprimer_tout();
    }
}
