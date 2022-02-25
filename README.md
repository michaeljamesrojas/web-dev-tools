# WEB-DEV-TOOLS

A chromium-based extension that provides web developer tools for easy prototyping and or manipulating web pages.
### Load an unpacked extension

The directory holding the manifest file can be added as an extension in developer mode in its current state. To load an unpacked extension in developer mode, follow these steps:

1.  Open the Extension Management page by navigating to `chrome://extensions`.
    -   Alternatively, open this page by clicking on the Extensions menu button and selecting **Manage Extensions** at the bottom of the menu.
    -   Alternatively, open this page by clicking on the Chrome menu, hovering over **More Tools** then selecting **Extensions**
2.  Enable Developer Mode by clicking the toggle switch next to **Developer mode**.
3.  Click the **Load unpacked** button and select the extension directory.

![Loading an unpacked extension](https://wd.imgix.net/image/BhuKGJaIeLNPW9ehns59NfwqKxF2/vOu7iPbaapkALed96rzN.png?auto=format)

## NOTE:
- index.mini.js is the extension entry point so make sure to run watchify "npm run watchify" script in package.json to make sure any changes to index.js will be reflected to index.mini.js