package lk.project.login.service;

import lk.project.login.dto.UserDto;
import lk.project.login.entity.User;

public interface UserService {
    User PostUser(UserDto userDto);
}
