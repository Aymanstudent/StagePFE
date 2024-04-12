package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "batterie")
public class Batterie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String modele;
    private String type;
    private Float capacite_stockage;
    private Float tension_nominal;
    private Float tension_charge_maximal;
    private Float tension_decharge_maximal;
    private String cycle_vie;
    private Float temperature_fonctionnement;
    private String duree_vie;
    private String garantie;
    private Date date_fabrication;
    private Float prix;
    private Integer quantite;
    @Lob
    @Column(name = "image", length = 500000000)
    private String image;
}
