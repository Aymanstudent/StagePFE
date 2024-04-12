package com.example.demo.embedded;


import jakarta.persistence.Embeddable;
import lombok.Data;

@Data
@Embeddable
public class DevisMateriauSystemeFixation {
    private String modeleSysFixation;
    private Integer quantiteSysFixation;
    private Float prixSysFixation;
    private Integer tvaSysFixation;
    private Float totalSysFixation;
}
