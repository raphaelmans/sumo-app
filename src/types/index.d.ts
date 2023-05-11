import { AppUserStatus } from "@features/app-user/types";
import { SubscriptionStatus } from "@features/subscription/types";

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
  status: SubscriptionStatus;
  subscriptionCategoryId: number;
  userId: string
};

export type ArchivedSubscription = {
  id: number;
  subscriptionId: number;
  subscriptionName: string;
  subscriptionCost: number;
  billingCycle: string;
  creationDate: Date;
  lastUpdated: Date;
  status: SubscriptionStatus;
  subscriptionCategoryId: number;
  userId: string
};

export type RegisterAuthUser = {
  password: string;
  confirmPassword: string;
  emailAddress: string;
  userName: string;
  role: string;
  firstName: string;
  lastName: string;
  address: string;
  status: string;
};

// User
export type AppUser = {
  id: string;
  userName: string;
  emailAddress: string;
  firstName: string;
  lastName: string;
  address: string;
  status: AppUserStatus;
};

// AuditLog
export type AuditLog = {
  id: number;
  userId: string
  pastSubscription: ArchivedSubscription;
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
  userId: string
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
