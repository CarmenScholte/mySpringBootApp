package csl.model;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/example")
public class RestResource {

    @CrossOrigin(origins = "http://localhost:4200")
    @RequestMapping(path = "", method = RequestMethod.GET,
            produces = MediaType.APPLICATION_JSON_UTF8_VALUE)
    public ResponseEntity<String> getAvailableRooms()
//            @RequestParam(name = "checkin")
//            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
//                    LocalDate checkin
    {

        return new ResponseEntity<>("Hello from the REST service!", HttpStatus.OK);
    }
}
