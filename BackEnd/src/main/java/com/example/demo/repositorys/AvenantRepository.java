package com.example.demo.repositorys;

import com.example.demo.models.Avenant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AvenantRepository extends JpaRepository<Avenant, Long> {

    @Query("SELECT A FROM Avenant A  WHERE A.chantier.id =:chantierId")
    List<Avenant> findAvenantByOuvrierId(@Param("chantierId") Long chantierId);
}
