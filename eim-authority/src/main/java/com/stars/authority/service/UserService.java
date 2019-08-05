package com.stars.authority.service;

import com.stars.authority.dao.UserDao;
import com.stars.authority.model.UserInfo;
import org.apache.catalina.User;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserDao userDao;

    @Autowired
    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public void insert(UserInfo userInfo){
        userDao.insert(userInfo);
    }

    public List<UserInfo> searchUsers(){
        return userDao.selectUsers();
    }

}
