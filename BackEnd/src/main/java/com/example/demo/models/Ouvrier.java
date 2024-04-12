package com.example.demo.models;


import com.example.demo.embedded.Personne;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "ouvrier")
public class Ouvrier {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String profesion;
    @Lob
    @Column( name = "image", length = 1000000000)
    private String image;
    @Embedded
    private Personne personne;
    @ManyToMany
    private List<EvenementChantier> jourTravaillers;
}
