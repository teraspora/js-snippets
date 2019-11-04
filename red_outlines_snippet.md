# Simplify CSS layout debugging

- Do you sometimes have trouble lining up elements in a web page?
- For debugging, do you wish it were easier to see the boundaries of elements on your page?
- Does it get annoying having to add CSS borders in the Dev Tools Styles pane?
- Do you wish all your main block elements had bright red borders so you could see their boundaries easily?

## Yes?

Well why not attenuate the stress and simplify your life with this little function:

```javascript
function outline_elements() {
    els = [...(document.body.querySelectorAll(`body > *, body > * > *, body > * > * > *`))];
    els.forEach(elem => { Object.assign(elem.style, {border: `1px solid #f00`}); });
}
```

## What's going on?

We use the selector `body > *, body > * > *, body > * > * > *` to get all first-, second- and third-level elements.   You could of course customise this to select whichever elements you want to.   If you're using semantic elements (as you should be!) then `nav, main, section, aside` might be what you need, for example.

This gives us a `NodeList`, so we spread it with the ES6 spread operator `...` to get an array, so we can use the `forEach()` Array method.

Then we iterate over these elements, assigning a value to the `style` property of each one.   Clearly you can customise this too.

## Running the code

You can of course just paste this function into the Dev Tools console, then invoke it with `outline_elements()`, and, hey presto, red outlines should appear.

But if you find it useful and would like to have it available on any web page you're building or debugging, or just inspecting, then why not save it in Chrome as a _"snippet"_...?

## Make it a snippet

A _"snippet"_ is a small chunk of code that does a simple job and can be saved and re-used.

If you open the "Sources" tab in Chrome Dev Tools and look in the top left corner, you should find a _`+ New snippet`_ link.   It's in the *Snippets* pane. (You may have to click the `>>` if that's not open.)  Click it, and paste the function in the panel that opens.   Don't forget the invocation.

If you highlight its name in the list of snippets, you can - and should - rename it to something less generic than `Script snippet #5`.

You can run it from a right-click context menu or just hit `Ctrl+Enter`.
You also have the option here to save it in your local filesystem.

## Extra:  Make it an IIFE

An IIFE (*Immediately Invoked Function Expression*) is a function which is invoked, and therefore runs, as soon as it is defined.   So we can save having to invoke it after defining it:

```javascript
(_ => {
    els = [...(document.body.querySelectorAll(`body > *, body > * > *, body > * > * > *`))];
    els.forEach(elem => { Object.assign(elem.style, {border: `1px solid #f00`}); });
})()
```

As we're invoking it immediately, we don't need our function to have a name, so we might as well use an anonymous function.   Note that we also save a bit of typing, and arguably make it a little easier to read, by using an arrow function.   We also need to wrap the entire function in parentheses, else we'll get a syntax error.   Of course, it's the `()` at the end which result in its invocation.

So this is all the code we need for our snippet.   Try it out first by just pasting it into the Dev Tools console.

Lastly, to anticipate what some readers may say, yes, it can be written in one line, but this makes it difficult for humans to see easily what's going on, so I prefer the above two-line version, which makes it clear that first we select our elements, then we apply the style properties.




