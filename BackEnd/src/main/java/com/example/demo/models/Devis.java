package com.example.demo.models;

import com.example.demo.embedded.*;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIdentityReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name = "devis")
@Data
public class Devis {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;
    private Date date;
    private String ref;
    private String etat;
    private String status;
    @Embedded
    private MaterielSolarPanel solarPanel;
    @Embedded
    private MaterielInverter inverter;
    @Embedded
    private MaterielSystemFixing systemFixing;
    @Embedded
    private MaterielCable cable;
    @Embedded
    private MaterielBattery battery;
    @Embedded
    private MaterielMeter meter;
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @OneToOne
    private DevisRequest devisRequest;
    @JsonIdentityInfo(generator= ObjectIdGenerators.PropertyGenerator.class, property="id")
    @JsonIdentityReference(alwaysAsId=true)
    @ManyToOne
    private Construction construction;
    private Float total;
}
