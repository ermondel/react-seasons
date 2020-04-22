import React from 'react';
import PodcastsSidebar from './PodcastsSidebar';
import PodcastList from './PodcastList';

const Podcasts = () => (
  <main className="main">
    <div className="sidebar">
      <div className="sidebar-wrap">
        <PodcastsSidebar />
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
