import * as style from './style.module.sass'

export const tmpl = 
`
<div class="${style.inputWrapper}">
<span class="${style.inputName}">{{placeholder}}</span>
<input class="${style.customInput}" placeholder="{{placeholder}}" name="{{name}}" type="{{type}}"/>
</div>

`