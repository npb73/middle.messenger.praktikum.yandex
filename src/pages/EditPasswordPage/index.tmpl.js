import * as style from './style.module.sass'

export const tmpl = 
`
<div class="filter"></div>
<div class="${style.mainWrapper}">
  <form class="${style.formWrapper}">
    <h1>change password</h1> 

    {{{oldPassword}}}
    {{{newPassword}}}

    
    {{{button}}}
    
  </form>
</div>
`
