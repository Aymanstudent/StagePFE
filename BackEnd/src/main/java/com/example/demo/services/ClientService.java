package com.example.demo.services;


import com.example.demo.models.Client;
import com.example.demo.repositorys.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClientService {

    @Autowired
    private ClientRepository clientRepository;
    public List<Client> afficher_tout() throws Exception{
        return this.clientRepository.findAll();
    }

    public Optional<Client> afficher_client(Long id){
        return this.clientRepository.findById(id);
    }

    public ResponseEntity<String> ajouter_client(Client client){
        this.clientRepository.save(client);
        return new ResponseEntity<>("Votre client a été bien ajouter", HttpStatus.OK);
    }

    public ResponseEntity<String> modifier_client(Client client){
        this.clientRepository.save(client);
        return new ResponseEntity<>("Votre client a été bien modifier", HttpStatus.OK);
    }

    public ResponseEntity<String> supprimer_client(Long id){
        this.clientRepository.deleteById(id);
        return new ResponseEntity<>("Votre client (" + id + ") a été bien supprimer", HttpStatus.OK);
    }

    public ResponseEntity<String> supprimer_tout(){
        this.clientRepository.deleteAll();
        return new ResponseEntity<>("Tout les clients ont été bien supprimer", HttpStatus.OK);
    }
}
