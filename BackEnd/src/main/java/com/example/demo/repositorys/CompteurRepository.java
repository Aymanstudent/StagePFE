package com.example.demo.repositorys;

import com.example.demo.models.Compteur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CompteurRepository extends JpaRepository<Compteur, Long> {
}
