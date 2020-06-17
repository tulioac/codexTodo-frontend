import React from 'react';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default props => {
  const SkeletonComponent =
    <SkeletonTheme color="#E5E5E5" highlightColor="#F6F9FC">
      <section>
        <Skeleton height={56} width={310} />
      </section>
    </SkeletonTheme>

  return SkeletonComponent
}
