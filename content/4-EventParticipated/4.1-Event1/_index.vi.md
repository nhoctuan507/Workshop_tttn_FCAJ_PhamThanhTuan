---
title: "Event 1"
date: 2026-05-09
weight: 1
chapter: false
pre: " <b> 4.1. </b> "
---

}

# Bài thu hoạch: "FCAJ Community Day"

### Mục Đích Của Sự Kiện

*   **Mục tiêu của chương trình:** Tạo cơ hội và môi trường an toàn để các bạn trẻ mạnh dạn lên chia sẻ kiến thức, rèn luyện thái độ tự tin cũng như kỹ năng thuyết trình trước đám đông.
*   **Nội dung chính muốn truyền tải:** Bí quyết "hack" não để nghiện học tập; Kỹ năng Prompt Engineering hiệu quả với AI; Lời khuyên định hướng sự nghiệp, tầm quan trọng của nền tảng (foundation) trong thời đại AI; Giới thiệu phương pháp phát triển phần mềm bằng AI (BMX).
*   **Giá trị dành cho người tham dự:** Nhận được các phương pháp tư duy và công cụ thực tiễn giúp cải thiện năng suất học tập/công việc; hiểu rõ góc nhìn của nhà tuyển dụng và cách thích nghi với sự thay đổi của công nghệ thay vì sợ hãi AI.

### Danh Sách Diễn Giả

*   **Diễn giả 1 - Huỳnh Hoàng Long:** Trình bày chủ đề "Hacking Your Brain" về cách tạo động lực học tập.
*   **Diễn giả 2 - Nguyễn Tuấn Thịnh:** Trình bày chủ đề về "Ultimate Prompt Engineering".
*   **Diễn giả 3 - anh Khang:** Chức vụ: Solution Architect. Đơn vị công tác: Cloud Kinetics.
*   **Diễn giả 4 - Thảo:** Chức vụ: Software Development Developer. Đơn vị công tác: Ngân hàng Quốc tế Việt Nam (VIB).

### Nội Dung Nổi Bật

#### Tổng quan vấn đề
*   Sinh viên thường thiếu động lực và lười học do não chưa biết cách quản lý dopamine hợp lý như khi chơi game hay dùng mạng xã hội.
*   Trong công nghệ, việc dùng prompt chung chung khiến AI sinh ra lỗi (hallucination); đồng thời người trẻ hoang mang về việc AI có thay thế công việc của junior hay không.
*   Việc lạm dụng AI để viết code trực tiếp mà thiếu thiết kế sẽ tạo ra "code rác", chắp vá và khó kiểm soát.

#### Giải pháp được giới thiệu
*   Biến việc học thành hệ thống phần thưởng ngẫu nhiên để kích thích dopamine, và thiết lập các "chuỗi" (streak) điểm danh để tạo nỗi sợ mất chuỗi.
*   Sử dụng cấu trúc 7 thành phần khi prompt (Role, Context, Format, Constraint...).
*   Tập trung vào kiến thức nền tảng (Foundation) và không "outsource" tư duy cho AI.
*   Áp dụng phương pháp BMX chia nhỏ dự án thành các tài liệu chi tiết (VOD, Architect, Epic/Story) để agent AI lập trình chính xác hơn.

#### Công nghệ / Dịch vụ / Công cụ
*   Các dịch vụ AWS (CloudFront, S3, Cognito, API Gateway, Lambda, Bedrock, DynamoDB, CloudWatch).
*   Các LLM như Gemini, Claude; ReactJS.
*   Công cụ BMX (Through method for AI development).

#### Demo hoặc Case Study
*   Demo xây dựng kiến trúc Serverless trên AWS phục vụ ứng dụng AI.
*   Demo công cụ mở rộng (Extension) "Prompt Optimizer" tích hợp trên trình duyệt.
*   Demo quy trình tạo tài liệu dự án, phân rã task cho AI agent bằng phương pháp BMX.

#### Các điểm đáng chú ý khác
*   Quy tắc 2 phút: Việc gì làm được trong 2 phút hãy làm ngay.
*   AI chỉ đóng vai trò "Amplify" (khuếch đại) - nó làm người làm tốt trở nên năng suất hơn và làm lộ rõ những người làm tệ.
*   Phương pháp BMX giúp thu hẹp "window context" cho AI, giảm thiểu tình trạng AI bị quên ngữ cảnh hoặc ảo giác.

### Những Gì Học Được

#### Tư duy và phương pháp
*   Tư duy chia nhỏ vấn đề (như việc chia nhỏ mục tiêu chạy bộ 5km hoặc học từng dịch vụ AWS một).
*   Tư duy luôn chất vấn bản thân bằng câu hỏi "Tại sao" (Why).
*   Tư duy dài hạn trong việc xây dựng sự nghiệp.

