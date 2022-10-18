import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
// import Slider from '@mui/base/SliderUnstyled';
import Input from '@mui/material/Input';
import { styled } from "@mui/material/styles";

const green500 = "#00A7FF";
const green900 = "#0069A0";

const CustomSlider = styled(Slider)(({ theme }) => ({
  
  color: green500, //color of the slider between thumbs
  "& .MuiSlider-thumb": {
    backgroundColor: green500, //color of thumbs
    height:24,
    width:10,
    borderRadius:0
  },
  "& .MuiSlider-rail": {
    color: green900, ////color of the slider outside  teh area between thumbs
    height: 24,
    borderRadius: 24,
    opacity: .5,
  }
}));

const minDistance = 1;

export default function MinimumDistanceSlider(props:any) {
  
  const marks = [
    {
      value: 0,
      label: '1',
    },
    {
      value: 1,
      label: '2',
    },
    {
      value: 2,
      label: '3',
    },
    {
      value: 3,
      label: '4',
    },
    {
      value: 4,
      label: '5',
    },
    {
      value: 5,
      label: '6',
    },
    {
      value: 6,
      label: '7',
    },
    {
      value: 7,
      label: '8',
    },
    {
      value: 8,
      label: '9',
    },
    {
      value: 9,
      label: '10',
    },
    {
      value: 10,
      label: '11',
    },


  ];

  console.log("where log",props)
  function militarytoreg(value:number) {
    let estring = ''; 
    estring += value%24; 
    if(value >12) {
      estring+=" pm"
    } else {
      estring +=" am"
    }
    return estring; 
    
  }
  function returninputvalue(value:number[]) {
    let out = ''; 
    out += militarytoreg(value[0])
    out += " to "
    out += militarytoreg(value[1])
    return out; 
  }

  const [value, setValue] = React.useState<number[]>([props.start, 10]);


  const handleChange = (
    event: Event,
    newValue: number | number[],
    activeThumb: number,
  ) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue([clamped - minDistance, clamped]);
      }
    } else {
      setValue(newValue as number[]);
    }
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Input 
        sx={{ width: "10%" }}
        value = {value[0]}
        inputProps={{
          step: 10,
          min: 0,
          max: 100,
          type: 'number',
          'aria-labelledby': 'input-slider',
        }}
      />
      <Input 
        sx={{ width: "10%" ,height:"80%",}}
        value = {value[1]}
      />
      <CustomSlider
  
        sx={{
          height:"100%",
          width:"80%",
          "--Slider-track-size": "7px",
          "--Slider-mark-size": "1px",
          "--Slider-thumb-size": "15px",
          "--Slider-thumb-width": "15px",
          "--Slider-valueLabel-arrowSize": "7px"
        }}
        marks ={null}
        getAriaLabel={() => 'Minimum distance shift'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={militarytoreg}
        valueLabelFormat={militarytoreg}
        min = {0}
        max = {24}
        step={1}

        disableSwap
      />
    </Box>
  );
}
