import React from 'react';
import { ProjectFeatureOrganism, ProjectFeatureOrganismProps } from '../organisms/ProjectFeatureOrganism';

export interface ProjectFeaturePrimitiveProps extends ProjectFeatureOrganismProps {}

/**
 * ProjectFeaturePrimitive: Structural primitive for marquee project showcase.
 */
export const ProjectFeaturePrimitive: React.FC<ProjectFeaturePrimitiveProps> = (props) => {
  return <ProjectFeatureOrganism {...props} />;
};
