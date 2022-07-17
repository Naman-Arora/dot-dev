import dayjs from 'dayjs';
dayjs().format();

type Props = {
  code: number
}

const WeatherType = (props: Props) => {
  let hour: number = dayjs().get('h');
  let code = props.code;
  let className: string = 'primary-icon-style wi ';

  if (code > 800) {
    if (code <= 802) {
      className += 'wi-cloud';
    } else {
      className += 'wi-cloudy';
    }
  } else if (code == 800) {
    if (hour >= 6 && hour <= 19) {
      className += 'wi-day-sunny';
    } else {
      className += 'wi-night-clear';
    }
  } else if (code > 700) {
    className += 'wi-fog';
  } else if (code >= 600) {
    className += 'wi-snow';
  } else if (code >= 500) {
    className += 'wi-rain';
  } else if (code >= 300) {
    className += 'wi-showers';
  } else if (code >= 200) {
    className += 'wi-thunderstorm';
  } else {
    className += 'wi-na';
  }

  return <div className={className}/>;
};

export default WeatherType;
