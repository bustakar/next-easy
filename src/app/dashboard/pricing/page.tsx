import Pricing from '@/components/pricing/pricing-table';

export default function DashboardPage() {
  return (
    <div className="flex w-full items-center justify-center p-6 md:p-10">
      <div className="w-full">
        <Pricing />
      </div>
    </div>
  );
}
