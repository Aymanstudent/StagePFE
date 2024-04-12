package com.example.demo.services;


import com.example.demo.models.Avenant;
import com.example.demo.repositorys.AvenantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvenantService {

    @Autowired
    private AvenantRepository avenantRepository;


    public ResponseEntity<String> ajouter_avenant(Avenant avenant){
        this.avenantRepository.save(avenant);
        return new ResponseEntity<>("votre avenant a été bien enregistrer", HttpStatus.OK);
    }

    public List<Avenant> afficher_avenantParChantierId(Long id) {
        return this.avenantRepository.findAvenantByOuvrierId(id);
    }
}
