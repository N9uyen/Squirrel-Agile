document.addEventListener("DOMContentLoaded", function() {
    // Xử lý sự kiện khi form đăng nhập được submit
    document.querySelector(".login-form form").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        // Lấy giá trị từ các input
        var username = this.querySelector('input[name="username"]').value;
        var password = this.querySelector('input[name="password"]').value;

        // Thực hiện kiểm tra thông tin đăng nhập ở đây, ví dụ:
        if (username === "admin" && password === "admin") {
            // Đăng nhập thành công
            alert("Đăng nhập thành công!");
            // Thực hiện các hành động sau khi đăng nhập thành công, ví dụ: chuyển hướng đến trang dashboard
            window.location.href = "dashboard.html";
        } else {
            // Đăng nhập thất bại
            alert("Tên đăng nhập hoặc mật khẩu không chính xác. Vui lòng thử lại!");
        }
    });

    // Xử lý sự kiện khi form đăng ký được submit
    document.querySelector(".signup-form form").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form

        // Lấy giá trị từ các input
        var username = this.querySelector('input[name="username"]').value;
        var password = this.querySelector('input[name="password"]').value;
        var confirmPassword = this.querySelector('input[name="confirm_password"]').value;

        // Thực hiện kiểm tra thông tin đăng ký ở đây, ví dụ:
        if (password !== confirmPassword) {
            // Hiển thị thông báo nếu mật khẩu và xác nhận mật khẩu không khớp
            alert("Mật khẩu và xác nhận mật khẩu không khớp. Vui lòng thử lại!");
        } else {
            // Thực hiện các hành động khi đăng ký thành công, ví dụ: gửi yêu cầu đăng ký đến server
            alert("Đăng ký thành công với tên đăng nhập: " + username);
            // Sau đó bạn có thể chuyển hướng người dùng đến trang đăng nhập hoặc trang khác
            window.location.href = "login.html"; // Chuyển hướng đến trang đăng nhập
        }
    });
});
    