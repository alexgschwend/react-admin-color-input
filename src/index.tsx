import TextField from '@mui/material/TextField'
import get from 'lodash/get'
import { FieldTitle, useInput, useRecordContext, Validator } from 'ra-core'
import { useState } from 'react'
import * as ReactColor from 'react-color'

interface ColorFieldProps {
  source: string
  // eslint-disable-next-line react/no-unused-prop-types
  label?: string
  className?: string
}

export const ColorField = ({ source, className }: ColorFieldProps) => {
  const record = useRecordContext()

  return (
    <div style={{ display: 'flex' }}>
      <div
        style={{
          width: '20px',
          height: '20px',
          background: get(record, source),
          marginRight: '5px',
        }}
      />
      <span className={className}>{get(record, source)}</span>
    </div>
  )
}

interface ColorInputProps {
  resource?: string
  label?: string
  options?: {
    disableAlpha: true
  }
  source: string
  helperText?: string
  className?: string
  isRequired?: boolean
  validate?: Validator | Validator[] | undefined
  variant?: 'filled' | 'outlined' | 'standard'
  picker?:
    | 'Alpha'
    | 'Block'
    | 'Check'
    | 'Chrome'
    | 'Circle'
    | 'Compact'
    | 'Github'
    | 'Hue'
    | 'Material'
    | 'Photoshop'
    | 'Sketch'
    | 'Slider'
    | 'Swatches'
    | 'Twitter'
    | 'Custom'
}

export const ColorInput = (props: ColorInputProps) => {
  const [show, setShow] = useState(false)

  const {
    label,
    source,
    className,
    options,
    picker = 'Chrome',
    resource,
    helperText,
    validate,
    variant = 'standard',
  } = props

  const {
    field,
    fieldState: { isTouched, error },
    isRequired,
  } = useInput({
    ...props,
    validate,
  })

  const handleOpen = () => setShow(true)
  const handleClose = () => setShow(false)
  const handleChange = ({ hex }: any) => {
    field.onChange(hex)
  }

  const Picker = ReactColor[`${picker}Picker` as keyof typeof ReactColor]

  return (
    <div>
      <TextField
        {...field}
        margin="normal"
        variant={variant}
        onFocus={handleOpen}
        label={<FieldTitle label={label} source={source} resource={resource} isRequired={isRequired} />}
        error={!!(isTouched && error)}
        helperText={helperText}
        className={className}
      />
      {show ? (
        <div className="ColorInput-popup" style={{
          position: 'absolute',
          zIndex: 2,
        }}>
          {/* eslint-disable-next-line */}
          <div className="ColorInput-cover" onClick={handleClose} style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }} />
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Picker {...options} color={field.value} onChange={handleChange} />
        </div>
      ) : null}
    </div>
  )
}
