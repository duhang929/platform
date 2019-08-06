$(function () {
    doMainHtmlWork();
});

(function (window, $) {
    window.doMainHtmlWork = function () {
        handler.initMenus();
        handler.bindEvents();
    }

    var handler = {};

    /**
     * 初始化菜单
     */
    handler.initMenus = function () {
        $.each(menus, function (i, obj) {
            handler.iterationMenuObject($('#side-menu'), obj, 2);
        });
    }

    /**
     * 迭代菜单
     */
    handler.iterationMenuObject = function ($ele, menuObj, level) {
        if (menuObj.hide === 1) {
            return;
        }
        var childs = menuObj.children;
        if (!childs || childs.length === 0) {
            var $li = $('<li><a class="J_menuItem"></a></li>');
            $li.find('a').attr('href', menuObj.href);
            $li.find('a').text(menuObj.name);
            $ele.append($li);
            return;
        }

        var $li = $('<li></li>');
        var $a = $('<a href="#"><i class="fa fa-folder"></i><span class="nav-label"></span><span class="fa arrow"></span></a>');
        $a.find('.nav-label').text(menuObj.name);
        var numE = level === 2 ? 'second' : 'third';
        var $ul = $('<ul class="nav nav-' + numE + '-level"></ul>');
        $li.append($a).append($ul);
        $ele.append($li);
        $.each(menuObj.children, function (i, obj) {
            handler.iterationMenuObject($ul, obj, level + 1);
        });

    }
    /**
     * 绑定一些事件
     */
    handler.bindEvents = function () {
        //添加左侧菜单的隐藏和显示事件
        $('#sysytem_title_span').click(function () {
            $("body").toggleClass("mini-navbar");
        });

    }

    var menus = [
        {
            name: '菜单集合一',
            hide: 0,
            children: [
                {name: '菜单一_1', href: "grid/grid.html"},
                {name: '菜单一_2', href: ""},
                {name: '菜单一_3', href: ""},
            ]
        },
        {name: '菜单二', hide: 0, href: "grid/grid.html"},
        {
            name: '菜单集合三',
            hide: 0,
            children: [
                {name: '菜单三_1', href: "grid/grid.html"},
                {name: '菜单三_2', href: ""},
                {
                    name: '菜单三_3_集合', children: [
                        {name: '菜单三_3_集合_1', href: "grid/grid.html"},
                        {name: '菜单三_3_集合_2', href: "grid/grid.html"},
                    ]
                }
            ]
        }
    ]


})(window, jQuery)