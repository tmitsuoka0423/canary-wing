import { app, Tray, Menu, nativeImage } from 'electron';
import { launch } from './actions';
import Options from './modules/Options';
import getVersion from './modules/getVersion';

let appIcon: Tray | null = null;
app.on('ready', async () => {
  const version = await getVersion();
  const options = new Options();

  appIcon = appIcon ?? new Tray(nativeImage.createFromPath(__dirname + '/icon/icon_tray.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: `Canary Wing ver.${version}`, enabled: false },
    { type: 'separator' },
    {
      type: 'normal',
      label: 'Chrome Canaryを起動',
      click: async () => {
        await launch(options);
      },
    },
    { type: 'separator' },
    { type: 'normal', label: 'Option', enabled: false },
    {
      type: 'checkbox',
      label: 'SSL証明書エラーを無視',
      checked: options.getIgnoreCertificateErrors(),
      click: async () => {
        options.toggleIgnoreCertificateErrors();
      },
    },
    {
      type: 'checkbox',
      label: 'シークレットモード',
      checked: options.getIncognito(),
      click: async () => {
        options.toggleIncognito();
      },
    },
    {
      type: 'checkbox',
      label: '開発者ツールを表示',
      checked: options.getAutoOpenDevtoolsForTabs(),
      click: async () => {
        options.toggleAutoOpenDevtoolsForTabs();
      },
    },
    {
      type: 'checkbox',
      label: 'CORSエラーを無視',
      checked: options.getDisableWebSecurity(),
      click: async () => {
        options.toggleDisableWebSecurity();
      },
    },
    { type: 'separator' },
    {
      type: 'normal',
      label: '終了',
      click() {
        app.quit();
      },
    },
  ]);
  appIcon.setToolTip('Canary Wing');
  appIcon.setContextMenu(contextMenu);
});

app.dock.hide();
