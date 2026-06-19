import { HiOutlineBriefcase, HiOutlineChartBar } from 'react-icons/hi';
import Stat from './Stat';
import { HiOutlineBanknotes, HiOutlineCalendarDays } from 'react-icons/hi2';
import { formatCurrency } from '../../utils/helpers';

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  // 1.
  const numBookings = bookings.length;

  // 2.
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);

  // 3.
  const checkins = confirmedStays.length;

  //   4.
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);
  // num checked in nights / all available nights (num days * num cabins)

  return (
    <>
      <Stat
        title='bookings'
        icon={<HiOutlineBriefcase />}
        value={numBookings}
        color='blue'
      />
      <Stat
        title='Sales'
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(sales)}
        color='green'
      />
      <Stat
        title='Check ins'
        icon={<HiOutlineCalendarDays />}
        value={checkins}
        color='indigo'
      />
      <Stat
        title='bookings'
        icon={<HiOutlineChartBar />}
        value={Math.round(occupation * 100) + '%'}
        color='yellow'
      />
    </>
  );
}

export default Stats;
