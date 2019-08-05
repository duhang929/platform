package com.stars.authority;

import com.alibaba.fastjson.JSONObject;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import javax.sql.DataSource;
import java.util.Map;

@RunWith(SpringRunner.class)
@SpringBootTest
public class MybatisTest {

    @Resource
    private DataSource dataSource;

    @Resource
    private JdbcTemplate jdbcTemplate;

    @Test
    public void testSqlSession() {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource);
        try {
            SqlSessionFactory sqlSessionFactory = (SqlSessionFactory) sqlSessionFactoryBean.getObject();
            SqlSession sqlSession = sqlSessionFactory.openSession();
//            sqlSession.
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    @Test
    public void testJdbc() {
        String sql = "select * from t_user";
        Map<String, Object> map = jdbcTemplate.queryForMap(sql);
        System.out.println(JSONObject.toJSONString(map));
    }
}
