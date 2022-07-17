import { speedToBeaufort } from './windSpeedDescription';

type Props = {
  speed: number
}

const WindSpeedIcon = (props: Props) => {
  let className = 'secondary-icon-style wi wi-wind-beaufort-';
  const scaleNum = speedToBeaufort(props.speed);
  className += scaleNum?.toString();
  console.log("WindSpeedIcon class name: " + className);
  return <div className={className} />;
};

export default WindSpeedIcon;
