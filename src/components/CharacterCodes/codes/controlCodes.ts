interface HTMLSymbol {
  symbol: string
  code: string
  nameCode: string
  jsSequence: string
  description: string
}

export const controlCodes: HTMLSymbol[] = [
  {
    symbol: ' ',
    code: '&#127;',
    nameCode: '-',
    jsSequence: '\\u007F',
    description: 'Delete character'
  },
  {
    symbol: ' ',
    code: '&#128;',
    nameCode: '-',
    jsSequence: '\\u0080',
    description: 'Padding Character'
  },
  {
    symbol: ' ',
    code: '&#129;',
    nameCode: '-',
    jsSequence: '\\u0081',
    description: 'High Octet Preset'
  },
  {
    symbol: ' ',
    code: '&#130;',
    nameCode: '-',
    jsSequence: '\\u0082',
    description: 'Break Permitted Here'
  },
  {
    symbol: ' ',
    code: '&#131;',
    nameCode: '-',
    jsSequence: '\\u0083',
    description: 'No Break Here'
  },
  {
    symbol: ' ',
    code: '&#132;',
    nameCode: '-',
    jsSequence: '\\u0084',
    description: 'Index'
  },
  {
    symbol: ' ',
    code: '&#133;',
    nameCode: '-',
    jsSequence: '\\u0085',
    description: 'Next Line (NEL)'
  },
  {
    symbol: ' ',
    code: '&#134;',
    nameCode: '-',
    jsSequence: '\\u0086',
    description: 'Start of Selected Area'
  },
  {
    symbol: ' ',
    code: '&#135;',
    nameCode: '-',
    jsSequence: '\\u0087',
    description: 'End of Selected Area'
  },
  {
    symbol: ' ',
    code: '&#136;',
    nameCode: '-',
    jsSequence: '\\u0088',
    description: 'Character Tabulation Set'
  },
  {
    symbol: ' ',
    code: '&#137;',
    nameCode: '-',
    jsSequence: '\\u0089',
    description: 'Character Tabulation With Justification'
  },
  {
    symbol: ' ',
    code: '&#138;',
    nameCode: '-',
    jsSequence: '\\u008A',
    description: 'Line Tabulation Set'
  },
  {
    symbol: ' ',
    code: '&#139;',
    nameCode: '-',
    jsSequence: '\\u008B',
    description: 'Partial Line Forward'
  },
  {
    symbol: ' ',
    code: '&#140;',
    nameCode: '-',
    jsSequence: '\\u008C',
    description: 'Partial Line Backward'
  },
  {
    symbol: ' ',
    code: '&#141;',
    nameCode: '-',
    jsSequence: '\\u008D',
    description: 'Reverse Line Feed'
  },
  {
    symbol: ' ',
    code: '&#142;',
    nameCode: '-',
    jsSequence: '\\u008E',
    description: 'Single Shift Two'
  },
  {
    symbol: ' ',
    code: '&#143;',
    nameCode: '-',
    jsSequence: '\\u008F',
    description: 'Single Shift Three'
  },
  {
    symbol: ' ',
    code: '&#144;',
    nameCode: '-',
    jsSequence: '\\u0090',
    description: 'Device Control String'
  },
  {
    symbol: ' ',
    code: '&#145;',
    nameCode: '-',
    jsSequence: '\\u0091',
    description: 'Private Use One'
  },
  {
    symbol: ' ',
    code: '&#146;',
    nameCode: '-',
    jsSequence: '\\u0092',
    description: 'Private Use Two'
  },
  {
    symbol: ' ',
    code: '&#147;',
    nameCode: '-',
    jsSequence: '\\u0093',
    description: 'Set Transmit State'
  },
  {
    symbol: ' ',
    code: '&#148;',
    nameCode: '-',
    jsSequence: '\\u0094',
    description: 'Cancel Character'
  },
  {
    symbol: ' ',
    code: '&#149;',
    nameCode: '-',
    jsSequence: '\\u0095',
    description: 'Message Waiting'
  },
  {
    symbol: ' ',
    code: '&#150;',
    nameCode: '-',
    jsSequence: '\\u0096',
    description: 'Start of Guarded Area'
  },
  {
    symbol: ' ',
    code: '&#151;',
    nameCode: '-',
    jsSequence: '\\u0097',
    description: 'End of Guarded Area'
  },
  {
    symbol: ' ',
    code: '&#152;',
    nameCode: '-',
    jsSequence: '\\u0098',
    description: 'Start of String'
  },
  {
    symbol: ' ',
    code: '&#153;',
    nameCode: '-',
    jsSequence: '\\u0099',
    description: 'Single Graphic Character Introducer'
  },
  {
    symbol: ' ',
    code: '&#154;',
    nameCode: '-',
    jsSequence: '\\u009A',
    description: 'Single Character Introducer'
  },
  {
    symbol: ' ',
    code: '&#155;',
    nameCode: '-',
    jsSequence: '\\u009B',
    description: 'Control Sequence Introducer'
  },
  {
    symbol: ' ',
    code: '&#156;',
    nameCode: '-',
    jsSequence: '\\u009C',
    description: 'String Terminator'
  },
  {
    symbol: ' ',
    code: '&#157;',
    nameCode: '-',
    jsSequence: '\\u009D',
    description: 'Operating System Command'
  },
  {
    symbol: ' ',
    code: '&#158;',
    nameCode: '-',
    jsSequence: '\\u009E',
    description: 'Privacy Message'
  },
  {
    symbol: ' ',
    code: '&#159;',
    nameCode: '-',
    jsSequence: '\\u009F',
    description: 'Application Program Command'
  },
  {
    symbol: ' ',
    code: '&#8232;',
    nameCode: '-',
    jsSequence: '\\u2028',
    description: 'Line Separator'
  },
  {
    symbol: ' ',
    code: '&#8233;',
    nameCode: '-',
    jsSequence: '\\u2029',
    description: 'Paragraph Separator'
  },
  {
    symbol: ' ',
    code: '&#8203;',
    nameCode: '-',
    jsSequence: '\\u200B',
    description: 'Zero Width Space'
  },
  {
    symbol: ' ',
    code: '&#8204;',
    nameCode: '-',
    jsSequence: '\\u200C',
    description: 'Zero Width Non-Joiner'
  },
  {
    symbol: ' ',
    code: '&#8205;',
    nameCode: '-',
    jsSequence: '\\u200D',
    description: 'Zero Width Joiner'
  },
  {
    symbol: ' ',
    code: '&#8288;',
    nameCode: '-',
    jsSequence: '\\u2060',
    description: 'Word Joiner'
  },
  {
    symbol: ' ',
    code: '&#8292;',
    nameCode: '-',
    jsSequence: '\\u2064',
    description: 'Invisible Plus'
  },
  {
    symbol: ' ',
    code: '&#8294;',
    nameCode: '-',
    jsSequence: '\\u2066',
    description: 'Left-to-Right Isolate'
  },
  {
    symbol: ' ',
    code: '&#8295;',
    nameCode: '-',
    jsSequence: '\\u2067',
    description: 'Right-to-Left Isolate'
  },
  {
    symbol: ' ',
    code: '&#8296;',
    nameCode: '-',
    jsSequence: '\\u2068',
    description: 'First Strong Isolate'
  },
  {
    symbol: ' ',
    code: '&#8297;',
    nameCode: '-',
    jsSequence: '\\u2069',
    description: 'Pop Directional Isolate'
  }
]
