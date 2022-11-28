var ans;
ans = 10 + 15.6;

document.write(ans);
document.write('<br>');

var HW;
HW = 'Hello' + ' world.'
document.write(HW);
document.write('<br>');

var Name = 'Taro'
document.write(Name);
document.write('<br>');

document.write('Hello is typeof ');
document.write(typeof('Hello'));
document.write('<br>');
document.write("<br>");

document.write("Quadruped operation <br>");
document.write("3+7 = ",3+7);
document.write('<br>');
document.write("3*7 = ",3*7);
document.write('<br>');
document.write("3/7 = ",3/7);
document.write('<br>');
document.write("3%7 = ",3%7);
document.write('<br>');
document.write("3**7 = ",3**7);
document.write('<br>');
document.write("<br>");

document.write(3,'<br>');
document.write(+3,'<br>');
document.write(+true,'<br>');
document.write(+false,'<br>');
document.write(+'3','<br>');
document.write("+'3' is typeof ", typeof(+'3'),'<br>');
document.write("+'Hello' is typeof ", typeof(+'Hello'),'<br>');
document.write(+'Hello','<br>');
document.write("NaN is typeof ", typeof(NaN),'<br>');
document.write("NaN == NaN is ",NaN == NaN,"<br>");
document.write("isNaN(NaN) is ",isNaN(NaN),"<br>");
document.write("<br>");

document.write(1,"<br>");
document.write(-1,"<br>");
document.write(-(-1),"<br>");
document.write(-true,"<br>");
document.write(-false,"(-0)","<br>");
document.write(-'3',"<br>");
document.write("-'3' is typeof ",typeof(-'3'),"<br>");
document.write(-"Hello", " is -'Hello'","<br>");
document.write("<br>");

let count = 1;
document.write(count++,"<br>");
document.write(count++,"<br>");
document.write(count++,"<br>");
document.write(++count,"<br>");
document.write("<br>");

count = 10;
document.write(count--," count--","<br>");
document.write(count," count","<br>");
document.write(--count," --count","<br>");
document.write(count--," count--","<br>");
document.write(count," count","<br>");
document.write("<br>")

document.write('Hello' + ' world.<br>');
document.write('1' + '2',"<br>");
document.write('1' + 2,"<br>");
document.write(1 + '2',"<br>");
document.write(1 + 2,"<br>");
document.write(1 + true,"<br>");
document.write(1 + false,"<br>");
document.write(true + false,"<br>");
document.write(1 + null,"<br>");
document.write(1 + undefined,"<br>");
document.write("<br>");


document.write(x=3,"<br>");
document.write(x+=7,"<br>");
document.write(x-=3,"<br>");
document.write(x*=7,"<br>");
document.write(x/=7,"<br>");
document.write(x%3,"<br>");
document.write(y=x=3,"<br>");
document.write(y,"<br>");
document.write(x,"<br>");
document.write(str = 'Hello',"<br>");
document.write(str += ' world.',"<br>");
document.write([x1,y1] = [3,7],"<br>");
document.write([x1],"<br>");
document.write([y1],"<br>");
document.write(arr = [1,2],"<br>");
document.write([x1,y1] = arr,"<br>");
document.write(x1 = arr[1],"<br>");
document.write(y1 = arr[0],"<br>");
document.write("<br>");

document.write(3 == 3,"<br>");
document.write('str' == 'str',"<br>");
document.write(3 == 7,"<br>");
document.write('str' == 'Str',"<br>");
document.write(3 == '3',"<br>");
document.write(3 == '03',"<br>");
document.write(0 == '',"<br>");
document.write('' == 0,"<br>");
document.write('' == '0',"<br>");
document.write(0 == false,"<br>");
document.write(null == undefined,"<br>");
document.write(0 == null,"<br>");

objX = {}, objY = {};
document.write(objX == objY,'<br>');
document.write("<br>");

document.write(3 != '3','<br>');
document.write(3 != '03','<br>');
document.write(1 != '','<br>');
document.write('<br>');
document.write(3 == '3','<br>');
document.write(3 === '3','<br>');
document.write(0 === '','<br>');
document.write(NaN === NaN,'<br>');
document.write(isNaN(NaN),'<br>');
document.write('<br>');
document.write(3 !== '3','<br>');
document.write(3 !== 3,'<br>');
document.write('<br>');

document.write(7>3,"<br>");
document.write(7<3,"<br>");
document.write(3<=3,"<br>");
document.write("<br>");

document.write(true || true,"<br>");
document.write(true || false,"<br>");
document.write(false || true,"<br>");
document.write(false || false,"<br>");
document.write(false || "Hello","<br>");
document.write(false || 7,"<br>");
document.write(true || 7,"<br>");
document.write(true || "Hello","<br>");
document.write(0 || true,"<br>");
document.write(0 || false,"<br>");
document.write("Hello" || true,"<br>");
document.write("<br>");
document.write(true && true,"<br>");
document.write(true && false,"<br>");
document.write(false && true,"<br>");
document.write(false && false,"<br>");
document.write(true && 7,"<br>");
document.write(true && "Hello","<br>");
document.write(false && 7,"<br>");
document.write(false && "Hello","<br>");
document.write("Hello" && "world","<br>");
document.write("<br>");

document.write(0,"<br>");
document.write(!0,"<br>");
document.write(!(false),"<br>");
document.write(!(true),"<br>");
document.write("<br>");

var x = 2;
let result = x % 2 ? "ki":"ku"
document.write(result,"<br>");
document.write("<br>");

document.write(10 * 7 + 3, "<br>");
document.write(10 * (7 + 3), "<br>");
document.write(10 * (7 + 3), "<br>");
document.write("<br>");

var x= 1, y = 2, z =3;
var x= 1, y = 2, z =x + y;
document.write(z, "<br>");
