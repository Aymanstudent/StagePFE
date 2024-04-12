package com.example.demo.controllers;


import com.example.demo.models.Vehicule;
import com.example.demo.services.VehiculeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("vehicule")
public class VehiculeController {

    @Autowired
    protected VehiculeService vehiculeService;

    @GetMapping("afficher/tout")
    public List<Vehicule> afficher_vehicules() throws Exception{
        return this.vehiculeService.afficher_vehicules();
    }
}
