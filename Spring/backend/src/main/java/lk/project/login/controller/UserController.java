package lk.project.login.controller;

import lk.project.login.dto.UserDto;
import lk.project.login.entity.User;
import lk.project.login.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping({"/app"})
@CrossOrigin({"*"})
public class UserController {
    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping({"/login"})
    public ResponseEntity<?> postUser(@RequestBody UserDto userDto) {
        User savedUser = this.userService.PostUser(userDto);
        return savedUser != null ? ResponseEntity.status(HttpStatus.CREATED).body(savedUser) : ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
    }
}
