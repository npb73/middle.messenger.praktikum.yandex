export const tmpl = `
  <div class='changeProfilePage'>
   {{{popup}}}
    <div class='leftsideModule'>
      {{{profilePageButton}}}
    </div>
    <div class='basicContainer'>
      <div class='imgContainer'>
        
          <img  class='profileImg' src={{imgSrc}} alt="IMG">
          {{{imgButton}}}
        
      </div>
      <form class='changeProfile_form'>
        {{#each profileFields}}
          {{{this}}}
        {{/each}}
      </form>
      {{{button}}}
    </div>
  </div>
`;
