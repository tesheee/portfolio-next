import React from "react";
import ContentLoader from "react-content-loader";

const ProducerAvatarSkeleton = () => (
  <ContentLoader
    speed={2}
    width={270}
    height={240}
    viewBox='0 0 270 240'
    backgroundColor='#454545'
    foregroundColor='#303030'
    //{...props}
  >
    <circle cx='135' cy='120' r='118' />
  </ContentLoader>
);

export default ProducerAvatarSkeleton;
