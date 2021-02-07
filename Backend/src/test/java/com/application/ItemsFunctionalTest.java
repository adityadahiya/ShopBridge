package com.application;

import com.application.item.ItemController;
import com.application.item.ItemDTO;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.List;



@Transactional
@SpringBootTest(classes = ItemApplication.class)
public class ItemsFunctionalTest {


    @Autowired
    private ItemController itemController;

    @Test
    public void testItemController() throws IOException {
        ItemDTO itemDTO = createItemDTO();
        ItemDTO newItem = itemController.saveItem(itemDTO.getName(), itemDTO.getDescription(), itemDTO.getPrice(), null);
        ItemDTO retrievedItem = itemController.getItems().get(0);
        Assertions.assertEquals(newItem.getName(), itemDTO.getName());
        Assertions.assertEquals(newItem.getId(), retrievedItem.getId());
        Assertions.assertEquals(newItem.getName(), retrievedItem.getName());
        Assertions.assertEquals(newItem.getDescription(), retrievedItem.getDescription());
        Assertions.assertEquals(newItem.getPrice(), retrievedItem.getPrice());

        Assertions.assertTrue(retrievedItem.getId() > 0);
    }

    @Test
    public void testDeleteItem() throws IOException {
        ItemDTO itemDTO = createItemDTO();
        ItemDTO newItem = itemController.saveItem(itemDTO.getName(), itemDTO.getDescription(), itemDTO.getPrice(), null);
        ItemDTO retrievedItem = itemController.getItems().get(0);
        itemController.deleteItemById(retrievedItem.getId());
        List<ItemDTO> list = itemController.getItems();
        Assertions.assertTrue(list.isEmpty());
    }

    private static ItemDTO createItemDTO() {
        ItemDTO itemDTO = new ItemDTO();
        itemDTO.setName("testItem");
        itemDTO.setDescription("Item Description");
        itemDTO.setPrice(100L);
        return itemDTO;
    }
}
