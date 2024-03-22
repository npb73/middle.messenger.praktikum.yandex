export const tmpl = `
    <div class='SelectedChatModule'>
    {{{popupCreateUser}}}
    {{{popupDeleteUser}}}
    {{#if selectedChat}}
      <div class='header'>
        <div class='headerInfo'>
          <img class='headerInfo_img' src={{imgSrc}} alt="IMG"/>
          <p class='headerInfo_name'>{{data.title}}</p>
        </div>
        {{{addUserButton}}}
        {{{deleteUserButton}}}
        {{{deleteChatButton}}}
      </div>
      <div class='chat'>
        {{#each chatList}}
            {{{this}}}
        {{/each}}
      </div>
      <form class='footer'>
        {{{input}}}
        {{{button}}}
      </form>
    {{else}}
      <h1 align='center'>select chat</h1>
    {{/if}}
    </div>
`;
