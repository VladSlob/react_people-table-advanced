import classNames from 'classnames';

import { NavLink, useSearchParams } from 'react-router-dom';

export const Navbar = () => {
  const isNavActive = ({ isActive }: { isActive: boolean }) => {
    return classNames('navbar-item', {
      'has-background-grey-lighter': isActive,
    });
  };

  const [searchParams] = useSearchParams();

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={isNavActive}>
            Home

          >
            People
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
