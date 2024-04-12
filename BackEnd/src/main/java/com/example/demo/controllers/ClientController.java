package com.example.demo.controllers;


import com.example.demo.models.Client;
import com.example.demo.services.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("http://localhost:4200")
@RequestMapping("client/")
@RestController
public class ClientController {

    @Autowired
    private ClientService clientService;

    @GetMapping("afficher/tout")
    public List<Client> afficher_tout() throws Exception{
        return this.clientService.afficher_tout();
    }

    @GetMapping("afficher/{id}")
    public Optional<Client> afficher_client(@PathVariable Long id){
        return this.clientService.afficher_client(id);
    }
    @PostMapping("ajouter")
    public Optional<Client> ajouter_client(@RequestBody Client client){
        clientService.ajouter_client(client);
        return Optional.ofNullable(client);
    }
    @PutMapping("modifier")
    public ResponseEntity<String> modifier_client(@RequestBody Client client){
        return clientService.modifier_client(client);
    }
    @DeleteMapping("supprimer/{id}")
    public ResponseEntity<String> supprimer_client(@PathVariable Long id){
        return clientService.supprimer_client(id);
    }

    @DeleteMapping("supprimer/tout")
    public ResponseEntity<String> supprimer_tout(){
        return clientService.supprimer_tout();
    }
}
