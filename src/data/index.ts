import {
  SubscriptionCategory,
} from "@types";


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
