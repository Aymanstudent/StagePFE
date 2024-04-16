package com.example.demo.models;


import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Data
@Entity
@Table(name = "battery")
public class Battery {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String model;
    private String type;
    private Float storage_capacity;
    private Float nominal_voltage;
    private Float maximum_load_voltage;
    private Float maximum_discharge_voltage;
    private String life_cycle;
    private Float operating_temperature;
    private String lifespan;
    private Date date_manufacture;
    private Float price;
    private Integer quantity;
    @Lob
    @Column(name = "image", length = 500000000)
    private String image;
}
