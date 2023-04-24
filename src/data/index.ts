import { LogSummaryItem } from "@features/update-logs/view_types";
import { Subscription, SubscriptionCategory } from "@types";

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
