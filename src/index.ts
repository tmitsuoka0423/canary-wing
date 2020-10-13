import { app, Tray, Menu, nativeImage } from 'electron';

const version = '2.0.0';

let appIcon: Tray | null = null;
app.on('ready', () => {
  appIcon = appIcon ?? new Tray(nativeImage.createFromPath(__dirname + '/icon/icon_tray.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: `Canary Wing ver.${version}`, enabled: false },
    { type: 'separator' },
    {
      type: 'normal',
      label: 'Chrome Canaryを起動',
      click() {
        console.log('clicked launch');
      },
    },
    { type: 'separator' },
    { type: 'normal', label: 'Option', enabled: false },
    { type: 'checkbox', label: 'SSL証明書エラーを無視', checked: true },
    { type: 'checkbox', label: 'シークレットモード' },
    { type: 'checkbox', label: '開発者ツールを表示' },
    { type: 'checkbox', label: 'CORSエラーを無視' },
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
