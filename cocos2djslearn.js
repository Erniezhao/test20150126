cocos2d-js

/*
创建一个新项目

创建一个同时包含Cocos2d-x JSB和Cocos2d-html5的项目:
cocos new projectName -l js

创建一个仅支持Cocos2d-html5的项目:
cocos new projectName -l js --no-native

创建项目到指定目录:
cocos new projectName -l js -d ./Projects

运行项目
使用浏览器运行web版项目:
cd directory/to/project
cocos run -p web

*/

//场景树 scene gragh：层级控制zIndex

//创建一个新场景
var scene = new cc.Scene();

//添加一个zIndex为-2的子节点，在场景树中，它位于scene的左边，因为他的zIndex为负值
scene.addChild(background_layer,-2);

//添加另一个子节点，没有指定zIndex的情况下，zIndex默认值为0
scene.addChild(background_layer);

//添加一个zIndex为1 的子节点，在场景树中，它位于scene的右边，因为其zIndex大于0
scene.addChild(button_layer,1);


//导演 director
/*
任务职责：1底层环境设置，2执行主循环
1.1设置显示游戏的视图
1.2显示游戏运行帧率
1.3初始化计时器，动作管理器和事件管理器
1.4初始化贴图缓存和渲染器
1.5屏幕尺寸的获取
1.6导演对象的其他设置

2.1计算从上一帧开始到现在的时间，用于提供调试信息
2.2执行定时器中被计划的任务
2.3通过事件管理器通知cc.Director.EVENT_AFTER_UPDATE事件
2.4清空游戏屏幕
2.5如果需要进入下一个场景则进行场景切换
2.6遍历当前场景中的节点并更新节点的空间转换矩阵以及其他必要信息，然后发送绘制指令给渲染器
2.7通过事件管理器通知cc.Director.EVENT_AFTER_VISIT事件
2.8渲染器按顺序执行所有渲染指令来绘制整个场景到屏幕上
2.9通过事件管理器通知cc.Director.EVENT_AFTER_DRAW事件

API 1.场景管理 2 场景信息等
1.运行目标场景 cc.director.runScene(scene);
2.获取当前正在运行的场景 var scene = cc.director.getRunningScene();
3.压入场景 var scene = cc.director.pushScene(scene);
4.推出场景 cc.director.popScene();
5.回到root场景  cc.director.popToRootScene();
6.场景切换特效
*/

//节点 node
/*

*/