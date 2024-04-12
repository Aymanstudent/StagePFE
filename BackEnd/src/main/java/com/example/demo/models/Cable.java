package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "cable")
public class Cable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String modele;
    private String type;
    private Float longueur;
    private Float diametre;
    private Float tension_nominal;
    private String section_trensversal;
    private String materiau;
    private String isolation;
    private Float resistance;
    private String garantie;
    private Float prix;
}
