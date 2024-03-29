export const tmpl = `
  <div class='profilePage'>
    <div class='leftsideModule'>
      {{{chatPageButton}}}
    </div>
    <div class='basicContainer'>
      <img class='profileImg' src={{imgSrc}} alt="IMG"/>
      <div class='profileName'>{{profileName}}</div>
      {{#each profileFields}}
            {{{this}}}
      {{/each}}
      <div class='linkContainer'>
        {{{changeProfileButton}}}
        {{{changePasswordButton}}}
        {{{logoutButton}}}
      </div>
    </div>
  </div>
`;
