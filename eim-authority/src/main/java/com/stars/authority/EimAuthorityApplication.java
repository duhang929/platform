package com.stars.authority;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@EnableEurekaClient
@SpringBootApplication
public class EimAuthorityApplication {

	public static void main(String[] args) {
		SpringApplication.run(EimAuthorityApplication.class, args);
	}
}
