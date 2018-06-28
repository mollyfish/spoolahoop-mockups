'use strict';

class BlogPost extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ([
      <section className="blog-post" key="post">
        <div className="post-info">
          <h3 className="post-title">Blog Post Title</h3>
          <img className="post-author-pic" src="http://via.placeholder.com/50x50" />
          <ul className="post-author">
            <li className="posted-by">Author McBlogger</li>
            <li className="posted-date">June 1st, 2018</li>
          </ul>
        </div>
        <div className="post-body">
          <div className="post-featured" >
            <img src="http://via.placeholder.com/550x500" />
            <p className="post-featured-caption">One amazing <a href="">creation</a> by <a href="">Maker Makesalot</a></p>
          </div>
          <p className="post-text">Maecenas fermentum ipsum purus, et scelerisque est dignissim eget. Morbi fermentum sem ut euismod ornare. Nam sem quam, dapibus vitae neque ac, blandit dictum enim. Vestibulum tellus leo, condimentum non velit eu, ornare imperdiet erat. Fusce fermentum libero id ligula commodo, at bibendum felis bibendum. Duis eu tristique mauris. Maecenas vel orci mi. Nullam mollis in risus eget mattis.</p>
          <ul className="post-gallery">
            <li>
              <img src="http://via.placeholder.com/200x200" />
              <p className="post-gallery-caption">Nam sem quam, <a href="">dapibus vitae</a> neque ac,
                <a href="">blandit dictum</a> enim.</p>
            </li>
            <li>
              <img src="http://via.placeholder.com/200x200" />
              <p className="post-gallery-caption">Nam sem quam, <a href="">dapibus vitae</a> neque ac,
                <a href="">blandit dictum</a> enim.</p>
            </li>
            <li>
              <img src="http://via.placeholder.com/200x200" />
              <p className="post-gallery-caption">Nam sem quam, <a href="">dapibus vitae</a> neque ac,
                <a href="">blandit dictum</a> enim.</p>
            </li>
            <li>
              <img src="http://via.placeholder.com/200x200" />
              <p className="post-gallery-caption">Nam sem quam, <a href="">dapibus vitae</a> neque ac,
                <a href="">blandit dictum</a> enim.</p>
            </li>
            <li>
              <img src="http://via.placeholder.com/200x200" />
              <p className="post-gallery-caption">Nam sem quam, <a href="">dapibus vitae</a> neque ac,
                <a href="">blandit dictum</a> enim.</p>
            </li>
            <li>
              <img src="http://via.placeholder.com/200x200" />
              <p className="post-gallery-caption">Nam sem quam, <a href="">dapibus vitae</a> neque ac,
                <a href="">blandit dictum</a> enim.</p>
            </li>
          </ul>
        </div>
      </section>,
      <h4 className="blog-pagination" key="pagination"><a href="">More blog posts...</a></h4>
    ]);
  }
}

let domContainer = document.querySelector('#blog');
ReactDOM.render(<BlogPost />, domContainer);