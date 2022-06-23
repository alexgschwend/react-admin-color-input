# `<ColorInput> and <ColorField> compatible with react-admin v4`

A color picker for [react-admin](https://github.com/marmelab/react-admin) (v4) using [React Color](http://casesandberg.github.io/react-color/), a collection of color pickers.

![color-input.gif](color-input.gif)

Also includes a color field for just displaying the color value.

![color-field.png](color-field.png)

## Notice

This module was originally created for [admin-on-rest](https://github.com/marmelab/admin-on-rest) by @dreinke and was forked from his [repository](https://github.com/dreinke/aor-color-input) and this [repository](https://github.com/vascofg/react-admin-color-input).

## Installation

```sh
npm install react-admin-color-picker
```
or 
```sh
yarn add react-admin-color-picker
```
## Usage

```js
import {
    Show,
    TextField,
    Edit,
    TextInput,
    LongTextInput,
} from 'react-admin';

import { ColorField, ColorInput } from 'react-admin-color-input';

export const PostShow = () => (
    <Show>
        <TextField source="title" />
        <TextField source="body" />
        <ColorField source="color" />
    </Edit>
);

export const PostEdit = () => (
    <Edit>
        <TextInput source="title" validate={[required()]} />
        <LongTextInput source="body" validate={[required()]} />
        <ColorInput source="color" />
    </Edit>
);
```

You can customize the color picker using the `picker` attribute.

```js
<ColorInput source="color" picker="Sketch"/>
```

### Pickers
- Alpha
- Block
- Chrome (default)
- Circle
- Compact
- Github
- Hue
- Material
- Photoshop
- Sketch
- Slider
- Swatches
- Twitter

## License

This library is licensed under the [MIT Licence](LICENSE).
