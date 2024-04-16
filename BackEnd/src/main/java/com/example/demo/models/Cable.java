package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "cable")
public class Cable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;
    private String type;
    private Float length;
    private Float diameter;
    private Float nominal_voltage;
    private String section_transversal;
    private String material;
    private String isolation;
    private Float resistance;
    private Float price;
}
