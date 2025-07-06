
const StatusBadge = ({ status, statusType }) => {
  let badgeClass = '';
  let label = '';

  if (statusType === 'status') {
    if (status === 'PENDING_PICKUP') {
      badgeClass = 'bg-warning';
      label = 'Awaiting Pickup';
    } else if (status === 'IN_WASH') {
      badgeClass = 'bg-primary';
      label = 'Processing';
    } else if (status === 'READY_FOR_RETURN') {
      badgeClass = 'bg-success';
      label = 'Ready for Return';
    } else if (status === 'COMPLETED') {
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
