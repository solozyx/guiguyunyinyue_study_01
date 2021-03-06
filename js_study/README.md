# 1. 面向对象

## 1. 作用域

1. 什么是作用域
   1. 用来规定代码作用的范围及变量查询的范围
2. 作用域的作用
   1. 隔离变量, 防止命名冲突
3. 作用域分类
   1. 全局作用域
   2. 局部作用域(函数)
4. 作用域什么时候产生及销毁
   1. 代码定义的时候产生
   2. 函数执行完销毁的是变量对象而不是作用域
   3. 作用域从代码定义的时候就一直在，除非没有当前代码
5. **作用域链**
   1. 查找变量的时候现在当前作用域的变量对象中查找，如果有就使用，如果没有会继续去上级作用域查找，直到找到全局作用域，如果还没有就报错，报错内容： xxx is not defined, 查找的过程就是沿着作用域链查找
   2. 本质: 是一个数组，数组包含上级所有的变量对象

## 2. 执行上下文

### 1. 执行上下文环境

1. js代码在正式执行之前js引擎会先做一些准备工作

2. 准备工作如下:

   1. 创建执行上下文环境

   2. 创建一个空的对象，该对象用于收集当前作用域的：变量，函数，函数的参数

      1. 找两个关键字: var function

      2. 找到var以后将var后边的声明但是不赋值，var a;

      3. 找到function以后会提前定义该函数

      4. 以上的描述就是  '变量提升' || '预解析'

         

   3. 确认this的指向

   4. 创建当前环境的作用域链

### 2. 执行上下文对象

	1. 上文提到的空的对象就是执行上下文对象
 	2. 也有人称之为变量对象

### 3.  压栈

1. 先进后出
2. 后进先出

## 3. 闭包

1. 闭包的形成条件
   1. 函数嵌套
   2. 内部函数引用外部函数的局部变量
   3. 内部函数被使用
      1. 特例： 如果内部函数没有被使用，外部函数在预解析的时候不会定义该内部函数
2. 什么是闭包
   1. 闭包是抽象的概念
   2. 闭包其实指的就是满足一定的条件下(闭包的形成条件)，会形成一个闭包的容器(对象)
   3. 该对象用于收集内部函数使用的外部函数的变量
   4. 该对象在内部函数调用的时候供内部函数使用
   5. 因为闭包形成的闭合对象保存在内部函数的[[scopes]]中



## 4. 原型

1. 什么是原型对象
   1. 每个函数的prototype指向的是其显示原型对象
   2. 每个实例的__proto__指向的是其隐式原型对象
   3. 实例的隐式原型对象 === 其构造函数的显示原型对象
2. 原型链
   1. 对象查找属性的时候现在自身查找，如果自身没有沿着__proto__这条链查找
   2. 如果有就使用，如果没有就继续向上查找直到找到Object.prototype，如果还没有就返回undefined
3. 原型继承
   1. 子类的原型成为父类的实例
   2. 需要执行子类的构造属性constructor
4. 借用构造函数继承
   1. 不是真正意义上的继承
   2. 只是简化子类构造函数的代码
5. 组合继承
   1. 原型继承 + 借用构造函数继承





















