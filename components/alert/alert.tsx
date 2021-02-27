import React from 'react';
import t from 'prop-types'

import { AlertProps, KindMap } from './interface';

const prefixCls = 'blue-alert';

const kinds: KindMap = {
  info: '#5352ED',
  success: '#2ED573',
  error: '#FF4757',
  warning: '#FFA502',
}

const Alert: React.FC<AlertProps> = ({ children, kind = 'info', ...rest}) => (
  <div
    className={prefixCls}
    style={{
      background: kinds[kind],
    }}
    {...rest}
  >
    {children}
  </div>
)

Alert.propTypes = {
  kind: t.oneOf(['info', 'success', 'error', 'warning']),
};

export default Alert;