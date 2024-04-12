package com.example.demo.services;


import com.example.demo.models.Onduleur;
import com.example.demo.repositorys.OnduleurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OnduleurService {

    @Autowired
    private OnduleurRepository onduleurRepository;

    public List<Onduleur> afficher_onduleurs() throws Exception{
        return this.onduleurRepository.findAll();
    }
    public ResponseEntity<String> ajouter_onduleur(Onduleur onduleur){
        this.onduleurRepository.save(onduleur);
        return new ResponseEntity<>("Votre onduleur a été bien enregistrer", HttpStatus.OK);
    }
    public ResponseEntity<String> modifier_onduleur(Onduleur onduleur){
        this.onduleurRepository.save(onduleur);
        return new ResponseEntity<>("Votre onduleur a été bien modifier", HttpStatus.OK);
    }
    public ResponseEntity<String> supprimer_onduleur(Long id){
        this.onduleurRepository.deleteById(id);
        return new ResponseEntity<>("Votre onduleur (" + id + ") a été bien supprimer", HttpStatus.OK);
    }

}
