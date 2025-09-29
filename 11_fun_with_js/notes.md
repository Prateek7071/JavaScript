
You're seeing only a small horizontal orange line because the body element in your HTML only occupies the height necessary to contain its content—the two buttons.

By default, the <body> element doesn't automatically stretch to fill the entire height of the browser's viewport.

To make the background cover the complete screen, you need to set the height of both the html and body elements to 100%.
refer to notes for fix

inside of head after title

<style>
    /* 1. Set the root element (html) to full viewport height */
    html {
        height: 100%;
    }
    
    /* 2. Set the body element to inherit that full height */
    body {
        height: 100%;
        /* You might also want to remove default margin/padding */
        margin: 0; 
        padding: 0;
    }
</style>