---
title: "Worklog Tuần 7"
date: 2024-01-01
weight: 7
chapter: false
pre: " <b> 1.7. </b> "
---

### Mục tiêu tuần 7:
* Nghiên cứu sâu các bài lab kết hợp Lambda, API Gateway và CloudFront.
* Rà soát và xử lý các lỗi phát sinh trong quá trình code nhóm.
* Thiết kế luồng hoạt động (workflow) chi tiết cho dự án đang thực hiện.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | Họp nhóm thống nhất định dạng dữ liệu truyền tải API giữa Frontend và Backend. | 01/06/2026 | 01/06/2026 | [FCAJ Portal](https://cloudjourney.awsstudygroup.com/) |
| 3 | Cấu hình nâng cao cho Lambda: thời gian chờ, kết nối VPC và thiết lập biến môi trường. | 02/06/2026 | 02/06/2026 | [Lambda VPC Access](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html) |
| 4 | Thiết lập API Gateway proxy integration, cấu hình CORS headers và quy tắc xác thực dữ liệu. | 03/06/2026 | 03/06/2026 | [API Gateway CORS Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html) |
| 5 | Vẽ biểu đồ trình tự dự án, mô tả luồng gửi yêu cầu từ client, qua API Gateway đến database. | 04/06/2026 | 04/06/2026 | [AWS Serverless Patterns](https://aws.amazon.com/blogs/compute/tag/serverless-design-patterns/) |
| 6 | Sửa lỗi chính sách chặn CORS và khắc phục các vấn đề phân quyền IAM khi kết nối client và API. | 05/06/2026 | 05/06/2026 | Local Debug Logs |

### Kết quả đạt được tuần 7:
* Cấu hình thành công CORS và tích hợp bảo mật cho API Gateway.
* Giải quyết triệt để các lỗi gọi API từ Frontend lên các endpoint Backend.
* Vẽ hoàn chỉnh các biểu đồ tuần tự mô tả các luồng nghiệp vụ chính của hệ thống.
