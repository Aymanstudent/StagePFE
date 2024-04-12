package com.example.demo.services;


import com.example.demo.models.Vehicule;
import com.example.demo.repositorys.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VehiculeService {

    @Autowired
    private VehiculeRepository vehiculeRepository;

    public List<Vehicule> afficher_vehicules() throws Exception{
        return this.vehiculeRepository.findAll();
    }
}
