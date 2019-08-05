<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8" %>
<html>
<head>
    <%@ include file="../head_1.html" %>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <script type="text/javascript" src="<%=basePath%>views/lmy/test.js" charset="UTF-8"></script>
    <title>Title</title>
    <style type="text/css">
        .overflowDiv {
            height: 100px;
            width: 1000px;
            background-color: #83d288;
            color: black;
            position: relative;
            display: inline-block;
            line-height: 100px;
            overflow: hidden;
        }

        .overflowSpan {
            position: absolute;
            top: 0px;
        }

        .topDiv {
            width: 100%;
            text-align: center;
            position: relative;
            margin-top: 50px;
        }

    </style>
</head>
<body>

<div class="topDiv">
    <marquee scrollamount="3" direction="left" behavior="scroll" bgcolor="#83d288" style="height: 100px;width: 1000px">

        <div style="width: 100%;height: 100%; line-height: 100px;">
            <span style="">"好消息！！！好消息！！！本店全场亏本大甩卖了，只要五元，只要五元！！！"</span>
        </div>


    </marquee>
</div>


<div class="topDiv">
    <div class="overflowDiv"></div>
</div>

<div style="height: 500px;width: 100%">
    <iframe height="100%" width="100%" src="<%=basePath%>views/lmy/test2.jsp">

    </iframe>
</div>

</body>
</html>
