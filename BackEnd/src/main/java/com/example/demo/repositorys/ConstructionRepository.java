package com.example.demo.repositorys;

import com.example.demo.models.Construction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConstructionRepository extends JpaRepository<Construction,Long> {
}
