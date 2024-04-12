package com.example.demo.models;

import com.example.demo.embedded.*;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "devis")
@Data
public class Devis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date date;
    private String ref;
    private String etat;
    private String status;
    @Embedded
    private DevisMateriauPanneauSolaire panneauSolaire;
    @Embedded
    private DevisMateriauOnduleur onduleur;
    @Embedded
    private DevisMateriauSystemeFixation systemeFixation;
    @Embedded
    private DevisMateriauCable cable;
    @Embedded
    private DevisMateriauBatteri batteri;
    @Embedded
    private DevisMateriauCompteur compteur;
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @OneToOne
    private DemandeDevis demandeDevis;
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @OneToOne(mappedBy = "devis")
    private Chantier chantier;
    private Float total;
}
