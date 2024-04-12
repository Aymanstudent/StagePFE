package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "compteur")
public class Compteur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String modele;
    private String type;
    private String type_cnx;
    private String garantie;
    private Float capacite;
    private Float prix;
    private Integer quantite;
    @Lob
    @Column(name = "image", length = 500000000)
    private String image;
}
