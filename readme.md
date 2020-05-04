# How to run?
  Well git clone project or download it.
  
  Move into the directory and open terminal. Make sure NPM is install.
  
  Type 'npm install or sudo npm install'
  
  Type npm run start:electron

# concerns
### electron-tabs
Issue Link: https://github.com/brrd/electron-tabs/issues/77
Package LINK: https://www.npmjs.com/package/electron-tabs
Working Example LINK: https://ourcodeworld.com/articles/read/925/how-to-implement-browser-like-tabs-in-electron-framework

Example2 Link: https://github.com/Vj3k0/electron-tabs/blob/master/app.js


# LIFESAVERS
How to Use External and Custom JavaScript in Angular
> https://www.techiediaries.com/use-javascript-in-angular/
> https://www.freecodecamp.org/forum/t/can-i-use-npm-packages-directly-inside-angular-2/132935

# Angular
### Dynamic Component
LINK: https://stackblitz.com/edit/add-or-remove-dynamic-component?file=src%2Fapp%2Fparent%2Fparent.component.ts
LINK: https://stackoverflow.com/questions/44939878/dynamically-adding-and-removing-components-in-angular

### Use of one component into another
LINK: https://stackoverflow.com/questions/39601784/use-component-from-another-module

# Electron
### Webview
Used to create view inside a page.
LINK: https://www.electronjs.org/docs/api/webview-tag

### Main vs Renderer process
LINK: https://www.christianengvall.se/main-and-renderer-process-in-electron/
LINK: https://nono.ma/says/electrons-main-and-renderer-processes
LINK: https://www.brainbell.com/javascript/electron-processes.html
LINK: https://stackoverflow.com/questions/37669727/distinction-between-the-renderer-and-main-processes-in-electron
LINK: https://www.electronjs.org/docs/tutorial/application-architecture

# Google Searches
Electron native Tabs

# Whats done?
  Modules were implemented with tabs and base and tab1 as child which will have the view1. since i don't know how dynamic you       need stuffs and do you need some tempting type of logic.
  
  Routing was established so that we can navigate between tabs( in future)
  
 # What's not done?
    Cannot display contents inside the tab because library( electron-tabs ) and the core logic was something know as Webview.
