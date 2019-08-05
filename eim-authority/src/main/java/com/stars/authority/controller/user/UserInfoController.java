package com.stars.authority.controller.user;

import com.stars.authority.controller.BaseController;
import com.stars.authority.model.UserInfo;
import com.stars.authority.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/user")
public class UserInfoController extends BaseController{

    private UserService userService;

    //21
    // tests
    @Autowired
    public void setUserService(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "/info")
    public List<UserInfo> get(){
        return userService.searchUsers();
    }
}
