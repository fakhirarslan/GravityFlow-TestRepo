@@ -0,0 +1,18 @@
+import { describe, it, expect } from 'vitest';
+import { executeWorkflowStep } from './debug-run';
+
+describe('GH-31 Workflow', () => {
+  it('should process payload successfully', () => {
+    const res = executeWorkflowStep({ id: 'GH-31' });
+    expect(res.status).toBe('processed');
+  });
+});