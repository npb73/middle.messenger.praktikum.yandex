import * as style from './style.module.sass'

export const tmpl = 
`
<div class="${style.inputWrapper}">
<span class="${style.inputName}">{{placeholder}}</span>
<input name="{{name}}" class="${style.customInput}" type="text" placeholder="{{placeholder}}"/>
</div>

`