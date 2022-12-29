javascript: (function () {
    var file_name = prompt("Enter a file name to save the chat:");
    file_name = file_name || "chatgpt_" + new Date().getFullYear() + "-" +
        (currentDate.getMonth() + 1).toString().padStart(2, "0") + "-" +
        currentDate.getDate().toString().padStart(2, "0") + " " +
        currentDate.getHours().toString().padStart(2, "0") + "-" +
        currentDate.getMinutes().toString().padStart(2, "0");

    const link = document.createElement('a');
    var chat_body = document.querySelector('[class^="flex-1 overflow-hidden"]').innerHTML
        .replace(/<img[^>]*>|<button[^>]*>.*?<\/button>|<svg[^>]*>.*?<\/svg>/g, '');
    link.href = URL.createObjectURL(new Blob([
        `
        <!DOCTYPE html>
        <html>

        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css">
        <style>
            [class^="flex flex-col items-center text-sm h-full"]>div:nth-child(2n+1) {
                background: lightgray;
            }
            
            [class^="flex flex-col items-center text-sm h-full"]>div:nth-child(2n+2) {
                background: darkgray;
            }
            
            [class^="flex flex-col items-center text-sm h-full"]>div:not(:last-child) {
                padding: 10px;
                margin: 15px;
                border-radius: 5px;
            }
        </style>
        </head>

        <body>
        ${chat_body}
        </body>

        </html>
        `
    ],
        { type: 'text/html' }));
    link.download = file_name + '.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
})()
