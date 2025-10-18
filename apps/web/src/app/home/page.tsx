import BottomNav from '../../components/rg/BottomNav';
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