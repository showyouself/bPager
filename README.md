# bPager
原生js分页支持, 不依赖jq等库
 Created by zengbin on 2018/1/23.
## 问题::
网上搜索分页js插件，总是会遇到的一个问题
* 样式对不上，例如：我们样式用的是div，而插件提供的却是li， 又或者class不对
* 其实我们需要的只是简单的分页json，然后根据场景进行遍历生产分页link就可以了
## usage::
* 初始化必要参数：pager.init(10);
* 取分页数据list： pager.getAllPageNumberList(1);
* 通过type筛选数据：  pager.getAllPageNumberList(1, 'only_list'); // only_list, with_prev_next
### 函数bPage.init::
init(pageTotal, rowTotal, pageSize); //pageTotal 和 (rowTotal&pageSize) 必须二选一
* pageTotal[可选] 总页数
* rowTotal[可选] 总多少行 
* pageSize[可选] 每页长度

### 函数bPage.getAllPageNumberList::
pager.getAllPageNumberList(pageIndex, type);
* pageIndex[必须] 当前页码 
* type[可选] 返回list过滤(only_list ： 只有页码, with_prev_next ：包含上一页下一页)

### 属性bPage.$pageNumberLimit::
页码list上线多少个

## tips::
你也可以自定义返回的每个number的type值，例如：
```
bPager.$pagePrev.type = 'prev-li' ; //自定义上一页按钮的class，这样遍历list时，可以直接使用.
bPager.init(100).getAllPageNumberList(2); //可以连贯起来用
```
