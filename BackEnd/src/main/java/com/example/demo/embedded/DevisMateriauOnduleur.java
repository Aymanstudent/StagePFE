package com.example.demo.embedded;


import jakarta.persistence.Embeddable;
import lombok.Data;


@Data
@Embeddable
public class DevisMateriauOnduleur {

    private String modeleOnduleur;
    private Integer quantiteOnduleur;
    private Float prixOnduleur;
    private Integer tvaOnduleur;
    private Float totalOnduleur;

}
