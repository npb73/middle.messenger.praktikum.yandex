import * as style from './style.module.sass'

export const tmpl = 
`
<div class="filter"></div>
<div class="${style.mainWrapper}">
  <form class="${style.formWrapper}">
    <h1>create account</h1> 

    {{{email}}}
    {{{firstname}}}
    {{{lastname}}}
    {{{phone}}}
    {{{password}}}
    {{{passwordAccept}}}
    
    {{{button}}}
    
  </form>
</div>
`