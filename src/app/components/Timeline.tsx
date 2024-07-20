import React from 'react';

const VerticalTimeline: React.FC = () => {
  const daysOfWeek = ['Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday', 'Saturday'];

  return (
    <div style={styles.timelineContainer}>
    {daysOfWeek.map((day, index) => (
      <div key={day} style={styles.timelineItem}>
        <div style={day === 'Friday' ? { ...styles.point, ...styles.inactivePoint } : { ...styles.point, ...styles.activePoint }}>
          <span style={styles.dollarSign}>$</span>
        </div>
        <div style={styles.dayText}>{day}
        </div>
        {index < daysOfWeek.length - 1 && (
          <div style={day === 'Friday' ? { ...styles.line, ...styles.inactiveLine } : { ...styles.line, ...styles.activeLine }} />
        )}
      </div>
    ))}
    </div>
  );
};

const styles = {
  timelineContainer: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'left',
    paddingTop: '100px',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '100px',
    position: 'relative' as 'relative',
  },
  point: {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: 'white',
  },
  activePoint: {
    backgroundColor: 'green',
  },
  inactivePoint: {
    backgroundColor: 'gray',
  },
  dollarSign: {},
  dayText: {
    marginLeft: '10px',
    fontSize: '18px',
  },
  line: {
    width: '5px',
    height: '100px',
    position: 'absolute' as 'absolute',
    left: '12.5px',
    top: '30px',
  },
  activeLine: {
    backgroundColor: 'green',
  },
  inactiveLine: {
    backgroundColor: 'gray',
  },
};

export default VerticalTimeline;
