package com.stars.authority.controller.global;

import com.stars.authority.controller.BaseController;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * 通用查询和导出Excel Controller
 */
@RestController
@RequestMapping(value = "/selectController")
public class SelectController extends BaseController {
    @Resource
    private JdbcTemplate jdbcTemplate;



    @GetMapping(value = "/test")
    public void test(){
        String sql = "select * from t_jcsj_user";
        List<Map<String, Object>> map = jdbcTemplate.queryForList(sql);
        resultObject(map);
    }

}
