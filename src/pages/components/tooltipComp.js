import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const ToolTipEmail = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <Tooltip placement="top" isOpen={tooltipOpen} target="emailBtn" toggle={toggle}>
        Copy To Clipboard!
      </Tooltip>
    </div>
  );
}

export default ToolTipEmail;