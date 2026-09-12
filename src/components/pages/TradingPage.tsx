import React from 'react';
import { BusinessAreaTemplate } from '../business-template/BusinessAreaTemplate';
import { TRADING_PAGE_DATA } from '../../data/businessAreasData';

export interface TradingPageProps {
  onNavigate: (slug: string) => void;
  currentPath?: string;
}

/**
 * Trading & Component Supply Division Page
 * Division 03: Direct factory procurement of genuine OEM parts, VFDs, BTU meters, lighting, and EV chargers.
 * Powered by the unified LTSGROUP BusinessAreaTemplate architecture.
 */
export const TradingPage: React.FC<TradingPageProps> = ({
  onNavigate,
}) => {
  return (
    <BusinessAreaTemplate
      data={TRADING_PAGE_DATA}
      onNavigate={onNavigate}
    />
  );
};
