// SubscriptionCategory
export type SubscriptionCategory = {
  id: number;
  categoryName: string;
};

// Subscription
export type Subscription = {
  id: number;
  subscriptionName: string;
  subscriptionCategoryId: number;
  subscriptionCost: number;
  billingCycle: string;
  nextBillingDate: Date;
  endDate: Date | null;
  creationDate: Date;
  lastUpdated: Date;
  status: string;
};

// User
export type User = {
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
  userId: number;
  subscriptionId: number;
  action: string;
  timestamp: Date;
};

// UserSubscription
export type UserSubscription = {
  id: number;
  userId: number;
  subscriptionId: number;
  subscriptionDate: Date;
  nextBillingDate: Date;
  cost: number;
  status: string;
};

export type DashboardItem = {
  user: {
    firstName: User["firstName"];
    lastName: User["lastName"];
  };
  subscriptionName: Subscription["subscriptionName"];
  categoryName: SubscriptionCategory["categoryName"];
  subscriptionCost: Subscription["subscriptionCost"];
  billingCycle: Subscription["billingCycle"];
  nextBillingDate: Subscription["nextBillingDate"];
  status: Subscription["status"];
};
