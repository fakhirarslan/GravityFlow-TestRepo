@@ -34,6 +34,23 @@ export function handleRateLimitResponse(res: Response, bucket: TokenBucket) {
-  res.status(429).send({ error: 'Too Many Requests' });
+  const retryAfter = bucket.getResetSeconds();
+  res.setHeader('Retry-After', String(retryAfter));
+  res.setHeader('X-RateLimit-Reset', String(Date.now() + retryAfter * 1000));
+  res.status(429).json({ error: 'Rate limit exceeded', retryAfter });
 }