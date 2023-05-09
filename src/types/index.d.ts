// SubscriptionCategory
export type SubscriptionCategory = {
  id: number;
  categoryName: string;
};

// Subscription
export type Subscription = {
  id: number;
  subscriptionName: string;
  subscriptionCost: number;
  billingCycle: string;
  creationDate: Date;
  lastUpdated: Date;
  status: string;
  subscriptionCategoryId: number;
  appUserId: number;
};

// User
export type AppUser = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  status: string;
};

// AuditLog
export type AuditLog = {
  id: number;
  appUserId: number;
  subscriptionId: number;
  action: string;
  timestamp: Date;
};

// UserSubscription

export type UserSubscription = {
  id: number;
  subscriptionDate: Date;
  nextBillingDate: Date;
  cost: number;
  status: string;
  appUserId: number;
  subscriptionId: number;
};

export type DashboardItem = {
  user: {
    firstName: AppUser["firstName"];
    lastName: AppUser["lastName"];
  };
  subscriptionName: Subscription["subscriptionName"];
  categoryName: SubscriptionCategory["categoryName"];
  subscriptionCost: Subscription["subscriptionCost"];
  billingCycle: Subscription["billingCycle"];
  nextBillingDate: Subscription["nextBillingDate"];
  status: Subscription["status"];
};
