import { buildNoticeHtml, formatBanner } from './helper.js';

export const MODULE_VERSION = '2026.11.20-repro-v2';

export function runDemo() {
  return {
    ok: true,
    version: MODULE_VERSION,
    moduleUrl: import.meta.url,
    message: formatBanner(MODULE_VERSION, new URL(import.meta.url).origin),
  };
}

export function mountNotice(container) {
  if (!container) return runDemo();
  container.innerHTML = buildNoticeHtml(MODULE_VERSION, import.meta.url);
  return runDemo();
}
