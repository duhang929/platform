//回调
$(function () {
    doWork();
});


(function (window,$) {

    window.doWork =function () {
        handler.initParams();
        handler.getMyMsg();
        handler.createLoadTable();
        // handler.createLoad_RightTable();
        handler.addEvents();
    };

    var handler = {};//方法对象
    var jQueryObj = {};//jQury对象集合

    handler.initParams = function(){
        jQueryObj.$left_table = $('#left_table');
        jQueryObj.$right_span = $('#right_span');
        jQueryObj.$dateInput = $('#dateInput');
        jQueryObj.$serch_btn1 = $('#serch_btn1');
        jQueryObj.$serch_btn2 = $('#serch_btn2');
        jQueryObj.$right_table = $('#right_table');

    }
    /**
     * 测试获取后台信息
      */
    handler.getMyMsg = function(){
        $.ajax({
            url:data_basePath+"selectController/test",

            type:"get",
            dataType:"json",
            success:function (data) {
                if(!data) return;

                console.log(data);
                jQueryObj.$right_span.text(data[0].name);
            }
        })

        jQueryObj.$dateInput.datebox({
            required:true
        });
    }

    handler.createLoadTable = function () {

        jQueryObj.$left_table.datagrid({
            data:leftTableData,
            columns:clos.columns,
            showFilterBar:true,
            remoteFilter:true,
            rownumbers:true,
            onLoadSuccess:function (data) {

                handler.mergeRow({
                    $table:jQueryObj.$left_table,
                    rows: data.rows,
                    fields:['name','age','sfzh','work'],
                    compareValueMethod:function (row) {
                        var name = row.name || "";
                        var age = row.age || "";

                        return name+age;
                    }
                });

            }
        });

        jQueryObj.$left_table.datagrid('enableFilter');

    }

     var queryParams = {};
    handler.addEvents = function(){
        var i=1;
        jQueryObj.$serch_btn1.click(function () {
            queryParams = {name:'李'+i,age:i};
            jQueryObj.$right_table.datagrid('load',queryParams);
            i++;
        })
        jQueryObj.$serch_btn2.click(function () {
            jQueryObj.$right_table.data('clickParam','自定义排序'+i);
            jQueryObj.$right_table.datagrid('load');
            i++;
        })

    }

    handler.createLoad_RightTable = function () {


        jQueryObj.$right_table.datagrid({
            url:basePath+'hello/getObject',
            columns:clos.columns,
            queryParams:null,
            rownumbers:true,
            remoteFilter:true,
            // onBeforeLoad:function(param,param1){
            //     param.onBeforeLoadParam = '加载以前的参数';
            // },
            onLoadSuccess:function (data) {

            }
        });
        jQueryObj.$right_table.datagrid('enableFilter');

        var opts = jQueryObj.$right_table.datagrid('options');
        var onBeforeLoad = opts.onBeforeLoad;
        opts.onBeforeLoad = function(param1,param2){
            param1 = param1 || {};
            var orderParam = jQueryObj.$right_table.data('clickParam');
            if(orderParam){
                param1.customOrderJsonString = orderParam;
            }
            var result = onBeforeLoad.call(this,param1,param2);
            return result;
        };
    }


    handler.mergeRow = function (config) {
        var rows = config.rows;
        if(!rows || rows.length===0) return;

        var compareValueMethod = config.compareValueMethod;
        var mergeMethod = function(bIndex,rowspanNum){
            $.each(config.fields,function (j,field) {
                config.$table.datagrid('mergeCells',{index:bIndex,field:field,rowspan:rowspanNum});
            })
        };
        var lastValue;
        var beginIndex;
        $.each(rows,function (currentIndex, row) {
            var currentValue = compareValueMethod.call(window,row);
            if(currentIndex===0){//第一行
                beginIndex = currentIndex;
                lastValue = currentValue;
                return true;
            }
            if(lastValue != currentValue){
                if(currentIndex-beginIndex>1){
                    mergeMethod(beginIndex,currentIndex-beginIndex);
                }
                beginIndex = currentIndex;
                lastValue = currentValue;
            }
            //单独处理最后几行需要合并的情况
            if(currentIndex===rows.length-1 && beginIndex!==currentIndex){
                mergeMethod(beginIndex,currentIndex-beginIndex+1);
            }
        })
    }

    var clos = {
        columns:[

            [
                {title:'中国公民',colspan:6,halign:"center"},
            ],
            [
            {field:'name',title:'姓名',rowspan:2,width:80,align:"left",halign:"center",sortable:true},
            {field:'age',title:'年龄',rowspan:2,width:80,align:"left",halign:"center",sortable:true},
            {field:'sfzh',title:'身份证号',rowspan:2,width:240,align:"left",halign:"center"},
            {title:'其他信息',colspan:3,halign:"center"}
           ],
          [
            {field:'hf',title:'婚否',width:120,align:"left",halign:"center"},
            {field:'xl',title:'学历',width:120,align:"left",halign:"center"},
            {field:'work',title:'工作',width:120,align:"left",halign:"center"},
           ]]

    }

    var leftTableData =[
        {name:"卢云",age:43,sex:"男",sfzh:"5105031993020434_01",hf:"否",xl:"高中",work:"搬砖的"},
        {name:"卢云",age:43,sex:"男",sfzh:"5105031993020434_02",hf:"是",xl:"小学",work:"挑粪的"},
        {name:"卢云",age:42,sex:"男",sfzh:"5105031993020434_03",hf:"是",xl:"初中",work:"扛钢管"},
        {name:"卢云1",age:42,sex:"男",sfzh:"5105031993020434_03",hf:"否",xl:"本科",work:"教书的"},
        {name:"顾倩兮",age:25,sex:"女",sfzh:"610523198302043_01",hf:"是",xl:"博士",work:"大学士"},
        {name:"顾倩兮",age:33,sex:"女",sfzh:"610523198302043_02",hf:"否",xl:"本科",work:"教书的"},
        {name:"顾倩兮",age:33,sex:"女",sfzh:"610523198302043_03",hf:"是",xl:"硕士",work:"画师"},
        {name:"伍定远",age:48,sex:"男",sfzh:"710523198302043_01",hf:"是",xl:"博士",work:"教书的"},
        {name:"伍定远",age:41,sex:"男",sfzh:"710523198302043_02",hf:"是",xl:"小学",work:"大都督"},
        {name:"伍定远",age:41,sex:"男",sfzh:"710523198302043_03",hf:"否",xl:"博士",work:"教书的"},
    ]

})(window,jQuery)