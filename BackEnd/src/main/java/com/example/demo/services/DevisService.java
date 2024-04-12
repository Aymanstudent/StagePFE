package com.example.demo.services;

import com.example.demo.models.Devis;
import com.example.demo.repositorys.DevisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DevisService {

    @Autowired
    private DevisRepository devisRepository;

    public List<Devis> afficher_tout() throws Exception{
        return devisRepository.findAll();
    }
    public ResponseEntity<String> ajouter_devis(Devis devis){
        this.devisRepository.save(devis);
        return new ResponseEntity<>("Votre devis a été bien ajouter", HttpStatus.OK);
    }
    public ResponseEntity<String> modifier_devis(Devis devis){
        this.devisRepository.save(devis);
        return new ResponseEntity<>("Votre devis a été bien modifier", HttpStatus.OK);
    }
    public ResponseEntity<String> supprimer_devis(Long id){
        this.devisRepository.deleteById(id);
        return new ResponseEntity<>("Votre devis (" + id + ") a été bien supprimer", HttpStatus.OK);
    }
    public ResponseEntity<String> supprimer_tout(){
        this.devisRepository.deleteAll();
        return new ResponseEntity<>("Tout les devis ont été bien supprimer", HttpStatus.OK);
    }

    public Optional<Devis> afficher_devis(Long id) {
        return this.devisRepository.findById(id);
    }
}
