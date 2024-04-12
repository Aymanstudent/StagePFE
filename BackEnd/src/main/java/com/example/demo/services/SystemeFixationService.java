package com.example.demo.services;


import com.example.demo.models.SystemeFixation;
import com.example.demo.repositorys.SystemeFixationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SystemeFixationService {

    @Autowired
    private SystemeFixationRepository systemeFixationRepository;

    public List<SystemeFixation> afficher_systemeFixations() throws Exception{
        return this.systemeFixationRepository.findAll();
    }
    public ResponseEntity<String> ajouter_systemeFixation(SystemeFixation systemeFixation){
        this.systemeFixationRepository.save(systemeFixation);
        return new ResponseEntity<>("Votre systeme de fixation a été bien enregistrer", HttpStatus.OK);
    }
    public ResponseEntity<String> modifier_systemeFixation(SystemeFixation systemeFixation){
        this.systemeFixationRepository.save(systemeFixation);
        return new ResponseEntity<>("Votre systeme de fixation a été bien modifier", HttpStatus.OK);
    }
    public ResponseEntity<String> supprimer_systemeFixation(Long id){
        this.systemeFixationRepository.deleteById(id);
        return new ResponseEntity<>("Votre systeme de fixation ("  + id +  ") a été bien supprimer", HttpStatus.OK);
    }
}
