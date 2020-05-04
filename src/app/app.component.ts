import { Component, OnInit } from '@angular/core';

// const TabGroup = require("electron-tabs");
// const dragula = require('dragula');
import * as TabGroup from 'electron-tabs';
import * as dragula from 'dragula';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '63 Moons';
  ngOnInit(){

        let tabGroup = new TabGroup({
            // If you want a new button that appends a new tab, include:
            newTab: {
                title: 'New Tab',
                // The file will need to be local, probably a local-ntp.html file
                // like in the Google Chrome Browser.

                //src: "./some-index-file.html",
                //visible: true,
                //webviewAttributes: {
                //    nodeintegration: true
                //}
            },
            ready: tabGroup => {
                dragula([tabGroup.tabContainer], {
                    direction: 'horizontal'
                });
            }
        });

        // 3. Add a tab from a website
        let tab1 = tabGroup.addTab({
            title: "View1",
            src: "/media/sirusdas/Workspace007/Workspace/MySelf/interviews/63%20moons/Assignment/electron-angular-demo/dist/tabs/tab1",
            visible: true,
            closable: false,
            active: true,
        });
        /*
        // 4. Add a new tab that contains a local HTML file
        let tab2 = tabGroup.addTab({
            title: "View2",
            src: "./local.html",
            visible: true,
            // If the page needs to access Node.js modules, be sure to
            // enable the nodeintegration
            webviewAttributes: {
                nodeintegration: true
            },
            visible: true,
            closable: false
        });
        let tab3 = tabGroup.addTab({
            title: "View3",
            src: "./local.html",
            visible: true,
            closable: false,
            // If the page needs to access Node.js modules, be sure to
            // enable the nodeintegration
            webviewAttributes: {
                nodeintegration: true
            }
        });
        */
  }
}
