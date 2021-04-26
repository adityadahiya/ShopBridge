package com.application.item;

import com.application.entities.Item;
import com.application.services.ItemService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.IOException;
import java.io.InputStream;
import java.io.InvalidObjectException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/item")
public class ItemController {

    @Autowired
    ItemService itemService;

    @PostMapping
    public ItemDTO saveItem(@RequestParam(required = false) long id, String name, String description, Long price, MultipartFile fileData) throws IOException {
        InputStream inputStream = null;
        Item item = new Item();
        try {
            ItemDTO itemDTO = new ItemDTO();
            if (id != 0) {
                itemDTO = getItem(id);
            }
            itemDTO.setName(name);
            itemDTO.setDescription(description);
            itemDTO.setPrice(price);
            if (fileData != null) {
                byte[] fileContent = new byte[(int) fileData.getSize()];
                inputStream = fileData.getInputStream();
                inputStream.read(fileContent);
                itemDTO.setFileData(fileContent);
                itemDTO.setFileName(fileData.getOriginalFilename());
                itemDTO.setFileSize(String.valueOf(fileData.getSize()));
                itemDTO.setContentType(fileData.getContentType());
            }
            item = itemService.saveItem(convertItemDTOToEntity(itemDTO));


        } catch (IOException e) {
            throw new IOException("Unable to convert file to byte array. " +
                    e.getMessage());
        }
        return convertEntityToItemDTO(item);

    }

    @GetMapping("/{itemId}")
    public ItemDTO getItem(@PathVariable Long itemId) {
        Item item = itemService.getItemById(itemId);
        return convertEntityToItemDTO(item);
    }

    @GetMapping
    public List<ItemDTO> getItems() {
        List<Item> items = itemService.getAllItems();
        return convertItemListToItemDTOList(items);
    }

    @GetMapping("/files/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable Long id) {
        Item item = itemService.getItemById(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + item.getFileName() + "\"")
                .body(item.getFileData());
    }

    @DeleteMapping("/{id}")
    public void deleteItemById(@PathVariable Long id) {
        itemService.deleteItemById(id);
    }

    private static ItemDTO convertEntityToItemDTO(Item item) {
        ItemDTO itemDTO = new ItemDTO();
        BeanUtils.copyProperties(item, itemDTO);
        String fileDownloadUri = ServletUriComponentsBuilder
                .fromCurrentContextPath()
                .path("/item/files/")
                .path(item.getId().toString())
                .toUriString();
        itemDTO.setFileDownloadURL(fileDownloadUri);
        return itemDTO;
    }

    private static Item convertItemDTOToEntity(ItemDTO itemDTO) {
        Item item = new Item();
        BeanUtils.copyProperties(itemDTO, item);
        return item;
    }

    private static List<ItemDTO> convertItemListToItemDTOList(List<Item> items) {
        List<ItemDTO> itemDTOList = new ArrayList<ItemDTO>();
        for (Item item : items) {
            itemDTOList.add(convertEntityToItemDTO(item));
        }
        return itemDTOList;
    }
}
