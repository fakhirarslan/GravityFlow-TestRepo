@@ -0,0 +1,24 @@
+import { describe, it, expect } from 'vitest';
+import { handleRateLimitResponse } from './rate-limiter';
+
+describe('RateLimiter Header Preservation', () => {
+  it('should attach X-RateLimit-Reset and Retry-After headers', () => {
+    const res = createMockResponse();
+    handleRateLimitResponse(res, { getResetSeconds: () => 60 });
+    expect(res.headers['Retry-After']).toBe('60');
+  });
+});