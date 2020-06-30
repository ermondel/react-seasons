import React from 'react';
import { connect } from 'react-redux';
import { searchPosts } from '../../actions/posts';

const SearchForm = ({ query, searchPosts }) => (
  <div>
    <input
      type='text'
      value={query}
      onChange={(event) => searchPosts(event.target.value)}
      placeholder='Find a post by title or category...'
    />
  </div>
);

const mapStateToProps = (state) => ({
  query: state.postsSearch,
});

export default connect(mapStateToProps, { searchPosts })(SearchForm);
