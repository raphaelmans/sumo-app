import { Subscription, SubscriptionCategory } from "@types";


export type LogSummaryItem = Pick<SubscriptionCategory, 'categoryName'> & Pick<Subscription, 'subscriptionName' | 'lastUpdated'>;
