---
title: "Blog 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Kinh Nghiệm Thực Chiến: Giải Bài Toán Đọc Hợp Đồng Tự Động Với Doczy.ai Trên AWS

Chào anh em, chúng mình là nhóm **“Cloud Titans”**. Gần đây, trong quá trình tìm hiểu về các giải pháp bóc tách dữ liệu tài liệu (document parsing), mình có tham khảo một case study cực kỳ ấn tượng về hệ thống **Doczy.ai™** do công ty **AArete** phát triển. 

Anh em làm hệ thống enterprise chắc đều thấm nỗi khổ khi dữ liệu quan trọng bị kẹt trong các tài liệu phi cấu trúc như hợp đồng, thỏa thuận pháp lý hay hóa đơn. Làm tay thì tốn nguồn lực và dễ sai sót. Dùng các hệ thống CLM (Contract Lifecycle Management) cũ thì lại thiếu linh hoạt, chỉ cấu hình được các trường dữ liệu định sẵn mà bỏ qua các chi tiết ngữ cảnh phức tạp.

Nhưng hệ thống Doczy.ai™ đã giải quyết triệt để vấn đề này bằng Generative AI trên AWS. Họ đã nâng độ chính xác từ mức 55% của hệ thống dựa trên luật (rules-based) lên tới **99%** với AI.

### "Mổ Xẻ" Kiến Trúc Dưới Góc Nhìn Thực Tế

Mọi người có thể nhìn vào sơ đồ kiến trúc ở tệp **image_c9db07.png** dưới đây để thấy rõ luồng đi của dữ liệu. Cách họ lắp ghép các service AWS thực sự rất thực dụng:

<img src="/images/image_c9db07.png" alt="Doczy.ai Architecture Diagram" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 20px 0;" />

* **Đầu tiên**, người dùng truy cập qua giao diện Next.js, với phần xác thực (auth) được xử lý gọn gàng bởi **Amazon Cognito**.
* Tài liệu được upload thẳng lên **Amazon S3** để đảm bảo khả năng lưu trữ bền bỉ và mở rộng.
* Ngay sau đó, **AWS Lambda** được kích hoạt để gọi **Amazon Textract**, giúp trích xuất văn bản và siêu dữ liệu (metadata) từ tài liệu.
* Điểm ăn tiền nhất nằm ở thuật toán **"smart chunking"** đã được cấp bằng sáng chế. Thay vì băm văn bản bừa bãi, nó kết hợp tìm kiếm ngữ nghĩa và từ khóa để chia nhỏ văn bản mà vẫn giữ nguyên cấu trúc phân cấp và mối quan hệ logic của tài liệu.
* Sau đó, hệ thống đưa dữ liệu qua cụm **Amazon ECS** và sử dụng AI sinh tạo (**Gen AI với Bedrock**) để xử lý. Quá trình này dùng "dual clustering" để phân tích đồng thời cả ngữ nghĩa (semantic) và cấu trúc (structural) của hợp đồng.
* Dữ liệu có cấu trúc cuối cùng sẽ được đẩy về kho dữ liệu **Snowflake** để phục vụ cho các dashboard phân tích.
* Tất nhiên, trong môi trường production, hệ thống không thể thiếu **Amazon CloudWatch** để giám sát hiệu suất theo thời gian thực. Đồng thời, **AWS Secrets Manager** được dùng để bảo vệ các thông tin nhạy cảm.

### Con Số Thực Tế Đáng Nể

Đọc mấy thông số vận hành của họ mà mình khá choáng. Trong vòng **22 tháng** qua, hệ thống đã xử lý được **2,5 triệu** tài liệu hợp đồng, tương đương khoảng **50 triệu trang**.

Để làm được điều này, hạ tầng đã thực hiện **137 triệu** lời gọi API tới **Amazon Bedrock** và xử lý **442 tỷ token**. Kết quả mang lại là thời gian xử lý thủ công **giảm tới 97%**, giúp khách hàng tiết kiệm được khoảng **330 triệu đô la**.

---

Qua case này, mình thấy việc kết hợp sức mạnh trích xuất của Amazon Textract với khả năng suy luận của LLMs trên Amazon Bedrock thực sự là một "vũ khí" hạng nặng. Anh em nào đang đau đầu với bài toán số hóa văn bản thì chắc chắn nên tham khảo stack công nghệ này nhé!

* **Link bài viết:** [AWS Study Group Facebook Post](https://www.facebook.com/groups/awsstudygroupfcj/permalink/2199556717475955/?rdid=FBBx8y8itzGQduS4#)
* **Link tham khảo:** [Automating Contract Intelligence with Doczy.ai on AWS - AWS Architecture Blog](https://aws.amazon.com/vi/blogs/architecture/automating-contract-intelligence-with-doczy-ai-on-aws/)