export const tmpl = `
    <form class="inputForm">
        {{#each inputFields}}
            {{{this}}}
        {{/each}}
    </form>
    <div class='buttonContainer'>
        {{{button}}}
        {{{link}}}
    </div>
`;
