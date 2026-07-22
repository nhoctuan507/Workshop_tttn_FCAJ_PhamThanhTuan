---
title: "Event 2"
date: 2026-05-23
weight: 1
chapter: false
pre: " <b> 4.2. </b> "
---


# Summary Report: "FCAJ Community Day" (May 2026)

### Event Objectives

*   **Program Goal:** Not just a conference or workshop, but a vibrant space for the IT community to connect, network, share inspiration, and build partnerships or friendships.
*   **Key Messages:** 6 sharing sessions from experts discussing real-world topics ranging from AI, Cloud computing, to practical career experiences.
*   **Value for Attendees:** Providing practical industry insights, building an AI-adoption mindset for enterprises, sharing advanced technical concepts, and offering networking opportunities.

### Speakers

1.  **Quynh Mai:** Event MC.
2.  **Nguyen Gia Hung:** Solution Architect / Sáng lập FCAJ at AWS Vietnam.
3.  **Tinh Truong:** Platform Engineer at Gotam X.
4.  **Hai Anh:** Representative at Pacific Vietnam.
5.  **Nguyen Han Thinh:** DevOps Engineer.
6.  **Mai, Thao & Uyen:** Software Engineers / UTM Morpho Hackathon team.
7.  **Duc Dao:** Presented on LLM configurations (Temperature & determinism).
8.  **Lam Vy:** Representative at VBBank, sharing on enterprise Multi-agent systems.

### Key Highlights

#### 1. Job Market Trends & Talent Requirements (Nguyen Gia Hung)
*   AI reduces development costs, triggering a surge in software demand. This creates a new work stream: Platform Engineering to repair and operate code written by users who rely on AI but do not understand its inner workings.
*   A university degree remains a mandatory filter for HR. Candidates must have strong technical baselines, understand real-world business use cases, and showcase production-ready products rather than simple toy demos.

#### 2. Optimization in Prompt Engineering (Tinh Truong)
*   **Context Pollution:** Users often pollute context by mixing unrelated topics (e.g. asking about travel planning and coding in the same chat thread), which confuses the LLM.
*   **Solutions:** Supply the AI with clear **Goals**, specific **Roles**, and precise **Context** related to the project or company.
*   **Warning:** Beware of the "Internet Builder" syndrome—blindly copying online code snippets/tools without tailoring them to the organization's unique context.

#### 3. Enterprise AI Assistants (Hai Anh)
*   Using AI Agents as assistants to replace manual data analysis.
*   **Demo:** Uploading raw Excel files directly to chat to auto-generate dashboards, and automating meeting summaries. Using Model Context Protocols (MCP) to extend LLM capabilities.

#### 4. Amazon CloudFront & Cost Optimization (Han Thinh)
*   **Flat-rate Pricing:** Introduces CloudFront's new pricing mechanism to help businesses prevent bill shocks (build spikes) during DDoS attacks.
*   **Core Tech:** VPC Origin (hiding origins in private subnets without exposing them to the internet), mTLS (mutual TLS for banking/financial applications), HTTP/3, and automated content compression.

#### 5. Lessons from a 36-Hour Hackathon (Mai, Thao & Uyen)
*   **Interactive Editing:** Built an AI tool that generates UI and allows users to edit HTML components directly instead of forcing the LLM to regenerate from scratch, saving token costs.
*   **Takeaway:** Avoid over-generation (overloading features which leads to prompt truncation or token limit issues) and focus purely on a single core feature.

#### 6. Temperature & Determinism in LLMs (Duc Dao)
*   Setting `Temperature = 0` does not guarantee 100% identical outputs every run.
*   GPU floating-point rounding errors combined with provider-side batching/optimizations lead to minor variations in outputs.
*   **Best Practice:** Always design downstream systems to handle minor format variations and test robustly.

#### 7. Multi-Agent Systems in Enterprises (Lam Vy - VBBank)
*   **Credit Scoring:** Built a Multi-agent system to evaluate startup credit scores using non-traditional metrics (intellectual property, marketing, business models).
*   **Task Specialization:** Split tasks among specialized agents (financial analysis, competitor research, risk evaluation) to respect Context Window limits.
*   **Security:** Focused on guardrails against prompt injection, rotating API keys regularly, and protecting against MCP attack vectors.

### Key Takeaways

#### Thinking & Methods
*   **AI Mindset & Adoption:** Solve actual end-user pain points instead of chasing tech trends.
*   Enterprise systems must be secure, reliable, and compliant.

#### Technical Knowledge
*   Designing Multi-agent architectures over single-agent systems for large, multi-disciplinary datasets.
*   Bases of Temperature and LLM determinism.
*   Infrastructure as Code (IaC) using Terraform.

#### Best Practices & Experience
*   **Review Code:** Do not blindly copy/paste ChatGPT output into enterprise codebases without deep review.
*   **Calculate ROI:** Demonstrate internal solutions' values with solid cost-savings and time-reduction metrics.
*   **Security:** Regularly rotate API keys and Access credentials to avoid unexpected bills.

### Applying to Work

*   **Current Projects:**
    *   Deploy CloudFront VPC Origin to protect origin servers.
    *   Implement AI guardrails to block sensitive inputs and outputs.
    *   Inject specific company docs and context into LLM inputs.
*   **Technologies to Explore:** Model Context Protocol (MCP) extensions for real-world interactions; Terraform for reproducible infrastructure.
*   **Workflow Optimization:** Run specialized, competing agents to cross-examine outputs instead of placing all tasks on a single chatbot; target a single pain point rather than over-generating features.

### Event Experience

#### Learning from Speakers
*   Gained industry lessons on handling DDoS spikes, code review failures, and HR security compliance.

#### Technical Demos
*   Watched real-time UI generation (mockups to HTML), automated Excel reporting, and side-by-side Bedrock vs Local LLM comparisons.

#### Networking & Community
*   Engaged with a highly active community (filling up the hall and floor spaces on Level 36) to seek partnerships and exchange ideas.

#### Key Takeaway
*   Solid Software Engineering (Backend, Security, DB) remains the ultimate tool for developers in production environments, even in the AI era.

### Lessons Learned

*   **Future of Coding:** As AI makes software creation cheaper, humans will focus heavily on Platform Engineering, integration, and bug fixing of AI-generated code.
*   **Enterprise Mindset:** Focus on risk management, security compliance, and absolute accountability.
*   **Path Forward:** Do not stay a superficial "Internet builder". Keep your CS fundamentals (JWT, OAuth, databases) solid to integrate AI tools safely and effectively.

---

### Event Photos

Here are some highlights from the event:

<div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
  <img src="/images/fcaj_community_day_2026_1.png" alt="Presenter sharing about Context is Everything" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
  <img src="/images/fcaj_community_day_2026_2.png" alt="Presenter sharing about Multi-Agent Paradigm & Security Guardrails" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
  <img src="/images/fcaj_community_day_2026_3.png" alt="Hackathon UTM Morpho Team sharing their experience" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
  <img src="/images/fcaj_community_day_2026_4.jpg" alt="FCAJ Community Day Group Photo (May 2026)" style="max-width: 90%; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);" />
</div>
