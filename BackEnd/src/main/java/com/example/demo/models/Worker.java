package com.example.demo.models;
import com.example.demo.embedded.Person;
import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Data
@Entity
@Table(name = "worker")
public class Worker {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String email;
    private String phone;
    private String profession;
    @Lob
    @Column( name = "image", length = 1000000000)
    private String image;
    @Embedded
    private Person generaleInfo;
    @ManyToMany
    private List<Activity> activities;
}
