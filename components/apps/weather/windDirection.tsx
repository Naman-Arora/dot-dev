type Props = {
  deg: number;
};

const WindDirectionIcon = (props: Props) => {
  let className: string = 'secondary-icon-style wi wi-wind towards-';
  className += props.deg.toString();
  className += '-deg';
  return <div className={className} />;
};

export default WindDirectionIcon;

export const WindDirection = (props: Props) => {
  let deg = props.deg;
  let direction: string;
  if (deg > 15 && deg < 75) {
    direction = 'NE';
  } else if (deg >= 75 && deg <= 105) {
    direction = 'East';
  } else if (deg > 105 && deg < 165) {
    direction = 'SE';
  } else if (deg >= 165 && deg <= 195) {
    direction = 'South';
  } else if (deg > 195 && deg < 255) {
    direction = 'SW';
  } else if (deg >= 255 && deg <= 285) {
    direction = 'West';
  } else if (deg >= 285 && deg <= 345) {
    direction = 'NW';
  } else {
    direction = 'N';
  }
  return direction;
};
