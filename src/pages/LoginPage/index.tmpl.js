import * as style from './style.module.sass'

export const tmpl = 
`
<div class="filter"></div>
<div class="${style.mainWrapper}">
  <form class="${style.formWrapper}">
    <h1>log in</h1> 

    {{{login}}}
    {{{password}}}
    {{{button}}}
    
  </form>
</div>
`
