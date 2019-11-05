import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  /**
   * @default 'btn'
   */
  bsPrefix: PropTypes.string,

  /**
   * One or more button modifier combinations
   * buttons may be one of a variety of visual modifiers such as:
   * `'primary', 'secondary'
   */
  modifier: PropTypes.string,

  /**
   * Disables the Button, preventing mouse events,
   * even if the underlying component is an `<a>` element
   */
  disabled: PropTypes.bool,

  /** Providing a `href` will render an `<a>` element, _styled_ as a button. */
  href: PropTypes.string,

  /** Providing a `icon` will render an 'around-icon' before the placeholder*/
  icon: PropTypes.string,

  /**
   * Defines HTML button type attribute.
   * @default 'button'
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),

  text: PropTypes.string.isRequired
};

const defaultProps = {
  modifier: 'primary',
  disabled: false,
  type: 'button'
};

const Button = React.forwardRef(({ modifier, className, type, text, icon, ...props }, ref) => {
  const prefix = 'button';

  const classes = classNames(
    className,
    prefix,
    `${prefix}-${modifier}`,
    icon && `${prefix}-icon icon-${icon}`
  );

  if (props.href) {
    return (
      <a {...props} className={classNames(classes, props.disabled && 'disabled')}>
        {text}
      </a>
    );
  }

  if (ref) {
    props.ref = ref;
  }

  const Component = 'button';
  return (
    <Component {...props} className={classes}>
      {text}
    </Component>
  );
});

Button.displayName = 'Button';
Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
