
import { SubscriptionAPIRoutes, SubscriptionService } from '@shared/services/subscription-service'
import useSWR from 'swr'

export const useSubscriptions = () => {
    

    const {data, isLoading, isValidating, error} = useSWR(SubscriptionAPIRoutes.getAllSubscriptions,SubscriptionService.getAllSubscriptions);


    return {
        data,
        isLoading,
        isValidating,
        error
    }
}
