type Props = {
  speed: number
}

const WindSpeedDescription = (props: Props) => {
  const scaleNum = speedToBeaufort(props.speed);
  
}

export default WindSpeedDescription;

export const speedToBeaufort = (speed: number) =>{
  const METERS_PER_SECOND_TO_KNOTS = 1.944;
  const knots =  Math.round(METERS_PER_SECOND_TO_KNOTS * speed);
  if(knots >= 64){
    return 12;
  } else if(knots >= 56){
    return 11;
  } else if(knots >= 48){
    return 10;
  } else if(knots >= 41){
    return 9;
  } else if(knots >= 34){
    return 8;
  } else if(knots >= 28){
    return 7;
  } else if(knots >= 22){
    return 6;
  } else if(knots >= 17){
    return 5;
  } else if(knots >= 11){
    return 4;
  } else if(knots >= 7){
    return 3;
  } else if(knots >= 4){
    return 2;
  } else if(knots >= 1){
    return 1;
  } else if(knots >= 0){
    return 0;
  }
}