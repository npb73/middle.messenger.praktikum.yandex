export const tmpl = `
  <div class='chatPage'>
    {{{popupCreateUser}}}
    {{{popupCreateChat}}}
    <div class='ChatListModule'>
      <div class='linkContainer'>
        {{{createChatButton}}}
        {{{toProfileButton}}}
      </div>
      <div class='chatList'>
        {{#each chatList}}
          {{{this}}}
        {{/each}}
      </div>
    </div>
    {{{selectChat}}}   
  </div>
`;
