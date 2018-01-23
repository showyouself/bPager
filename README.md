# bPager
js分页支持

 Created by zengbin on 2018/1/23.
## usage::
* 1、初始化必要参数：pager.init(1,10,100);
* 2、取分页数据list： pager.getAllPageNumberList(1);
* 3、通过type筛选数据：  pager.getAllPageNumberList(1, 'only_list'); // only_list, with_prev_next
## tips::
你也可以自定义返回的每个number的type值，例如：
```
bPager.$pagePrev.type = 'prev-li' ; //自定义上一页按钮的class，这样遍历list时，可以直接使用.
```
