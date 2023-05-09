import { LogSummaryItem } from "@features/update-logs/view_types";
import {
  DashboardItem,
  Subscription,
  SubscriptionCategory,
  AppUser,
} from "@types";

//generate 5 LogSummaryItem data items
export const sampleLogSummaryItems: LogSummaryItem[] = [
  {
    categoryName: "Entertainment",
    subscriptionName: "Netflix",
    lastUpdated: new Date("2023-04-24T00:00:00.000Z"),
  },
  {
    categoryName: "Music",
    subscriptionName: "Spotify",
    lastUpdated: new Date("2023-04-23T00:00:00.000Z"),
  },
  {
    categoryName: "Fitness",
    subscriptionName: "Gym Membership",
    lastUpdated: new Date("2023-04-20T00:00:00.000Z"),
  },
  {
    categoryName: "Education",
    subscriptionName: "Coursera",
    lastUpdated: new Date("2023-04-19T00:00:00.000Z"),
  },
  {
    categoryName: "Productivity",
    subscriptionName: "Todoist",
    lastUpdated: new Date("2023-04-18T00:00:00.000Z"),
  },
];

export const sampleCategories: SubscriptionCategory[] = [
  {
    id: 1,
    categoryName: "Basic",
  },
  {
    id: 2,
    categoryName: "Premium",
  },
  {
    id: 3,
    categoryName: "Ultimate",
  },
  {
    id: 4,
    categoryName: "Pro",
  },
];

export const sampleSubscriptions: Subscription[] = [
  {
    id: 1,
    subscriptionName: "Basic Monthly Plan",
    subscriptionCategoryId: sampleCategories[0].id,
    subscriptionCost: 9.99,
    billingCycle: "monthly",
    nextBillingDate: new Date("2023-05-01"),
    endDate: null,
    creationDate: new Date("2023-04-25"),
    lastUpdated: new Date("2023-04-25"),
    status: "active",
  },
  {
    id: 2,
    subscriptionName: "Premium Monthly Plan",
    subscriptionCategoryId: sampleCategories[1].id,
    subscriptionCost: 29.99,
    billingCycle: "monthly",
    nextBillingDate: new Date("2023-05-05"),
    endDate: null,
    creationDate: new Date("2023-04-23"),
    lastUpdated: new Date("2023-04-23"),
    status: "active",
  },
  {
    id: 3,
    subscriptionName: "Ultimate Monthly Plan",
    subscriptionCategoryId: sampleCategories[2].id,
    subscriptionCost: 99.99,
    billingCycle: "monthly",
    nextBillingDate: new Date("2023-05-15"),
    endDate: null,
    creationDate: new Date("2023-04-20"),
    lastUpdated: new Date("2023-04-20"),
    status: "active",
  },
  {
    id: 4,
    subscriptionName: "Pro Monthly Plan",
    subscriptionCategoryId: sampleCategories[3].id,
    subscriptionCost: 49.99,
    billingCycle: "monthly",
    nextBillingDate: new Date("2023-05-07"),
    endDate: null,
    creationDate: new Date("2023-04-19"),
    lastUpdated: new Date("2023-04-19"),
    status: "active",
  },
];

export const sampleUsers: AppUser[] = [
  {
    id: 1,
    email: "john.doe@example.com",
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St, Anytown, USA",
    status: "active",
  },
  {
    id: 2,
    email: "jane.doe@example.com",
    firstName: "Jane",
    lastName: "Doe",
    address: "456 Oak Ave, Anytown, USA",
    status: "active",
  },
  {
    id: 3,
    email: "bob.smith@example.com",
    firstName: "Bob",
    lastName: "Smith",
    address: "789 Elm St, Anytown, USA",
    status: "inactive",
  },
  {
    id: 4,
    email: "sarah.johnson@example.com",
    firstName: "Sarah",
    lastName: "Johnson",
    address: "101 Maple Ave, Anytown, USA",
    status: "active",
  },
  {
    id: 5,
    email: "mike.brown@example.com",
    firstName: "Mike",
    lastName: "Brown",
    address: "222 Pine St, Anytown, USA",
    status: "active",
  },
];

export const sampleDashboardData = [
  {
    user: { firstName: "John", lastName: "Doe" },
    subscriptionName: "Netflix",
    categoryName: "Entertainment",
    subscriptionCost: 9.99,
    billingCycle: "Monthly",
    nextBillingDate: new Date("2023-05-15"),
    status: "Active",
  },
  {
    user: { firstName: "Jane", lastName: "Smith" },
    subscriptionName: "Spotify",
    categoryName: "Music",
    subscriptionCost: 4.99,
    billingCycle: "Monthly",
    nextBillingDate: new Date("2023-05-10"),
    status: "Active",
  },
  {
    user: { firstName: "Michael", lastName: "Brown" },
    subscriptionName: "Gym Membership",
    categoryName: "Fitness",
    subscriptionCost: 49.99,
    billingCycle: "Monthly",
    nextBillingDate: new Date("2023-05-01"),
    status: "INACTIVE",
  },
  {
    user: { firstName: "Emily", lastName: "Johnson" },
    subscriptionName: "Coursera",
    categoryName: "Education",
    subscriptionCost: 39.99,
    billingCycle: "Monthly",
    nextBillingDate: new Date("2023-05-20"),
    status: "Active",
  },
  {
    user: { firstName: "Daniel", lastName: "Williams" },
    subscriptionName: "Todoist",
    categoryName: "Productivity",
    subscriptionCost: 3.99,
    billingCycle: "Monthly",
    nextBillingDate: new Date("2023-05-08"),
    status: "Active",
  },
];
