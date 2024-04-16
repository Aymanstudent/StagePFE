package com.example.demo.repositorys;

import com.example.demo.models.Activity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ActivityRepository extends JpaRepository<Activity, Long> {
    @Query("SELECT ac FROM Activity ac JOIN ac.workers w WHERE w.id = :workerId")
    List<Activity> findActivitiesByWorkerId(@Param("workerId") Long workerId);
}
