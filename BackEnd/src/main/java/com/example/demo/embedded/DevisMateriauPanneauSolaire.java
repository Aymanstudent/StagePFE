package com.example.demo.embedded;


import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class DevisMateriauPanneauSolaire {
    private String modelePanneau;
    private Integer quantitePanneau;
    private Float prixPanneau;
    private Integer tvaPanneau;
    private Float totalPanneau;
}
