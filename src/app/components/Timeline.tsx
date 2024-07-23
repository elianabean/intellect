import React from 'react';

const VerticalTimeline: React.FC = () => {
  const daysOfWeek = ['Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday', 'Saturday'];

  return (
    <div style={styles.timelineContainer}>
    {daysOfWeek.map((day, index) => (
      <div key={day} style={styles.timelineItem}>
        <div style={day === 'Friday' ? { ...styles.point, ...styles.inactivePoint } : { ...styles.point, ...styles.activePoint }}>
          <span style={day === 'Friday' ? { ...styles.inactiveDollarSign} : { ...styles.activeDollarSign }}>$</span>
        </div>
        <div className="text-[#2A3A28] font-inter text-[36px] font-medium leading-[150%] ml-[10px]">{day}
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
    alignItems: 'center',
    paddingTop: '100px',
    position: 'relative' as 'relative',
  },
  timelineItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '100px',
    position: 'relative' as 'relative',
    width: '280px',
    paddingLeft: '0px',
    zIndex: '50',
  },
  point: {
    width: '45px',
    height: '45px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    color: 'white',
    border: "2px solid black;",
    zIndex: '50',
  },
  activePoint: {
    backgroundColor: '#e6ff4f',
  },
  inactivePoint: {
    backgroundColor: '#c4d8c4',
  },
  activeDollarSign: {
    fontWeight: "900",
    color: "#2f3411"
  },
  inactiveDollarSign: {
    fontWeight: "900",
    color: "#626c62"
  },
  line: {
    width: '20px',
    height: '150px',
    position: 'absolute' as 'absolute',
    left: '12.5px',
    top: '30px',
    border: " solid black",
    borderTop: '2px',
    borderBottom: '2px',
    transform: "translateY(-10px)",
    zIndex: '0',
  },
  activeLine: {
    backgroundColor: '#45e269',
  },
  inactiveLine: {
    backgroundColor: '#cee1ce',
  },
};

export default VerticalTimeline;
