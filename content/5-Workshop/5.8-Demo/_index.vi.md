---
title : "Video Demo Ứng Dụng"
date : 2026-01-01
weight : 8
chapter : false
pre : " <b> 5.8. </b> "
---

## Video Demo Hoạt Động Ứng Dụng

Trong phần này, bạn có thể xem video demo toàn bộ quá trình hoạt động của ứng dụng **Second-Hand Marketplace** được triển khai trên hạ tầng điện toán đám mây AWS.

Video thể hiện đầy đủ các luồng nghiệp vụ của người dùng, bao gồm:
- Truy cập ứng dụng an toàn qua HTTPS bằng tên miền riêng.
- Đăng ký tài khoản mới và đăng nhập hệ thống.
- Đăng bán sản phẩm mới và tải lên hình ảnh sản phẩm (được lưu trữ trên Amazon S3).
- Tìm kiếm sản phẩm và lọc sản phẩm theo danh mục.
- Thêm sản phẩm vào giỏ hàng, thực hiện thanh toán và quản lý đơn hàng.

---

### Video Demo

<div style="display: flex; justify-content: center; margin: 20px 0;">
  <video width="100%" max-width="800px" controls style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); outline: none;">
    <source src="/images/5-Workshop/5.8-Demo/demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

---

### Các Điểm Nhấn Kỹ Thuật Được Minh Họa

1. **Truy cập Bảo Mật**: Biểu tượng ổ khóa màu xanh trên thanh địa chỉ Chrome chứng minh kết nối được mã hóa bằng chứng chỉ SSL/TLS từ **AWS Certificate Manager (ACM)** và được định tuyến thông qua **Amazon Route 53**.
2. **Tính Sẵn Sàng Cao**: Các yêu cầu từ người dùng được phân phối thông qua **Application Load Balancer** tới các container ứng dụng chạy trên **Amazon ECS Fargate**.
3. **Lưu Trữ Cloud-Native**: Tất cả các hình ảnh sản phẩm tải lên trong quá trình demo được lưu trữ trực tiếp trên **Amazon S3** và phân phối tới người dùng một cách tối ưu.
4. **Cơ Sở Dữ Liệu Đám Mây**: Các thao tác ghi nhận dữ liệu (thêm tài khoản, đăng sản phẩm, tạo đơn hàng) được xử lý thời gian thực bằng dịch vụ **MongoDB Atlas**.
