package com.twitterapp.twitterapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages={"home"})
public class TwitterappApplication {

	public static void main(String[] args) {
		SpringApplication.run(TwitterappApplication.class, args);
	}
}
