const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\Tuan\\Downloads\\fcj-workshop-template-main\\content\\1-Worklog';
const rootContentDir = 'C:\\Users\\Tuan\\Downloads\\fcj-workshop-template-main\\content';

const weeksData = [
  {
    week: 1,
    dates: "20/04/2026 – 26/04/2026",
    titleEn: "FCAJ Bootcamp Kickoff and Cloud Computing Basics",
    titleVi: "Khởi động Bootcamp FCAJ và Kiến thức cơ bản về Điện toán đám mây",
    objectivesEn: [
      "Attend the FCAJ bootcamp kickoff session and connect with other members.",
      "Study Cloud Computing concepts and AWS global infrastructure.",
      "Find and form a study group to collaborate throughout the bootcamp."
    ],
    objectivesVi: [
      "Tham gia buổi kickoff chương trình FCAJ và kết nối với các học viên khác.",
      "Tìm hiểu các khái niệm điện toán đám mây cơ bản và hạ tầng toàn cầu của AWS.",
      "Tìm và thành lập nhóm học tập để cùng nhau làm bài và hỗ trợ."
    ],
    tasks: [
      {
        day: 2,
        date: "20/04/2026",
        descEn: "Attend the FCAJ program kickoff, get acquainted with coordinators and camper community.",
        descVi: "Tham gia buổi kickoff chương trình FCAJ, làm quen với ban điều phối và cộng đồng học viên.",
        ref: "[FCAJ Portal](https://cloudjourney.awsstudygroup.com/)"
      },
      {
        day: 3,
        date: "21/04/2026",
        descEn: "Study the FCAJ program structure, rules, syllabus, and study guidelines.",
        descVi: "Tìm hiểu cơ cấu chương trình FCAJ, nội quy, chương trình học và hướng dẫn học tập.",
        ref: "[FCAJ Portal](https://cloudjourney.awsstudygroup.com/)"
      },
      {
        day: 4,
        date: "22/04/2026",
        descEn: "Research core Cloud Computing models (IaaS, PaaS, SaaS, Public/Private/Hybrid).",
        descVi: "Nghiên cứu các mô hình Điện toán đám mây cốt lõi (IaaS, PaaS, SaaS, Public/Private/Hybrid).",
        ref: "[AWS Cloud Computing](https://aws.amazon.com/what-is-cloud-computing/)"
      },
      {
        day: 5,
        date: "23/04/2026",
        descEn: "Explore AWS global infrastructure: Regions, Availability Zones, and Edge Locations.",
        descVi: "Khám phá hạ tầng toàn cầu của AWS: Regions, Availability Zones và Edge Locations.",
        ref: "[AWS Global Infrastructure](https://aws.amazon.com/about-aws/global-infrastructure/)"
      },
      {
        day: 6,
        date: "24/04/2026",
        descEn: "Connect with other bootcamper groups and form a study group for project collaboration.",
        descVi: "Kết nối với các nhóm học viên khác và thành lập nhóm học tập để cùng làm dự án.",
        ref: "[FCAJ Discord](https://cloudjourney.awsstudygroup.com/)"
      }
    ],
    achievementsEn: [
      "Gained a clear overview of the FCAJ curriculum, rules, and expectations.",
      "Acquired foundational knowledge of IaaS, PaaS, SaaS, and AWS physical infrastructure.",
      "Successfully established a study group to share resources and collaborate on future labs."
    ],
    achievementsVi: [
      "Nắm vững lộ trình học tập, nội quy và mục tiêu của chương trình FCAJ.",
      "Hiểu rõ các mô hình dịch vụ đám mây cơ bản và cách AWS tổ chức hạ tầng vật lý.",
      "Thành lập thành công nhóm học tập để chuẩn bị hỗ trợ nhau làm dự án."
    ]
  },
  {
    week: 2,
    dates: "27/04/2026 – 03/05/2026",
    titleEn: "Office Registration, EC2 Instances, and IAM Permissions Management",
    titleVi: "Đăng ký lịch lên văn phòng, Triển khai máy chủ EC2 và Quản lý truy cập IAM",
    objectivesEn: [
      "Register the office attendance schedule for onsite mentoring.",
      "Understand and configure IAM user identities, groups, and policies.",
      "Practice launching, configuring, and accessing Amazon EC2 instances.",
      "Research networking architecture using Amazon VPC."
    ],
    objectivesVi: [
      "Đăng ký lịch lên văn phòng để làm việc trực tiếp với mentors.",
      "Tìm hiểu cơ chế quản lý danh tính người dùng và phân quyền với AWS IAM.",
      "Thực hành khởi tạo, cấu hình và kết nối máy chủ ảo Amazon EC2.",
      "Nghiên cứu kiến trúc mạng cơ bản với Amazon VPC."
    ],
    tasks: [
      {
        day: 2,
        date: "27/04/2026",
        descEn: "Register office attendance schedule and coordinate with team members for office hours.",
        descVi: "Đăng ký xếp lịch lên văn phòng làm việc và điều phối thời gian làm việc nhóm.",
        ref: "[FCAJ Portal](https://cloudjourney.awsstudygroup.com/)"
      },
      {
        day: 3,
        date: "28/04/2026",
        descEn: "Study AWS IAM concepts, including Users, Groups, Roles, Policies, and Least Privilege principle.",
        descVi: "Tìm hiểu khái niệm AWS IAM bao gồm User, Group, Role, Policy và nguyên tắc phân quyền tối thiểu.",
        ref: "[AWS IAM Documentation](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html)"
      },
      {
        day: 4,
        date: "29/04/2026",
        descEn: "Create IAM accounts, configure custom security groups, and enable Multi-Factor Authentication (MFA).",
        descVi: "Thiết lập tài khoản người dùng IAM, cấu hình các nhóm bảo mật tùy chỉnh và kích hoạt xác thực MFA.",
        ref: "[IAM Security Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)"
      },
      {
        day: 5,
        date: "30/04/2026",
        descEn: "Launch and configure an Amazon EC2 instance, generate SSH key pairs, and connect via command line.",
        descVi: "Khởi chạy máy chủ Amazon EC2, thiết lập SSH key pair và thực hiện kết nối điều khiển qua terminal.",
        ref: "[EC2 Getting Started](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)"
      },
      {
        day: 6,
        date: "01/05/2026",
        descEn: "Study networking concepts, subnetting, and Amazon VPC network isolation architectures.",
        descVi: "Nghiên cứu nền tảng mạng máy tính, chia địa chỉ IP subnet và kiến trúc cô lập mạng Amazon VPC.",
        ref: "[Amazon VPC Intro](https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html)"
      }
    ],
    achievementsEn: [
      "Successfully registered office attendance schedule for the upcoming weeks.",
      "Configured secure IAM access keys and set up multi-factor security for the root account.",
      "Deployed a running EC2 virtual server and connected to it securely via SSH.",
      "Obtained initial knowledge of VPC network segmentation."
    ],
    achievementsVi: [
      "Đăng ký thành công lịch lên văn phòng để làm việc onsite.",
      "Thiết lập thành công tài khoản người dùng IAM, chính sách phân quyền tối thiểu và bảo mật MFA.",
      "Khởi chạy thành công máy chủ EC2, cấu hình security group và truy cập qua SSH.",
      "Nắm được khái niệm cơ bản về mạng VPC như subnet và route table."
    ]
  },
  {
    week: 3,
    dates: "04/05/2026 – 10/05/2026",
    titleEn: "AWS Community Sync, CIDR Block Design, and S3 Storage Lab",
    titleVi: "Tham gia sự kiện AWS, Tính toán CIDR và Cấu hình lưu trữ Amazon S3",
    objectivesEn: [
      "Attend AWS community sync meetings and networking events.",
      "Learn CIDR block notation, subnetting, and AWS Availability Zone concepts.",
      "Practice object storage configuration and website hosting using Amazon S3."
    ],
    objectivesVi: [
      "Tham gia các buổi họp mặt và sự kiện chia sẻ kỹ thuật của AWS.",
      "Làm quen với cách tính toán khối địa chỉ CIDR, chia subnet và Availability Zone.",
      "Thực hành lưu trữ đối tượng và cấu hình website tĩnh trên Amazon S3."
    ],
    tasks: [
      {
        day: 2,
        date: "04/05/2026",
        descEn: "Attend AWS community weekly sync, presenting progress and getting feedback from mentors.",
        descVi: "Tham gia họp sync định kỳ hàng tuần của cộng đồng AWS, báo cáo tiến độ và nhận góp ý từ mentor.",
        ref: "[FCAJ Portal](https://cloudjourney.awsstudygroup.com/)"
      },
      {
        day: 3,
        date: "05/05/2026",
        descEn: "Study CIDR block allocations, calculate public and private subnets across Availability Zones (AZs).",
        descVi: "Học cách tính toán khối CIDR, phân chia subnet công khai và riêng tư trên các vùng sẵn sàng AZ.",
        ref: "[AWS VPC Subnetting](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html)"
      },
      {
        day: 4,
        date: "06/05/2026",
        descEn: "Study Amazon S3 storage classes, bucket policies, access control lists (ACLs), and lifecycle rules.",
        descVi: "Tìm hiểu các lớp lưu trữ Amazon S3, chính sách bucket, quyền truy cập ACL và quy tắc vòng đời lưu trữ.",
        ref: "[Amazon S3 Developer Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)"
      },
      {
        day: 5,
        date: "07/05/2026",
        descEn: "Create S3 buckets, upload test documents, and configure Static Website Hosting.",
        descVi: "Thực hành tạo bucket S3, tải tài liệu lên và cấu hình trang web tĩnh Static Website Hosting.",
        ref: "[S3 Website Hosting Guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)"
      },
      {
        day: 6,
        date: "08/05/2026",
        descEn: "Join AWS community technical sharing sessions and discuss network configurations with camper peers.",
        descVi: "Tham gia buổi chia sẻ kỹ thuật của cộng đồng AWS và trao đổi kinh nghiệm thiết lập mạng.",
        ref: "[AWS User Groups](https://aws.amazon.com/developer/community/user-groups/)"
      }
    ],
    achievementsEn: [
      "Participated actively in AWS bootcamper syncups.",
      "Gained proficiency in CIDR subnetting and highly available AZ designs.",
      "Configured S3 bucket with strict bucket policies and successfully hosted a static page."
    ],
    achievementsVi: [
      "Giao lưu và báo cáo tiến độ học tập tại các buổi sync của cộng đồng AWS.",
      "Làm chủ việc tính toán và thiết kế dải mạng CIDR cho các subnet trong hạ tầng.",
      "Tạo thành công bucket S3, cấu hình phân quyền và triển khai lưu trữ trang web tĩnh."
    ]
  },
  {
    week: 4,
    dates: "11/05/2026 – 17/05/2026",
    titleEn: "Onsite Mentorship, Project Ideation, and Serverless Lambda API Setup",
    titleVi: "Giao lưu Onsite, Lên ý tưởng dự án và Thực hành Serverless Lambda API",
    objectivesEn: [
      "Visit the AWS office to interact with senior engineers and mentors.",
      "Brainstorm and outline the group project idea and scope.",
      "Practice writing serverless function logic in AWS Lambda and testing APIs.",
      "Write a summary report for the AWS event on 09/05/2026."
    ],
    objectivesVi: [
      "Lên văn phòng giao lưu và học hỏi kinh nghiệm thực tế từ các anh chị mentor.",
      "Họp bàn và thống nhất ý tưởng, kế hoạch thực hiện dự án nhóm.",
      "Thực hành viết các hàm Serverless Lambda và tích hợp API Gateway.",
      "Viết báo cáo thu hoạch sau khi tham dự sự kiện AWS ngày 09/05/2026."
    ],
    tasks: [
      {
        day: 2,
        date: "11/05/2026",
        descEn: "Work onsite at the office, shadow seniors, and learn AWS production-grade architectures.",
        descVi: "Lên văn phòng làm việc trực tiếp, học hỏi cách triển khai hạ tầng từ các anh chị kỹ sư đi trước.",
        ref: "[FCAJ Portal](https://cloudjourney.awsstudygroup.com/)"
      },
      {
        day: 3,
        date: "12/05/2026",
        descEn: "Brainstorm and research project ideas with team members; formulate initial system capabilities.",
        descVi: "Họp nhóm đề xuất và thảo luận các ý tưởng dự án; phác thảo sơ bộ các chức năng chính.",
        ref: "[AWS Architecture Center](https://aws.amazon.com/architecture/)"
      },
      {
        day: 4,
        date: "13/05/2026",
        descEn: "Study serverless paradigms, write Node.js handler functions, and deploy on AWS Lambda.",
        descVi: "Tìm hiểu mô hình serverless, thực hành viết mã nguồn Node.js handler và triển khai lên AWS Lambda.",
        ref: "[AWS Lambda Developer Guide](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html)"
      },
      {
        day: 5,
        date: "14/05/2026",
        descEn: "Integrate AWS Lambda with Amazon API Gateway to expose HTTP endpoints and run query tests.",
        descVi: "Tích hợp AWS Lambda với API Gateway để công khai các cổng HTTP API và chạy thử nghiệm truy vấn.",
        ref: "[Amazon API Gateway Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html)"
      },
      {
        day: 6,
        date: "15/05/2026",
        descEn: "Document and write a comprehensive summary report on the AWS event attended on 09/05/2026.",
        descVi: "Viết báo cáo tổng kết và thu hoạch chi tiết sau khi tham gia sự kiện AWS ngày 09/05/2026.",
        ref: "Local Event Materials"
      }
    ],
    achievementsEn: [
      "Acquired direct industry knowledge and design patterns from onsite AWS engineers.",
      "Finalized the concept proposal and task assignments for the group project.",
      "Created a serverless API backend that handles basic JSON requests.",
      "Completed and submitted the community event report."
    ],
    achievementsVi: [
      "Học hỏi được nhiều kinh nghiệm thực tiễn khi trao đổi trực tiếp trên văn phòng.",
      "Thống nhất được ý tưởng dự án nhóm và phân chia công việc giai đoạn đầu.",
      "Triển khai thành công hàm Lambda và tạo cổng kết nối HTTP API qua API Gateway.",
      "Hoàn thành báo cáo thu hoạch chi tiết về buổi event ngày 09/05/2026."
    ]
  },
  {
    week: 5,
    dates: "18/05/2026 – 24/05/2026",
    titleEn: "AWS Community Meetup, IT Careers, and Generative AI on Bedrock",
    titleVi: "Xu hướng công nghệ, Định hướng nghề nghiệp và AI tạo sinh với Amazon Bedrock",
    objectivesEn: [
      "Attend the AWS community event on 23/05/2026 and network with mentors.",
      "Refine the group project architecture and data flow blueprints.",
      "Understand cloud technology trends, group dynamics, and IT career growth.",
      "Research Amazon Bedrock and integrate Foundation Models on AWS."
    ],
    objectivesVi: [
      "Tham gia sự kiện AWS ngày 23/05/2026, giao lưu với chuyên gia và các mentor.",
      "Hoàn thiện các yêu cầu chức năng và sơ đồ kiến trúc cho dự án nhóm.",
      "Cập nhật xu hướng công nghệ mới, rèn luyện kỹ năng làm việc nhóm.",
      "Nghiên cứu dịch vụ AI Amazon Bedrock và các mô hình học máy tích hợp."
    ],
    tasks: [
      {
        day: 2,
        date: "18/05/2026",
        descEn: "Work at the office, network with professionals, and discuss cloud career pathways.",
        descVi: "Lên văn phòng làm việc, trò chuyện với chuyên gia và các mentor về lộ trình phát triển nghề nghiệp Cloud.",
        ref: "[FCAJ Portal](https://cloudjourney.awsstudygroup.com/)"
      },
      {
        day: 3,
        date: "19/05/2026",
        descEn: "Hold a team meeting to refine the project design, database schemas, and API specs.",
        descVi: "Họp nhóm thiết kế lại cấu trúc dự án, xác định cấu trúc CSDL và thông số các API.",
        ref: "[AWS Architecture Icons](https://aws.amazon.com/architecture/icons/)"
      },
      {
        day: 4,
        date: "20/05/2026",
        descEn: "Study Amazon Bedrock, analyzing LLM engines (Claude, Llama, Jurassic) and playground features.",
        descVi: "Tìm hiểu Amazon Bedrock, phân tích các mô hình ngôn ngữ lớn (Claude, Llama) và trải nghiệm Bedrock Playground.",
        ref: "[Amazon Bedrock Guide](https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html)"
      },
      {
        day: 5,
        date: "21/05/2026",
        descEn: "Build a Lambda workflow to call Amazon Bedrock APIs for dynamic text generation.",
        descVi: "Viết hàm Lambda kết nối gọi API của Amazon Bedrock để tạo sinh văn bản tự động.",
        ref: "[Amazon Bedrock API Reference](https://docs.aws.amazon.com/bedrock/latest/APIReference/welcome.html)"
      },
      {
        day: 6,
        date: "23/05/2026",
        descEn: "Participate in the AWS offline developer meetup on 23/05/2026, exchanging ideas and enhancing teamwork.",
        descVi: "Tham dự sự kiện offline cộng đồng AWS ngày 23/05/2026 để học hỏi công nghệ và rèn kỹ năng giao tiếp nhóm.",
        ref: "AWS Community Meetup"
      }
    ],
    achievementsEn: [
      "Acquired insights into industry expectations, teamwork strategies, and career planning.",
      "Updated project design to align with backend service best practices.",
      "Understood generative AI workflows and Foundation Model endpoints on Bedrock.",
      "Successfully invoked Claude model via AWS SDK inside Lambda."
    ],
    achievementsVi: [
      "Mở rộng kết nối và có định hướng rõ ràng hơn về lộ trình phát triển ngành IT.",
      "Hoàn thiện sơ đồ luồng dữ liệu và thiết kế cơ sở dữ liệu cho dự án nhóm.",
      "Nắm được cách hoạt động của Amazon Bedrock và các mô hình AI nền tảng.",
      "Thử nghiệm tích hợp thành công Lambda gọi mô hình AI để xử lý văn bản."
    ]
  },
  {
    week: 6,
    dates: "25/05/2026 – 31/05/2026",
    titleEn: "Frontend S3/CloudFront Deployment and Core Network/Database Labs",
    titleVi: "Triển khai Frontend trên S3/CloudFront và Lab Hạ tầng VPC/RDS",
    objectivesEn: [
      "Attend the AWS event sharing tips on EC2, S3, and career progression.",
      "Deploy the static Frontend using Amazon S3 and CloudFront CDN.",
      "Perform practical labs covering VPC, Security Groups, and RDS databases."
    ],
    objectivesVi: [
      "Tham gia buổi event học tập về tối ưu EC2/S3 và phương pháp cải thiện bản thân.",
      "Lập trình và triển khai Frontend dự án lên S3 kết hợp CDN CloudFront.",
      "Tiếp tục làm các bài lab nâng cao về VPC, Security Group và RDS."
    ],
    tasks: [
      {
        day: 2,
        date: "25/05/2026",
        descEn: "Attend the AWS training seminar to gather optimizations tips on S3 static hosting and EC2 storage.",
        descVi: "Tham gia seminar đào tạo của AWS về tối ưu hóa lưu trữ S3 và quản lý dung lượng EC2.",
        ref: "AWS Training Materials"
      },
      {
        day: 3,
        date: "26/05/2026",
        descEn: "Develop the landing pages and script assets for the group project Frontend.",
        descVi: "Xây dựng các trang web tĩnh và mã JavaScript cho phần giao diện tĩnh Frontend dự án.",
        ref: "[MDN Web Docs](https://developer.mozilla.org/)"
      },
      {
        day: 4,
        date: "27/05/2026",
        descEn: "Deploy static files to S3 bucket and configure Amazon CloudFront CDN with SSL certificate.",
        descVi: "Tải giao diện lên S3 bucket và thiết lập phân phối CDN CloudFront kèm chứng chỉ bảo mật SSL.",
        ref: "[S3 & CloudFront Hosting](https://aws.amazon.com/blogs/networking-and-content-delivery/amazon-cloudfront-introduces-origin-access-control-oac/)"
      },
      {
        day: 5,
        date: "28/05/2026",
        descEn: "Configure a custom VPC network: allocate subnets, routing tables, and set up an Internet Gateway.",
        descVi: "Cấu hình mạng VPC tùy chỉnh: phân chia dải IP subnet, bảng routing và thiết lập Internet Gateway.",
        ref: "[AWS VPC Route Tables](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html)"
      },
      {
        day: 6,
        date: "29/05/2026",
        descEn: "Deploy an Amazon RDS relational database in private subnets, securing it with custom Security Group rules.",
        descVi: "Khởi tạo cơ sở dữ liệu quan hệ Amazon RDS trong subnet bảo mật, thiết lập phân quyền bằng Security Group.",
        ref: "[Amazon RDS Security](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.RDSSecurityGroups.html)"
      }
    ],
    achievementsEn: [
      "Acquired performance optimization strategies for AWS core storage and compute.",
      "Hosted the group project frontend securely on S3 and optimized delivery globally via CloudFront.",
      "Successfully created an isolated network VPC and established a secure RDS DB instance."
    ],
    achievementsVi: [
      "Học hỏi được các mẹo hay để sử dụng EC2, S3 hiệu quả và tiết kiệm chi phí.",
      "Triển khai thành công giao diện Frontend tĩnh lên S3 và kích hoạt phân phối qua CloudFront.",
      "Hoàn thành bài lab cô lập cơ sở dữ liệu RDS trong mạng con riêng tư của VPC."
    ]
  },
  {
    week: 7,
    dates: "01/06/2026 – 07/06/2026",
    titleEn: "Advanced Serverless Labs, Workflow Diagrams, and Integration Debugging",
    titleVi: "Lab Serverless nâng cao, Thiết kế luồng xử lý và Sửa lỗi tích hợp",
    objectivesEn: [
      "Complete advanced integration labs on Lambda, API Gateway, and CloudFront.",
      "Troubleshoot configuration errors during backend-frontend system connections.",
      "Draw the system workflow and interaction sequence diagrams for the project."
    ],
    objectivesVi: [
      "Nghiên cứu sâu các bài lab kết hợp Lambda, API Gateway và CloudFront.",
      "Rà soát và xử lý các lỗi phát sinh trong quá trình code nhóm.",
      "Thiết kế luồng hoạt động (workflow) chi tiết cho dự án đang thực hiện."
    ],
    tasks: [
      {
        day: 2,
        date: "01/06/2026",
        descEn: "Coordinate with team members to resolve API input format differences between frontend and backend.",
        descVi: "Họp nhóm thống nhất định dạng dữ liệu truyền tải API giữa Frontend và Backend.",
        ref: "[FCAJ Portal](https://cloudjourney.awsstudygroup.com/)"
      },
      {
        day: 3,
        date: "02/06/2026",
        descEn: "Configure advanced AWS Lambda settings: execution timeouts, VPC peering, and environment variables.",
        descVi: "Cấu hình nâng cao cho Lambda: thời gian chờ, kết nối VPC và thiết lập biến môi trường.",
        ref: "[Lambda VPC Access](https://docs.aws.amazon.com/lambda/latest/dg/configuration-vpc.html)"
      },
      {
        day: 4,
        date: "03/06/2026",
        descEn: "Set up API Gateway proxy integrations, CORS headers, and custom request validation rules.",
        descVi: "Thiết lập API Gateway proxy integration, cấu hình CORS headers và quy tắc xác thực dữ liệu.",
        ref: "[API Gateway CORS Guide](https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-cors.html)"
      },
      {
        day: 5,
        date: "04/06/2026",
        descEn: "Draft the project's sequence diagram mapping user requests, api validation, and database storage.",
        descVi: "Vẽ biểu đồ trình tự dự án, mô tả luồng gửi yêu cầu từ client, qua API Gateway đến database.",
        ref: "[AWS Serverless Patterns](https://aws.amazon.com/blogs/compute/tag/serverless-design-patterns/)"
      },
      {
        day: 6,
        date: "05/06/2026",
        descEn: "Debug CORS blockages and solve IAM permission issues when connecting client with API Gateway.",
        descVi: "Sửa lỗi chính sách chặn CORS và khắc phục các vấn đề phân quyền IAM khi kết nối client và API.",
        ref: "Local Debug Logs"
      }
    ],
    achievementsEn: [
      "Configured robust CORS rules and proxy integrations on API Gateway.",
      "Resolved network blockages between the local frontend code and AWS serverless backend.",
      "Completed logical workflow and sequence charts to guide group developers."
    ],
    achievementsVi: [
      "Cấu hình thành công CORS và tích hợp bảo mật cho API Gateway.",
      "Giải quyết triệt để các lỗi gọi API từ Frontend lên các endpoint Backend.",
      "Vẽ hoàn chỉnh các biểu đồ tuần tự mô tả các luồng nghiệp vụ chính của hệ thống."
    ]
  },
  {
    week: 8,
    dates: "08/06/2026 – 14/06/2026",
    titleEn: "Amplify CLI Integration, Docker Containerization, and ECS Fargate",
    titleVi: "Thực hành AWS Amplify, Đóng gói Docker và Triển khai ECS Fargate",
    objectivesEn: [
      "Study and practice AWS Amplify CLI tools for authentication and hosting.",
      "Containerize backend services using Docker and build images.",
      "Deploy containerized applications on Amazon ECS (Fargate).",
      "Redraw and optimize the project workflow diagram based on mentor feedback."
    ],
    objectivesVi: [
      "Tìm hiểu và làm lab AWS Amplify kết hợp xác thực người dùng.",
      "Đóng gói container hóa ứng dụng bằng Docker và build image.",
      "Triển khai vận hành ứng dụng container trên Amazon ECS Fargate.",
      "Vẽ lại và tối ưu hóa workflow dự án theo định hướng từ mentors."
    ],
    tasks: [
      {
        day: 2,
        date: "08/06/2026",
        descEn: "Present project architectural workflow to mentors at the office; capture feedback on database connections.",
        descVi: "Trình bày luồng hoạt động dự án với mentor trên văn phòng và ghi nhận ý kiến cải tiến kết nối database.",
        ref: "[FCAJ Portal](https://cloudjourney.awsstudygroup.com/)"
      },
      {
        day: 3,
        date: "09/06/2026",
        descEn: "Use AWS Amplify CLI to initialize the application and integrate Amazon Cognito user authentication.",
        descVi: "Sử dụng AWS Amplify CLI để khởi tạo cấu hình dự án và kết nối bộ xác thực người dùng Amazon Cognito.",
        ref: "[AWS Amplify Docs](https://docs.amplify.aws/)"
      },
      {
        day: 4,
        date: "10/06/2026",
        descEn: "Write Dockerfiles for backend services, configure Docker compose, and build local container images.",
        descVi: "Viết Dockerfile cho các dịch vụ backend, cấu hình Docker Compose và xây dựng container image cục bộ.",
        ref: "[Docker Reference](https://docs.docker.com/)"
      },
      {
        day: 5,
        date: "11/06/2026",
        descEn: "Create Amazon ECR repository, push Docker image, and deploy to Amazon ECS Fargate utilizing Task Definitions.",
        descVi: "Tạo kho ECR, đẩy Docker image lên và khởi chạy dịch vụ container trên Amazon ECS Fargate qua Task Definition.",
        ref: "[Amazon ECS Developer Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html)"
      },
      {
        day: 6,
        date: "12/06/2026",
        descEn: "Update and optimize the project architecture diagrams to incorporate mentor-suggested security practices.",
        descVi: "Cập nhật và tối ưu sơ đồ kiến trúc dự án dựa trên các phương án bảo mật được đề xuất.",
        ref: "Local Diagram Files"
      }
    ],
    achievementsEn: [
      "Integrated a secure user authentication portal with Cognito using Amplify.",
      "Built Docker images and hosted container configurations on Amazon ECR.",
      "Successfully launched backend tasks on serverless ECS Fargate.",
      "Optimized system architecture diagrams to reflect production-level designs."
    ],
    achievementsVi: [
      "Cấu hình thành công tính năng đăng nhập/xác thực tài khoản qua Cognito bằng Amplify.",
      "Đóng gói thành công Docker image và lưu trữ an toàn trên kho ECR.",
      "Triển khai chạy thành công ứng dụng trên ECS Fargate dưới dạng không máy chủ.",
      "Tối ưu hóa sơ đồ luồng dữ liệu dự án phù hợp với mô hình thiết kế chuẩn chỉnh."
    ]
  },
  {
    week: 9,
    dates: "15/06/2026 – 21/06/2026",
    titleEn: "CloudWatch Monitoring, Automated CI/CD Pipelines, and App Testing",
    titleVi: "Giám sát CloudWatch, Tự động hóa CI/CD và Kiểm thử hệ thống",
    objectivesEn: [
      "Study and configure Amazon CloudWatch monitoring, dashboards, and alarms.",
      "Build automated CI/CD deployment pipelines using CodePipeline and CodeBuild.",
      "Conduct integration testing and resolve backend/frontend application bugs."
    ],
    objectivesVi: [
      "Thực hành thiết lập giám sát bằng Amazon CloudWatch (ghi log, cảnh báo).",
      "Xây dựng quy trình tự động hóa CI/CD bằng CodePipeline và CodeBuild.",
      "Kiểm thử liên thông toàn diện và sửa các lỗi phát sinh trong hệ thống."
    ],
    tasks: [
      {
        day: 2,
        date: "15/06/2026",
        descEn: "Create CloudWatch Log Groups, define custom metrics, and construct system monitoring dashboards.",
        descVi: "Tạo nhóm nhật ký CloudWatch Log, định nghĩa các chỉ số đo lường và thiết kế dashboard giám sát.",
        ref: "[Amazon CloudWatch Guide](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html)"
      },
      {
        day: 3,
        date: "16/06/2026",
        descEn: "Write a buildspec.yml file and configure AWS CodeBuild to compile and build application artifacts.",
        descVi: "Viết cấu hình buildspec.yml và thiết lập dịch vụ AWS CodeBuild để biên dịch ứng dụng.",
        ref: "[AWS CodeBuild Guide](https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html)"
      },
      {
        day: 4,
        date: "17/06/2026",
        descEn: "Create an AWS CodePipeline connecting the group's GitHub repository to Amazon ECS for automated delivery.",
        descVi: "Xây dựng quy trình CodePipeline liên kết kho mã nguồn GitHub với Amazon ECS để tự động hóa triển khai.",
        ref: "[CodePipeline Guide](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html)"
      },
      {
        day: 5,
        date: "18/06/2026",
        descEn: "Conduct comprehensive web interface testing, fixing UI alignment issues and link structures.",
        descVi: "Tiến hành kiểm thử giao diện website, sửa lỗi căn lề UI và liên kết điều hướng.",
        ref: "Local Test Protocols"
      },
      {
        day: 6,
        date: "19/06/2026",
        descEn: "Perform load tests and optimize database query indexes for faster response times.",
        descVi: "Thực hiện kiểm thử tải, tối ưu hóa các chỉ mục truy vấn database để cải thiện thời gian phản hồi API.",
        ref: "[RDS Query Tuning](https://aws.amazon.com/blogs/database/optimizing-queries-in-amazon-rds/)"
      }
    ],
    achievementsEn: [
      "Configured robust monitoring and created CloudWatch Dashboards for traffic tracking.",
      "Implemented a complete Git-triggered automated deployment pipeline to ECS Fargate.",
      "Successfully optimized page load speeds and API query response times."
    ],
    achievementsVi: [
      "Thiết lập thành công bảng theo dõi dashboard và cảnh báo tự động trên CloudWatch.",
      "Xây dựng hoàn chỉnh đường ống CI/CD giúp tự động cập nhật web mỗi khi đẩy code mới.",
      "Khắc phục các lỗi kết nối dữ liệu và lỗi luồng nghiệp vụ giữa client - server."
    ]
  },
  {
    week: 10,
    dates: "22/06/2026 – 28/06/2026",
    titleEn: "Cost Optimization, AI Development Tools, and Project Release V1",
    titleVi: "Tối ưu hóa chi phí, Ứng dụng trợ lý AI và Phát hành dự án V1",
    objectivesEn: [
      "Complete remaining lab exercises and document findings.",
      "Utilize AI coding assistants to review and optimize backend logic.",
      "Deploy project Version 1 (V1) and implement cloud resource cost controls."
    ],
    objectivesVi: [
      "Hoàn thành nốt các bài thực hành lab còn lại và ghi chép báo cáo.",
      "Ứng dụng trợ lý lập trình AI vào tối ưu hóa mã nguồn và thuật toán.",
      "Phát hành phiên bản thử nghiệm V1 của dự án nhóm và tìm cách tối ưu chi phí."
    ],
    tasks: [
      {
        day: 2,
        date: "22/06/2026",
        descEn: "Review completed bootcamp lab topics and organize summary documents for evaluation.",
        descVi: "Rà soát lại tất cả các bài thực hành lab đã học và chuẩn bị tài liệu báo cáo thu hoạch.",
        ref: "[FCAJ Portal](https://cloudjourney.awsstudygroup.com/)"
      },
      {
        day: 3,
        date: "23/06/2026",
        descEn: "Adopt AI developer tools (Amazon Q / CodeWhisperer) to audit code structure and identify logic bugs.",
        descVi: "Sử dụng trợ lý lập trình AI (Amazon Q, CodeWhisperer) để kiểm tra mã nguồn và phát hiện các lỗi logic.",
        ref: "[Amazon Q Developer](https://aws.amazon.com/q/developer/)"
      },
      {
        day: 4,
        date: "24/06/2026",
        descEn: "Deploy project Version 1 (V1) to AWS Academy cloud environment and run health status checks.",
        descVi: "Triển khai phiên bản V1 chạy ổn định của dự án lên môi trường cloud học tập và chạy kiểm tra sức khỏe hệ thống.",
        ref: "[FCAJ Portal](https://cloudjourney.awsstudygroup.com/)"
      },
      {
        day: 5,
        date: "25/06/2026",
        descEn: "Study AWS cost management tools: audit resource waste and apply clean deletion workflows.",
        descVi: "Nghiên cứu các công cụ quản lý chi phí AWS: rà soát tài nguyên lãng phí và thiết lập quy trình thu hồi.",
        ref: "[AWS Cost Optimization](https://wa.aws.amazon.com/wat.pillar.costOptimization.en.html)"
      },
      {
        day: 6,
        date: "26/06/2026",
        descEn: "Brainstorm additional project features and scale requirements for future release milestones.",
        descVi: "Họp nhóm đề xuất các tính năng mở rộng và lập kế hoạch nâng cấp hạ tầng cho các giai đoạn tiếp theo.",
        ref: "Project Milestone Plan"
      }
    ],
    achievementsEn: [
      "Completed 100% of the training path labs and organized reports.",
      "Used AI coding assistants effectively to refactor backend endpoints and improve security.",
      "Launched the initial project V1 prototype securely on AWS cloud.",
      "Formulated cost-saving policies including resource scheduling and automatic deletion of idle nodes."
    ],
    achievementsVi: [
      "Hoàn tất 100% các bài thực hành lab theo yêu cầu của chương trình.",
      "Sử dụng hiệu quả trợ lý AI hỗ trợ rà soát lỗi bảo mật và nâng cấp cấu trúc code.",
      "Triển khai thành công phiên bản chạy thử nghiệm V1 của dự án nhóm lên cloud.",
      "Thiết lập cấu hình tối ưu tài nguyên giúp giảm chi phí dịch vụ đám mây AWS."
    ]
  },
  {
    week: 11,
    dates: "29/06/2026 – 05/07/2026",
    titleEn: "End-to-End User Flow Verification, Cloud Resource Audit, and Cost Alerts",
    titleVi: "Kiểm thử liên thông, Rà soát tài nguyên và Thiết lập AWS Budgets",
    objectivesEn: [
      "Test end-to-end integration and data flows between Frontend and Backend.",
      "Audit active AWS resources and clean up unused testing services.",
      "Configure cost budget alarms using AWS Budgets and AWS Cost Explorer."
    ],
    objectivesVi: [
      "Kiểm thử liên thông toàn bộ các luồng tương tác giữa Frontend và Backend.",
      "Rà soát toàn bộ tài nguyên đã tạo trên đám mây, thu hồi các dịch vụ không cần thiết.",
      "Cấu hình cảnh báo chi phí trong AWS Budgets và phân tích ngân sách tiêu hao."
    ],
    tasks: [
      {
        day: 2,
        date: "29/06/2026",
        descEn: "Perform thorough integration tests between frontend pages and API backend endpoints.",
        descVi: "Thực hiện kiểm thử tích hợp toàn diện giữa các trang Frontend và các endpoint API Backend.",
        ref: "Local Test Protocol"
      },
      {
        day: 3,
        date: "30/06/2026",
        descEn: "Audit all active AWS resources in the development account; terminate redundant EC2 instances.",
        descVi: "Rà soát toàn bộ tài nguyên AWS đang hoạt động; dọn dẹp các máy chủ EC2 thử nghiệm không dùng tới.",
        ref: "AWS Resource Console"
      },
      {
        day: 4,
        date: "01/07/2026",
        descEn: "Configure billing alarm thresholds and cost limits using AWS Budgets.",
        descVi: "Thiết lập các hạn mức chi phí và cấu hình cảnh báo ngân sách tự động trong AWS Budgets.",
        ref: "[AWS Budgets Guide](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html)"
      },
      {
        day: 5,
        date: "02/07/2026",
        descEn: "Utilize AWS Cost Explorer to analyze daily expenditure patterns and optimize resource size.",
        descVi: "Sử dụng AWS Cost Explorer để phân tích biến động chi phí hàng ngày và điều chỉnh kích cỡ tài nguyên.",
        ref: "[AWS Cost Explorer Guide](https://docs.aws.amazon.com/cost-management/latest/userguide/ce-what-is.html)"
      },
      {
        day: 6,
        date: "03/07/2026",
        descEn: "Fix bugs in backend logic, database queries, and polish the user interface.",
        descVi: "Khắc phục các lỗi trong logic xử lý backend, tối ưu hóa câu lệnh database và hoàn thiện giao diện UI.",
        ref: "Project Source Code"
      }
    ],
    achievementsEn: [
      "Verified seamless communication and data persistence across the application.",
      "Successfully audited the AWS account and removed inactive, billing-prone resources.",
      "Set up strict budget thresholds to monitor cloud spending patterns."
    ],
    achievementsVi: [
      "Xác minh luồng dữ liệu chạy ổn định từ khâu đăng nhập cho đến khi đăng tải sản phẩm.",
      "Dọn dẹp các tài nguyên thử nghiệm dư thừa giúp tối ưu hóa dung lượng tài khoản.",
      "Thiết lập thành công hạn mức chi phí và cảnh báo gửi email tự động khi vượt ngân sách."
    ]
  },
  {
    week: 12,
    dates: "06/07/2026 – 12/07/2026",
    titleEn: "Log Analysis, Local API Testing, DynamoDB Routing, and System Architecture",
    titleVi: "Phân tích nhật ký log, Kiểm thử API Local, Định tuyến DynamoDB và Hoàn thiện kiến trúc",
    objectivesEn: [
      "Collect and analyze application logs to identify and resolve system errors.",
      "Test local API routes and verify data indexing in DynamoDB.",
      "Package codebase and complete the final project system architecture diagrams."
    ],
    objectivesVi: [
      "Thu thập nhật ký log từ máy chủ và cơ sở dữ liệu để tìm nguyên nhân lỗi.",
      "Kiểm thử liên thông các API local và kiểm tra định tuyến dữ liệu trên DynamoDB.",
      "Đóng gói mã nguồn ứng dụng và vẽ hoàn thiện sơ đồ kiến trúc hệ thống."
    ],
    tasks: [
      {
        day: 2,
        date: "06/07/2026",
        descEn: "Retrieve logs from CloudWatch logs streams to diagnose application exceptions.",
        descVi: "Thu thập nhật ký từ CloudWatch logs streams để chẩn đoán các lỗi runtime của ứng dụng.",
        ref: "Amazon CloudWatch Logs"
      },
      {
        day: 3,
        date: "07/07/2026",
        descEn: "Deploy remaining missing components and polish UI responsiveness.",
        descVi: "Triển khai nốt các thành phần chức năng còn thiếu và tinh chỉnh giao diện tương thích thiết bị.",
        ref: "Project Frontend Code"
      },
      {
        day: 4,
        date: "08/07/2026",
        descEn: "Test local API interfaces to ensure data payload correctness.",
        descVi: "Kiểm thử các cổng kết nối API local để đảm bảo tính chính xác của dữ liệu gửi nhận.",
        ref: "Local Postman Tests"
      },
      {
        day: 5,
        date: "09/07/2026",
        descEn: "Verify DynamoDB data routing, query parameters, and indexing configurations.",
        descVi: "Kiểm tra dữ liệu định tuyến trên DynamoDB, các tham số truy vấn và cấu hình chỉ mục.",
        ref: "[DynamoDB Developer Guide](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html)"
      },
      {
        day: 6,
        date: "10/07/2026",
        descEn: "Finalize the overall system architecture diagram, package source code, and prepare final presentations.",
        descVi: "Hoàn thiện sơ đồ kiến trúc hệ thống cuối cùng, đóng gói toàn bộ mã nguồn và chuẩn bị bài báo cáo.",
        ref: "Presentation Slides"
      }
    ],
    achievementsEn: [
      "Resolved system exceptions by conducting comprehensive log analysis.",
      "Verified correct data models and queries on DynamoDB database.",
      "Drawn the final end-to-end system architecture representing the project backend, frontend, and pipeline.",
      "Successfully packaged the codebase for bootcamp review."
    ],
    achievementsVi: [
      "Tìm ra và sửa các lỗi rò rỉ bộ nhớ hoặc lỗi xử lý ngoại lệ nhờ phân tích log.",
      "Xác minh độ chính xác của luồng dữ liệu và cấu trúc dữ liệu lưu trên DynamoDB.",
      "Hoàn thiện sơ đồ kiến trúc hệ thống chuẩn đầu cuối từ client đến cloud.",
      "Đóng gói mã nguồn hoàn chỉnh và chuẩn bị đầy đủ tài liệu cho buổi báo cáo."
    ]
  }
];

