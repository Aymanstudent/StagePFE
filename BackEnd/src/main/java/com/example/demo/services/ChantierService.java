package com.example.demo.services;


import com.example.demo.models.Chantier;
import com.example.demo.repositorys.ChantierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChantierService {

    @Autowired
    private ChantierRepository chantierRepository;

    public ResponseEntity<String> ajouter_chantier(Chantier chantier){
        this.chantierRepository.save(chantier);
        return new ResponseEntity<>("Votre chantier a été bien ajouter", HttpStatus.OK);
    }
    public List<Chantier> afficher_chantier() throws Exception{
        return this.chantierRepository.findAll();
    }
}
