package com.stars.authority.config.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;

public class MyFilter implements Filter {
    public static final String NO_FILTER_DIRECTORY_COMMON = "/views/";

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;

        // 获得用户请求的URI
        String path = request.getRequestURI();
        String contextPath = request.getContextPath();
        String url = path.substring(contextPath.length());

        if(url.startsWith(NO_FILTER_DIRECTORY_COMMON)){
            System.err.println(String.format("访问views资源,路径为[%s]",url));
        }
        filterChain.doFilter(servletRequest,servletResponse);

    }

    @Override
    public void destroy() {

    }
}


