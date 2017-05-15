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
        label: 'Toggle Full Screen',
        accelerator: process.platform === 'darwin'
          ? 'Ctrl+Command+F' : 'F11',
        click: (item, focusedWindow) => {
          if (focusedWindow)
            focusedWindow.setFullScreen(!focusedWindow.isFullScreen());
        }
      }]
    };

    const menuWindow = {
      label: 'Window',
      submenu: [{
        role: 'minimize'
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
        submenu: [{
          role: 'about'
        }, {
          type: 'separator'
        }, {
          role: 'services',
          submenu: []
        }, {
          type: 'separator'
        }, {
          role: 'hide'
        }, {
          role: 'hideothers'
        }, {
          role: 'unhide'
        }, {
          type: 'separator'
        }, {
          role: 'quit'
        }]
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

      menuWindow.submenu.push({
        role: 'zoom'
      }, {
        type: 'separator'
      }, {
        role: 'front'
      });
    }

    if (process.env.NODE_ENV === 'development') {
      menuView.submenu.push({
        type: 'separator'
      }, {
        label: 'Toggle Developer Tools',
        accelerator: process.platform === 'darwin'
          ? 'Alt+Command+I' : 'Ctrl+Shift+I',
        click: (item, focusedWindow) => {
          if (focusedWindow) focusedWindow.webContents.toggleDevTools();
        }
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
