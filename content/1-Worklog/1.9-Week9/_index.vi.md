---
title: "Worklog Tuần 9"
date: 2024-01-01
weight: 9
chapter: false
pre: " <b> 1.9. </b> "
---

### Mục tiêu tuần 9:
* Thực hành thiết lập giám sát bằng Amazon CloudWatch (ghi log, cảnh báo).
* Xây dựng quy trình tự động hóa CI/CD bằng CodePipeline và CodeBuild.
* Kiểm thử liên thông toàn diện và sửa các lỗi phát sinh trong hệ thống.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | Tạo nhóm nhật ký CloudWatch Log, định nghĩa các chỉ số đo lường và thiết kế dashboard giám sát. | 15/06/2026 | 15/06/2026 | [Amazon CloudWatch Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html) |
| 3 | Viết cấu hình buildspec.yml và thiết lập dịch vụ AWS CodeBuild để biên dịch ứng dụng. | 16/06/2026 | 16/06/2026 | [AWS CodeBuild Guide](https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html) |
| 4 | Xây dựng quy trình CodePipeline liên kết kho mã nguồn GitHub với Amazon ECS để tự động hóa triển khai. | 17/06/2026 | 17/06/2026 | [CodePipeline Guide](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html) |
| 5 | Tiến hành kiểm thử giao diện website, sửa lỗi căn lề UI và liên kết điều hướng. | 18/06/2026 | 18/06/2026 | Local Test Protocols |
| 6 | Thực hiện kiểm thử tải, tối ưu hóa các chỉ mục truy vấn database để cải thiện thời gian phản hồi API. | 19/06/2026 | 19/06/2026 | [RDS Query Tuning](https://aws.amazon.com/blogs/database/optimizing-queries-in-amazon-rds/) |

### Kết quả đạt được tuần 9:
* Thiết lập thành công bảng theo dõi dashboard và cảnh báo tự động trên CloudWatch.
* Xây dựng hoàn chỉnh đường ống CI/CD giúp tự động cập nhật web mỗi khi đẩy code mới.
* Khắc phục các lỗi kết nối dữ liệu và lỗi luồng nghiệp vụ giữa client - server.
