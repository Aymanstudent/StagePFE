package com.example.demo.embedded;


import ch.qos.logback.core.net.server.Client;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Embeddable
public class ChantierId implements Serializable {
    private final String SEQUENCE = "CHANTIER_" ;
    private String adresse;
    private String client;
}
