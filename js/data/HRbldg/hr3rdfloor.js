const hr3rdfloor = [

        {
  id: 'Hr3rd1',
  name: 'PORTAL',
  description: 'HR 3rd floor',
  imageUrl: 'images/HRbldg/HR3rdfloor7.jpg',
  category: ['SCS bldg.'],
  connections: ['Sd3rdfloor308', 'Hr3rd2'],
  arrowPositions: {
    'Sd3rdfloor308': { phi: Math.PI / 3, theta: Math.PI * 1.3, direction: 'up' },
    'Hr3rd2': { phi: Math.PI / 3, theta: Math.PI * 2.8, direction: 'up' }
  }
},

{
  id: 'Hr3rd2',
  name: 'HR 301',
  description: 'HR 3rd floor',
  imageUrl: 'images/HRbldg/HR3rdfloor6.jpg',
  category: ['HR bldg.'],
  connections: ['Hr3rd1', 'Hr3rd3'],
  arrowPositions: {
    'Hr3rd1': { phi: Math.PI / 3, theta: Math.PI * 1.8, direction: 'up' },
    'Hr3rd3': { phi: Math.PI / 3, theta: Math.PI * 1.25, direction: 'up' }
  }
},

{
  id: 'Hr3rd3',
  name: 'HR 302',
  description: 'HR 3rd floor',
  imageUrl: 'images/HRbldg/HR3rdfloor5.jpg',
  category: ['HR bldg.'],
  connections: ['Hr3rd2', 'Hr3rd4'],
  arrowPositions: {
    'Hr3rd2': { phi: Math.PI / 3, theta: Math.PI * 1.06, direction: 'up' },
    'Hr3rd4': { phi: Math.PI / 3, theta: Math.PI * 2.1, direction: 'up' }
  }
},

{
  id: 'Hr3rd4',
  name: 'HR 303',
  description: 'HR 3rd floor',
  imageUrl: 'images/HRbldg/HR3rdfloor4.jpg',
  category: ['HR bldg.'],
  connections: ['Hr3rd3', 'Hr3rd5', 'Hr2nd1'],
  arrowPositions: {
    'Hr3rd3': { phi: Math.PI / 3, theta: Math.PI * 1.7, direction: 'up' },
    'Hr3rd5': { phi: Math.PI / 3, theta: Math.PI * 2.8, direction: 'up' },
    'Hr2nd1': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
  }
},

{
  id: 'Hr3rd5',
  name: 'HR 304',
  description: 'HR 3rd floor',
  imageUrl: 'images/HRbldg/HR3rdfloor3.jpg',
  category: ['HR bldg.'],
  connections: ['Hr3rd4', 'Hr3rd6', 'Hr4thfloorLibrary'],
  arrowPositions: {
    'Hr3rd4': { phi: Math.PI / 3, theta: Math.PI * 1.4, direction: 'up' },
    'Hr3rd6': { phi: Math.PI / 3, theta: Math.PI * 2.55, direction: 'up' },
    'Hr4thfloorLibrary': { phi: Math.PI / 3, theta: Math.PI * 1.6, direction: 'up' }
  }
},

{
  id: 'Hr3rd6',
  name: 'HR 305',
  description: 'HR 3rd floor',
  imageUrl: 'images/HRbldg/HR3rdfloor2.jpg',
  category: ['HR bldg.'],
  connections: ['Hr3rd5', 'Hr3rd7'],
  arrowPositions: {
    'Hr3rd5': { phi: Math.PI / 3, theta: Math.PI * 1.35, direction: 'up' },
    'Hr3rd7': { phi: Math.PI / 3, theta: Math.PI * 2.45, direction: 'up' }
  }
},

{
  id: 'Hr3rd7',
  name: 'HR 306',
  description: 'HR 3rd floor',
  imageUrl: 'images/HRbldg/HR3rdfloor1.jpg',
  category: ['HR bldg.'],
  connections: ['Hr3rd6', 'Hr3rd8'],
  arrowPositions: {
    'Hr3rd6': { phi: Math.PI / 3, theta: Math.PI * 1.37, direction: 'up' },
    'Hr3rd8': { phi: Math.PI / 3, theta: Math.PI * 2.5, direction: 'up' }
  }
},

{
  id: 'Hr3rd8',
  name: 'HR 307',
  description: 'HR 3rd floor',
  imageUrl: 'images/HRbldg/HR3rdfloor.jpg',
  category: ['HR bldg.'],
  connections: ['Hr3rd7'],
  arrowPositions: {
    'Hr3rd7': { phi: Math.PI / 3, theta: Math.PI * 1.1, direction: 'up' },
    'Sd3rdfloor308': { phi: Math.PI / 3, theta: Math.PI * 1.3, direction: 'up' }
  }
}

  
];

