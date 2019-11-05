import React, { Component, Fragment } from 'react';
import Button from './components/Button/Button';
import './sass/styles.scss';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="theme-dark">
          <h1>Around Styleguide</h1>
          <Button modifier="primary" type="submit" text="Primary" />
          <Button modifier="secondary" type="submit" text="Secondary" />
          <Button modifier="primary" type="submit" text="Primary Disabled" disabled />
          <Button type="submit" href="#" text="Anchor Secondary" />
          <Button modifier="secondary" type="submit" icon="hamburger" text="Icon Hamburger Secondary" />
        </div>
      </Fragment>
    );
  }
}

export default App;
