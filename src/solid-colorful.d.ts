declare module 'solid-colorful' {
    import { Component } from 'solid-js';
  
    export interface HexColorPickerProps {
      color: string;
      onChange: (color: string) => void;
      class?: string;
    }
  
    export const HexColorPicker: Component<HexColorPickerProps>;
  }
  