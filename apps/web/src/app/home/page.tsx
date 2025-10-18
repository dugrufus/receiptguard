import BottomNav from '../../components/rg/BottomNav';
import { t } from '@/rg/copy'
import Card from '../../components/rg/Card';
import CollapsibleSection from '../../components/rg/CollapsibleSection';
import { t } from '../../rg/i18n/t';
export default function HomePage() {
  return (
    <main className=""mx-auto max-w-xl pb-20 p-4 space-y-4"">
      {/* [RG:BLOCK HOME.PRICE_DROPS START] */}
      <Card id=""home-price-drops"" title={<span>{t('home.priceDrops.title')}</span>}><div className=""text-sm opacity-80""> </div></Card>
      {/* [RG:BLOCK HOME.PRICE_DROPS END] */}
      {/* [RG:BLOCK HOME.RETURN_WINDOWS START] */}
      <Card id=""home-return-windows"" title={<span>{t('home.returnWindows.title')}</span>}><div className=""text-sm opacity-80""> </div></Card>
      {/* [RG:BLOCK HOME.RETURN_WINDOWS END] */}
      {/* [RG:BLOCK HOME.TRACKING START] */}
      <CollapsibleSection summary={<span>{t('home.tracking.title')}</span>}><div className=""text-sm opacity-80""> </div></CollapsibleSection>
      {/* [RG:BLOCK HOME.TRACKING END] */}
      {/* [RG:BLOCK HOME.PURCHASES START] */}
      <Card id=""home-purchases"" title={<span>{t('home.purchases.title')}</span>}><div className=""text-sm opacity-80""> </div></Card>
      {/* [RG:BLOCK HOME.PURCHASES END] */}
      <BottomNav />
    </main>
  );
}

{/* [RG:BLOCK HOME.SAFETY START] */}
<section role="region" aria-labelledby="home-safety" className="rounded-2xl border p-4 flex items-center justify-between">
  <h2 id="home-safety" className="text-base font-medium">{t('recall.title')}</h2>
  <span aria-label="notice count" className="inline-flex items-center justify-center min-w-8 h-8 rounded-full border text-sm">{0}</span>
</section>
{/* [RG:BLOCK HOME.SAFETY END] */}


// // // [RG:BLOCK HOME.RETURNS_COMBINE_CHIP START]
// Chip: ""Combine returns"" — link to /return/combine/[merchant]
// NOTE: Hook up to t('combine.title') per copy rules.
// [RG:BLOCK HOME.RETURNS_COMBINE_CHIP END]