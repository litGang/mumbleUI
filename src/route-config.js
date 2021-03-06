export function configRouter(router){
    router.map({
        '/home':{
            title: 'mumble',     //标题
            component: require('./views/home')
        },
        '/pc/table':{
            title: 'PC-table组件',     //标题
            component: require('./views/pc/table')
        },
        '/pc/modal':{
            title: 'PC-modal组件',     //标题
            component: require('./views/pc/modal')
        },
        '/pc/toast':{
            title: 'toast组件',     //标题
            component: require('./views/pc/toast')
        },
        '/pc/message':{
            title: 'message组件',     //标题
            component: require('./views/pc/message')
        },
        '/pc/tree':{
            title: 'tree组件',     //标题
            component: require('./views/pc/tree')
        },
        '/pc/datePicker':{
            title: 'datePicker组件',     //标题
            component: require('./views/pc/datePicker')
        },
        '/pc/loading':{
            title: 'loading组件',     //标题
            component: require('./views/pc/loading')
        },
        '/pc/switch':{
            title: 'switch组件',     //标题
            component: require('./views/pc/switch')
        },
        '/pc/upload':{
            title: 'switch组件',     //标题
            component: require('./views/pc/upload')
        },
        '/pc/zoom':{
            title: 'zoom组件',     //标题
            component: require('./views/pc/zoom')
        },
        '/pc/banner':{
            title: 'banner组件',     //标题
            component: require('./views/pc/banner')
        },
        '/pc/step':{
            title: 'step组件',     //标题
            component: require('./views/pc/step')
        },
        '/pc/tooltip':{
            title: 'tooltip组件',     //标题
            component: require('./views/pc/tooltip')
        },
        '/pc/tab':{
            title: 'tooltip组件',     //标题
            component: require('./views/pc/tab')
        },




        //// not found handler
        //'*': {
        //    component: require('./view/not-found.vue')
        //},
    })


    router.beforeEach(function (transition) {
        //transition.to一个代表将要切换到的路径的路由对象。
        //transition.from一个代表当前路径的路由对象。
        //transition.next()调用此函数处理切换过程的下一步。
        //transition.abort([reason])调用此函数来终止或者拒绝此次切换。
        //transition.redirect(path)取消当前切换并重定向到另一个路由。
        window.scrollTo(0, 0);
        //设置标题
        if (transition.to.title) {
            document.title = transition.to.title;
        }

        transition.next();

    });

    router.afterEach(function (transition) {
        console.log('成功浏览到: ' + transition.to.path)
    });

    router.redirect({
        '*': '/home'
    })
}

