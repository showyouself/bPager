/**
 * Created by zengbin on 2018/1/23.
 * usage::
 * 1、初始化必要参数：pager.init(1,10,100);
 * 2、取分页数据list: pager.getAllPageNumberList(1);
 * 3、通过type筛选数据:  pager.getAllPageNumberList(1, 'only_list'); // only_list, with_prev_next
 *
 * 你也可以自定义返回的每个number的type值，例如：
 * bPager.$pagePrev.type = 'prev-li' ; //自定义上一页按钮的class，这样遍历list时，可以直接使用.
 *
 */
bPager = {
    $debug : false,
    $pageIndex : 1, //当前页
    $pageSize : 10, //每页长度
    $pageTotal : 1, //总页数,最后一页

    $pageIndexClass : 'current',

    $pagePrev : {
        number : 1,
        type : 'prev',
    },
    $pageNext : {
        number : 1,
        type : 'next',
    },
    $pageEnd: {
        number : 1,
        type : 'end',
    },
    $pageStart : {
        number : 1,
        type : 'start',
    },

    $pageNumberList : [],
    $pageNumberLimit : 8, //页码展示多少个

    init : function (pageIndex, pageSize, PageTotal, rowTotal) {
        var self = this;
        self.$pageIndex = pageIndex;
        self.$pageSize = pageSize;
        if (PageTotal) {
            self.$pageTotal = PageTotal;
        }else if (rowTotal) {
            self.$pageTotal = Math.ceil(rowTotal/self.$pageSize);
        }else {
            console.error('PageTotal、rowTotal，必须二选一');
            return false;
        }

        self.$pageStart.number = 1;
        self.$pageEnd.number = self.$pageTotal;
        return self;
    },
    getAllPageNumberList : function (pageIndex, type) {
        var self = this;
        var retList = self.getPageNumberList(pageIndex);

        var ret = null;
        if (type == 'only_list') {
            ret = retList;
        }else if (type == 'with_prev_next') {
            retList.unshift(self.$pagePrev);
            retList.push(self.$pageNext);
            ret =  retList;
        }else {
            retList.unshift(self.$pagePrev);
            retList.push(self.$pageNext);
            retList.unshift(self.$pageStart);
            retList.push(self.$pageEnd);
            ret = retList;
        }
        if (self.$debug == true) { console.log(ret); }
        return ret
    },
    getPageNumberList : function (pageIndex) {
        //获取页码，不含:上一页、下一页、第一页、最后一页
        var self = this;
        pageIndex = Math.abs(pageIndex);
        self.$pageIndex = pageIndex > self.$pageTotal ? self.$pageTotal : pageIndex;

        //设置上一页，下一页
        self.$pagePrev.number = (self.$pageIndex - 1 > 1) ? (self.$pageIndex - 1) : self.$pageStart.number;
        self.$pageNext.number = (self.$pageIndex + 1 < self.$pageTotal) ? (self.$pageIndex + 1) : self.$pageEnd.number;

        //总页数大于限制页码
        if (self.$pageTotal > self.$pageNumberLimit) {
            //当前页左边页数
            var left = Math.ceil( (self.$pageNumberLimit/2) - 1);
            var leftNumberDiff = self.$pageIndex - left;

            //当前页右边页数
            var right = Math.floor(self.$pageNumberLimit/2);
            var rightNumberDiff = self.$pageIndex + right;

            if (leftNumberDiff < 1) {
                //左边不足$pageNumberLimit，右边补齐
                rightNumberDiff = rightNumberDiff + Math.abs(leftNumberDiff);
            }else if (rightNumberDiff > self.$pageTotal) {
                //右边不足$pageNumberLimit,左边补齐
                leftNumberDiff = leftNumberDiff - (rightNumberDiff - self.$pageTotal);
            }

            var leftNumber  = leftNumberDiff < 1 ? self.$pageStart.number : leftNumberDiff;
            var rightNumber = rightNumberDiff > self.$pageTotal ? self.$pageTotal : rightNumberDiff;

            self.$pageNumberList = self.pageListByMinAndMax(leftNumber, rightNumber, self.$pageIndex);
            return self.$pageNumberList;
        }

        //总页码小于限制页码
        self.$pageNumberList = self.pageListByMinAndMax(self.$pageStart.number, self.$pageEnd.number, self.$pageIndex);
        return self.$pageNumberList;
    },
    pageListByMinAndMax : function (min, max, current) {
        //循环生成一个页码list
        var self = this;
        var newList = [];
        for(var i = min; i <= max; i++){
            var eachPageNumber = { number : i , type : ''};
            if (current == i) { eachPageNumber.type = self.$pageIndexClass; }
            newList.push(eachPageNumber);
        }
        return newList;
    }
};

