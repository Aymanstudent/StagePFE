package com.example.demo.repositorys;

import com.example.demo.models.Batterie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BatterieRepository extends JpaRepository<Batterie, Long> {
}
