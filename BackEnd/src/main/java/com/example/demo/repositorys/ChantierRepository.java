package com.example.demo.repositorys;

import com.example.demo.models.Chantier;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChantierRepository extends JpaRepository<Chantier,Long> {
}
