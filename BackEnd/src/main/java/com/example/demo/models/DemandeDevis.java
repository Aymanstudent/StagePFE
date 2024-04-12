package com.example.demo.models;
import com.example.demo.embedded.ClientPotentiel;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "demande_devis")
public class DemandeDevis {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Embedded
    private ClientPotentiel clientPotentiel;
    private String emplacement;
    private String code_Postal;
    private String batiment_type;
    private Integer surface_disponible;
    private String toiture_type;
    private Boolean access_elec;
    private Float consommation;
    private String status;
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @OneToOne(mappedBy = "demandeDevis")
    private Devis devis;
}
