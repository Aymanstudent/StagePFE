package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "inverter")
public class Inverter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;
    private Float nominal_power;
    private Float tension;
    private String frequency;
    private String type;
    private Integer phase_number;
    private Float maximum_circuit_voltage;
    private Float minimal_circuit_current;
    private Float price;
    private Integer quantity;
    @Lob
    @Column(name = "image", length = 500000000)
    private String image;
}
