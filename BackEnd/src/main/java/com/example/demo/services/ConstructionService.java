package com.example.demo.services;


import com.example.demo.models.Construction;
import com.example.demo.repositorys.ConstructionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ConstructionService {

    private final ConstructionRepository constructionRepository;

    public Construction saveConstruction(Construction construction){
        return this.constructionRepository.save(construction);
    }
    public List<Construction> getConstructions() throws Exception{
        return this.constructionRepository.findAll();
    }
}
