package com.example.demo.controllers;


import com.example.demo.models.Construction;
import com.example.demo.services.ConstructionService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("constructor")
@RequiredArgsConstructor
public class ConstructionController {

    private final ConstructionService constructionService;

    @GetMapping("get")
    public List<Construction> getConstructions() throws Exception{
        return this.constructionService.getConstructions();
    }

    @PostMapping("add")
    public Construction saveConstruction(@RequestBody Construction construction){
        Construction construction1 = this.constructionService.saveConstruction(construction);
        return construction1;
    }

}