// Helper to remove notice warning box from contents
function removeWarningNotice(content) {
  return content.replace(/\{\{\%\s*notice\s+warning\s*\%\}[\s\S]*?\{\{\%\s*\/notice\s*\%\}/g, '');
}

// 1. Generate Weekly Worklogs (1 to 12)
weeksData.forEach((w) => {
  const weekFolder = path.join(baseDir, `1.${w.week}-Week${w.week}`);
  if (!fs.existsSync(weekFolder)) {
    fs.mkdirSync(weekFolder, { recursive: true });
  }

  // English file
  const enFileContent = `---
title: "Week ${w.week} Worklog"
date: 2024-01-01
weight: ${w.week}
chapter: false
pre: " <b> 1.${w.week}. </b> "
---

### Week ${w.week} Objectives:
${w.objectivesEn.map(o => `* ${o}`).join('\n')}

### Tasks to be carried out this week:
| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
${w.tasks.map(t => `| ${t.day} | ${t.descEn} | ${t.date} | ${t.date} | ${t.ref || ''} |`).join('\n')}

### Week ${w.week} Achievements:
${w.achievementsEn.map(a => `* ${a}`).join('\n')}
`;

  // Vietnamese file
  const viFileContent = `---
title: "Worklog Tuần ${w.week}"
date: 2024-01-01
weight: ${w.week}
chapter: false
pre: " <b> 1.${w.week}. </b> "
---

### Mục tiêu tuần ${w.week}:
${w.objectivesVi.map(o => `* ${o}`).join('\n')}

### Các công việc cần triển khai trong tuần này:
| Thứ | Công việc | Ngày bắt đầu | Ngày hoàn thành | Nguồn tài liệu |
| --- | --- | --- | --- | --- |
${w.tasks.map(t => `| ${t.day} | ${t.descVi} | ${t.date} | ${t.date} | ${t.ref || ''} |`).join('\n')}

### Kết quả đạt được tuần ${w.week}:
${w.achievementsVi.map(a => `* ${a}`).join('\n')}
`;

  fs.writeFileSync(path.join(weekFolder, '_index.md'), enFileContent, 'utf8');
  fs.writeFileSync(path.join(weekFolder, '_index.vi.md'), viFileContent, 'utf8');
  console.log(`Successfully wrote Worklog for Week ${w.week} with weight: ${w.week}.`);
});

// 2. Update Main Worklog Index Files
const mainEnContent = `---
title: "Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

On this page, you will find a summary of the 12-week internship worklog, documenting the learning journey, AWS service exploration, practical workshop labs, and team project development.

${weeksData.map(w => `**Week ${w.week}:** [${w.titleEn}](1.${w.week}-Week${w.week}/) (${w.dates.replace(/–/g, '-')})`).join('\n\n')}
`;

const mainViContent = `---
title: "Nhật ký công việc"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1. </b> "
---

Trang này tóm tắt nhật ký làm việc và học tập trong 12 tuần của kỳ thực tập, ghi lại lộ trình tìm hiểu các dịch vụ AWS, thực hiện các bài lab workshop và xây dựng dự án cuối khóa.

${weeksData.map(w => `**Tuần ${w.week}:** [${w.titleVi}](1.${w.week}-Week${w.week}/) (${w.dates.replace(/–/g, '-')})`).join('\n\n')}
`;

fs.writeFileSync(path.join(baseDir, '_index.md'), mainEnContent, 'utf8');
fs.writeFileSync(path.join(baseDir, '_index.vi.md'), mainViContent, 'utf8');
console.log('Successfully updated main Worklog index files.');

// 3. Update Root Homepages (removing notice warning)
const rootEnPath = path.join(rootContentDir, '_index.md');
const rootViPath = path.join(rootContentDir, '_index.vi.md');

if (fs.existsSync(rootEnPath)) {
  let content = fs.readFileSync(rootEnPath, 'utf8');
  content = removeWarningNotice(content);
  fs.writeFileSync(rootEnPath, content, 'utf8');
  console.log('Removed notice warning box from root English index.');
}
if (fs.existsSync(rootViPath)) {
  let content = fs.readFileSync(rootViPath, 'utf8');
  content = removeWarningNotice(content);
  fs.writeFileSync(rootViPath, content, 'utf8');
  console.log('Removed notice warning box from root Vietnamese index.');
}
