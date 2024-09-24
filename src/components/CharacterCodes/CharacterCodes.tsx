import { createSignal, createMemo } from 'solid-js'

import { regular } from './codes/regular' //&#33; to &#64;
import { alphabetUppercase } from './codes/alphabetUppercase' //&#65; to &#90;
import { alphabetLowercase } from './codes/alphabetLowercase' // &#97; to &#122;

import { TableList } from './TableList'

export const CharacterCodes = () => {
  const [inputValue, setInputValue] = createSignal('')
  const allCodes = [...regular, ...alphabetUppercase, ...alphabetLowercase]

  const filteredCodes = createMemo(() =>
    inputValue() ? allCodes.filter((symbol) => symbol.symbol.includes(inputValue())) : []
  )

  return (
    // <div class="p-4">
    //   <div class="mb-4 text-center text-jefferson-dark ">
    //     <input
    //       type="text"
    //       class="p-2 text-jefferson-dark border rounded"
    //       placeholder="Type to search..."
    //       value={inputValue()}
    //       onInput={(e) => setInputValue(e.currentTarget.value)}
    //     />
    //   </div>

    //   {inputValue() && (
    //     <div class="text-center">
    //       {filteredCodes().map((symbol) => (
    // <div class="mb-4 p-4 border rounded shadow-sm bg-jefferson-dark">
    //   <div class="text-2xl font-bold mb-2"><code>{symbol.symbol}</code></div>
    //   <div class="font-medium text-jefferson-light"><strong>Numeric Code:</strong> <code class='font-mono text-jefferson-main'>{symbol.code}</code></div>
    //   <div class="font-medium text-jefferson-light"><strong>Name Code:</strong> <code class='font-mono text-jefferson-main'>{symbol.nameCode}</code></div>
    //   <div class="font-medium text-jefferson-light"><strong>JS Sequence:</strong> <code class='font-mono text-jefferson-main'>{symbol.jsSequence}</code></div>
    //   <div><strong>Description:</strong> <span >{symbol.description}</span></div>
    // </div>
    //       ))}
    //     </div>
    //   )}

    //   <TableList />
    // </div>
    <div class='p-4'>
      <div class='mb-4 text-center text-jefferson-dark'>
        <input
          type='text'
          class='rounded border p-2 text-jefferson-dark'
          placeholder='Type to search for a symbol...'
          value={inputValue()}
          onInput={(e) => setInputValue(e.currentTarget.value)}
        />
      </div>

      {inputValue() ? (
        <div class='text-center'>
          {filteredCodes().length > 0 ? (
            filteredCodes().map((symbol) => (
              <div class='mb-4 rounded border bg-jefferson-dark p-4 shadow-sm'>
                <div class='mb-2 hidden text-2xl font-bold'>
                  <code>{symbol.symbol}</code>
                </div>
                <div class='font-medium text-jefferson-light'>
                  <strong>Numeric Code:</strong>{' '}
                  <code class='font-mono text-jefferson-main'>{symbol.code}</code>
                </div>
                <div class='font-medium text-jefferson-light'>
                  <strong>Name Code:</strong>{' '}
                  <code class='font-mono text-jefferson-main'>{symbol.nameCode}</code>
                </div>
                <div class='font-medium text-jefferson-light'>
                  <strong>JS Sequence:</strong>{' '}
                  <code class='font-mono text-jefferson-main'>{symbol.jsSequence}</code>
                </div>
                <div class='font-medium text-jefferson-light'>
                  <strong>Description:</strong> <span>{symbol.description}</span>
                </div>
              </div>
            ))
          ) : (
            <div class='rounded border bg-jefferson-dark p-4 shadow-sm'>
              <div class='text-xl font-medium text-jefferson-light'>
                No results found for "{inputValue()}"
              </div>
            </div>
          )}
        </div>
      ) : (
        <div class='rounded border bg-jefferson-dark p-4 text-center shadow-sm'>
          <div class='text-xl font-medium text-jefferson-light'>
            No data shown, please enter a value first
          </div>
        </div>
      )}
      <TableList />
    </div>
  )
}

// export const CharacterCodes = () => {
//   const [selectedSymbol, setSelectedSymbol] = createSignal<HTMLSymbol | null>(null)

//   const handleSymbolClick = (symbol: HTMLSymbol) => {
//     setSelectedSymbol(symbol)
//   }
//   return (
//     <div>
//       <div class="grid grid-cols-4 gap-4">
//         {htmlSymbols.map((symbol) => (
//           <div
//             class="p-4 border rounded-md shadow-sm text-center cursor-pointer hover:bg-jefferson-main hover:text-jefferson-dark"
//             onMouseEnter={() => handleSymbolClick(symbol)}
//             onMouseLeave={() => setSelectedSymbol(null)}
//           >
//             <div class="text-2xl">{symbol.symbol}</div>
//             {selectedSymbol() === symbol && (
//               <div class="mt-2 p-2 border bg-jefferson-dark shadow-lg absolute">
//                 <table class="w-full">
//                   <tbody>
//                     <tr>
//                       <td class="font-medium text-jefferson-light">HTML Code:</td>
//                       <td><code class="font-mono text-jefferson-main">{symbol.code}</code></td>
//                     </tr>
//                     <tr>
//                       <td class="font-medium text-jefferson-light">HTML Name Code:</td>
//                       <td><code class="font-mono text-jefferson-main">{symbol.nameCode}</code></td>
//                     </tr>
//                     <tr>
//                       <td class="font-medium text-jefferson-light">JS Sequence:</td>
//                       <td><code class="font-mono text-jefferson-main">{symbol.jsSequence}</code></td>
//                     </tr>
//                     <tr>
//                       <td class="font-medium text-jefferson-light">Description:</td>
//                       <td>{symbol.description}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
