interface HTMLSymbol {
  symbol: string
  code: string
  nameCode: string
  jsSequence: string
  description: string
}

const htmlSymbols: HTMLSymbol[] = [
  {
    symbol: '&',
    code: '&#38;',
    nameCode: '&amp;',
    jsSequence: '\\u0026',
    description: 'Ampersand'
  },
  { symbol: '<', code: '&#60;', nameCode: '&lt;', jsSequence: '\\u003C', description: 'Less-than' },
  {
    symbol: '>',
    code: '&#62;',
    nameCode: '&gt;',
    jsSequence: '\\u003E',
    description: 'Greater-than'
  },
  {
    symbol: '"',
    code: '&#34;',
    nameCode: '&quot;',
    jsSequence: '\\u0022',
    description: 'Double Quote'
  },
  {
    symbol: "'",
    code: '&#39;',
    nameCode: '&apos;',
    jsSequence: '\\u0027',
    description: 'Single Quote'
  },
  {
    symbol: '©',
    code: '&#169;',
    nameCode: '&copy;',
    jsSequence: '\\u00A9',
    description: 'Copyright'
  },
  {
    symbol: '®',
    code: '&#174;',
    nameCode: '&reg;',
    jsSequence: '\\u00AE',
    description: 'Registered'
  },
  { symbol: '€', code: '&#8364;', nameCode: '&euro;', jsSequence: '\\u20AC', description: 'Euro' },
  {
    symbol: '£',
    code: '&#163;',
    nameCode: '&pound;',
    jsSequence: '\\u00A3',
    description: 'Pound Sterling'
  },
  { symbol: '¥', code: '&#165;', nameCode: '&yen;', jsSequence: '\\u00A5', description: 'Yen' },
  { symbol: '¢', code: '&#162;', nameCode: '&cent;', jsSequence: '\\u00A2', description: 'Cent' },
  {
    symbol: '§',
    code: '&#167;',
    nameCode: '&sect;',
    jsSequence: '\\u00A7',
    description: 'Section'
  },
  {
    symbol: '™',
    code: '&#8482;',
    nameCode: '&trade;',
    jsSequence: '\\u2122',
    description: 'Trademark'
  },
  {
    symbol: '·',
    code: '&#183;',
    nameCode: '&middot;',
    jsSequence: '\\u00B7',
    description: 'Middle Dot'
  },
  {
    symbol: '¶',
    code: '&#182;',
    nameCode: '&para;',
    jsSequence: '\\u00B6',
    description: 'Pilcrow'
  },
  {
    symbol: '±',
    code: '&#177;',
    nameCode: '&plusmn;',
    jsSequence: '\\u00B1',
    description: 'Plus-minus'
  },
  {
    symbol: '÷',
    code: '&#247;',
    nameCode: '&divide;',
    jsSequence: '\\u00F7',
    description: 'Division'
  },
  {
    symbol: '×',
    code: '&#215;',
    nameCode: '&times;',
    jsSequence: '\\u00D7',
    description: 'Multiplication'
  },
  { symbol: '°', code: '&#176;', nameCode: '&deg;', jsSequence: '\\u00B0', description: 'Degree' },
  { symbol: 'µ', code: '&#181;', nameCode: '&micro;', jsSequence: '\\u00B5', description: 'Micro' }
]
