interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Create and manage bookings',
    'Read car information',
    'Create and manage reviews',
    'Create reports',
  ],
  ownerAbilities: [
    'Manage users',
    'Manage companies',
    'Manage cars',
    'Manage bookings',
    'Manage reviews',
    'Manage reports',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/3f538bd1-1eee-4a58-8e0c-709516bfacf9',
};
