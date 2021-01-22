var lis = document.querySelectorAll('li');
var input_tel = document.querySelector('#tel')

if (input_tel.value.length >= 10) {
    var span = lis[0].querySelector('span');
    var i = lis[0].querySelector('i');
    span.innerHTML = '号码输入正确';
    lis[0].i.classNme = 'form li i success_icon'

}
var input_pasw = lis[2].querySelector('#tel')
if (input_pasw.value.length < 3) {
    var span = lis[0].querySelector('span');
    var i = lis[0].querySelector('i');
    span.innerHTML = '号码输入错误';

}