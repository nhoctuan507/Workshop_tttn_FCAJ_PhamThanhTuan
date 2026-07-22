---
title: "Worklog Tuần 11"
date: 2024-01-01
weight: 11
chapter: false
pre: " <b> 1.11. </b> "
---

### Mục tiêu tuần 11:
* Kiểm thử liên thông toàn bộ các luồng tương tác giữa Frontend và Backend.
* Rà soát toàn bộ tài nguyên đã tạo trên đám mây, thu hồi các dịch vụ không cần thiết.
* Cấu hình cảnh báo chi phí trong AWS Budgets và phân tích ngân sách tiêu hao.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | Thực hiện kiểm thử tích hợp toàn diện giữa các trang Frontend và các endpoint API Backend. | 29/06/2026 | 29/06/2026 | Local Test Protocol |
| 3 | Rà soát toàn bộ tài nguyên AWS đang hoạt động; dọn dẹp các máy chủ EC2 thử nghiệm không dùng tới. | 30/06/2026 | 30/06/2026 | AWS Resource Console |
| 4 | Thiết lập các hạn mức chi phí và cấu hình cảnh báo ngân sách tự động trong AWS Budgets. | 01/07/2026 | 01/07/2026 | [AWS Budgets Guide](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html) |
| 5 | Sử dụng AWS Cost Explorer để phân tích biến động chi phí hàng ngày và điều chỉnh kích cỡ tài nguyên. | 02/07/2026 | 02/07/2026 | [AWS Cost Explorer Guide](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html) |
| 6 | Khắc phục các lỗi trong logic xử lý backend, tối ưu hóa câu lệnh database và hoàn thiện giao diện UI. | 03/07/2026 | 03/07/2026 | Project Source Code |

### Kết quả đạt được tuần 11:
* Xác minh luồng dữ liệu chạy ổn định từ khâu đăng nhập cho đến khi đăng tải sản phẩm.
* Dọn dẹp các tài nguyên thử nghiệm dư thừa giúp tối ưu hóa dung lượng tài khoản.
* Thiết lập thành công hạn mức chi phí và cảnh báo gửi email tự động khi vượt ngân sách.
