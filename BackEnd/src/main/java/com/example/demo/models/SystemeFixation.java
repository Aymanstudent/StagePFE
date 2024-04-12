package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "systeme_fixation")
public class SystemeFixation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String modele;
    private String type;
    private String materiau;
    private Float charge;
    private Float height;
    private Float width;
    private String methode_installation;
    private String adaptabilite;
    private String garantie;
    private Float prix;
    private Integer quantite;
    @Lob
    @Column(name = "image", length = 500000000)
    private String image;
}
