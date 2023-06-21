export const purchasesData = [
  {
    id: 1,
    name: 'Black Rice Seed',
    description: 'Barma Combodia',
    unit: 'Kg',
    quantity: 120,
    totalAmount: 500,
    advancePaid: 200,
    payable: 300,
  },
  {
    id: 2,
    name: 'Potash fertilizer',
    description: 'Description for Potash',
    unit: 'Bag',
    quantity: 19,
    totalAmount: 1000,
    advancePaid: 400,
    payable: 600,
  },
  {
    id: 3,
    name: 'Water',
    description: 'for Schedule Data Entry',
    unit: 'Liters',
    quantity: 20,
    totalAmount: 800,
    advancePaid: 100,
    payable: 700,
  },
];

export const inventoryData = [
  {
    id: 1,
    name: 'Black Rice Seed',
    description: 'Barma Combodia',
    unit: 'Kg',
    stockAlreadyScheduled: 12,
    purchasedStockQuantity: 120,
    scheduledForSchedule: 120,
    UsedFromStore: 100,
    StockCanBeUsedForCrops: 0,
    stockPresentInStore: 20,
    assignToCrop: '',
  },
  {
    id: 2,
    name: 'Black Rice Seed',
    description: 'Barma Combodia',
    unit: 'Kg',
    stockAlreadyScheduled: 12,
    purchasedStockQuantity: 120,
    scheduledForSchedule: 120,
    UsedFromStore: 100,
    StockCanBeUsedForCrops: 0,
    stockPresentInStore: 20,
    assignToCrop: 'Rice',
  },
  {
    id: 3,
    name: 'Black Rice Seed',
    description: 'Barma Combodia',
    unit: 'Kg',
    stockAlreadyScheduled: 12,
    purchasedStockQuantity: 120,
    scheduledForSchedule: 120,
    UsedFromStore: 100,
    StockCanBeUsedForCrops: 0,
    stockPresentInStore: 20,
    assignToCrop: 'Potash',
  },
];

export const cropsData = [
  {
    id: 1,
    name: 'Black Rice Seed',
    description: 'This is crops description',
  },
  {
    id: 2,
    name: 'Black Rice Seed',
    description: 'This is crops description',
  },
  {
    id: 3,
    name: 'Black Rice Seed',
    description: 'This is crops description',
  },
  {
    id: 4,
    name: 'Black Rice Seed',
    description: 'This is crops description',
  },
];

export const cropsUtilizationData = [
  {
    id: 1,
    name: 'Black Rice Seed',
    cropName: 'Rice',
    unit: 'Kg',
    quantityScheduled: 120,
    quantityUsed: 120,
    expectedReleaseDate: '22/04/2022',
    actualReleaseDate: '22/04/2022',
    status: 'Used',
    description: 'This is description for crop rice',
  },
];
