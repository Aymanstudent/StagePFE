package com.example.demo.controllers;


import com.example.demo.models.EvenementChantier;
import com.example.demo.services.EvenementChantierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RequestMapping("jour_travailler")
@RestController
public class EvenementChantierController {

    @Autowired
    private EvenementChantierService EvenementChantierService;

    @GetMapping("afficher/tout")
    public List<EvenementChantier> afficher_tout_planif() throws Exception{
        return this.EvenementChantierService.afficher_Evenements();
    }

    @GetMapping("afficher/{id}")
    public List<EvenementChantier> afficher_planif(@PathVariable Long id) throws Exception{
        return this.EvenementChantierService.afficher_Evenement(id);
    }

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_jourTravailler(@RequestBody EvenementChantier evenementChantier){
        return this.EvenementChantierService.ajouter_Evenement(evenementChantier);
    }

    @PutMapping("modifier")
    public ResponseEntity<String> modifier_EvenementChantier(@RequestBody EvenementChantier evenementChantier){
        return this.EvenementChantierService.modifier_EvenementChantier(evenementChantier);
    }

    @DeleteMapping("supprimer/tout")
    public ResponseEntity<String> ajouter_jourTravailler(){
        return this.EvenementChantierService.supprimer_Evenements();
    }

    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> ajouter_jourTravailler(@PathVariable Long id){
        return this.EvenementChantierService.supprimer_Evenement(id);
    }
}
