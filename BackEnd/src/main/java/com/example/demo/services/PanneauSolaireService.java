package com.example.demo.services;

import com.example.demo.models.PanneauSolaire;
import com.example.demo.repositorys.PanneauSolaireRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PanneauSolaireService {

    @Autowired
    private PanneauSolaireRepository panneauSolaireRepository;



    public List<PanneauSolaire> afficher_panneaux() throws Exception{
        return this.panneauSolaireRepository.findAll();
    }
    public ResponseEntity<String> ajouter_panneau(PanneauSolaire panneauSolaire){
        this.panneauSolaireRepository.save(panneauSolaire);
        return new ResponseEntity<>("Votre panneaux solaire a été bien enregistrer", HttpStatus.OK);
    }
    public ResponseEntity<String> modifier_panneau(PanneauSolaire panneauSolaire){
        this.panneauSolaireRepository.save(panneauSolaire);
        return new ResponseEntity<>("Votre panneaux solaire a été bien modifier", HttpStatus.OK);
    }
    public ResponseEntity<String> supprimer_panneau(Long id){
        this.panneauSolaireRepository.deleteById(id);
        return new ResponseEntity<>("Votre panneaux solaire (" + id + ")a été bien supprimer", HttpStatus.OK);
    }
    public List<Object> grouper_par_modele() throws Exception{
        return this.panneauSolaireRepository.countDistinctByModele();
    }
}
