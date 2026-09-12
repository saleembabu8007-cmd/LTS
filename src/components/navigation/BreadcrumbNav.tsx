import React from 'react';
import { Breadcrumb, BreadcrumbProps } from '../../design-system/molecules/Breadcrumb';

export type BreadcrumbNavProps = BreadcrumbProps;

/**
 * BreadcrumbNav is an alias to the canonical LTSGROUP Breadcrumb system.
 * Maintained for backwards compatibility across imports.
 */
export const BreadcrumbNav: React.FC<BreadcrumbNavProps> = (props) => {
  return <Breadcrumb {...props} />;
};

export { Breadcrumb };
