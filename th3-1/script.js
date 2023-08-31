//Khai báo và khởi tạo biến pwd với phần từ có 'input[type="password"]'.
//Đăng ký lắng nghe sự kiện cho pwd.
//Nếu bắt được sự kiện 'focus', đổi màu nền của phần tử sang màu vàng bằng thuộc tính style.backgroundColor = 'yellow'. Nếu bắt được sự kiện 'blur', gán thuộc tính style.backgroundColor = ''.

const pwd = document.querySelector('input[type="password"]');

pwd.addEventListener('focus', (e) => {
    e.target.style.backgroundColor = 'yellow';
});

pwd.addEventListener('blur', (e) => {
    e.target.style.backgroundColor = '';
});