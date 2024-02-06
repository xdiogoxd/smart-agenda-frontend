package com.Projeto.Fenix.domain.shoppingList;

import com.Projeto.Fenix.domain.items.Item;
import com.Projeto.Fenix.domain.users.Users;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;


@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter

@Entity
@Table(name = "templates")
public class Templates {


    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_template")
    private String templateId;

    @Column(name = "name")
    private String templateName;

    @Column(name = "description")
    private String templateDescription;

    @Column(name = "image")
    private String templateImage;

    @Column(name = "items")
    private List<Item> templateItems;

    @Column(name = "members")
    private List<Users> templateMembers;

    @Column(name = "creationDate")
    private Date templateCreationDate;

    @Column(name = "visibility")
    private String templateVisibility;

}
