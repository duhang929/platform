package com.stars.authority;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//@EnableEurekaClient
@SpringBootApplication
@MapperScan("com.stars.authority.dao")
public class EimAuthorityApplication {

	//呵呵
	public static void main(String[] args) {
		SpringApplication.run(EimAuthorityApplication.class, args);
	}
}
