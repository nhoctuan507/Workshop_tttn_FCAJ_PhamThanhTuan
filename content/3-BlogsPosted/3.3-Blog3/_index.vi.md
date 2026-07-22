---
title: "Blog 3"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.3. </b> "
---
}

# Tự động hóa và mở rộng quy mô di chuyển AWS Storage Gateway sang AL2023 bằng Infrastructure as Code

Hệ điều hành Amazon Linux 2 (AL2) sẽ chính thức kết thúc giai đoạn hỗ trợ tiêu chuẩn vào ngày **30 tháng 6 năm 2026**. Tất cả các thiết bị AWS Storage Gateway hiện tại chạy trên nền tảng AL2 (bao gồm S3 File Gateway, Tape Gateway và Volume Gateway) bắt buộc phải được di chuyển sang Amazon Linux 2023 (AL2023) trước thời hạn này để tiếp tục nhận bản vá bảo mật và cập nhật phần mềm.

Do không hỗ trợ nâng cấp trực tiếp (in-place upgrade), quá trình này yêu cầu triển khai một thiết bị AL2023 mới, sau đó chuyển cấu hình và dữ liệu bộ nhớ đệm (cache) từ thiết bị cũ sang. Khi vận hành ở quy mô doanh nghiệp lớn với hàng chục hay hàng trăm gateway, việc thực hiện thủ công sẽ rất tốn thời gian và dễ xảy ra sai sót. Để giải quyết vấn đề này, AWS đã giới thiệu giải pháp tự động hóa bằng hạ tầng dưới dạng mã (Infrastructure as Code - IaC).

### Kiến trúc giải pháp di chuyển

Dưới đây là sơ đồ quy trình di chuyển tự động sử dụng kết hợp Terraform và Ansible:

<img src="/images/sgw_al2_al3_migration_arch.png" alt="Sơ đồ kiến trúc di chuyển AWS Storage Gateway từ AL2 sang AL2023" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 20px 0;" />

* **Khởi tạo hạ tầng (Terraform)**: Triển khai gateway đích chạy AL2023 (trên EC2 hoặc VMware) một cách nhất quán bằng cách sử dụng các module Terraform AWS Storage Gateway chính thức được cập nhật.
* **Điều phối quy trình (Ansible)**: Sử dụng Ansible Playbook để thực hiện tự động các bước vận hành: dừng gateway cũ, ngắt (detach) ổ đĩa cache, gắn (attach) chúng vào gateway AL2023 mới, gọi API di chuyển (`MigrateGateway`) và kiểm tra trạng thái hoạt động cuối cùng.

### Ưu điểm vượt trội của giải pháp IaC

* **Nhất quán và có thể lặp lại**: Dễ dàng quản lý cấu hình gateway qua hệ thống kiểm soát phiên bản (Git), triển khai đồng loạt trên nhiều tài khoản AWS và Region.
* **Tối thiểu hóa thời gian gián đoạn (Downtime)**: Tự động hóa việc gắn/ngắt ổ đĩa cache và kích hoạt API giúp giảm tối đa thời gian offline của hệ thống lưu trữ.
* **Đảm bảo bảo mật**: Các module Terraform mới tự động áp dụng các tiêu chuẩn bảo mật mặc định cao hơn như bắt buộc sử dụng IMDSv2 cho thực thể EC2.

### Các bước thực hiện cơ bản

1. **Sử dụng Terraform Module chính thức**: Tham khảo các ví dụ di chuyển có sẵn (như `s3-filegateway-migration-ec2`) trong module Terraform `aws-ia/storagegateway/aws`.
2. **Triển khai và chạy Playbook**: Thực thi mã Terraform cùng playbook Ansible để thực hiện chuyển đổi tự động.
3. **Xác thực kết quả**: Kiểm tra tab Details trên AWS Console hoặc sử dụng API `DescribeGatewayInformation` để chắc chắn cảnh báo hết hạn hỗ trợ (deprecation warning) đã biến mất.

---

* **Link bài viết:** [AWS Study Group Facebook Post](https://www.facebook.com/groups/awsstudygroupfcj/permalink/2200302014068092/?rdid=vvCFdHtjh7prr2iC#)
* **Link tham khảo:** [Scale your AWS Storage Gateway AL2023 migration with infrastructure as code - AWS Storage Blog](https://aws.amazon.com/vi/blogs/storage/scale-your-aws-storage-gateway-al2023-migration-with-infrastructure-as-code/)