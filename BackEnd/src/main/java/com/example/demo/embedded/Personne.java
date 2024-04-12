package com.example.demo.embedded;


import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Embeddable
public class Personne {
    private String nom;
    private String prenom;
    private Integer age;
    private String sexe;
    private String email;
    private String telephone;
    private String adresse;
}
