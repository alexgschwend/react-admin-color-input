/// <reference types="react" />
import { Validator } from 'ra-core';
import './ColorInput.css';
interface ColorFieldProps {
    source: string;
    label?: string;
    className?: string;
}
export declare const ColorField: ({ source, className }: ColorFieldProps) => JSX.Element;
interface ColorInputProps {
    resource?: string;
    label: string;
    options?: {
        disableAlpha: true;
    };
    source: string;
    helperText?: string;
    className?: string;
    isRequired?: boolean;
    validate?: Validator | Validator[] | undefined;
    variant?: 'filled' | 'outlined' | 'standard';
    picker?: 'Alpha' | 'Block' | 'Check' | 'Chrome' | 'Circle' | 'Compact' | 'Github' | 'Hue' | 'Material' | 'Photoshop' | 'Sketch' | 'Slider' | 'Swatches' | 'Twitter' | 'Custom';
}
export declare const ColorInput: (props: ColorInputProps) => JSX.Element;
export {};
