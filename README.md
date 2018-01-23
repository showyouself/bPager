# bPager
js分页支持 
 Created by zengbin on 2018/1/23.
## 问题::
网上搜索分页js插件，总是会遇到的一个问题
* 样式对不上，例如：我们样式用的是div，而插件提供的却是li， 又或者class不对
* 其实我们需要的只是简单的分页json，然后根据场景进行遍历生产分页link就可以了
## 依赖::
```
<script type="text/javascript" src="jquery-1.11.1.min.js"></script>
```
## usage::
* 1、初始化必要参数：pager.init(1,10,100);
* 2、取分页数据list： pager.getAllPageNumberList(1);
* 3、通过type筛选数据：  pager.getAllPageNumberList(1, 'only_list'); // only_list, with_prev_next
## tips::
你也可以自定义返回的每个number的type值，例如：
```
bPager.$pagePrev.type = 'prev-li' ; //自定义上一页按钮的class，这样遍历list时，可以直接使用.
```
