package com.example.demo.controllers;


import com.example.demo.models.PanneauSolaire;
import com.example.demo.services.PanneauSolaireService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("panneausolaire")
public class PanneauSolaireController {

    @Autowired
    private PanneauSolaireService panneauSolaireService;

    @GetMapping("afficher/tout")
    public List<PanneauSolaire> afficher_panneaux() throws Exception{
        return this.panneauSolaireService.afficher_panneaux();
    }

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_panneau(@RequestBody PanneauSolaire panneauSolaire){
        return this.panneauSolaireService.ajouter_panneau(panneauSolaire);
    }

    @PutMapping("modifier")
    public ResponseEntity<String> modifier_panneau(@RequestBody PanneauSolaire panneauSolaire){
        return this.panneauSolaireService.modifier_panneau(panneauSolaire);
    }

    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> supprimer_panneau(@PathVariable Long id){
        return this.panneauSolaireService.supprimer_panneau(id);
    }

    @GetMapping("afficher/count")
    public List<Object> grouper_par_modele() throws Exception{
        return this.panneauSolaireService.grouper_par_modele();
    }


}
