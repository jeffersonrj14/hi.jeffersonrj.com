import { hexToRgb, hexToHsl, isValidColor } from '../../utils/colorutils'
import { createSignal } from 'solid-js'
import { HexColorPicker } from 'solid-colorful'
import { ClipboardIcon } from '../icons/Clipboard.tsx'

export const ColorPicker = () => {
  const [color, setColor] = createSignal('#DFE6E9')
  const [input, setInput] = createSignal('')

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
    if (isValidColor(target.value)) {
      setColor(target.value)
    }
  }

  // const currentColorHex = () => {
  //   if (color().startsWith('hsl')) return hslToHex(color()) ?? '';
  //   if (color().startsWith('rgb')) return rgbToHex(color()) ?? '';
  //   return color();
  // };

  // const currentColorHsl = () => {
  //   if (color().startsWith('#')) return hexToHsl(color()) ?? '';
  //   if (color().startsWith('rgb')) return hexToHsl(rgbToHex(color()) ?? '') ?? '';
  //   return color();
  // };

  // const currentColorRgb = () => {
  //   if (color().startsWith('#')) return hexToRgb(color()) ?? '';
  //   if (color().startsWith('hsl')) return hexToRgb(hslToHex(color()) ?? '') ?? '';
  //   return color();
  // };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!')
    })
  }

  const hex = color()
  const hsl = hexToHsl(hex) || ''
  const rgb = hexToRgb(hex) || ''

  return (
    <div>
      <div class='pb-6'>
        <div class='relative h-24 w-full rounded-md' style={{ background: color() }}>
          <div
            class='absolute inset-0 flex items-center justify-center font-medium text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'
            style={{ color: color() }}
          >
            {color()}
          </div>
        </div>
      </div>
      <HexColorPicker color={color()} onChange={setColor} class='h-32 w-full cursor-pointer' />
      <div class='my-4'>
        <label for='colorInput' class='block text-sm font-medium text-gray-700 text-white/80'>
          Color Check (Hex, HSL, or RGB)
        </label>
        <input
          id='colorInput'
          type='text'
          placeholder='#DFE6E9 or hsl(198°, 18.5%, 89.4%) or rgb(223, 230, 233)'
          value={input()}
          onInput={handleInputChange}
          class='mt-1 block w-40 rounded-md border-gray-300 p-1 text-jefferson-dark shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
        />
      </div>
      <div class='flex flex-col gap-4'>
        <div class='flex items-center gap-2'>
          <button
            onClick={() => copyToClipboard(hex)}
            class='flex items-center gap-1 rounded-md p-1 text-jefferson-main hover:text-jefferson-maindark'
          >
            <ClipboardIcon />
          </button>
          <span class='text-white'>Hex: {hex}</span>
        </div>
        <div class='flex items-center gap-2'>
          <button
            onClick={() => copyToClipboard(hsl)}
            class='flex items-center gap-1 rounded-md p-1 text-jefferson-main hover:text-jefferson-maindark'
          >
            <ClipboardIcon />
          </button>
          <span class='text-white'>HSL: {hsl}</span>
        </div>
        <div class='flex items-center gap-2'>
          <button
            onClick={() => copyToClipboard(rgb)}
            class='flex items-center gap-1 rounded-md p-1 text-jefferson-main hover:text-jefferson-maindark'
          >
            <ClipboardIcon />
          </button>
          <span class='text-white'>RGB: {rgb}</span>
        </div>
      </div>
    </div>
  )
}
