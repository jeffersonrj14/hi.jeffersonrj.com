import { createSignal } from 'solid-js'

import { specialCodes } from './codes/specialCodes' // &#00; to &#32; and &#160;
import { controlCodes } from './codes/controlCodes' // &#127; to &#159; and &8232; to &8297;

export const TableList = () => {
  const [selectedSymbol, setSelectedSymbol] = createSignal<HTMLSymbol | null>(null)

  const handleSymbolClick = (symbol: HTMLSymbol) => {
    setSelectedSymbol(symbol)
  }

  const specialHTMLCodes = specialCodes
  const additionalControlCodes = controlCodes

  return (
    <div class='mt-36'>
      <div class='inline-flex w-full items-center justify-center'>
        <hr class='my-8 h-1 w-64 rounded border-0 bg-gray-200 dark:bg-gray-700' />
        <div class='absolute left-1/2 -translate-x-1/2 bg-white px-4 dark:bg-gray-900'>
          <svg
            class='h-4 w-4 text-gray-700 dark:text-gray-300'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 18 14'
          >
            <path d='M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z' />
          </svg>
        </div>
      </div>
      {/*  */}
      <h2 class='mb-4 text-center text-xl font-semibold'>
        Special HTML Codes{' '}
        <span class='text-jefferson-main'>[ &amp;#00; to &amp;#32; and &amp;#160; ]</span> <br />
        (non-printable control characters)
      </h2>
      <div class='mx-auto grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-11'>
        {specialHTMLCodes.map((symbol) => (
          <div
            class='cursor-pointer rounded-md border p-4 shadow-sm hover:bg-jefferson-main hover:text-jefferson-dark'
            onMouseEnter={() => handleSymbolClick(symbol)}
            onMouseLeave={() => setSelectedSymbol(null)}
          >
            <div class='text-center text-2xl'>{symbol.symbol}</div>
            {selectedSymbol() === symbol && (
              <div class='absolute mt-2 border bg-jefferson-dark p-2 shadow-lg'>
                <table class='w-full'>
                  <tbody>
                    <tr>
                      <td class='text-left font-medium text-jefferson-light'>Numeric Code</td>
                      <td class='text-jefferson-light'>&nbsp;:&nbsp;</td>
                      <td>
                        <code class='text-right font-mono text-jefferson-main'>{symbol.code}</code>
                      </td>
                    </tr>
                    <tr>
                      <td class='font-medium text-jefferson-light'>Name Code</td>
                      <td class='text-jefferson-light'>&nbsp;:&nbsp;</td>
                      <td>
                        <code class='font-mono text-jefferson-main'>{symbol.nameCode}</code>
                      </td>
                    </tr>
                    <tr>
                      <td class='font-medium text-jefferson-light'>JS Sequence</td>
                      <td class='text-jefferson-light'>&nbsp;:&nbsp;</td>
                      <td>
                        <code class='font-mono text-jefferson-main'>{symbol.jsSequence}</code>
                      </td>
                    </tr>
                    <tr>
                      <td class='font-medium text-jefferson-light'>Description</td>
                      <td class='text-jefferson-light'>&nbsp;:&nbsp;</td>
                      <td class='text-jefferson-light'>{symbol.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
      {/*  */}
      <h2 class='mb-4 mt-8 text-center text-xl font-semibold'>
        Additional Control Codes{' '}
        <span class='text-jefferson-main'>
          [ &amp;#127; to &amp;#159; and &amp;#8232; to &amp;#8297; ]
        </span>
        <br />
        (non-printable control characters)
      </h2>
      <div class='mx-auto grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-11'>
        {additionalControlCodes.map((symbol) => (
          <div
            class='cursor-pointer rounded-md border p-4 shadow-sm hover:bg-jefferson-main hover:text-jefferson-dark'
            onMouseEnter={() => handleSymbolClick(symbol)}
            onMouseLeave={() => setSelectedSymbol(null)}
          >
            <div class='text-center text-2xl'>{symbol.symbol}</div>
            {selectedSymbol() === symbol && (
              <div class='absolute mt-2 border bg-jefferson-dark p-2 shadow-lg'>
                <table class='w-full'>
                  <tbody>
                    <tr>
                      <td class='text-left font-medium text-jefferson-light'>Numeric Code</td>
                      <td class='text-jefferson-light'>&nbsp;:&nbsp;</td>
                      <td>
                        <code class='text-right font-mono text-jefferson-main'>{symbol.code}</code>
                      </td>
                    </tr>
                    <tr>
                      <td class='font-medium text-jefferson-light'>Name Code</td>
                      <td class='text-jefferson-light'>&nbsp;:&nbsp;</td>
                      <td>
                        <code class='font-mono text-jefferson-main'>{symbol.nameCode}</code>
                      </td>
                    </tr>
                    <tr>
                      <td class='font-medium text-jefferson-light'>JS Sequence</td>
                      <td class='text-jefferson-light'>&nbsp;:&nbsp;</td>
                      <td>
                        <code class='font-mono text-jefferson-main'>{symbol.jsSequence}</code>
                      </td>
                    </tr>
                    <tr>
                      <td class='font-medium text-jefferson-light'>Description</td>
                      <td class='text-jefferson-light'>&nbsp;:&nbsp;</td>
                      <td class='text-jefferson-light'>{symbol.description}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
    </div>
  )
}
