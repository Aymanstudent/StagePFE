package com.example.demo.embedded;


import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class DevisMateriauBatteri {

    private String modeleBatteri;
    private Integer quantiteBatteri;
    private Float prixBatteri;
    private Integer tvaBatteri;
    private Float totalBatteri;
}
