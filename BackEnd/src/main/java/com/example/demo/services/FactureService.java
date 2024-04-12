package com.example.demo.services;


import com.example.demo.models.Facture;
import com.example.demo.repositorys.FactureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FactureService {

    @Autowired
    private FactureRepository factureRepository;

    public Optional<Facture> afficher_factureParChantier(Long id) throws Exception{
        return this.factureRepository.findByChantier(id);
    }

    public ResponseEntity<String> ajouter_facture(Facture facture){
        this.factureRepository.save(facture);
        return new ResponseEntity<>("Votre facture a été bien ajouter", HttpStatus.OK);
    }

    public List<Facture> afficher_Factures() throws Exception{
        return this.factureRepository.findAll();
    }
}
