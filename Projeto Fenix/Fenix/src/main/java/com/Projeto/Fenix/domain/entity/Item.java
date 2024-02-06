package com.Projeto.Fenix.domain.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "items")
public class Items {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_item")
    private String id_item;

    @Column(name = "name_item")
    private String itemName;

    @Column(name = "description_item")
    private String itemName;

    @Column(name = "name_item")
    private String itemName;

    @Column(name = "name_item")
    private String itemName;

    @Column(name = "name_item")
    private String itemName;
}
