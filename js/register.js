window.addEventListener('load', function() {

    //get Elements
    //usrname
    let usrname = document.querySelector('.usrname_item');
    let usrname_input = usrname.querySelector('input');
    let usrname_icon = usrname.querySelector('i');
    let usrname_span = usrname.querySelector('span');
    //mail_item
    let mail_item = document.querySelector('.mail_item');
    let mail_input = mail_item.querySelector('input');
    let mail_icon = mail_item.querySelector('i');
    let mail_span = mail_item.querySelector('span');
    //pasword
    let password_item = document.querySelector('.password_item');
    let password_input = password_item.querySelector('input');
    let password_icon = password_item.querySelector('i');
    let password_span = password_item.querySelector('span');
    //password_check
    let password_check_item = document.querySelector('.password_check_item');
    let password_check_input = password_check_item.querySelector('input');
    let password_check_icon = password_check_item.querySelector('i');
    let password_check_span = password_check_item.querySelector('span');


    // RegExp
    //name
    let regName = /^[a-z][0-9a-z]{5,13}$/i;
    //email
    let regMail = /^[0-9a-zA-Z]{4,12}@(gmail|hotmail|qq|163)\.(com|cn)$/;
    //password
    //数字
    const reg1 = /\d+/;
    //字母
    const reg2 = /[a-z]+/i;
    //特殊符号
    const reg3 = /[@#%]/;


    //usrname event
    usrname_input.addEventListener('input', (e) => {
        // console.log(e.target.value);
        if (regName.test(e.target.value)) {
            usrname_icon.innerHTML = '&#xe636;';
            usrname_icon.classList.remove('error');
            usrname_icon.classList.add('success');
            usrname_span.innerHTML = '';
        } else {
            usrname_icon.innerHTML = '&#xe709;';
            usrname_icon.classList.remove('success');
            usrname_icon.classList.add('error');
            usrname_span.innerHTML = ' 6~14个英文字母、数字';
        }
    })


    //mail event
    mail_input.addEventListener('input', (e) => {
        if (regMail.test(e.target.value)) {
            mail_icon.innerHTML = '&#xe636;';
            mail_icon.classList.remove('error');
            mail_icon.classList.add('success');
            mail_span.innerHTML = '';
        } else {
            mail_icon.innerHTML = '&#xe709;';
            mail_icon.classList.remove('success');
            mail_icon.classList.add('error');
            mail_span.innerHTML = ' 仅gmail、hotmail、qqmail';
        }
    })


    let spans = document.querySelector('.safelevel').querySelectorAll('span');
    //password event
    password_input.addEventListener('input', (e) => {
        const text = e.target.value;
        let level = 0
        if (reg1.test(text)) level++;
        if (reg2.test(text)) level++;
        if (reg3.test(text)) level++;

        for (let i = 0; i < 3; i++) {
            spans[i].className = '';
            if (text.length >= 6 & text.length <= 12) {
                password_icon.innerHTML = '';
                password_span.innerHTML = '';

                switch (level) {
                    case 1:
                        spans[0].classList.add('red')
                        break;
                    case 2:
                        spans[1].classList.add('yellow')
                        break;
                    case 3:
                        spans[2].classList.add('green')
                        break;
                }
            } else {
                password_icon.innerHTML = '&#xe709';
                password_icon.classList.add('error');
                password_span.innerHTML = ' 6~12位字母、数字、@#%';
                // spans[0].classList.add('red')
            }
        }
    })


    //password_cheack event
    password_check_input.addEventListener('input', (e) => {
        if (e.target.value === password_input.value) {
            password_check_icon.innerHTML = '&#xe636;';
            password_check_icon.classList.remove('error');
            password_check_icon.classList.add('success');
            password_check_span.innerHTML = '';
        } else {
            password_check_icon.innerHTML = '&#xe709;';
            password_check_icon.classList.remove('success');
            password_check_icon.classList.add('error');
            password_check_span.innerHTML = ' 密码不一致';
        }
    })


    //true:&#xe636;
    //false: &#xe709;
})