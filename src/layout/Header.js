import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>영화 이상형 월드컵</h1>
      <nav>
        {/* <ul>
          <li><Link to="/">영화 리스트</Link></li>
          <li><Link to="/hof">명예의 전당</Link></li>
          <li><Link to="/like">좋아하는 영화</Link></li>
        </ul> */}
        <ul>
          <li>영화 리스트</li>
          <li>명예의 전당</li>
          <li>좋아하는 영화</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;