import { Link } from 'react-router-dom';

const BlogSidebar = () => (
  <div className="col-lg-4">
    <div className="blog-sidebar-area">
      <div className="search-area">
        <h3>Search</h3>
        <form>
          <input type="text" placeholder="Search..." />
          <button><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
      <div className="space32"></div>
      <div className="categories-area">
        <h3>Categories</h3>
        <ul>
          <li><Link to="#">PPC Advertising</Link></li>
          <li><Link to="#">Digital Marketing</Link></li>
          <li><Link to="#">Social Media Marketing</Link></li>
          <li><Link to="#">SEO Analysis</Link></li>
          <li><Link to="#">Content Marketing</Link></li>
        </ul>
      </div>
      <div className="space32"></div>
      <div className="posts-area">
        <h3>Recent Post</h3>
        <div className="post-auhtor-area">
          <div className="img1">
            <img src="../assets/img/all-images/post-img1.png" alt="" />
          </div>
          <div className="content">
            <Link to="#" className="date"><img src="../assets/img/icons/calender1.svg" alt="" />16 August 2023</Link>
            <Link to="#" className="head">The Importance of Responsive Web Design in the Mobile Age</Link>
          </div>
        </div>

        <div className="post-auhtor-area box2">
          <div className="img1">
            <img src="../assets/img/all-images/post-img2.png" alt="" />
          </div>
          <div className="content">
            <Link to="#" className="date"><img src="../assets/img/icons/calender1.svg" alt="" />16 August 2023</Link>
            <Link to="#" className="head">The Power of Content Marketing How to Drive...</Link>
          </div>
        </div>

        <div className="post-auhtor-area">
          <div className="img1">
            <img src="../assets/img/all-images/post-img3.png" alt="" />
          </div>
          <div className="content">
            <Link to="#" className="date"><img src="../assets/img/icons/calender1.svg" alt="" />16 August 2023</Link>
            <Link to="#" className="head">The Power of Social Media Marketing: How to Build Your...</Link>
          </div>
        </div>

        <div className="post-auhtor-area">
          <div className="img1">
            <img src="../assets/img/all-images/post-img4.png" alt="" />
          </div>
          <div className="content">
            <Link to="#" className="date"><img src="../assets/img/icons/calender1.svg" alt="" />16 August 2023</Link>
            <Link to="#" className="head">Social Media Marketing Strategies Drive Engagement..</Link>
          </div>
        </div>
      </div>
      <div className="space32"></div>
      <div className="tags-area">
        <h3>Popular Tags</h3>
        <ul>
          <li><Link to="#">SEO</Link></li>
          <li><Link to="#">Digital Marketing</Link></li>
          <li><Link to="#" className="m-0">PPC</Link></li>
        </ul>
        <ul>
          <li><Link to="#">Keyword Research</Link></li>
          <li><Link to="#" className="m-0">Content</Link></li>
        </ul>
        <ul>
          <li><Link to="#">Email Marketing</Link></li>
          <li><Link to="#" className="m-0">Social Media</Link></li>
        </ul>
      </div>
      <div className="space32"></div>
      <div className="others-area">
        <h3>If You Need Any Help Contact With Us</h3>
        <div className="space16"></div>
        <div className="btn-area">
          <Link to="tel:123-456-7890" className="header-btn1">123-456-7890 <span><i className="fa-solid fa-arrow-right"></i></span></Link>
        </div>
      </div>
    </div>
  </div>
);

export default BlogSidebar;
