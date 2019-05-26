layui.use('layer', function () { //独立版的layer无需执行这一句
    var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
    var active = {
        notice: function () {
            //示范一个公告层
            layer.open({
                type: 1
                , offset: ['20%', '55%']
                , scrollbar: false   //是否显示滚动条
                , title: false //不显示标题栏
                , closeBtn: false
                , area: ['364px', '600px']
                , shade: 0.5    //遮罩
                , id: 'LAY_layuipro' //设定一个id，防止重复弹出
                // ,btn: ['使用模板','关闭模板']
                , a: ['其他注册方式']
                , btnAlign: 'c'
                , shadeClose: 'true'   //是否点击遮罩关闭
                , moveType: 1 //拖拽模式，0或者1
                , content: $('#Zixunk')
                , success: function (layero) {
                    var btn = layero.find('.layui-layer-btn');
                    btn.find('.layui-layer-btn0').attr({
                        href: ''
                        , target: '_blank'
                    });
                }
            });
            layer.style(index, {
                width: '1000px',
                top: '10px'
            });
        }
    };
    $('#Zixun .layui-btn').on('click', function () {
        var othis = $(this), method = othis.data('method');
        active[method] ? active[method].call(this, othis) : '';
    });
});