'use client';
import React, { useState } from 'react';
import { t } from '@/rg/copy/i18n';

export default function ScopeDrawer() {
  const [includeReceipts, setIncludeReceipts] = useState(true);
  const [includeConfirmations, setIncludeConfirmations] = useState(true);
  const [includeShipping, setIncludeShipping] = useState(true);
  const [includeMerchants, setIncludeMerchants] = useState('');
  const [excludeDomains, setExcludeDomains] = useState('');
  const matched = 0;

  return (
    <aside role="dialog" aria-modal="true" aria-label={t('settings.scope.title')} className="p-4 gap-4 grid">
      {/* [RG:BLOCK SET.SCOPE_DRAWER JSX START] */}
      <h2 className="text-xl font-semibold">{t('settings.scope.title')}</h2>
      <div className="space-y-3">
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeReceipts} onChange={e=>setIncludeReceipts(e.target.checked)} aria-label={t('settings.scope.receipts')} />
          <span>{t('settings.scope.receipts')}</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeConfirmations} onChange={e=>setIncludeConfirmations(e.target.checked)} aria-label={t('settings.scope.confirmations')} />
          <span>{t('settings.scope.confirmations')}</span>
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" checked={includeShipping} onChange={e=>setIncludeShipping(e.target.checked)} aria-label={t('settings.scope.shipping')} />
          <span>{t('settings.scope.shipping')}</span>
        </label>
      </div>
      <div className="grid gap-2">
        <label className="text-sm">{t('settings.scope.includeMerchants')}</label>
        <input className="border rounded p-2" value={includeMerchants} onChange={e=>setIncludeMerchants(e.target.value)} placeholder="Amazon, Target" />
      </div>
      <div className="grid gap-2">
        <label className="text-sm">{t('settings.scope.excludeDomains')}</label>
        <input className="border rounded p-2" value={excludeDomains} onChange={e=>setExcludeDomains(e.target.value)} placeholder="newsletters.example.com, ads.example.com" />
      </div>
      <div aria-live="polite" className="text-sm opacity-80">{t('settings.scope.previewCount').replace('{count}', String(matched))}</div>
      {/* [RG:BLOCK SET.SCOPE_DRAWER JSX END] */}
    </aside>
  );
}
