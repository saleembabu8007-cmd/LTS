import React from 'react';
import { BusinessAreaTemplate } from '../business-template/BusinessAreaTemplate';
import { FACILITIES_MANAGEMENT_PAGE_DATA } from '../../data/businessAreasData';

export interface FacilitiesManagementPageProps {
  onNavigate: (slug: string) => void;
  initialSubSection?: string;
}

/**
 * Facilities Management Division Page
 * Division 02: Continuous built asset stewardship, hard and soft FM services, and live plant retrofits.
 * Powered by the unified LTSGROUP BusinessAreaTemplate architecture with reversed capability split.
 */
export const FacilitiesManagementPage: React.FC<FacilitiesManagementPageProps> = ({
  onNavigate,
}) => {
  return (
    <BusinessAreaTemplate
      data={FACILITIES_MANAGEMENT_PAGE_DATA}
      onNavigate={onNavigate}
    />
  );
};
