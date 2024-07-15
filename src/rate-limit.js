import { LRUCache } from 'lru-cache';

export function rateLimit({ interval, uniqueTokenPerInterval }) {
  const tokenCache = new LRUCache({
    max: uniqueTokenPerInterval || 500,
    ttl: interval || 60000,
  });

  return {
    check: (token) =>
      new Promise((resolve) => {
        const tokenCount = tokenCache.get(token) || 0;
        const currentTimestamp = Date.now();
        const isRateLimited = tokenCount > 0;
        
        if (!isRateLimited) {
          tokenCache.set(token, currentTimestamp);
        }

        resolve({
          isRateLimited,
          limit: 1,
          remainingTime: isRateLimited ? tokenCache.getRemainingTTL(token) : 0,
        });
      }),
  };
}