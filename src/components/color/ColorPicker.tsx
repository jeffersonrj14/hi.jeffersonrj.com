import { createSignal } from 'solid-js'
import { HexColorPicker } from 'solid-colorful'

export const ColorPicker = () => {
  const [color, setColor] = createSignal('#13c4a5');
  const [input, setInput] = createSignal('#13c4a5');

  const handleInputChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setInput(target.value);
    if (target.value.startsWith('#') || target.value.startsWith('hsl')) {
      setColor(target.value);
    }
  };

  return (
    <div>
      <div class='pb-6'>
        <div class='pb-2 pl-0.5'>Current Color: {color()}</div>
        <div class='h-16 w-8/12 rounded-md' style={{ background: color() }}></div>
        </div>
        <HexColorPicker color={color()} onChange={setColor} class='h-32 w-full cursor-pointer' />
        <div class='my-4'>
          <label for='colorInput' class='block text-sm font-medium text-gray-700 text-white/80'>
            Color Check (Hex or HSL)
          </label>
          <input
            id='colorInput'
            type='text'
            value={input()}
            onInput={handleInputChange}
            class='mt-1 block w-40 rounded-md border-gray-300 p-1 text-jefferson-dark shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          />
        </div>
    </div>
  )
}
