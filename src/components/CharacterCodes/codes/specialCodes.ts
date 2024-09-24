interface HTMLSymbol {
  symbol: string
  code: string
  nameCode: string
  jsSequence: string
  description: string
}

export const specialCodes: HTMLSymbol[] = [
  {
    symbol: ' ',
    code: '&#00;',
    nameCode: '-',
    jsSequence: '\\u0000',
    description: 'Null character'
  },
  {
    symbol: ' ',
    code: '&#01;',
    nameCode: '-',
    jsSequence: '\\u0001',
    description: 'Start of Heading'
  },
  {
    symbol: ' ',
    code: '&#02;',
    nameCode: '-',
    jsSequence: '\\u0002',
    description: 'Start of Text'
  },
  {
    symbol: ' ',
    code: '&#03;',
    nameCode: '-',
    jsSequence: '\\u0003',
    description: 'End of Text'
  },
  {
    symbol: ' ',
    code: '&#04;',
    nameCode: '-',
    jsSequence: '\\u0004',
    description: 'End of Transmission'
  },
  {
    symbol: ' ',
    code: '&#05;',
    nameCode: '-',
    jsSequence: '\\u0005',
    description: 'Enquiry'
  },
  {
    symbol: ' ',
    code: '&#06;',
    nameCode: '-',
    jsSequence: '\\u0006',
    description: 'Acknowledge'
  },
  {
    symbol: ' ',
    code: '&#07;',
    nameCode: '-',
    jsSequence: '\\u0007',
    description: 'Bell'
  },
  {
    symbol: ' ',
    code: '&#08;',
    nameCode: '-',
    jsSequence: '\\u0008',
    description: 'Backspace'
  },
  {
    symbol: ' ',
    code: '&#09;',
    nameCode: '-',
    jsSequence: '\\u0009',
    description: 'Horizontal Tab'
  },
  {
    symbol: ' ',
    code: '&#10;',
    nameCode: '-',
    jsSequence: '\\u000A',
    description: 'Line Feed'
  },
  {
    symbol: ' ',
    code: '&#11;',
    nameCode: '-',
    jsSequence: '\\u000B',
    description: 'Vertical Tab'
  },
  {
    symbol: ' ',
    code: '&#12;',
    nameCode: '-',
    jsSequence: '\\u000C',
    description: 'Form Feed'
  },
  {
    symbol: ' ',
    code: '&#13;',
    nameCode: '-',
    jsSequence: '\\u000D',
    description: 'Carriage Return'
  },
  {
    symbol: ' ',
    code: '&#14;',
    nameCode: '-',
    jsSequence: '\\u000E',
    description: 'Shift Out'
  },
  {
    symbol: ' ',
    code: '&#15;',
    nameCode: '-',
    jsSequence: '\\u000F',
    description: 'Shift In'
  },
  {
    symbol: ' ',
    code: '&#16;',
    nameCode: '-',
    jsSequence: '\\u0010',
    description: 'Data Link Escape'
  },
  {
    symbol: ' ',
    code: '&#17;',
    nameCode: '-',
    jsSequence: '\\u0011',
    description: 'Device Control 1'
  },
  {
    symbol: ' ',
    code: '&#18;',
    nameCode: '-',
    jsSequence: '\\u0012',
    description: 'Device Control 2'
  },
  {
    symbol: ' ',
    code: '&#19;',
    nameCode: '-',
    jsSequence: '\\u0013',
    description: 'Device Control 3'
  },
  {
    symbol: ' ',
    code: '&#20;',
    nameCode: '-',
    jsSequence: '\\u0014',
    description: 'Device Control 4'
  },
  {
    symbol: ' ',
    code: '&#21;',
    nameCode: '-',
    jsSequence: '\\u0015',
    description: 'Negative Acknowledge'
  },
  {
    symbol: ' ',
    code: '&#22;',
    nameCode: '-',
    jsSequence: '\\u0016',
    description: 'Synchronous Idle'
  },
  {
    symbol: ' ',
    code: '&#23;',
    nameCode: '-',
    jsSequence: '\\u0017',
    description: 'End of Transmission Block'
  },
  {
    symbol: ' ',
    code: '&#24;',
    nameCode: '-',
    jsSequence: '\\u0018',
    description: 'Cancel'
  },
  {
    symbol: ' ',
    code: '&#25;',
    nameCode: '-',
    jsSequence: '\\u0019',
    description: 'End of Medium'
  },
  {
    symbol: ' ',
    code: '&#26;',
    nameCode: '-',
    jsSequence: '\\u001A',
    description: 'Substitute'
  },
  {
    symbol: ' ',
    code: '&#27;',
    nameCode: '-',
    jsSequence: '\\u001B',
    description: 'Escape'
  },
  {
    symbol: ' ',
    code: '&#28;',
    nameCode: '-',
    jsSequence: '\\u001C',
    description: 'File Separator'
  },
  {
    symbol: ' ',
    code: '&#29;',
    nameCode: '-',
    jsSequence: '\\u001D',
    description: 'Group Separator'
  },
  {
    symbol: ' ',
    code: '&#30;',
    nameCode: '-',
    jsSequence: '\\u001E',
    description: 'Record Separator'
  },
  {
    symbol: ' ',
    code: '&#31;',
    nameCode: '-',
    jsSequence: '\\u001F',
    description: 'Unit Separator'
  },
  {
    symbol: ' ',
    code: '&#32;',
    nameCode: '-',
    jsSequence: '\\u0020',
    description: 'Space'
  },
  {
    symbol: ' ',
    code: '&#32;',
    nameCode: '&nbsp;',
    jsSequence: '\\u00A0',
    description: 'non-breaking space'
  }
]
