package com.example.demo.services;


import com.example.demo.models.Fournisseur;
import com.example.demo.repositorys.FournisseurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FournisseurService {

    @Autowired
    private FournisseurRepository fournisseurRepository;

    public List<Fournisseur> afficherFournisseurs() throws Exception{
        return this.fournisseurRepository.findAll();
    }

    public ResponseEntity<String> ajouterFournisseur(Fournisseur fournisseur){
        this.fournisseurRepository.save(fournisseur);
        return new ResponseEntity<>("votre fournisseur a été bien ajouter", HttpStatus.OK);
    }

    public ResponseEntity<String> modifierFournisseur(Fournisseur fournisseur){
        this.fournisseurRepository.save(fournisseur);
        return new ResponseEntity<>("votre fournisseur a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> supprimerFournisseur(Long id){
        this.fournisseurRepository.deleteById(id);
        return new ResponseEntity<>("votre fournisseur a été bien supprimer", HttpStatus.OK);
    }
}
