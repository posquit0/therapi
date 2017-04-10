const { app, shell, Menu } = require('electron');


class MenuBuilder {

  constructor(mainWindow) {
    this.mainWindow = mainWindow;
  }

  buildDefaultTemplate() {
    const subMenuFile = {
      label: '&File',
      submenu: [{
        label: '&Close',
        accelerator: 'Ctrl+W',
        click: () => this.mainWindow.close()
      }]
    };

    const subMenuHelp = {
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

    return [
      subMenuFile,
      subMenuHelp
    ];
  }

  buildDarwinTemplate() {
    const subMenuApp = {
      label: 'Therapy',
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
    const subMenuHelp = {
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

    return [
      subMenuApp,
      subMenuHelp
    ];
  }

  buildForDevelopment() {
    this.mainWindow.webContents.on('context-menu', (e, props) => {
      const { x, y } = props;
      const menu = Menu.buildFromTemplate([{
        label: 'Inspect Element',
        click: () => this.mainWindow.inspectElement(x, y)
      }])
      menu.popup(this.mainWindow);
    })
  }

  build() {
    if (process.env.NODE_ENV === 'development')
      this.buildForDevelopment();

    let template;

    if (process.platform === 'darwin')
      template = this.buildDarwinTemplate();
    else
      template = this.buildDefaultTemplate();

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);

    return menu;
  }
}

module.exports = MenuBuilder;
