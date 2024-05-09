import React from 'react'
import { Stack } from '@mui/joy';
import { Input } from '@mui/joy';
import { LinearProgress } from '@mui/joy';
import { Typography } from '@mui/joy';

const PassInput = (props) => {
  const [value, setValue] = React.useState('');
  const minLength = 12;
  return (
    <Stack
      spacing={1}
      sx={{
        '--hue': Math.min(value.length * 10, 120),
      }}
    >
      <Input
        style={props.style}
        size={props.size}
        variant={props.variant}
        color={props.color}
        type={props.type}
        placeholder={props.placeholder}
        startDecorator={props.Key}
        value={props.value}
        name={props.name}
        onChange={props.onChange}
      />
      {
        props.password ? (
          <>
            <LinearProgress
              determinate
              size="sm"
              value={Math.min((value.length * 100) / minLength, 100)}
              sx={{
                bgcolor: 'background.level3',
                color: 'hsl(var(--hue) 80% 40%)',
              }}
            />
            <Typography
              level="body-xs"
              sx={{ alignSelf: 'flex-end', color: 'hsl(var(--hue) 80% 30%)' }}
            >
              {value.length < 3 && 'Very weak'}
              {value.length >= 3 && value.length < 6 && 'Weak'}
              {value.length >= 6 && value.length < 10 && 'Strong'}
              {value.length >= 10 && 'Very strong'}
            </Typography>
          </>
        ) : ""
      }
    </Stack>
  );
}

export default PassInput