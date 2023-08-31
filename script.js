//Khai báo và khởi tạo biến textBox với phần từ có id = 'message'.
let textBox = document.getElementById('message');

//Đăng ký lắng nghe sự kiện cho textBox.
textBox.addEventListener('keydown', (event) => {
    //Viết mã hiển thị ra màn hình điều khiển  và mã phímphím được nhấn.
    console.log(`key=${event.key},code=${event.code}`); 
});