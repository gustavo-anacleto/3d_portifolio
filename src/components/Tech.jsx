import { BallCanvas } from './canvas';
import { SectionWrapper } from "../hoc";
import { technologies } from '../constants';
import { Tooltip } from 'react-tooltip';


const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map(technologie => (
        <div
          data-tooltip-id={technologie.name}
          className='w-28 h-28' key={technologie.name}
        >
          <BallCanvas
            icon={technologie.icon}
            name={technologie.name}
          />
          <Tooltip style={{ display: 'flex', flexDirection: 'column' }} id={technologie.name}>
            <span>{technologie.name}</span>
            <span>Experience Time: {technologie.workedTime} years</span>
          </Tooltip>
        </div>

      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "tech")