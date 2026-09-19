# AWS reference

React: S3 + CloudFront or container hosting. API: ECS/Fargate or EKS behind ALB/API Gateway. Async extraction: SQS + DLQ + workers. Documents: encrypted S3. Secrets: Secrets Manager. Keys: KMS. Telemetry: CloudWatch/OpenTelemetry. MongoDB: Atlas is a natural managed choice; if considering DocumentDB or another compatible service, validate required Mongo API/features first. Use private networking, workload identity, least privilege, egress controls and multi-AZ design.
