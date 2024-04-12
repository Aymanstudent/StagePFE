package com.example.demo.services;


import com.example.demo.models.Tache;
import com.example.demo.repositorys.TacheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TacheService {

    @Autowired
    private TacheRepository tacheRepository;

    public List<Tache> afficherTaches() throws Exception{
        return this.tacheRepository.findAll();
    }
}
