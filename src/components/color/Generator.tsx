import { createSignal } from 'solid-js'
import { ClipboardIcon } from '../icons/Clipboard.tsx'

export const ColorGenerator = () => {
  const [colors, setColors] = createSignal(['#000000', '#000000', '#000000', '#000000'])
  const [locked, setLocked] = createSignal([false, false, false, false])

  const generateColor = (index: number) => {
    if (locked()[index]) return // If locked, don't generate color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
    const newColors = [...colors()]
    newColors[index] = randomColor
    setColors(newColors)
  }

  const toggleLock = (index: number) => {
    const newLocked = [...locked()]
    newLocked[index] = !newLocked[index]
    setLocked(newLocked)
  }

  const generateAllUnlockedColors = () => {
    const newColors = colors().map((color, index) => {
      if (!locked()[index]) {
        return '#' + Math.floor(Math.random() * 16777215).toString(16)
      }
      return color
    })
    setColors(newColors)
  }

  const copyToClipboard = (color: string) => {
    navigator.clipboard.writeText(color)
  }

  return (
    // <div class='flex flex-wrap justify-center gap-4'>
    //   {colors().map((color, index) => (
    //     <div class="items-center grid grid-cols-2 md:grid-cols-2  bg-gray-400 text-jefferson-dark">
    //       <div style={{ background: color, width: '100px', height: '100px' }}></div>
    //       <p class=''>{color}</p>
    //       <button onClick={() => generateColor(index)} class="bg-gray-300 hover:bg-jefferson-main text-jefferson-dark hover:text-jefferson-light font-bold py-2 px-4 rounded">
    //         Generate Color
    //       </button>
    //       <button onClick={() => toggleLock(index)} class="ml-2 bg-gray-300 hover:bg-jefferson-main text-jefferson-dark hover:text-jefferson-light font-bold py-2 px-4 rounded">
    //         {locked()[index] ? 'Unlock' : 'Lock'}
    //       </button>
    //       <button onClick={() => copyToClipboard(color)} class="mt-2 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
    //         Copy Hex
    //       </button>
    //     </div>
    //   ))}
    //   <div class="w-full flex justify-center mt-4">
    //   <button onClick={() => generateAllUnlockedColors()} class="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
    //     Generate All Unlocked Colors
    //   </button>
    //   </div>
    // </div>
    <div class='flex flex-wrap justify-center gap-4'>
      {colors().map((color, index) => (
        <div class='flex flex-col items-center rounded-md border bg-white/80 px-2 py-2 text-jefferson-dark'>
          <div style={{ background: color, width: '100px', height: '100px' }}></div>
          <div class='mt-2 flex h-8 w-24 items-center justify-center rounded bg-gray-200'>
            <p>{color}</p>
          </div>
          <button
            onClick={() => toggleLock(index)}
            class={`mt-2 rounded px-4 py-2 font-bold ${
              locked()[index]
                ? 'bg-red-500 text-white active:bg-red-700'
                : 'bg-teal-500 text-white active:bg-teal-700'
            }`}
          >
            {locked()[index] ? 'Locked' : 'Unlocked'}
          </button>
          <button
            onClick={() => generateColor(index)}
            class='mt-2 rounded bg-teal-500 px-4 py-2 font-bold text-white active:bg-teal-700'
          >
            Generate Color
          </button>
          <button
            onClick={() => copyToClipboard(color)}
            class='mt-2 flex items-center bg-sky-600 px-4 py-2 text-sky-100 active:bg-sky-700'
          >
            <ClipboardIcon />
            <span class='ml-1'>Copy</span>
          </button>
        </div>
      ))}
      <div class='mt-4 flex w-full justify-center'>
        <button
          onClick={() => generateAllUnlockedColors()}
          class='rounded bg-teal-500 px-4 py-2 font-bold text-white active:bg-teal-700'
        >
          Generate All Unlocked Colors
        </button>
      </div>
    </div>
  )
}
