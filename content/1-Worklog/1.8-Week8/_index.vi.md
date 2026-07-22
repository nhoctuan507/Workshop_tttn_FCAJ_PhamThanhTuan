---
title: "Worklog Tuần 8"
date: 2024-01-01
weight: 8
chapter: false
pre: " <b> 1.8. </b> "
---

### Mục tiêu tuần 8:
* Tìm hiểu và làm lab AWS Amplify kết hợp xác thực người dùng.
* Đóng gói container hóa ứng dụng bằng Docker và build image.
* Triển khai vận hành ứng dụng container trên Amazon ECS Fargate.
* Vẽ lại và tối ưu hóa workflow dự án theo định hướng từ mentors.

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
| 2 | Trình bày luồng hoạt động dự án với mentor trên văn phòng và ghi nhận ý kiến cải tiến kết nối database. | 08/06/2026 | 08/06/2026 | [FCAJ Portal](https://cloudjourney.awsstudygroup.com/) |
| 3 | Sử dụng AWS Amplify CLI để khởi tạo cấu hình dự án và kết nối bộ xác thực người dùng Amazon Cognito. | 09/06/2026 | 09/06/2026 | [AWS Amplify Docs](https://docs.amplify.aws/) |
| 4 | Viết Dockerfile cho các dịch vụ backend, cấu hình Docker Compose và xây dựng container image cục bộ. | 10/06/2026 | 10/06/2026 | [Docker Reference](https://docs.docker.com/) |
| 5 | Tạo kho ECR, đẩy Docker image lên và khởi chạy dịch vụ container trên Amazon ECS Fargate qua Task Definition. | 11/06/2026 | 11/06/2026 | [Amazon ECS Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html) |
| 6 | Cập nhật và tối ưu sơ đồ kiến trúc dự án dựa trên các phương án bảo mật được đề xuất. | 12/06/2026 | 12/06/2026 | Local Diagram Files |

### Kết quả đạt được tuần 8:
* Cấu hình thành công tính năng đăng nhập/xác thực tài khoản qua Cognito bằng Amplify.
* Đóng gói thành công Docker image và lưu trữ an toàn trên kho ECR.
* Triển khai chạy thành công ứng dụng trên ECS Fargate dưới dạng không máy chủ.
* Tối ưu hóa sơ đồ luồng dữ liệu dự án phù hợp với mô hình thiết kế chuẩn chỉnh.
