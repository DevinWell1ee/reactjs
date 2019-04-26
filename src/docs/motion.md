https://github.com/chenglou/react-motion

指定一个初始style(defaultStyle)，然后赋值一个目标style(style)，中间每帧都会由react-motion计算出对应的style，用户只管使用生成的style(interpolatingStyle)，不用关心物理效果的实现，动画中断的处理，一切事情都交给react-motion

spring
接受两个参数，val和config

val: 终点值，即你希望达到的最后状态的数值，number类型
config: 用于生成物理效果的配置，stiffness和damping，