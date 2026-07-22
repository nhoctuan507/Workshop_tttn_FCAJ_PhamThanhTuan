---
title: "Blog 2"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.2. </b> "
---

# Automate Medical Record Digitization with Amazon Bedrock Data Automation and AWS HealthLake

This post introduces how to combine the power of Generative AI (via **Amazon Bedrock Data Automation - ABDA**) to extract data from unstructured medical documents (prescriptions, scanned/photographed medical records, PDFs...) and then standardize and synchronize the storage into **AWS HealthLake** in the international healthcare data standard (**FHIR**).

### Architecture Solution Diagram

Below is the automated workflow for digitizing medical records:

<img src="/images/blog2_architecture.png" alt="AWS Medical Record Digitization Architecture Diagram" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 20px 0;" />

1. **Medical Staff** uploads PDF/scanned documents to **Amazon S3**.
2. **S3 Event Notification** triggers **AWS Lambda** to initiate the processing.
3. The Lambda function spawns a processing job on **Amazon Bedrock Data Automation (ABDA)** using **BDA Blueprints** (JSON templates).
4. The extracted structural data is stored in an intermediate S3 bucket.
5. An S3 event triggers a second Lambda function to standardize the extracted data into **FHIR** format.
6. The FHIR data is imported into **AWS HealthLake**, ready for client application access via FHIR APIs.

### Advantages

* **Solves a critical healthcare industry challenge:** Hand-written or scanned medical files are extremely messy. Using Bedrock Data Automation helps extract data with significantly higher accuracy compared to traditional OCR methods, thanks to medical context understanding.
* **Automatic Data Standardization:** Automatically converts raw data into **FHIR (Fast Healthcare Interoperability Resources)** standard format. This is key for enabling hospital systems to communicate seamlessly with one another.
* **Fully Serverless Architecture:** Integrating S3, EventBridge, Lambda, Bedrock, and HealthLake enables the system to auto-scale and optimizes operating costs (pay-as-you-go).

### Limitations & Challenges

* **Data Security (HIPAA/Compliance):** The healthcare sector is extremely sensitive about personal health information (PII/PHI). While AWS guarantees high security, deploying this in Vietnam still faces legal barriers regarding storing patient data on international Cloud servers.
* **GenAI Cost:** Consistently invoking Bedrock APIs for a massive volume of historical data (millions of old records) can result in high costs unless an optimization and filtering strategy is implemented from the start.
* **Latency:** Processing with Large Language Models (LLMs) to extract structure is slower than reading standard databases. This architecture is better suited for asynchronous (Async/Batch) processing than real-time requests.

### Conclusion

* **GenAI is more than just Chat:** The most practical application of GenAI today is **Data Automation** – converting unstructured, messy data into clean, structured records.
* **Event-Driven Architecture Design:** Using EventBridge to trigger processing workflows when files are uploaded to S3 keeps the architecture decoupled and running smoothly under load.

---

* **Post Link:** [AWS Study Group Facebook Post](https://www.facebook.com/groups/awsstudygroupfcj/permalink/2197242824374011/?rdid=J73RSVJ6OJIF5f1h#)
* **Reference Link:** [Automate medical record digitization with Amazon Bedrock Data Automation and AWS HealthLake - AWS Architecture Blog](https://aws.amazon.com/vi/blogs/architecture/automate-medical-record-digitization-with-amazon-bedrock-data-automation-and-aws-healthlake/)