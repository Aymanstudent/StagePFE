package com.example.demo.controllers;


import com.example.demo.models.Onduleur;
import com.example.demo.services.OnduleurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("onduleur")
public class OnduleurController {

    @Autowired
    private OnduleurService onduleurService;

    @GetMapping("afficher/tout")
    public List<Onduleur> afficher_onduleurs() throws Exception{
        return this.onduleurService.afficher_onduleurs();
    }

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_onduleur(@RequestBody Onduleur onduleur){
        return this.onduleurService.ajouter_onduleur(onduleur);
    }

    @PutMapping("modifier")
    public ResponseEntity<String> modifier_onduleur(@RequestBody Onduleur onduleur){
        return this.onduleurService.modifier_onduleur(onduleur);
    }

    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> supprimer_onduleur(@PathVariable Long id){
        return this.onduleurService.supprimer_onduleur(id);
    }
}
