package com.example.demo.repositorys;

import com.example.demo.models.SolarPanel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface SolarPanelRepository extends JpaRepository<SolarPanel, Long> {

    @Query("SELECT p.model, count(p) AS count FROM SolarPanel p GROUP BY p.model")
    List<Object> countDistinctByModel();
}
