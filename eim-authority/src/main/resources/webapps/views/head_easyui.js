//资源文件访问路径
var resource_basePath = window.location.href.split('views')[0];
//后台数据请求路径（如果前后端是不同的项目，那么需要手动配置了）
var data_basePath = resource_basePath;

document.write('<!-----------  公共js和css 开始----------->');
document.write('' +

     '<script  type="text/javascript" src="'+resource_basePath+'static/js/jquery-3.3.1.js" ></script>\n'
    +'<script type="text/javascript" src="'+resource_basePath+'static/jquery-easyui-1.7.0/jquery.min.js"></script>\n'
    +'<script type="text/javascript" src="'+resource_basePath+'static/jquery-easyui-1.7.0/jquery.easyui.min.js"></script>\n'
    +'<script type="text/javascript" src="'+resource_basePath+'static/jquery-easyui-1.7.0/locale/easyui-lang-zh_CN.js" ></script>\n'
    +'<script  type="text/javascript" src="'+resource_basePath+'static/js/datagrid-filter.js" ></script>\n'

    +'<link rel="stylesheet" type="text/css" href="'+resource_basePath+'static/jquery-easyui-1.7.0/themes/default/easyui.css"></script>\n'
    +'<link rel="stylesheet" type="text/css" href="'+resource_basePath+'static/jquery-easyui-1.7.0/themes/icon.css">\n'

    +'<script type="text/javascript" src="'+resource_basePath+'views/common/js/easyui-extend.js"></script>\n'
    +'<link rel="stylesheet" type="text/css" href="'+resource_basePath+'views/common/css/easyui-extend.css"></script>\n'

    // +'<base href="'+resource_basePath+'">\n'
    +'');
document.write('<!-----------  公共js和css 结束----------->');
