export function formatBanner(version, origin) {
  return `[Origin ES Module Loaded] version=${version} from=${origin}`;
}

export function buildNoticeHtml(version, moduleUrl) {
  const origin = new URL(moduleUrl).origin;
  return `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:12px 16px;border-radius:10px;background:linear-gradient(90deg,rgba(245,158,11,0.16),rgba(239,68,68,0.14));border:1px solid rgba(251,191,36,0.45);font-size:13px;color:#fef3c7;">
      <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
        <span style="background:#f59e0b;color:#111827;font-weight:800;font-size:11px;padding:2px 8px;border-radius:999px;">主站源站 JS 跨源直出</span>
        <span>本公告组件代码<strong>不在本地服务器</strong>，由浏览器直接从 <code style="color:#fde68a;">${origin}</code>（HTTP 200 非 LFS 源站）跨源 <code style="color:#fde68a;">import()</code> 加载并渲染（v${version}）。</span>
      </div>
      <span style="font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11px;color:#fcd34d;opacity:0.9;">entry.js → ./helper.js</span>
    </div>
  `;
}
