package com.example.demo.models;


import com.example.demo.embedded.Personne;
import jakarta.persistence.*;
import lombok.Data;
import java.util.List;

@Entity
@Data
@Table(name = "client")
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Embedded
    private Personne personne;
    @OneToMany(mappedBy = "client")
    private List<Chantier> chantiers;
}
