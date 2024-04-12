package com.example.demo.services;


import com.example.demo.models.DemandeDevis;
import com.example.demo.repositorys.DemandeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DemandeService {

    @Autowired
    private DemandeRepository demandeRepository;

    public List<DemandeDevis> afficher_tout() throws Exception{
        return this.demandeRepository.findAll();
    }

    public Optional<DemandeDevis> afficher(Long id)throws Exception{
        return this.demandeRepository.findById(id);
    }

    public ResponseEntity<String> supprimer_tout(){
        this.demandeRepository.deleteAll();
        return new ResponseEntity<>("Tout les demande ont été bien supprimer", HttpStatus.OK);
    }
    public ResponseEntity<String> ajouter_demande(DemandeDevis demande){
        this.demandeRepository.save(demande);
        return new ResponseEntity<>("Votre demande a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> modifier_demande(DemandeDevis demande){
        this.demandeRepository.save(demande);
        return new ResponseEntity<>("Votre demande a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> supprimer_demande(Long id){
        this.demandeRepository.deleteById(id);
        return new ResponseEntity<>("Votre demande (" + id +  ") a été bien supprimer", HttpStatus.OK);
    }

}
