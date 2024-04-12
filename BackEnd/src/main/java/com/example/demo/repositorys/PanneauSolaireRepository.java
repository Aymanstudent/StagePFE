package com.example.demo.repositorys;

import com.example.demo.models.PanneauSolaire;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface PanneauSolaireRepository extends JpaRepository<PanneauSolaire, Long> {

    @Query("SELECT e.modele, count(e) AS count FROM PanneauSolaire e GROUP BY e.modele")
    List<Object> countDistinctByModele();
}
