document.addEventListener("DOMContentLoaded", function() {
    // Lắng nghe sự kiện click nút "Đăng nhập"
    document.querySelector(".login-form form").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form
        
        // Lấy giá trị từ input tên đăng nhập và mật khẩu
        var username = this.querySelector('input[name="username"]').value;
        var password = this.querySelector('input[name="password"]').value;
        
        // Kiểm tra điều kiện đăng nhập
        if (username === "admin" && password === "admin123") {
            alert("Đăng nhập thành công!");
            // Chuyển hướng đến trang chính sau khi đăng nhập thành công
            window.location.href = "homepage.html";
        } else {
            alert("Tên đăng nhập hoặc mật khẩu không đúng!");
        }
    });

    // Lắng nghe sự kiện click nút "Đăng ký"
    document.querySelector(".signup-form form").addEventListener("submit", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của form
        
        // Lấy giá trị từ input tên đăng nhập, mật khẩu và xác nhận mật khẩu
        var username = this.querySelector('input[name="username"]').value;
        var password = this.querySelector('input[name="password"]').value;
        var confirmPassword = this.querySelector('input[name="confirm-password"]').value;

        // Kiểm tra điều kiện đăng ký
        if (password !== confirmPassword) {
            alert("Mật khẩu xác nhận không khớp!");
        } else {
            // Gửi thông tin đăng ký đến máy chủ hoặc xử lý đăng ký ở đây
            alert("Đăng ký thành công!");
            // Reset form sau khi đăng ký thành công
            this.reset();
        }
    });

    // Lắng nghe sự kiện click link "Đăng nhập" trong form đăng ký
    document.querySelector(".signup-link a").addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của link
        
        // Hiển thị form đăng nhập
        document.querySelector(".login-form").style.display = "block";
        // Ẩn form đăng ký
        document.querySelector(".signup-form").style.display = "none";
    });

    // Lắng nghe sự kiện click link "Đăng ký" trong form đăng nhập
    document.querySelector(".login-form a").addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của link
        
        // Hiển thị form đăng ký
        document.querySelector(".signup-form").style.display = "block";
        // Ẩn form đăng nhập
        document.querySelector(".login-form").style.display = "none";
    });
});
