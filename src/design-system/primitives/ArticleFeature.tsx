import React from 'react';
import { NewsFeature, NewsFeatureProps } from '../organisms/NewsFeature';

export interface ArticleFeatureProps extends NewsFeatureProps {}

/**
 * ArticleFeature: Structural primitive for technical monographs and publications.
 */
export const ArticleFeature: React.FC<ArticleFeatureProps> = (props) => {
  return <NewsFeature {...props} />;
};
