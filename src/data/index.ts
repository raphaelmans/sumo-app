import { LogSummaryItem } from "@features/update-logs/view_types";

//generate 5 LogSummaryItem data items
export const sampleLogSummaryItems: LogSummaryItem[] = [
    {
      categoryName: 'Entertainment',
      subscriptionName: 'Netflix',
      lastUpdated: new Date('2023-04-24T00:00:00.000Z'),
    },
    {
      categoryName: 'Music',
      subscriptionName: 'Spotify',
      lastUpdated: new Date('2023-04-23T00:00:00.000Z'),
    },
    {
      categoryName: 'Fitness',
      subscriptionName: 'Gym Membership',
      lastUpdated: new Date('2023-04-20T00:00:00.000Z'),
    },
    {
      categoryName: 'Education',
      subscriptionName: 'Coursera',
      lastUpdated: new Date('2023-04-19T00:00:00.000Z'),
    },
    {
      categoryName: 'Productivity',
      subscriptionName: 'Todoist',
      lastUpdated: new Date('2023-04-18T00:00:00.000Z'),
    },
  ];