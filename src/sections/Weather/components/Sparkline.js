import React from 'react';
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';

const Sparkline = ({
  name,
  list,
  view,
  avg,
  units,
  colorBar,
  colorLine,
  classEl,
  classLegend,
}) => (
  <div className={classEl}>
    <Sparklines data={list}>
      {view === 'bars' ? (
        <SparklinesBars style={{ fill: colorBar }} />
      ) : (
        <SparklinesLine color={colorLine} />
      )}
    </Sparklines>
    <p className={classLegend}>
      {name}: {avg} {units}
    </p>
  </div>
);

export default Sparkline;
