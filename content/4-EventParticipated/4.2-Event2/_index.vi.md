---
title: "Event 2"
date: 2026-05-23
weight: 1
chapter: false
pre: " <b> 4.2. </b> "
---


# Bài thu hoạch: "FCAJ Community Day" (Tháng 5-2026)

### Mục Đích Của Sự Kiện

*   **Mục tiêu của chương trình:** Không chỉ là nơi nghe hội thảo, mà còn là không gian để cộng đồng IT **kết nối, truyền cảm hứng** và tìm kiếm đối tác, bạn bè mới.
*   **Nội dung chính muốn truyền tải:** Đi qua 6 phiên chia sẻ từ các chuyên gia, xoay quanh các chủ đề thực tế từ **AI, Cloud cho đến những câu chuyện làm nghề thực chiến**.
*   **Giá trị dành cho người tham dự:** Cung cấp cái nhìn thực tế về thị trường việc làm, trang bị tư duy ứng dụng AI vào doanh nghiệp, các kiến thức technical chuyên sâu và cơ hội networking giá trị.

### Danh Sách Diễn Giả

1.  **Quỳnh Mai** - Vai trò: MC chương trình.
2.  **Nguyễn Gia Hưng** - Chức vụ: Solution Architect / Sáng lập FCAJ - Đơn vị: AWS Việt Nam.
3.  **Tịnh Trương** - Chức vụ: Platform Engineer - Đơn vị: Gotam X.
4.  **Hải Anh** - Đơn vị: Pacific Việt Nam.
5.  **Nguyễn Hấn Thịnh** - Chức vụ: DevOps Engineer.
6.  **Mai, Thảo và Uyển** - Vai trò: Lập trình viên / Đội thi UTM Morpo (chia sẻ về Hackathon).
7.  **Đức Đào** - Chia sẻ về cấu hình LLM (Temperature, LM determinism).
8.  **Lâm Vy** - Đơn vị: Ngân hàng VBBank - Chia sẻ về Multi-agent system trong doanh nghiệp.

### Nội Dung Nổi Bật

#### 1. Xu hướng thị trường và Yêu cầu nhân sự (Nguyễn Gia Hưng)
*   AI làm giảm chi phí phát triển phần mềm, từ đó nhu cầu xây dựng phần mềm tăng vọt. Điều này sinh ra luồng công việc mới: đi sửa code lỗi do những người dùng AI tạo ra nhưng không biết vận hành (platform engineering).
*   Bằng đại học vẫn là tấm vé bắt buộc để qua vòng nhân sự (HR). Ứng viên hiện tại cần có kiến thức kỹ thuật cứng, hiểu **use case thực tế của doanh nghiệp**, và phải có **sản phẩm thật** thay vì chỉ demo.

#### 2. Tối ưu hóa Prompt Engineering (Tịnh Trương)
*   **Vấn đề:** Mọi người thường tạo quá nhiều bối cảnh lộn xộn trong một luồng chat (hỏi du lịch rồi lại hỏi code) khiến AI bị loạn ngữ cảnh.
*   **Giải pháp:** Cần cung cấp cho AI đúng **Goal (mục tiêu)**, **Role (vai trò)** và **Context (ngữ cảnh cụ thể)** của công ty/dự án.
*   **Khái niệm mới:** Cảnh báo hội chứng **"Internet builder"** – bạ công cụ, code mồi nào trên mạng cũng kéo về dùng mà không rà soát ngữ cảnh của công ty mình.

#### 3. Ứng dụng Amazon Agent / Q (Hải Anh)
*   **Giải pháp:** Ứng dụng AI agent làm trợ lý thay thế việc phân tích data thủ công.
*   **Demo:** Tải một file Excel dữ liệu thô vào chat, AI tự phân tích và sinh ra Dashboard; tự động tóm tắt cuộc họp. Sử dụng các MCP (Model Context Protocol) làm "cánh tay nối dài" cho LLM.

#### 4. Amazon CloudFront & Tối ưu chi phí (Hấn Thịnh)
*   **Giải pháp:** Giới thiệu cơ chế tính giá mới của CloudFront là **Flat-rate pricing** giúp doanh nghiệp không bị sốc bill (chống build spike) khi bị tấn công DDoS.
*   **Công nghệ nổi bật:** Tính năng **VPC Origin** (ẩn Origin vào Private Subnet không cần qua Internet), **mTLS** (bảo mật 2 chiều cho tài chính), **HTTP/3**, và tự động nén content (Content compression).

