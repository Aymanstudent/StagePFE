package com.example.demo.services;


import com.example.demo.models.Batterie;
import com.example.demo.repositorys.BatterieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BatterieService {

    @Autowired
    private BatterieRepository batterieRepository;

    public List<Batterie> afficher_batteries() throws Exception{
        return this.batterieRepository.findAll();
    }
    public ResponseEntity<String> ajouter_batterie(Batterie batterie){
        this.batterieRepository.save(batterie);
        return new ResponseEntity<>("Votre batterie a été bien enregistrer", HttpStatus.OK);
    }
    public ResponseEntity<String> modifier_batterie(Batterie batterie){
        this.batterieRepository.save(batterie);
        return new ResponseEntity<>("Votre batterie a été bien modifier", HttpStatus.OK);
    }
    public ResponseEntity<String> supprimer_batterie(Long id){
        this.batterieRepository.deleteById(id);
        return new ResponseEntity<>("Votre batterie(" + id + ") a été bien enregistrer", HttpStatus.OK);
    }
}
