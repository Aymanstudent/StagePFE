package com.example.demo.embedded;


import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class DevisMateriauCable {

    private String modeleCable;
    private Integer quantiteCable;
    private Float prixCable;
    private Integer tvaCable;
    private Float totalCable;
}
