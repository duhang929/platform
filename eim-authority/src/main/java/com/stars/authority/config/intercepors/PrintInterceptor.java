package com.stars.authority.config.intercepors;

import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Enumeration;

/**
 * 打印拦截器
 */
@Component
public class PrintInterceptor implements HandlerInterceptor {

    @Override
    public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3) throws Exception {


    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse arg1, Object handler, ModelAndView arg3) throws Exception {

        if(handler instanceof HandlerMethod){
            HandlerMethod handlerMethod = (HandlerMethod) handler;
            Object bean = handlerMethod.getBean();
            String mathodName = handlerMethod.getMethod().getName();
            System.err.println("");
            System.err.println("》》》调用结束：["+bean.getClass().getName()+"]>>>方法名"+"["+mathodName+"]");
        }

    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        if(handler instanceof HandlerMethod){
            HandlerMethod handlerMethod = (HandlerMethod) handler;
            Object bean = handlerMethod.getBean();
            String mathodName = handlerMethod.getMethod().getName();
            System.err.println("》》》调用开始：["+bean.getClass().getName()+"]>>>方法名"+"["+mathodName+"]");
        }

        Enumeration<String> parameterNames = request.getParameterNames();
        while (parameterNames.hasMoreElements()){
            String param = parameterNames.nextElement();
            System.err.println("》》》参数："+param+":"+request.getParameter(param));
        }
        String requestURI = request.getRequestURI();
        StringBuffer requestURL = request.getRequestURL();


        return true;
    }


}
