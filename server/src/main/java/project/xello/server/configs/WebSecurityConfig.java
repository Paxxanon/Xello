package project.xello.server.configs;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
//import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class WebSecurityConfig {

  // private final UserAuthenticationEntryPoint userAuthenticationEntryPoint;
  //private final UserAuthenticationProvider userAuthenticationProvider;

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http)
    throws Exception {
    http.csrf(csrf -> csrf.disable()); // TODO: add CSRF token 
    http.authorizeHttpRequests(authorize ->
      authorize
        .requestMatchers(HttpMethod.POST, "/register")
        .permitAll()
        .requestMatchers(HttpMethod.GET, "/users")
        .permitAll()
        .anyRequest()
        .authenticated()
    );

    return http.build();
  }
}
