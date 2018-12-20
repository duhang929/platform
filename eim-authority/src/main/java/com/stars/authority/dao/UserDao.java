package com.stars.authority.dao;

import com.stars.authority.model.UserInfo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao {

    int insert(UserInfo record);

    List<UserInfo> selectUsers();
}
