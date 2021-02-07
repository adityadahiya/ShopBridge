package com.application.services;

import com.application.entities.Item;
import com.application.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Transactional
@Service
public class ItemService {
    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getAllItems() {
        return itemRepository.findAll();
    }


    public Item saveItem(Item item) {
        Item savedItem = itemRepository.save(item);
        return savedItem;
    }

    public Item getItemById(Long id) {
        return itemRepository.getOne(id);
    }
    public void deleteItemById(Long id){
        itemRepository.deleteById(id);
    }
}
