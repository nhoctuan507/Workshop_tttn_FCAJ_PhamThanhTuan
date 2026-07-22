---
title: "Worklog Tuần 12"
date: 2024-01-01
weight: 12
chapter: false
pre: " <b> 1.12. </b> "
---

### Mục tiêu tuần 12:
* Thu thập nhật ký log từ máy chủ và cơ sở dữ liệu để tìm nguyên nhân lỗi.
* Kiểm thử liên thông các API local và kiểm tra định tuyến dữ liệu trên DynamoDB.
* Đóng gói mã nguồn ứng dụng và vẽ hoàn thiện sơ đồ kiến trúc hệ thống.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | Thu thập nhật ký từ CloudWatch logs streams để chẩn đoán các lỗi runtime của ứng dụng. | 06/07/2026 | 06/07/2026 | Amazon CloudWatch Logs |
| 3 | Triển khai nốt các thành phần chức năng còn thiếu và tinh chỉnh giao diện tương thích thiết bị. | 07/07/2026 | 07/07/2026 | Project Frontend Code |
| 4 | Kiểm thử các cổng kết nối API local để đảm bảo tính chính xác của dữ liệu gửi nhận. | 08/07/2026 | 08/07/2026 | Local Postman Tests |
| 5 | Kiểm tra dữ liệu định tuyến trên DynamoDB, các tham số truy vấn và cấu hình chỉ mục. | 09/07/2026 | 09/07/2026 | [DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html) |
| 6 | Hoàn thiện sơ đồ kiến trúc hệ thống cuối cùng, đóng gói toàn bộ mã nguồn và chuẩn bị bài báo cáo. | 10/07/2026 | 10/07/2026 | Presentation Slides |

### Kết quả đạt được tuần 12:
* Tìm ra và sửa các lỗi rò rỉ bộ nhớ hoặc lỗi xử lý ngoại lệ nhờ phân tích log.
* Xác minh độ chính xác của luồng dữ liệu và cấu trúc dữ liệu lưu trên DynamoDB.
* Hoàn thiện sơ đồ kiến trúc hệ thống chuẩn đầu cuối từ client đến cloud.
* Đóng gói mã nguồn hoàn chỉnh và chuẩn bị đầy đủ tài liệu cho buổi báo cáo.
