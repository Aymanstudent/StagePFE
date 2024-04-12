package com.example.demo.services;


import com.example.demo.models.Cable;
import com.example.demo.repositorys.CableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CableService {

    @Autowired
    private CableRepository cableRepository;

    public List<Cable> afficher_cables() throws Exception{
        return this.cableRepository.findAll();
    }
    public ResponseEntity<String> ajouter_cable(Cable cable){
        this.cableRepository.save(cable);
        return new ResponseEntity<>("Votre cable a été bien enregistrer", HttpStatus.OK);
    }
    public ResponseEntity<String> modifier_cable(Cable cable){
        this.cableRepository.save(cable);
        return new ResponseEntity<>("Votre cable a été bien modifier", HttpStatus.OK);
    }
    public ResponseEntity<String> supprimer_cable(Long id){
        this.cableRepository.deleteById(id);
        return new ResponseEntity<>("Votre cable (" + id + ") a été bien supprimer", HttpStatus.OK);
    }

}
