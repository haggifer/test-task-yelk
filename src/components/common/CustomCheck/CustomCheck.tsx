import React, {
  ChangeEvent,
  CSSProperties,
  ReactElement,
  useEffect,
} from 'react';
import classes from './CustomCheck.module.scss';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck';

interface IProps {
  type: 'checkbox' | 'radio';
  label?: string;
  name?: string;
  checked?: boolean;
  value?: string;
  onChange: (e: ChangeEvent) => void;
  colors?: {
    base: string;
    accent: string;
  };
  containerStyle?: CSSProperties;
}

export default function CustomCheck({
  type,
  label,
  name,
  checked,
  value,
  onChange,
  colors = {
    base: '#98a5d2',
    accent: '#143286',
  },
  containerStyle,
}: IProps): ReactElement {
  useEffect(() => {
    if (type === 'radio' && (!value || typeof checked !== 'boolean')) {
      throw Error(
        "CustomCheck: you need to provide 'value' and 'checked' props for radio input",
      );
    }

    if (type === 'checkbox' && typeof checked !== 'boolean') {
      throw Error(
        "CustomCheck: you need to provide 'checked' prop for radio input",
      );
    }
  }, [type, checked, value]);

  return (
    <label className={classes.container} style={containerStyle}>
      <input
        type={type}
        name={name}
        className={classes.input}
        checked={checked}
        value={value}
        onChange={onChange}
      />

      {type === 'radio' ? (
        <>
          <div
            className={classNames(classes.actionWrapper, classes.radioWrapper)}
          >
            <span className={classes.radioMark}></span>
          </div>
        </>
      ) : (
        <>
          <div
            className={classNames(
              classes.actionWrapper,
              classes.checkboxWrapper,
            )}
            style={{
              borderColor: checked ? colors?.base : colors?.accent,
            }}
          >
            {checked && (
              <FontAwesomeIcon
                icon={faCheck}
                className={classes.checkboxIcon}
                style={{
                  color: colors?.base,
                }}
              />
            )}
          </div>
        </>
      )}

      {label && <p className={classes.label}>{label}</p>}
    </label>
  );
}
