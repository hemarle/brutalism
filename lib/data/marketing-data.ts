import { faker } from '@faker-js/faker';

const MAX_CHART_DATA_POINTS = 7;

// Timeline periods
export type TimelinePeriod = '7days' | '14days' | '1month';

// Generate chart data based on timeline
export const generateChartData = (period: TimelinePeriod) => {
  const getDaysCount = (period: TimelinePeriod): number => {
    switch (period) {
      case '7days': return 7;
      case '14days': return 14;
      case '1month': return 30;
      default: return 7;
    }
  };

  const days = getDaysCount(period);
  const data = [];

  for (let i = 0; i < Math.min(days, MAX_CHART_DATA_POINTS); i++) { // Limit to MAX_CHART_DATA_POINTS for better chart readability
    const date = new Date();
    date.setDate(date.getDate() - (days - i - 1));
    
    data.push({
      name: period === '1month' 
        ? `Week ${Math.floor(i / MAX_CHART_DATA_POINTS) + 1}` 
        : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      uv: faker.number.int({ min: 1000, max: 5000 }),
      pv: faker.number.int({ min: 800, max: 4000 }),
      amt: faker.number.int({ min: 1500, max: 3000 })
    });
  }

  return data;
};

// Generate stats data based on timeline
export const generateStatsData = (period: TimelinePeriod) => {
  const multiplier = period === '7days' ? 1 : period === '14days' ? 2 : 4;
  
  return {
    totalSpend: {
      current: faker.number.int({ min: 5000 * multiplier, max: 15000 * multiplier }),
      previous: faker.number.int({ min: 4000 * multiplier, max: 12000 * multiplier })
    },
    visitors: {
      current: faker.number.int({ min: 800 * multiplier, max: 2000 * multiplier }),
      previous: faker.number.int({ min: 600 * multiplier, max: 1800 * multiplier })
    },
    acquisition: {
      current: faker.number.float({ min: 1.5, max: 4.5, fractionDigits: 1 }),
      previous: faker.number.float({ min: 1.0, max: 4.0, fractionDigits: 1 })
    },
    revenue: {
      current: faker.number.int({ min: 85, max: 98 }),
      previous: faker.number.int({ min: 80, max: 95 })
    }
  };
};

// Generate platform budget data
export const generatePlatformData = (period: TimelinePeriod) => {
  const platforms = [
    { name: 'Instagram', src: "/assets/icons/facebook.svg" },
    { name: 'X (Twitter)', src: "/assets/icons/x.svg" },
    { name: 'Google', src: "/assets/icons/google.svg" },
    { name: 'TikTok', src: "/assets/icons/tiktok.svg" },
    { name: 'Xing', src: "/assets/icons/xing.svg" },
  ];

  const multiplier = period === '7days' ? 1 : period === '14days' ? 2 : 4;

  return platforms.map(platform => ({
    ...platform,
    amount: `$${faker.number.int({ min: 500 * multiplier, max: 5000 * multiplier }).toLocaleString()}`,
    percentage: faker.number.int({ min: 15, max: 90 })
  }));
};

// Seed faker for consistent data during development
faker.seed(12345);

// Helper function to generate individual stat data
export const generateSingleStat = (type: 'currency' | 'number' | 'percentage', multiplier: number = 1) => {
  let baseMin: number, baseMax: number;
  
  switch (type) {
    case 'currency':
      baseMin = 5000;
      baseMax = 15000;
      break;
    case 'number':
      baseMin = 800;
      baseMax = 2000;
      break;
    case 'percentage':
      baseMin = 1.5;
      baseMax = 4.5;
      break;
    default:
      baseMin = 100;
      baseMax = 1000;
  }
  
  return {
    current: type === 'percentage' 
      ? faker.number.float({ min: baseMin, max: baseMax, fractionDigits: 1 })
      : faker.number.int({ min: baseMin * multiplier, max: baseMax * multiplier }),
    previous: type === 'percentage'
      ? faker.number.float({ min: baseMin - 1, max: baseMax - 1, fractionDigits: 1 })
      : faker.number.int({ min: (baseMin - 500) * multiplier, max: (baseMax - 500) * multiplier })
  };
};
