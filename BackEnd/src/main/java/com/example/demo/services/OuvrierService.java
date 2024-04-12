package com.example.demo.services;


import com.example.demo.models.Ouvrier;
import com.example.demo.repositorys.OuvrierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OuvrierService {

    @Autowired
    private OuvrierRepository ouvrierRepository;

    public List<Ouvrier> afficher_ouvriers() throws Exception{
        return this.ouvrierRepository.findAll();
    }

    public ResponseEntity<String> ajouter_ouvriers(Ouvrier ouvrier){
        this.ouvrierRepository.save(ouvrier);
        return new ResponseEntity<>("Votre ouvrier a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> modifier_ouvrier(Ouvrier ouvrier){
        this.ouvrierRepository.save(ouvrier);
        return new ResponseEntity<>("Votre ouvrier a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> supprimer_ouvrier(Long id){
        this.ouvrierRepository.deleteById(id);
        return new ResponseEntity<>("Votre ouvrier a été bien supprimer", HttpStatus.OK);
    }


}
