
import DashConverter from '@/features/converter/DashConverter'
import DashHeader from './DashHeader'

type Props = {}

const DashLayout = (props: Props) => {
  return (
    <>
        <DashHeader />
        <DashConverter />
    </>
  )
}

export default DashLayout