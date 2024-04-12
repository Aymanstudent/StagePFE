package com.example.demo.controllers;


import com.example.demo.models.Avenant;
import com.example.demo.services.AvenantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("avenant")
public class AvenantController {

    @Autowired
    private AvenantService avenantService;

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_avenant(@RequestBody Avenant avenant){
        return this.avenantService.ajouter_avenant(avenant);
    }

    @GetMapping("afficher/chantier/tout/{id}")
    public List<Avenant> afficher_avenantParChantierId(@PathVariable Long id){
        return this.avenantService.afficher_avenantParChantierId(id);
    }

}
