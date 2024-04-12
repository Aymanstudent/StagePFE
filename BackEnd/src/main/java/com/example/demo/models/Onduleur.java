package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "onduleur")
public class Onduleur {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String modele;
    private Float puissance_nominal;
    private Float tension;
    private String frequence;
    private String type;
    private Integer nombre_phase;
    private Float tension_circuit_maximal;
    private Float courant_circuit_maximal;
    private String garantie;
    private Float prix;
    private Integer quantite;
    @Lob
    @Column(name = "image", length = 500000000)
    private String image;
}
