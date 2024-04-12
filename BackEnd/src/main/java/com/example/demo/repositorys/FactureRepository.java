package com.example.demo.repositorys;

import com.example.demo.models.Facture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface FactureRepository extends JpaRepository<Facture, Long> {

    @Query("SELECT f FROM Facture f JOIN f.chantier c WHERE c.id = :chantierId")
    Optional<Facture> findByChantier(@Param("chantierId") Long chantierId);
}
