package com.example.demo.repositorys;

import com.example.demo.models.Cable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CableRepository extends JpaRepository<Cable, Long> {
}
