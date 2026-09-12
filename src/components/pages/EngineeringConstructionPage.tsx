import React from 'react';
import { BusinessAreaTemplate } from '../business-template/BusinessAreaTemplate';
import { ENGINEERING_CONSTRUCTION_PAGE_DATA } from '../../data/businessAreasData';

export interface EngineeringConstructionPageProps {
  onNavigate: (slug: string) => void;
  initialSubSection?: string;
}

/**
 * Engineering & Construction Division Page
 * Division 01: Turnkey electromechanical contracting, solar PV EPC, and control switchgear.
 * Powered by the unified LTSGROUP BusinessAreaTemplate architecture.
 */
export const EngineeringConstructionPage: React.FC<EngineeringConstructionPageProps> = ({
  onNavigate,
}) => {
  return (
    <BusinessAreaTemplate
      data={ENGINEERING_CONSTRUCTION_PAGE_DATA}
      onNavigate={onNavigate}
    />
  );
};
