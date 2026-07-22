---
title: "Blog 2"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.2. </b> "
---

# Tự động hóa số hóa hồ sơ y tế với Amazon Bedrock Data Automation & AWS HealthLake

Bài viết giới thiệu cách kết hợp sức mạnh của Generative AI (thông qua **Amazon Bedrock Data Automation - ABDA**) để trích xuất dữ liệu từ các tài liệu y tế không cấu trúc (đơn thuốc, hồ sơ bệnh án quét/chụp, file PDF...) rồi chuẩn hóa và lưu trữ đồng bộ vào **AWS HealthLake** dưới dạng chuẩn dữ liệu y tế quốc tế (**FHIR**).

### Sơ đồ kiến trúc giải pháp

Dưới đây là luồng xử lý tự động hóa số hóa hồ sơ y tế:

<img src="/images/blog2_architecture.png" alt="AWS Medical Record Digitization Architecture Diagram" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 20px 0;" />

1. **Nhân viên y tế** upload file PDF/ảnh scan hồ sơ lên **Amazon S3**.
2. **S3 Event Notification** kích hoạt **AWS Lambda** để khởi tạo tiến trình xử lý.
3. Hàm Lambda tạo job xử lý trên **Amazon Bedrock Data Automation (ABDA)** dựa trên các cấu trúc template (**BDA Blueprints**).
4. Kết quả trích xuất được lưu vào một bucket S3 trung gian dưới dạng dữ liệu có cấu trúc.
5. Sự kiện lưu file trên S3 tiếp tục kích hoạt một hàm Lambda khác để chuẩn hóa dữ liệu thành chuẩn **FHIR**.
6. Dữ liệu chuẩn FHIR được import vào **AWS HealthLake** và sẵn sàng cung cấp qua các cổng FHIR API cho ứng dụng người dùng cuối.

### Ưu điểm

* **Giải quyết bài toán cực khó của ngành Y tế:** Hồ sơ y tế viết tay hoặc scan cực kỳ lộn xộn. Việc dùng Bedrock Data Automation giúp trích xuất dữ liệu có độ chính xác cao hơn hẳn so với các phương pháp OCR truyền thống nhờ hiểu được ngữ cảnh y khoa.
* **Chuẩn hóa dữ liệu tự động:** Tự động chuyển đổi dữ liệu thô thành chuẩn **FHIR (Fast Healthcare Interoperability Resources)**. Đây là điểm mấu chốt để các hệ thống bệnh viện khác nhau có thể dễ dàng đồng bộ và liên thông dữ liệu.
* **Kiến trúc hoàn toàn Serverless:** Kết hợp S3, EventBridge, Lambda, Bedrock và HealthLake giúp hệ thống tự động scale và tối ưu chi phí vận hành (dùng bao nhiêu trả bấy nhiêu).

### Hạn chế & Thách thức

* **Bài toán bảo mật dữ liệu (HIPAA/Compliance):** Ngành y tế cực kỳ nhạy cảm về dữ liệu danh tính bệnh nhân (PII/PHI). Dù AWS cam kết bảo mật cao, việc đưa dữ liệu y tế của bệnh nhân lên Cloud quốc tế vẫn vướng nhiều rào cản pháp lý tại Việt Nam.
* **Chi phí của GenAI:** Gọi API Bedrock liên tục cho một lượng hồ sơ khổng lồ (hàng triệu hồ sơ bệnh án cũ) có thể tạo ra một hóa đơn "khủng" nếu không có chiến lược tối ưu và bộ lọc dữ liệu từ đầu.
* **Độ trễ (Latency):** Việc xử lý qua LLM (Large Language Models) để trích xuất cấu trúc sẽ chậm hơn so với việc đọc database thông thường. Hệ thống này phù hợp để xử lý bất đồng bộ (Async/Batch processing) hơn là Real-time.

### Kết luận

* **GenAI không chỉ để Chat:** Ứng dụng thực tế nhất của GenAI ở thời điểm hiện tại chính là **Data Automation** – biến dữ liệu "rác", không cấu trúc thành dữ liệu sạch có cấu trúc.
* **Thiết kế kiến trúc dạng Event-Driven:** Việc dùng EventBridge/S3 Events để kích hoạt chuỗi xử lý giúp hệ thống hoạt động mượt mà, không bị nghẽn (decoupled architecture).

---

* **Link bài viết:** [AWS Study Group Facebook Post](https://www.facebook.com/groups/awsstudygroupfcj/permalink/2197242824374011/?rdid=J73RSVJ6OJIF5f1h#)
* **Link tham khảo:** [Automate medical record digitization with Amazon Bedrock Data Automation and AWS HealthLake - AWS Architecture Blog](https://aws.amazon.com/vi/blogs/architecture/automate-medical-record-digitization-with-amazon-bedrock-data-automation-and-aws-healthlake/)