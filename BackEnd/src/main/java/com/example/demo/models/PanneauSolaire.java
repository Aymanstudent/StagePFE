package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "panneau_solaire")
public class PanneauSolaire {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String modele;
    private Float puissance_nominal;
    private Float tension_maximal;
    private Float courant_maximal;
    private Float height;
    private Float width;
    private Float poids;
    private String type_cellule_colaire;
    private String garantie;
    private Float prix;
    private Integer quantite;
    @Lob
    @Column(name = "image", length = 500000000)
    private String image;
}
