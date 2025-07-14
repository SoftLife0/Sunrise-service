
const StatusBadge = ({ status, statusType }) => {
  let badgeClass = '';
  let label = '';

  if (statusType === 'status') {
    if (status === 'new') {
      badgeClass = 'bg-warning';
      label = 'Awaiting Pickup';
    } else if (status === 'washing') {
      badgeClass = 'bg-primary';
      label = 'Processing';
    } else if (status === 'ready') {
      badgeClass = 'bg-success';
      label = 'Ready for Return';
    } else if (status === 'delivered') {
      badgeClass = 'bg-secondary';
      label = 'DELIVERED';
    } else {
      badgeClass = 'bg-warning';
      label = 'pending';
    }
  } 

  return <div className={`badge ${badgeClass} mr-2`}>{label}</div>;
};

export default StatusBadge;
