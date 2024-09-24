import React from 'react';
import * as MI from '../style/style'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <MI.HeaderTitle>영화 이상형 월드컵</MI.HeaderTitle>
      <MI.Nav>
        <ul>
          <li><Link to="/">영화 리스트</Link></li>
          <li><Link to="/Hof">명예의 전당</Link></li>
          <li><Link to="/">좋아하는 영화</Link></li>
        </ul>
        {/* <ul>
          <li>영화 리스트</li>
          <li>명예의 전당</li>
          <li>좋아하는 영화</li>
        </ul> */}
      </MI.Nav>
    </header>
  );
};

export default Header;