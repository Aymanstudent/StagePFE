package com.example.demo.controllers;


import com.example.demo.models.Cable;
import com.example.demo.services.CableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("cable")
public class CableController {

    @Autowired
    private CableService cableService;

    @GetMapping("afficher/tout")
    public List<Cable> afficher_cables() throws Exception{
        return this.cableService.afficher_cables();
    }

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_cable(@RequestBody Cable cable){
        return this.cableService.ajouter_cable(cable);
    }

    @PutMapping("modifier")
    public ResponseEntity<String> modifier_cable(@RequestBody Cable cable){
        return this.cableService.modifier_cable(cable);
    }

    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> supprimer_cable(@PathVariable Long id){
        return this.cableService.supprimer_cable(id);
    }
}
