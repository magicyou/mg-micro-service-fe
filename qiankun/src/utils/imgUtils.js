/**
 * 判断图片连接是否能够有效的加载出图片资源来
 * @author zhangyaguang
 * @date 2020-05-27
 * @param { String} pathImg
 * @returns {Boolean}
 */
export function validateImage(pathImg) {
    var ImgObj = new Image();
    ImgObj.src = pathImg;
    if(ImgObj.fileSize > 0 || (ImgObj.width > 0 && ImgObj.height > 0)) {
        return true;
    }
    else {
        return false;
    }
}
