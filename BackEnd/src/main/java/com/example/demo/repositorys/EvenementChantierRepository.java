package com.example.demo.repositorys;

import com.example.demo.models.EvenementChantier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EvenementChantierRepository extends JpaRepository<EvenementChantier, Long> {
    @Query("SELECT jt FROM EvenementChantier jt JOIN jt.ouvriers o WHERE o.id = :ouvrierId")
    List<EvenementChantier> findJourTravaillerByOuvrierId(@Param("ouvrierId") Long ouvrierId);
}
