package com.example.demo.embedded;


import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class DevisMateriauCompteur {

    private String modeleCompteur;
    private Integer quantiteCompteur;
    private Float prixCompteur;
    private Integer tvaCompteur;
    private Float totalCompteur;
}
