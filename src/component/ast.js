import React, {useState} from 'react';
import Tree from 'react-d3-tree';
import TextField from '@material-ui/core/TextField';
import '../component/ast.css';
import Button from '@mui/material/Button';


var astTree = require('../assets/ast.json')

export default function AstTree() {

  var [node, setMessage] = useState('');
  var [treedata, setMessage_node] = useState(astTree);

  const handleChange = event => {
    event.preventDefault(); 
    setMessage(event.target.value);
  };

  const handleChange_reset = event => {
    event.preventDefault(); 
    setMessage_node(astTree)
  };

const handleChange_node = event => {
  event.preventDefault(); 
  if (node === '1') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [astTree['children'][1], astTree['children'][2]]})
  }
  if (node === '2') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [astTree['children'][0], astTree['children'][2]]})
  }
  if (node === '3') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [astTree['children'][0], astTree['children'][1]]})
  }
  if (node === '4') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [{name: astTree['children'][0]['name'], 
    attributes: astTree['children'][0]['attributes'], children: [astTree['children'][0]['children'][1], astTree['children'][0]['children'][2]]}, astTree['children'][1], astTree['children'][2]]})
  }
  if (node === '5') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [{name: astTree['children'][0]['name'], 
    attributes: astTree['children'][0]['attributes'], children: [astTree['children'][0]['children'][0], astTree['children'][0]['children'][2]]}, astTree['children'][1], astTree['children'][2]]})
  }
  if (node === '6') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [{name: astTree['children'][0]['name'], 
    attributes: astTree['children'][0]['attributes'], children: [astTree['children'][0]['children'][0], astTree['children'][0]['children'][1]]}, astTree['children'][1], astTree['children'][2]]})
  }
  if (node === '7') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [astTree['children'][0],  astTree['children'][1], 
    {name: astTree['children'][2]['name'], attributes: astTree['children'][2]['attributes'], children: [astTree['children'][2]['children'][1], astTree['children'][2]['children'][2]]}]})
  }
  if (node === '8') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [astTree['children'][0],  astTree['children'][1], 
    {name: astTree['children'][2]['name'], attributes: astTree['children'][2]['attributes'], children: [astTree['children'][2]['children'][0], astTree['children'][2]['children'][2]]}]})
  }
  if (node === '9') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [astTree['children'][0],  astTree['children'][1], 
    {name: astTree['children'][2]['name'], attributes: astTree['children'][2]['attributes'], children: [astTree['children'][2]['children'][0], astTree['children'][2]['children'][1]]}]})
  }
  if (node === '10') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [{name: astTree['children'][0]['name'], attributes: astTree['children'][0]['attributes'], 
    children: [astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], {name: astTree['children'][0]['children'][2]['name'], attributes: astTree['children'][0]['children'][2]['attributes'], children: [astTree['children'][0]['children'][2]['children'][1]]}]}, astTree['children'][1], astTree['children'][2]]})
  }
  if (node === '11') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [{name: astTree['children'][0]['name'], attributes: astTree['children'][0]['attributes'], 
    children: [astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], {name: astTree['children'][0]['children'][2]['name'], attributes: astTree['children'][0]['children'][2]['attributes'], children: [astTree['children'][0]['children'][2]['children'][0]]}]}, astTree['children'][1], astTree['children'][2]]})
  }
  if (node === '12') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [astTree['children'][0],  astTree['children'][1], {name: astTree['children'][2]['name'], 
    attributes: astTree['children'][2]['attributes'], children: [{name: astTree['children'][2]['children'][0]['name'], attributes: astTree['children'][2]['children'][0]['attributes'], children:[]}, astTree['children'][2]['children'][1], astTree['children'][2]['children'][2]]}]})
  }
  if (node === '13') {
    setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', children: [astTree['children'][0],  astTree['children'][1], {name: astTree['children'][2]['name'], 
    attributes: astTree['children'][2]['attributes'], children: [{name: astTree['children'][2]['children'][2]['name'], attributes: astTree['children'][2]['children'][2]['attributes'], children:[]}, astTree['children'][2]['children'][0], astTree['children'][2]['children'][1]]}]})
  }
  if (node === '14') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[{name:astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], 
  children:[astTree['children'][0]['children'][0],  astTree['children'][0]['children'][1], {name:astTree['children'][0]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['attributes'], 
  children:[{name:astTree['children'][0]['children'][2]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][0]['attributes'], children:[]}, astTree['children'][0]['children'][2]['children'][1]]}]}, 
  astTree['children'][1], astTree['children'][2]]})}

  if (node === '15') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[{name:astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], 
  children:[astTree['children'][0]['children'][0],  astTree['children'][0]['children'][1], {name:astTree['children'][0]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['attributes'], 
  children:[{name:astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], children:[]}, astTree['children'][0]['children'][2]['children'][0]]}]}, 
  astTree['children'][1], astTree['children'][2]]})}


  if (node === '16') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[{name:astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children:[astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'],attributes:astTree['children'][0]['children'][2]['attributes'],children:[astTree['children'][0]['children'][2]['children'][0], 
  {name:astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], 
  children:[ {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'],
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][1], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]]}   ]}  ]}   ]}, 
  astTree['children'][1], astTree['children'][2]]})}

  if (node === '17') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[{name:astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children:[astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'],attributes:astTree['children'][0]['children'][2]['attributes'],children:[astTree['children'][0]['children'][2]['children'][0], 
  {name:astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], 
  children:[ {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'],
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]]}   ]}  ]}   ]}, 
  astTree['children'][1], astTree['children'][2]]})}

  if (node === '18') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[{name:astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children:[astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'],attributes:astTree['children'][0]['children'][2]['attributes'],children:[astTree['children'][0]['children'][2]['children'][0], 
  {name:astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], 
  children:[ {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'],
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][1]]}   ]}  ]}   ]}, 
  astTree['children'][1], astTree['children'][2]]})}

  if (node === '19') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[ {name: astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children: [astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['attributes'], children:[astTree['children'][0]['children'][2]['children'][0], 
  {name: astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], children:[
  {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'], 
  children:[{name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['attributes'], 
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['children'][1]]}, 
  astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][1], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]]}
  ] }]}]}, astTree['children'][1], astTree['children'][2]]})}

  if (node === '20') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[ {name: astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children: [astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['attributes'], children:[astTree['children'][0]['children'][2]['children'][0], 
  {name: astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], children:[
  {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'], 
  children:[{name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['attributes'], 
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['children'][0]]}, 
  astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][1], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]]}
  ] }]}]}, astTree['children'][1], astTree['children'][2]]})}

  if (node === '24') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[ {name: astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children: [astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['attributes'], children:[astTree['children'][0]['children'][2]['children'][0], 
  {name: astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], children:[
  {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'], 
  children:[{name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['attributes'], 
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['children'][0], 
  {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0]['children'][1]['attributes'], 
  children:[]}]}, astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][1], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]]}
  ] }]}]}, astTree['children'][1], astTree['children'][2]]})}

  if (node === '21') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[{name:astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children:[astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'],attributes:astTree['children'][0]['children'][2]['attributes'],children:[astTree['children'][0]['children'][2]['children'][0], 
  {name:astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], 
  children:[ {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'],
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][1],
  {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['attributes'], 
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][1], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][2]]}

  ]}   ]}  ]}   ]}, astTree['children'][1], astTree['children'][2]]})}

  if (node === '25') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[{name:astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children:[astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'],attributes:astTree['children'][0]['children'][2]['attributes'],children:[astTree['children'][0]['children'][2]['children'][0], 
  {name:astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], 
  children:[ {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'],
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][1],
  {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['attributes'], 
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][1], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][2],
  {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][0]['attributes'], children:[]}]}
  ]}   ]}  ]}   ]}, astTree['children'][1], astTree['children'][2]]})}


  if (node === '22') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[{name:astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children:[astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'],attributes:astTree['children'][0]['children'][2]['attributes'],children:[astTree['children'][0]['children'][2]['children'][0], 
  {name:astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], 
  children:[ {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'],
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][1],
  {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['attributes'], 
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][0], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][2]]}]}   ]}  ]}   ]}, astTree['children'][1], astTree['children'][2]]})}


  if (node === '23') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[{name:astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children:[astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'],attributes:astTree['children'][0]['children'][2]['attributes'],children:[astTree['children'][0]['children'][2]['children'][0], 
  {name:astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], 
  children:[ {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'],
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][1],
  {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['attributes'], 
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][0], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][1]]}
  ]}   ]}  ]}   ]}, astTree['children'][1], astTree['children'][2]]})}

  if (node === '26') {setMessage_node({name: '($b + SQRT (SQR($b) - 4 * $a)) / (2 * $a)', 
  children:[{name:astTree['children'][0]['name'], attributes:astTree['children'][0]['attributes'], children:[astTree['children'][0]['children'][0], astTree['children'][0]['children'][1], 
  {name:astTree['children'][0]['children'][2]['name'],attributes:astTree['children'][0]['children'][2]['attributes'],children:[astTree['children'][0]['children'][2]['children'][0], 
  {name:astTree['children'][0]['children'][2]['children'][1]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['attributes'], 
  children:[ {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['attributes'],
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][0], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][1],
  {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['attributes'], 
  children:[astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][0], astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][1],   {name:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][2]['name'], attributes:astTree['children'][0]['children'][2]['children'][1]['children'][0]['children'][2]['children'][2]['attributes'], 
  children:[]}],}]} ]} ]} ]}, astTree['children'][1], astTree['children'][2]]})}




}
  return (
    <div id="treeWrapper" style={{ fontSize: '16px', width: '1400px', height: '800px' }}>
      <div class='page-wrapper'>
        <div class='row'>
          <div class='double-column'>
            <div class='orange-column'>
              <Tree 
                data={treedata} 
                orientation="vertical"
                translate={{ x: 520, y: 50 }}/>
            </div>
          </div>
          <div class='column'>
          <div class='blue-column'>
            <p style={{ fontSize: '16px', color: 'black'}}>Input node number and click "Delete" to remove node</p>
            <p style={{ fontSize: '16px', color: 'black'}}>Click tree nodes, you can "hide" the node that you selected </p>
              <form  noValidate autoComplete="off">
                <TextField 
                style = {{width: '250px', height: '50px'}}
                label="Node #" 
                variant="outlined"
                id="node"
                name="node"
                onChange={handleChange}
                value={node} />
              </form><br />
              <Button onClick = {handleChange_node} style = {{width: '250px', height: '50px'}} variant="outlined">Delete</Button><br />
              <Button onClick = {handleChange_reset} style = {{width: '250px', height: '50px'}} variant="outlined">Reset Tree</Button>
              </div>
          </div>
        </div>
      </div>



        
    </div>
  );
}