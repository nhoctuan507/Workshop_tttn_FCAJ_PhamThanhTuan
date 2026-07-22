---
title: "Blog 3"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 3.3. </b> "
---
}

# Scale your AWS Storage Gateway AL2023 migration with infrastructure as code

Amazon Linux 2 (AL2) reaches its end of standard support on **June 30, 2026**. All AL2-based AWS Storage Gateway appliances (including S3 File Gateway, Tape Gateway, and Volume Gateway) must be migrated to Amazon Linux 2023 (AL2023) before this date to continue receiving security updates and support.

Since there is no in-place upgrade path, migration requires deploying a new AL2023 appliance and transferring configuration and cache data. Managing this manually at scale can be error-prone and time-consuming. Fortunately, AWS provides an Infrastructure as Code (IaC) approach to automate and streamline this migration process.

### Migration Architecture

Below is the high-level architecture showcasing the migration path using Terraform and Ansible:

<img src="/images/sgw_al2_al3_migration_arch.png" alt="AWS Storage Gateway AL2 to AL2023 Migration Architecture Diagram" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); margin: 20px 0;" />

* **Infrastructure Provisioning**: Deploying the new AL2023 virtual appliance (EC2 or VMware-based) using updated AWS Storage Gateway Terraform modules.
* **Orchestration**: Utilizing an Ansible playbook to run operational actions sequentially—stopping the source gateway, detaching the cache disks, attaching them to the destination gateway, running the migration API, and validating the final state.

### Key Benefits of the IaC Approach

* **Consistency and Repeatability**: Version control your gateway configurations and run migrations reliably across multiple accounts and regions.
* **Minimized Downtime**: Automating operational steps (disk detachment, migration API calls) minimizes the time gateways spend offline.
* **Security Standards**: Automatically configures best practices, such as enforcing IMDSv2 by default on the new EC2 gateway instances.

### Essential Migration Steps

1. **Access updated Terraform Modules**: Utilize the official `aws-ia/storagegateway/aws` Terraform module which includes migration examples like `s3-filegateway-migration-ec2`.
2. **Execute Migration**: Run the Ansible playbook alongside Terraform to orchestrate the switch.
3. **Verify Deprecation Status**: Confirm that the deprecation warning is cleared on the AWS Console under the Gateway's Details tab or using the `DescribeGatewayInformation` API.

---

* **Post Link:** [AWS Study Group Facebook Post](https://www.facebook.com/groups/awsstudygroupfcj/permalink/2200302014068092/?rdid=vvCFdHtjh7prr2iC#)
* **Reference Link:** [Scale your AWS Storage Gateway AL2023 migration with infrastructure as code - AWS Storage Blog](https://aws.amazon.com/vi/blogs/storage/scale-your-aws-storage-gateway-al2023-migration-with-infrastructure-as-code/)