#### 5. Câu chuyện thi Hackathon 36 giờ (Mai, Thảo và Uyển)
*   **Giải pháp:** Xây dựng tool AI sinh ra UI và cho phép người dùng **edit (chỉnh sửa) trực tiếp** trên các component HTML sinh ra thay vì bắt AI generate lại từ đầu (để tiết kiệm token).
*   **Điểm đáng chú ý:** Bài học về việc tránh **over-generation** (tham tính năng khiến AI báo lỗi/vượt token) và tập trung vào một tính năng cốt lõi nhất.

#### 6. Cấu hình kiểm soát độ ngẫu nhiên của LLM (Đức Đào)
*   **Vấn đề:** Nhiều người lầm tưởng đặt `Temperature = 0` thì AI sẽ luôn trả ra kết quả giống nhau 100%.
*   **Giải thích:** Việc tính toán trên GPU có sự làm tròn số ngẫu nhiên, kết hợp với các hãng tối ưu hóa (gộp nhiều prompt lại xử lý cùng lúc) khiến kết quả luôn có độ lệch nhẹ giữa các lần chạy.
*   **Best practices:** Luôn thiết kế hệ thống downstream có khả năng handle (xử lý) sự sai lệch format của AI và testing kỹ.

#### 7. Hệ thống Multi-Agent System trong Enterprise (Lâm Vy từ VBBank)
*   **Case study:** Xây dựng hệ thống Multi-agent để đánh giá điểm tín dụng cho startup tại ngân hàng (xử lý các dữ liệu phi truyền thống như trí tuệ, marketing, business model).
*   **Kỹ thuật:** Chia nhỏ từng agent với **chuyên môn riêng (role)**: phân tích tài chính, nghiên cứu đối thủ, đánh giá rủi ro... để hạn chế giới hạn Context Window.
*   **Bảo mật:** Nhấn mạnh tầm quan trọng của Security trong doanh nghiệp, các rủi ro lộ dữ liệu (MCP attack vectors), Guardrails chống Prompt Injection, và xoay vòng khóa API (API Key Rotation).

### Những Gì Học Được

#### Tư duy và phương pháp
*   Học cách áp dụng **AI mindset** và **AI adoption**, nghĩa là giải quyết đúng bài toán của người dùng cuối (End-user) thay vì chỉ chạy theo công nghệ.
*   Trong doanh nghiệp, một hệ thống không chỉ cần "chạy được" mà phải an toàn (secure) và đáng tin cậy (reliable).

#### Kiến thức kỹ thuật
*   Biết cách thiết kế kiến trúc **Multi-agent** thay vì Single-agent khi input data lớn và đa ngành.
*   Hiểu bản chất của tham số **Temperature / LLM Determinism**.
*   Quy trình Infrastructure as Code (IaC) bằng **Terraform**.

#### Best practices & Kinh nghiệm thực tế
*   **Không copy/paste mù quáng:** Việc copy lỗi ném vào ChatGPT sửa rồi nhúng lại vào codebase doanh nghiệp mà không review sẽ gây hậu quả rất lớn.
*   **Tính ROI (Return on Investment):** Khi đề xuất giải pháp nội bộ, phải chứng minh được giá trị sinh lời/tiết kiệm thời gian bằng con số.
*   **Bảo mật:** Luôn Rotate API Key, Access Key định kỳ để tránh lộ chi phí khổng lồ.

### Ứng Dụng Vào Công Việc

*   **Có thể áp dụng gì cho dự án hiện tại:**
    *   Sử dụng **VPC Origin** trên CloudFront để đóng gói bảo mật cho các Origin Server.
    *   Áp dụng hệ thống Guardrails chặn các input/output nhạy cảm khi dùng AI.
    *   Tối ưu prompt bằng cách luôn mớm đúng ngữ cảnh và tài liệu công ty thay vì để AI tự chế.
