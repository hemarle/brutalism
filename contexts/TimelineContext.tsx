'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { TimelinePeriod } from '@/lib/data/marketing-data';

interface TimelineContextType {
  period: TimelinePeriod;
  setPeriod: (period: TimelinePeriod) => void;
}

const TimelineContext = createContext<TimelineContextType | undefined>(undefined);

export const useTimeline = () => {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error('useTimeline must be used within a TimelineProvider');
  }
  return context;
};

interface TimelineProviderProps {
  children: ReactNode;
}

export const TimelineProvider: React.FC<TimelineProviderProps> = ({ children }) => {
  const [period, setPeriod] = useState<TimelinePeriod>('7days');

  return (
    <TimelineContext.Provider value={{ period, setPeriod }}>
      {children}
    </TimelineContext.Provider>
  );
};
