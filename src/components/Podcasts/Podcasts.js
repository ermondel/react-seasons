import React from 'react';
import PodcastsSidebar from './PodcastsSidebar';
import PodcastList from './PodcastList';
import InfoTech from '../InfoTech';

const Podcasts = () => (
  <main className="main">
    <div className="sidebar">
      <div className="sidebar-wrap">
        <PodcastsSidebar />
        <InfoTech list={['React', 'Redux']} />
      </div>
    </div>
    <div className="content">
      <div className="content-wrap">
        <PodcastList />
      </div>
    </div>
  </main>
);

export default Podcasts;
