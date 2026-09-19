# Threat model

Assets: resumes, job descriptions, recruiter identities, score/evidence records, model credentials and audit data.

Threats: resume prompt injection, cross-tenant access, provider data leakage, sensitive-attribute leakage, malicious uploads, model hallucination, score tampering and privileged insider access.

Controls: untrusted-document boundary, no model action authority, tenant-scoped authorization, redaction/minimization, malware/file validation, schema validation, deterministic scoring, immutable score versions, encryption, secrets isolation, egress policy and audit.
