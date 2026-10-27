import { useState, useEffect } from 'react';
import { fetchRuns } from '../data/runsService';
import type { Run } from '../types';

export function  useRuns() {
  const [runs, setRuns] = useState<Run[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0)
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchRuns();  
        setRuns(data);
      } catch {
        setError('Failed to fetch runs');
      } finally {
        setLoading(false);
      }
    };

    fetchData();


  }, [retryCount]);

  return {data: runs, loading, error, retry: () => setRetryCount(c => c + 1)};
}