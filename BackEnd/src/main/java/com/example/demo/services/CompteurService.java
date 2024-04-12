package com.example.demo.services;


import com.example.demo.models.Compteur;
import com.example.demo.repositorys.CompteurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompteurService {

    @Autowired
    private CompteurRepository compteurRepository;


    public List<Compteur> afficher_compteurs() throws Exception{
        return this.compteurRepository.findAll();
    }

    public ResponseEntity<String> ajouter_compteur(Compteur compteur){
        this.compteurRepository.save(compteur);
        return new ResponseEntity<>("Votre compteur a été bien enregistrer", HttpStatus.OK);
    }
    public ResponseEntity<String> modifier_compteur(Compteur compteur){
        this.compteurRepository.save(compteur);
        return new ResponseEntity<>("Votre compteur a été bien modifier", HttpStatus.OK);
    }
    public ResponseEntity<String> supprimer_compteur(Long id){
        this.compteurRepository.deleteById(id);
        return new ResponseEntity<>("Votre compteur( " + id + " )a été bien enregistrer", HttpStatus.OK);
    }
}
