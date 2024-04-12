package com.example.demo.controllers;


import com.example.demo.models.SystemeFixation;
import com.example.demo.services.SystemeFixationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("systemefixation")
public class SystemeFixationController {

    @Autowired
    private SystemeFixationService systemeFixationService;

    @GetMapping("afficher/tout")
    public List<SystemeFixation> afficher_systemeFixations() throws Exception{
        return this.systemeFixationService.afficher_systemeFixations();
    }

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_systemeFixation(@RequestBody SystemeFixation systemeFixation){
        return this.systemeFixationService.ajouter_systemeFixation(systemeFixation);
    }

    @PutMapping("modifier")
    public ResponseEntity<String> modifier_systemeFixation(@RequestBody SystemeFixation systemeFixation){
        return this.systemeFixationService.modifier_systemeFixation(systemeFixation);
    }

    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> supprimer_systemeFixation(@PathVariable Long id){
        return this.systemeFixationService.supprimer_systemeFixation(id);
    }

}
