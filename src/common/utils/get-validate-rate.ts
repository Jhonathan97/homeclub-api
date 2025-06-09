import { ApartmentRate } from 'prisma/generated/db1';

export function getRateToday(
  rates: ApartmentRate[] = [],
  today: Date,
): number | null {
  for (const rate of rates) {
    const start = new Date(rate.startDate);
    const end = new Date(rate.endDate);
    if (start <= today && today <= end) {
      return Number(rate.price);
    }
  }
  return null;
}
