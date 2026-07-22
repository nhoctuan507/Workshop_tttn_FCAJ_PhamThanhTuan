---
title: "Blog 1"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.1. </b> "
---

# Real-world Experience: Automating Contract Intelligence with Doczy.ai on AWS

Hello everyone, we are the **“Cloud Titans”** team. Recently, while researching document parsing solutions, we came across an impressive case study of the **Doczy.ai™** system developed by **AArete**.

If you are working with enterprise systems, you probably understand the struggle of dealing with important data locked in unstructured documents like contracts, legal agreements, or invoices. Manual entry is resource-intensive and error-prone. Legacy Contract Lifecycle Management (CLM) systems are too rigid, only parsing predefined fields while ignoring complex contextual details.

However, Doczy.ai™ has addressed this issue comprehensively using Generative AI on AWS. They improved accuracy from 55% with a rules-based system to **99%** using AI.

### "Deep Dive" into the Architecture

You can look at the architecture diagram in the file **image_c9db07.png** below to see the data flow. The way they integrated AWS services is highly practical:

<img src="/images/image_c9db07.png" alt="Doczy.ai Architecture Diagram" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 20px 0;" />

* **First**, users access the system via a Next.js interface, with authentication handled cleanly by **Amazon Cognito**.
* Documents are uploaded directly to **Amazon S3** to ensure durable and scalable storage.
* Following upload, **AWS Lambda** is triggered to invoke **Amazon Textract**, extracting text and metadata from the documents.
* The most valuable part is their patented **"smart chunking"** algorithm. Instead of partitioning text randomly, it combines semantic search and keywords to split the document while preserving its hierarchical structure and logical relationships.
* Next, the system passes the data to an **Amazon ECS** cluster and leverages Gen AI via **Amazon Bedrock**. This stage uses "dual clustering" to analyze both the semantic and structural aspects of the contract simultaneously.
* The final structured data is sent to a **Snowflake** data warehouse to power analytical dashboards.
* Naturally, in production, the system uses **Amazon CloudWatch** for real-time performance monitoring. Additionally, **AWS Secrets Manager** protects sensitive credentials.

### Outstanding Real-world Metrics

The operational statistics are outstanding. Over the past **22 months**, the system processed **2.5 million** contract documents, equivalent to roughly **50 million pages**.

To achieve this, the infrastructure made **137 million** API calls to **Amazon Bedrock**, processing **442 billion tokens**. This resulted in a **97% reduction** in manual processing time, saving clients approximately **$330 million**.

---

From this case study, combining the extraction capabilities of Amazon Textract with the reasoning power of LLMs on Amazon Bedrock creates a powerful toolset. If you are working on document digitization, this technology stack is definitely worth referencing!

* **Post Link:** [AWS Study Group Facebook Post](https://www.facebook.com/groups/awsstudygroupfcj/permalink/2199556717475955/?rdid=FBBx8y8itzGQduS4#)
* **Reference Link:** [Automating Contract Intelligence with Doczy.ai on AWS - AWS Architecture Blog](https://aws.amazon.com/vi/blogs/architecture/automating-contract-intelligence-with-doczy-ai-on-aws/)