#### Kiến thức kỹ thuật
*   Các kỹ thuật prompt nâng cao như Chain of thought (suy nghĩ từng bước) và Tree of thought.
*   Cách tính phí token khi dùng LLM (ví dụ prompt tiếng Việt tốn token gấp đôi).
*   Luồng phát triển phần mềm bài bản bao gồm Planning, Architect, Epic/Story, Code, và Review.

#### Best practices
*   Luôn cung cấp đủ ngữ cảnh và dùng ngôn ngữ rõ ràng, phân định các phần bằng dấu hiệu ngắt câu khi viết prompt.
*   Khi làm bài test xin việc, hãy giải thích rõ lý do chọn công nghệ đó thay vì chỉ nộp kết quả đúng sai.

#### Kinh nghiệm thực tế
*   Sự liêm chính (Integrity) cực kỳ quan trọng – là làm việc đến cùng, xử lý cả các trường hợp ngoại lệ dù không ai yêu cầu.
*   Đi làm cần biết chấp nhận và đối mặt với sai ẩm (Embrace mistake).

### Ứng Dụng Vào Công Việc

*   **Có thể áp dụng gì cho dự án hiện tại:** Áp dụng phương pháp phân tích yêu cầu, thiết kế kiến trúc hệ thống rõ ràng bằng document trước khi nhờ AI viết mã nguồn nhằm đảm bảo chất lượng code; Ứng dụng Prompt Optimizer để tinh chỉnh câu lệnh khi tương tác với chatbot AI hằng ngày.
*   **Công nghệ muốn thử nghiệm:** Phương pháp BMX Agentic AI để quản lý tiến độ và tự động hóa quy trình sinh code; Các mô hình serverless của AWS như AWS Lambda và Bedrock.
*   **Ý tưởng cải thiện quy trình làm việc:** Thay vì brainstorm mọi thứ vào chung một phiên chat dễ gây lỗi "hallucination", hãy chia nhỏ các luồng công việc cho AI xử lý độc lập (như một agent đảm nhận lập trình riêng, một agent đảm nhận review riêng).

### Trải Nghiệm Trong Event

#### Học hỏi từ diễn giả
*   Lắng nghe được góc nhìn cực kỳ thực tế từ các nhà tuyển dụng, giúp hiểu rõ doanh nghiệp đánh giá cao nền tảng tư duy và sự hiểu biết cốt lõi hơn là công cụ.

#### Trải nghiệm thực hành
*   Quan sát cách các chuyên gia demo trực quan từ bước lên ý tưởng, chuẩn hóa prompt đến việc đưa vào hệ thống thực thi.

#### Giao lưu và kết nối
*   Tham gia một cộng đồng tích cực, an toàn, nơi các thành viên được khuyến khích lập team thay vì làm solo, và không lo sợ việc bị phán xét khi chia sẻ cái mới.

#### Điều ấn tượng nhất
*   Quan điểm "AI không thể thay thế bạn, nó chỉ khuếch đại bạn" và khái niệm "Outsource thinking" – cảnh tỉnh về việc lạm dụng AI nhưng không giữ lại được tri thức cho bản thân.

### Bài Học Rút Ra

*   **Kiến thức quan trọng nhất:** Foundation (nền tảng) là bất biến trước sự thay đổi chóng mặt của các framework và công cụ AI. Sở hữu nền tảng tốt sẽ giúp bản thân luôn làm chủ được công nghệ.
*   **Kinh nghiệm thực tế:** Khi đi xin việc, đừng chỉ đánh giá công việc qua mức lương (Salary). Cần cân nhắc tổng hòa cả 4 yếu tố còn lại: Kinh nghiệm (Experience), Mạng lưới quan hệ (Network), Kiến thức (Knowledge) và Cơ hội dự án (Project).
*   **Định hướng học tập hoặc phát triển tiếp theo:** Xây dựng tính kỷ luật bền bỉ thông qua việc học tập mỗi ngày dù chỉ 5-10 phút để không làm "đứt chuỗi"; Luôn tìm kiếm câu hỏi "Tại sao" thay vì chỉ hỏi "Làm cái gì" (What); Tích cực tham gia nhóm và trau dồi cả thái độ lẫn tố chất bên cạnh kiến thức chuyên môn.

---

### Một số hình ảnh khi tham gia sự kiện

Dưới đây là một số hình ảnh được ghi lại tại sự kiện FCAJ Community Day:

<div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
  <img src="/images/fcaj_community_day_1.png" alt="Diễn giả trình bày: Why Prompt Engineering Matters" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
  <img src="/images/fcaj_community_day_2.png" alt="Diễn giả trình bày về Developer Agent và quản lý Coding Story" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
  <img src="/images/fcaj_community_day_3.png" alt="Diễn giả chia sẻ về Growth Mindset - Hỏi Tại Sao" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
  <img src="/images/fcaj_community_day_4.png" alt="Ảnh chụp tập thể các thành viên tham gia FCAJ Community Day" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
</div>
