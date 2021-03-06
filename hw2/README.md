# Web第二次作业



## 环境配置

首先确保已安装 Node.js 及 npm（>6）。解压文件夹之后，在文件夹内打开终端，运行 `npm install`安装相关依赖。


### 项目运行
在项目文件夹内打开终端，运行`npm run serve`启动本地服务器。启动之后会在终端看到如下输出：

![1556418107140](C:\Users\98742\AppData\Roaming\Typora\typora-user-images\1556418107140.png)

在浏览器中输入`localhost:8080`即可看到项目首页。

### 项目说明

* 基本功能
  * 标题：简介美观，大气
  * 电影列表：动态解析json文件生成，每页10个电影，布局合理。当电影海报无法加载出时，会用系统默认图片进行替换。
  * 分页功能：每页下方有页面跳转按钮，点击即可跳转至相应页面
* 附加功能：
  * 电影详情页：
    * 在每个电影的标题上进行点击，即可进入每个电影的详情页面，包含了电影的海报，上映时间，内容简介等。
    * 当电影海报无法加载出时，会用系统默认图片进行替换。
    * 在电影详情页点击浏览器的 **返回** 按钮，即可返回之前的电影列表页。
  * 搜索功能：
    * 在电影列表页中，在标题下方的输入框中输入想搜索的电影的全名，点击 **搜索** 按钮，即可搜索相应电影。
    * 若搜索成功，则会跳转到相应电影的详情页，点击点击浏览器的 **返回** 按钮，即可返回之前的电影列表页。
    * 若搜索失败，页面则会刷新显示 “抱歉，未找到您搜索的电影”。点击下方 **返回** 按钮，即可返回之前的电影列表页。

