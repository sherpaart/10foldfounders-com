/* @ds-bundle: {"format":3,"namespace":"Ds10FoldFoundersDesignSystem_d0947c","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Callout","sourcePath":"components/cards/Callout.jsx"},{"name":"Card","sourcePath":"components/cards/Card.jsx"},{"name":"ChecklistItem","sourcePath":"components/cards/ChecklistItem.jsx"},{"name":"Testimonial","sourcePath":"components/cards/Testimonial.jsx"},{"name":"StatBlock","sourcePath":"components/data/StatBlock.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Badge","sourcePath":"components/labels/Badge.jsx"},{"name":"Eyebrow","sourcePath":"components/labels/Eyebrow.jsx"},{"name":"Tag","sourcePath":"components/labels/Tag.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"447bc559d8f0","components/cards/Callout.jsx":"1e971a227a24","components/cards/Card.jsx":"dbab4cd61c1b","components/cards/ChecklistItem.jsx":"6e1882e702a9","components/cards/Testimonial.jsx":"dd716e951daa","components/data/StatBlock.jsx":"c00da9b6748e","components/forms/Checkbox.jsx":"c664c0d1fef1","components/forms/Input.jsx":"7608145b7920","components/labels/Badge.jsx":"554b7516e0fc","components/labels/Eyebrow.jsx":"0c549a5e4193","components/labels/Tag.jsx":"be660b985d93"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds10FoldFoundersDesignSystem_d0947c = window.Ds10FoldFoundersDesignSystem_d0947c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 10Fold Founders primary action. Pill-shaped, sentence-case labels only
 * (for example "Get my Blueprint", never "GET STARTED").
 */
function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  href,
  disabled = false,
  fullWidth = false,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: 14,
      padding: '10px 20px'
    },
    md: {
      fontSize: 16,
      padding: '14px 28px'
    },
    lg: {
      fontSize: 18,
      padding: '17px 36px'
    }
  };
  const variants = {
    primary: {
      background: 'var(--tf-gradient-cta)',
      color: 'var(--tf-white)',
      border: 'none'
    },
    accent: {
      background: 'var(--tf-gradient-warm)',
      color: 'var(--tf-midnight)',
      border: 'none'
    },
    gold: {
      background: 'var(--tf-gold)',
      color: 'var(--tf-midnight)',
      border: 'none'
    },
    founders: {
      background: 'var(--tf-gradient-founders)',
      color: 'var(--tf-white)',
      border: 'none'
    },
    onDark: {
      background: 'var(--tf-white)',
      color: 'var(--tf-teal)',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--tf-teal)',
      border: '1.5px solid var(--tf-teal)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--tf-teal)',
      border: 'none'
    }
  };
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    width: fullWidth ? '100%' : 'auto',
    fontFamily: 'var(--tf-font-headline)',
    fontWeight: 700,
    lineHeight: 1,
    textDecoration: 'none',
    borderRadius: 'var(--tf-radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transition: 'filter var(--tf-dur) var(--tf-ease), opacity var(--tf-dur) var(--tf-ease)',
    whiteSpace: 'nowrap',
    ...sizes[size],
    ...variants[variant],
    ...style
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, children, iconRight);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: base
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Base surface card. White with a Sage hairline by default; no heavy shadow stack.
 * 12px radius. Use `surface` to switch to Mist or Sage tonal fills.
 */
function Card({
  surface = 'white',
  selected = false,
  padding = 24,
  raised = false,
  children,
  style,
  ...rest
}) {
  const surfaces = {
    white: {
      background: 'var(--tf-white)',
      border: '1px solid var(--tf-sage)'
    },
    mist: {
      background: 'var(--tf-mist)',
      border: 'none'
    },
    sage: {
      background: 'var(--tf-sage)',
      border: 'none'
    },
    dark: {
      background: 'var(--tf-midnight)',
      border: 'none',
      color: 'var(--tf-white)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--tf-radius-card)',
      padding,
      boxShadow: raised ? 'var(--tf-shadow-md)' : 'var(--tf-shadow-none)',
      ...surfaces[surface],
      ...(selected ? {
        border: '1.5px solid var(--tf-teal)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Card.jsx", error: String((e && e.message) || e) }); }

// components/cards/ChecklistItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checklist item. Gold circle holding a Midnight number or checkmark, on a Mist row.
 */
function ChecklistItem({
  index,
  checked = false,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("li", _extends({
    style: {
      listStyle: 'none',
      background: 'var(--tf-mist)',
      borderRadius: 'var(--tf-radius-sm)',
      padding: '14px 16px',
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      fontFamily: 'var(--tf-font-body)',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--tf-midnight)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": checked ? 'true' : undefined,
    style: {
      flex: '0 0 26px',
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--tf-gold)',
      color: 'var(--tf-midnight)',
      fontFamily: 'var(--tf-font-headline)',
      fontWeight: 800,
      fontSize: 13,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, checked ? '✓' : index), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { ChecklistItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ChecklistItem.jsx", error: String((e && e.message) || e) }); }

// components/cards/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial / pull-quote block. Sage background, 4px Gold left border,
 * italic quote, attribution in Teal SemiBold.
 */
function Testimonial({
  quote,
  name,
  detail,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: 'var(--tf-sage)',
      borderLeft: '4px solid var(--tf-gold)',
      borderRadius: 'var(--tf-radius-sm)',
      padding: '24px 28px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: 'var(--tf-font-body)',
      fontStyle: 'italic',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--tf-midnight)'
    }
  }, quote || children), (name || detail) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 14,
      fontSize: 14,
      color: 'var(--tf-teal)'
    }
  }, name && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600
    }
  }, name), name && detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, '  ·  '), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, detail)));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/data/StatBlock.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big-number stat. Every quantifiable claim must use a real number — this is how
 * you show one. Plus Jakarta ExtraBold figure, Inter label.
 */
