import React, {useState} from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@mui/material/Button';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ChipsArray() {
   
    var [formula, setMessage] = useState('')
    var [chipData, setChipData] = useState([])
    var chip_data = []
    var chip_string = []
    var pointer = 0
    var tmp = ""

    while (pointer < formula.length) {
        
        if ('+-*/()[]{}|'.includes(formula[pointer])) {
            chip_string.push(formula[pointer])
            pointer++;
        }
        else {
            tmp += formula[pointer]
            if ('+-*/()[]{}|'.includes(formula[pointer+1])) {
              if (tmp) {
                chip_string.push(tmp)
                tmp = ""
              }
            }
            pointer++
        }
      }
    console.log(chip_string)

    var chip_data = []
    var index = 0
    for (let i = 0; i < chip_string.length; i++) {
        var chipdict = new Object()
        
            chipdict['key'] = index
            chipdict['label'] = chip_string[i]
            index += 1
            chip_data.push(chipdict)

    }
   
    const handleChange = event => {
        event.preventDefault(); 
        setMessage(event.target.value);
      };
    
    const handleChange_load = event => {
        event.preventDefault(); 
        setChipData(chip_data);
      };

    const handleDelete = (chipToDelete) => () => {
        setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    };

  return (
    <div class='page-wrapper'>
        <p style = {{color: 'black'}}>
            Formula example: ($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)
        </p>
        <p style = {{color: 'black'}}>
            Copy and paste the formula example to input form and run "visualize formula"
        </p>
        <p style = {{color: 'black'}}>
            Note: Put you input into a parentheses as a valid input e.g., ($a+$b)
        </p>
        <div>
            <form  noValidate autoComplete="off">
                <TextField 
                style = {{width: '250px', height: '50px'}}
                label="Formula" 
                variant="outlined"
                name="Formula"
                onChange={handleChange}
                />
            <Button onClick= {handleChange_load}  style = {{width: '250px', height: '57px', marginLeft: '0.8rem'}} variant="outlined">visualize formula</Button>
            </form>
        </div>
    <Paper
        elevation={0} 
        sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            listStyle: 'none',
            p: 5,
            m: 0,
        }}
      component="ul"
    >
      {chipData.map((data) => {

        return (

          <ListItem key={data.key}>
            <Chip
              style={{borderRadius: 10, fontWeight:600, fontSize: '18px', height:'65px'}}
              label={data.label}
              onDelete={handleDelete(data)}
            />
          </ListItem>
         
        )
      })}
    </Paper>
    </div>
  )
}