*   **Công nghệ muốn thử nghiệm:**
    *   Tạo các công cụ mở rộng (MCP) để giúp AI thực hiện hành động trên dữ liệu thật.
    *   Sử dụng Terraform để deploy hạ tầng nhằm dễ dàng quản lý phiên bản (reproduce).
*   **Ý tưởng cải thiện quy trình làm việc:**
    *   Thiết kế các Agent riêng biệt (phân tích, review, summarize) làm việc chéo nhau (challenge lẫn nhau) để tăng độ chính xác thay vì dồn việc cho một chatbot.
    *   Chỉ tạo ứng dụng AI giải quyết được một pain-point thực tế đang làm mất thời gian nhất, thay vì nhồi nhét quá nhiều tính năng (over-thinking).

### Trải Nghiệm Trong Event

*   **Học hỏi từ diễn giả:** Các diễn giả mang đến lượng kiến thức khổng lồ từ nền tảng lý thuyết đến thực chiến. Không chỉ có kỹ thuật, mà còn là các bài học "đau thương" từ doanh nghiệp lớn (như bị DDoS spike bill, dính lỗi copy code, các khó khăn khi pass qua bảo mật HR).
*   **Trải nghiệm thực hành:** Khán giả được xem các demo trực quan sinh động như biến ảnh mockup thành code HTML, tạo báo cáo tự động từ Excel và so sánh trực tiếp output của LLM trên Bedrock so với Local.
*   **Giao lưu và kết nối:** Đúng với tinh thần mở đầu, chương trình đông đảo (đến mức phải ngồi cả trên tầng 36) mang lại cơ hội cực lớn để giao lưu, tìm kiếm đối tác và bạn bè đồng ngành.
*   **Điều ấn tượng nhất:** AI tuy mạnh nhưng kiến thức lõi về kỹ thuật phần mềm (Software Engineering, Backend, Security) mới là vũ khí quyết định để một lập trình viên tồn tại trong môi trường doanh nghiệp khắt khe.

### Bài Học Rút Ra

*   **Kiến thức quan trọng nhất:**
    *   AI đang biến việc tạo phần mềm trở nên rất rẻ, dẫn đến khối lượng phần mềm khổng lồ. Công việc của con người trong tương lai sẽ là **vận hành, tích hợp (platform engineering) và sửa lỗi (fix code)** cho những hệ thống do AI tạo ra.
    *   Sự chuyên nghiệp (Enterprise mindset) khác hoàn toàn việc làm đồ án: phải quản trị rủi ro, tuân thủ (compliance) và chịu trách nhiệm bảo mật tuyệt đối.
*   **Kinh nghiệm thực tế:** Đừng bao giờ mang tâm lý "Internet builder" - dùng code/tool mà không hiểu. Hiểu rõ từng dòng code mình viết ra đem lại giá trị gì cho doanh nghiệp.
*   **Định hướng học tập hoặc phát triển tiếp theo:** Đừng chỉ chạy theo AI như một công cụ bề nổi. Hãy xây dựng một tư duy phát triển bền vững bằng cách trau dồi vững chắc kiến thức **Backend (JWT, OAuth, DB)** và **Software Engineering** vì đó mới là nền tảng cốt lõi giúp bạn dễ dàng tích hợp bất kỳ công nghệ AI nào vào hệ thống doanh nghiệp một cách bảo mật và hiệu quả. Tấm bằng đại học vẫn là một bộ lọc khắc nghiệt, đừng trì hoãn việc lấy nền tảng cứng.

---

### Một số hình ảnh khi tham gia sự kiện

Dưới đây là một số hình ảnh ghi lại tại sự kiện FCAJ Community Day (Tháng 5-2026):

<div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
  <img src="/images/fcaj_community_day_2026_1.png" alt="Diễn giả chia sẻ chủ đề: Context is Everything" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
  <img src="/images/fcaj_community_day_2026_2.png" alt="Diễn giả trình bày về Multi-Agent Paradigm và Security Guardrails" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
  <img src="/images/fcaj_community_day_2026_3.png" alt="Đội thi UTM Morpho chia sẻ kinh nghiệm Hackathon 36 giờ" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
  <img src="/images/fcaj_community_day_2026_4.jpg" alt="Ảnh chụp tập thể FCAJ Community Day (Tháng 5-2026)" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
</div>
