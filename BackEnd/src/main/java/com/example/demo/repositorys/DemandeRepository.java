package com.example.demo.repositorys;

import com.example.demo.models.DemandeDevis;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DemandeRepository extends JpaRepository<DemandeDevis, Long> {
}
