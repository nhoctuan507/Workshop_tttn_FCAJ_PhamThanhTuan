---
title : "Application Demo"
date : 2026-01-01
weight : 8
chapter : false
pre : " <b> 5.8. </b> "
---

## Application Demo Video

In this section, you can watch the full demo video of the **Second-Hand Marketplace** application running on the AWS cloud infrastructure.

The video demonstrates the complete user journey, including:
- Accessing the application securely over HTTPS with a custom domain.
- Registering a new account and logging in.
- Creating a new product listing and uploading product images (stored in Amazon S3).
- Searching for products and filtering by category.
- Adding items to the shopping cart, checking out, and reviewing orders.

---

### Demo Video

<div style="display: flex; justify-content: center; margin: 20px 0;">
  <video width="100%" max-width="800px" controls style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); outline: none;">
    <source src="/images/5-Workshop/5.8-Demo/demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

---

### Key Technical Aspects Demonstrated

1. **Secure Access**: The green padlock in the Chrome address bar shows that the connection is encrypted using an SSL/TLS certificate from **AWS Certificate Manager (ACM)** and routed via **Amazon Route 53**.
2. **High Availability**: The frontend requests are load balanced using an **Application Load Balancer** distributing traffic to the containerized application.
3. **Cloud Native Storage**: All product images uploaded during the demo are stored directly on **Amazon S3** and served instantly.
4. **Cloud Database**: The application database operations (user creation, product listing, orders) are handled in real-time by **MongoDB Atlas**.
