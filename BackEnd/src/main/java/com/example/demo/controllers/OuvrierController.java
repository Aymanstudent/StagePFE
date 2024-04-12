package com.example.demo.controllers;


import com.example.demo.models.Ouvrier;
import com.example.demo.services.OuvrierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("ouvrier")
public class OuvrierController {

    @Autowired
    private OuvrierService ouvrierService;

    @GetMapping("afficher/tout")
    public List<Ouvrier> afficher_ouvriers() throws Exception{
        return ouvrierService.afficher_ouvriers();
    }

    @PostMapping("ajouter")
    public ResponseEntity<String> ajouter_ouvrier(@RequestBody Ouvrier ouvrier){
        return this.ouvrierService.ajouter_ouvriers(ouvrier);
    }

    @PutMapping("modifier")
    public ResponseEntity<String> modifier_ouvrier(@RequestBody Ouvrier ouvrier){
        return this.ouvrierService.modifier_ouvrier(ouvrier);
    }

    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> supprimer_ouvrier(@PathVariable Long id){
        return this.ouvrierService.supprimer_ouvrier(id);
    }
}
