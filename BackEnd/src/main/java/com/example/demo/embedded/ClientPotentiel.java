package com.example.demo.embedded;


import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class ClientPotentiel {

    private String nom;
    private String prenom;
    private String telephone;
    private String email;
}
