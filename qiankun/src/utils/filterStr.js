const xss = require('xss');//根据白名单过滤 HTML(防止 XSS 攻击)
// xss模块通过白名单来控制允许的标签及相关的标签属性，另外还提供了一系列的接口以便用户扩展，比其他同类模块更为灵活  项目主页： http://jsxss.com

/**
 * 方法说明
 * @method stripscript
 * @for 防止xss和sql注入:JS特殊字符过滤正则
 * @param {str} 参数
 * @return {str} 返回值说明
 */
export function stripscript(s)
{
    // var pattern = new RegExp("[%--`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");        //格式 RegExp("[在中间定义特殊过滤字符]")
    // var rs = "";
    // for (var i = 0; i < s.length; i++) {
    //     rs = rs+s.substr(i, 1).replace(pattern, '');
    // }
    // return rs;
    return xss(s);
}

/**
 * 获取字符串的字节数
 * @author zhangyaguang
 * @date 2020-03-24
 * @param { String } str
 * @returns { Number } //字符串的字节数
 */
export function byteLength( str ) {
    let  bytyNum = 0, len = str.length;  //初始化字节数递加变量并获取字符串参数的字符个数
    if( len ) {  //如果存在字符串，则执行计划
        for(var i = 0; i < len; i ++) {  //遍历字符串，枚举每个字符
            if(this.charCodeAt(i) > 255) {  //字符编码大于255，说明是双字节字符
                bytyNum += 2;  //则累加2个
            }else {
                bytyNum ++;  //否则递加一次
            }
        }
        return bytyNum;  //返回字节数
    }
    else {
        return 0;  //如果参数为空，则返回0个
    }
}
