import { LRUCache } from 'lru-cache';

export function rateLimit({ interval, uniqueTokenPerInterval }) {
  const cache = new LRUCache({
    max: uniqueTokenPerInterval || 500,
    ttl: interval || 60000,
  });

  return {
    check: (limit, token) =>
      new Promise((resolve) => {
        const tokenCount = cache.get(token) || [0];
        if (tokenCount[0] === 0) {
          cache.set(token, tokenCount);
        }
        tokenCount[0] += 1;

        const currentUsage = tokenCount[0];
        const isRateLimited = currentUsage > limit;
        
        resolve({
          isRateLimited,
          limit,
          currentUsage,
          remainingTime: cache.getRemainingTTL(token)
        });
      }),
  };
}