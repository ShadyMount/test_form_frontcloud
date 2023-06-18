import { IMaskMixin } from 'react-imask';
import {LegacyRef} from "react";

export const MaskedInput = IMaskMixin(({inputRef, ...props}:{inputRef: LegacyRef<HTMLInputElement>}) => (
    <input
        {...props}
        ref={inputRef}  // bind internal input (if you use styled-components V4, use "ref" instead "innerRef")
    />
));
