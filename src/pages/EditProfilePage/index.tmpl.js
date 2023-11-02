import * as style from './style.module.sass'

export const tmpl = 
`
<div class="filter"></div>
<div class="${style.mainWrapper}">
  <form class="${style.formWrapper}">
    <h1>edit profile</h1> 

    {{{avatar}}}

    {{{email}}}
    {{{displayName}}}
    {{{firstname}}}
    {{{lastname}}}
    {{{phone}}}
    
    {{{button}}}
    
  </form>
</div>
`