function StatBlock({
  value,
  label,
  sublabel,
  tone = 'light',
  align = 'left',
  style,
  ...rest
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      fontFamily: 'var(--tf-font-body)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tf-font-headline)',
      fontWeight: 800,
      fontSize: 48,
      lineHeight: 1,
      letterSpacing: '-0.5px',
      color: onDark ? 'var(--tf-white)' : 'var(--tf-teal)'
    }
  }, value), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: 14,
      fontWeight: 600,
      color: onDark ? 'var(--tf-founders-sky)' : 'var(--tf-midnight)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      fontSize: 13,
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)'
    }
  }, sublabel));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox with label. Teal fill when checked (selected state is Teal, never Gold).
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const cbId = id || (label ? `cb-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--tf-font-body)',
      fontSize: 15,
      color: 'var(--tf-midnight)',
      cursor: 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 6,
      flex: '0 0 22px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: checked ? 'var(--tf-teal)' : 'var(--tf-white)',
      border: `1.5px solid ${checked ? 'var(--tf-teal)' : 'var(--tf-sage)'}`,
      color: 'var(--tf-white)',
      fontSize: 13,
      lineHeight: 1,
      transition: 'background var(--tf-dur) var(--tf-ease), border-color var(--tf-dur) var(--tf-ease)'
    }
  }, checked ? '✓' : ''), /*#__PURE__*/React.createElement("input", _extends({
    id: cbId,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input. Mist fill, Sage hairline, Teal focus ring. Pairs with an optional label.
 */
function Input({
  label,
  hint,
  error,
  id,
  style,
  ...rest
}) {
  const inputId = id || (label ? `in-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--tf-font-body)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--tf-teal)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      fontFamily: 'var(--tf-font-body)',
      fontSize: 16,
      color: 'var(--tf-midnight)',
      background: 'var(--tf-mist)',
      border: `1.5px solid ${error ? 'var(--state-danger)' : 'var(--tf-sage)'}`,
      borderRadius: 'var(--tf-radius-card)',
      padding: '12px 14px',
      outline: 'none',
      width: '100%',
      transition: 'border-color var(--tf-dur) var(--tf-ease)',
      ...style
    },
    onFocus: e => {
      if (!error) e.target.style.borderColor = 'var(--tf-teal)';
    },
    onBlur: e => {
      if (!error) e.target.style.borderColor = 'var(--tf-sage)';
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: error ? 'var(--state-danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/labels/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact status / category badge. Soft tonal fills from the brand palette.
 */
function Badge({
  variant = 'neutral',
  children,
  style,
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--tf-mist)',
      color: 'var(--tf-teal)'
    },
    sage: {
      background: 'var(--tf-sage)',
      color: 'var(--tf-teal)'
    },
    teal: {
      background: 'var(--tf-teal)',
      color: 'var(--tf-white)'
    },
    gold: {
      background: 'var(--tf-gold)',
      color: 'var(--tf-midnight)'
    },
    blue: {
      background: 'var(--tf-steel-tint)',
      color: 'var(--tf-teal)'
    },
    success: {
      background: 'rgba(31,138,91,0.12)',
      color: 'var(--state-success)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--tf-font-body)',
      fontWeight: 600,
      fontSize: 12,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      padding: '6px 12px',
      borderRadius: 'var(--tf-radius-pill)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Badge.jsx", error: String((e && e.message) || e) }); }

// components/labels/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small all-caps eyebrow / pillar label. Amber, SemiBold, generous tracking.
 * Three words max. Sits above a headline.
 */
function Eyebrow({
  as = 'span',
  tone = 'amber',
  children,
  style,
  ...rest
}) {
  const tones = {
    amber: 'var(--tf-amber)',
    teal: 'var(--tf-teal)',
    onDark: 'var(--tf-founders-sky)'
  };
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      display: 'inline-block',
      fontFamily: 'var(--tf-font-body)',
      textTransform: 'uppercase',
      fontSize: 'var(--tf-text-eyebrow)',
      fontWeight: 600,
      letterSpacing: 'var(--tf-tracking-eyebrow)',
      color: tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/cards/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Resource / bonus callout. Mist background, 4px Amber left border, Amber uppercase
 * eyebrow, Teal bold title.
 */
function Callout({
  eyebrow = 'Bonus resource',
  title,
  children,
  action,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--tf-mist)',
      borderLeft: '4px solid var(--tf-amber)',
      borderRadius: 'var(--tf-radius-sm)',
      padding: '20px 24px',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    style: {
      marginBottom: 6
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h4", {
    style: {
      margin: '0 0 6px',
      fontFamily: 'var(--tf-font-headline)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--tf-teal)'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--tf-font-body)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-strong)'
    }
  }, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, action));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/Callout.jsx", error: String((e && e.message) || e) }); }

// components/labels/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Removable / selectable tag chip. Hairline by default, Teal border when selected
 * (selected state is always Teal, never Gold).
 */
function Tag({
  selected = false,
  onRemove,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--tf-font-body)',
      fontWeight: 500,
      fontSize: 13,
      lineHeight: 1,
      padding: '7px 14px',
      borderRadius: 'var(--tf-radius-pill)',
      background: selected ? 'var(--tf-steel-tint)' : 'var(--tf-white)',
      color: 'var(--tf-teal)',
      border: selected ? '1.5px solid var(--tf-teal)' : '1px solid var(--tf-sage)',
      cursor: rest.onClick ? 'pointer' : 'default',
      ...style
    }
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      fontSize: 15,
      lineHeight: 1,
      padding: 0
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/labels/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ChecklistItem = __ds_scope.ChecklistItem;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Tag = __ds_scope.Tag;

})();
