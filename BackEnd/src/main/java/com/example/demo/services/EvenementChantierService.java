package com.example.demo.services;


import com.example.demo.models.EvenementChantier;
import com.example.demo.repositorys.EvenementChantierRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class EvenementChantierService {

    @Autowired
    private EvenementChantierRepository EvenementChantierRepository;

    public List<EvenementChantier> afficher_Evenements() throws Exception{
        return this.EvenementChantierRepository.findAll();
    }
    public List<EvenementChantier> afficher_Evenement(Long id) throws Exception{
        return this.EvenementChantierRepository.findJourTravaillerByOuvrierId(id);
    }

    public ResponseEntity<String> ajouter_Evenement(EvenementChantier jourTravailler){
        this.EvenementChantierRepository.save(jourTravailler);
        return new ResponseEntity<>("Votre planif a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> modifier_EvenementChantier(EvenementChantier evenementChantier) {
        this.EvenementChantierRepository.save(evenementChantier);
        return new ResponseEntity<>("Votre planif a été bien enregistrer", HttpStatus.OK);
    }

    public ResponseEntity<String> supprimer_Evenements(){
        this.EvenementChantierRepository.deleteAll();

        return new ResponseEntity<>("Tout les planifs ons été bien supprimer", HttpStatus.OK);
    }

    public ResponseEntity<String> supprimer_Evenement(Long id){
        Optional<EvenementChantier> evenementOptional = EvenementChantierRepository.findById(id);
        if (evenementOptional.isPresent()) {
            EvenementChantier evenement = evenementOptional.get();
            evenement.getTaches().clear();
            evenement.getOuvriers().clear();
            EvenementChantierRepository.deleteById(id);
        }
        return new ResponseEntity<>("Votre planif a été bien supprimer", HttpStatus.OK);
    }
}
