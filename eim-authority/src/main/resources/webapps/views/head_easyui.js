var basePath = window.location.href.split('views')[0];

document.write('<!-----------  公共js和css 开始----------->');
document.write('' +

     '<script  type="text/javascript" src="'+basePath+'static/js/jquery-3.3.1.js" ></script>\n'
    +'<script type="text/javascript" src="'+basePath+'static/jquery-easyui-1.7.0/jquery.min.js"></script>\n'
    +'<script type="text/javascript" src="'+basePath+'static/jquery-easyui-1.7.0/jquery.easyui.min.js"></script>\n'
    +'<script type="text/javascript" src="'+basePath+'static/jquery-easyui-1.7.0/locale/easyui-lang-zh_CN.js" ></script>\n'
    +'<script  type="text/javascript" src="'+basePath+'static/js/datagrid-filter.js" ></script>\n'

    +'<link rel="stylesheet" type="text/css" href="'+basePath+'static/jquery-easyui-1.7.0/themes/default/easyui.css"></script>\n'
    +'<link rel="stylesheet" type="text/css" href="'+basePath+'static/jquery-easyui-1.7.0/themes/icon.css">\n'

    +'<script type="text/javascript" src="'+basePath+'views/common/js/easyui-extend.js"></script>\n'
    +'<link rel="stylesheet" type="text/css" href="'+basePath+'views/common/css/easyui-extend.css"></script>\n'

    +'<base href="'+basePath+'">\n'
    +'');
document.write('<!-----------  公共js和css 结束----------->');
