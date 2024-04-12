package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "vehicule")
public class Vehicule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String marque;
    private String modele;
    private String ref;
    private Boolean disponible;
    @OneToMany(mappedBy = "vehicule")
    private List<EvenementChantier> evenementChantiers;
}
