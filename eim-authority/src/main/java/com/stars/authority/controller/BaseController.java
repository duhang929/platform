package com.stars.authority.controller;

import com.stars.authority.param.CommonParam;
import net.sf.json.JSON;
import net.sf.json.JSONArray;
import net.sf.json.JSONObject;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Collection;

@RestController
public class BaseController {
    protected HttpServletResponse response;
    protected HttpServletRequest request;

    protected CommonParam commonParam;//其他的公共参数

    @ModelAttribute
    public void setParams(CommonParam commonParam, HttpServletRequest request, HttpServletResponse response) {
        this.commonParam = commonParam;
        this.request  = request;
        this.response = response;
    }

    protected void resultObject(Object object) {
        if (object == null) return;

        JSON json;
        if (object instanceof Collection) {
            json = JSONArray.fromObject(object);
        } else {
            json = JSONObject.fromObject(object);
        }
        writeToResponse(json);
    }

    protected void writeToResponse(JSON json) {

        PrintWriter out = null;
        try {
            response.setContentType("text/html;charset=utf-8");
            response.setCharacterEncoding("utf-8");
            out = response.getWriter();
            out.write(json.toString());
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            if (out != null) {
                out.close();
            }
        }

    }


}
