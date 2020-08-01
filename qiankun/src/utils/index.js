Date.prototype.format = function() {  
  var s = '';  
  var mouth = (this.getMonth() + 1)>=10?(this.getMonth() + 1):('0'+(this.getMonth() + 1));  
  var day = this.getDate()>=10?this.getDate():('0'+this.getDate());  
  s += this.getFullYear() + '-'; // 获取年份。  
  s += mouth + "-"; // 获取月份。  
  s += day; // 获取日。  
  return (s); // 返回日期。  
};

// 时间转换  yyyy-MM-dd hh:mm:ss -> 02Apr 0800
export const DateFormatdMhm = (dateTime) => {
  const monthDir = {
      '01': 'Jan',
      '02': 'Feb',
      '03': 'Mar',
      '04': 'Apr',
      '05': 'May',
      '06': 'Jun',
      '07': 'Jul',
      '08': 'Aug',
      '09': 'Sept',
      '10': 'Oct',
      '11': 'Nov',
      '12': 'Dec',
  };
  if (!dateTime) {
      return null
  }
  let dateArr = dateTime.split('-');
 
  dateArr[2] = parseInt(dateArr[2]) < 10 ? '0'+parseInt(dateArr[2]) : dateArr[2];
  let date = dateArr[2]+monthDir[dateArr[1]]+dateArr[0];

  return date
}