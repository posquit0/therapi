const { app, shell, Menu } = require('electron');


class MenuBuilder {

  constructor(mainWindow) {
    this.mainWindow = mainWindow;
  }

  buildTemplate() {
    const menuFile = {
      label: '&File',
      submenu: [{
        label: '&Close',
        accelerator: 'Ctrl+W',
        click: () => this.mainWindow.close()
      }]
    };

    const menuEdit = {
      label: 'Edit',
      submenu: [{
        role: 'undo'
      }, {
        role: 'redo'
      }, {
        type: 'separator'
      }, {
        role: 'cut'
      }, {
        role: 'copy'
      }, {
        role: 'paste'
      }, {
        role: 'pasteandmatchstyle'
      }, {
        role: 'delete'
      }, {
        role: 'selectall'
      }]
    };

    const menuView = {
      label: 'View',
      submenu: [{
        label: 'Reload',
        accelerator: 'CmdOrCtrl+R',
        click: (item, focusedWindow) => {
          if (focusedWindow) focusedWindow.reload();
        }
      }, {
        type: 'separator'
      }, {
        role: 'resetzoom'
      }, {
        role: 'zoomin'
      }, {
        role: 'zoomout'
      }, {
        type: 'separator'
      }, {
        role: 'togglefullscreen'
      }]
    };

    const menuWindow = {
      label: 'Window',
      submenu: [{
        role: 'minimize'
      }, {
        role: 'zoom'
      }, {
        type: 'separator'
      }, {
        role: 'front'
      }]
    };

    const menuHelp = {
      label: 'Help',
      submenu: [{
        label: 'Learn More',
        click() {
          shell.openExternal('https://github.com/posquit0/therapi');
        }
      }, {
        label: 'Search Issues',
        click() {
          shell.openExternal('https://github.com/posquit0/therapi/issues');
        }
      }]
    };

    const template = [
      menuFile,
      menuEdit,
      menuView,
      menuWindow,
      menuHelp
    ];

    if (process.platform === 'darwin') {
      const appName = app.getName();
      const menuApp = {
        label: appName,
        submenu: [
          { label: 'About Therapy', selector: 'orderFrontStandardAboutPanel:' },
          { type: 'separator' },
          { label: 'Services', submenu: [] },
          { type: 'separator' },
          { label: 'Hide Therapy', accelerator: 'Command+H', selector: 'hide:' },
          { label: 'Hide Others', accelerator: 'Command+Shift+H', selector: 'hideOtherApplications:' },
          { label: 'Show All', selector: 'unhideAllApplications:' },
          { type: 'separator' },
          { label: 'Quit', accelerator: 'Command+Q', click: () => app.quit() },
        ]
      };

      template.unshift(menuApp);

      menuEdit.submenu.push({
        type: 'separator'
      }, {
        // TODO: test the functions
        label: 'Speech',
        submenu: [{
          role: 'startspeaking'
        }, {
          role: 'stopspeaking'
        }]
      });
    }

    return template;
  }

  buildForDevelopment() {
    this.mainWindow.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;
      const menu = Menu.buildFromTemplate([{
        label: 'Inspect Element',
        click: () => this.mainWindow.inspectElement(x, y)
      }]);
      menu.popup(this.mainWindow);
    });
  }

  build() {
    if (process.env.NODE_ENV === 'development')
      this.buildForDevelopment();

    const template = this.buildTemplate();
    const menu = Menu.buildFromTemplate(template);

    Menu.setApplicationMenu(menu);

    return menu;
  }
}

module.exports = MenuBuilder;
