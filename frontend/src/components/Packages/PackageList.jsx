import React from 'react';
import PackageCard from './PackageCard';
import packagesForTesting from '../../assets/data/packagesData';
import goaRetreatImage from '../../assets/images/package-images/goaRetreatImage.jpg'
import keralaAdventureImage from '../../assets/images/package-images/keralaImage.jpg';
import parisGetawayImage from '../../assets/images/package-images/parisGateway.jpg';
import nycExplorationImage from '../../assets/images/package-images/newyorkExploration.jpg';

const PackageList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
    {packagesForTesting.map((packageData, index) => {
      let packageImage;
      if (index === 0) packageImage = goaRetreatImage;
      else if (index === 1) packageImage = keralaAdventureImage;
      else if (index === 2) packageImage = parisGetawayImage;
      else if (index === 3) packageImage = nycExplorationImage;

      return (
        <PackageCard key={index} packageData={packageData} packageImage={packageImage} />
      );
    })}
  </div>
  );
};

export default PackageList;
