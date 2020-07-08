import { app, BrowserWindow, Menu, Tray, nativeImage } from 'electron';
import path from 'path';

// セキュアな Electron の構成
// 参考: https://qiita.com/pochman/items/64b34e9827866664d436

let trayIcon = null;
let win: any = null;
const createWindow = (): void => {
  // レンダープロセスとなる、ウィンドウオブジェクトを作成する。
  win = new BrowserWindow({
    width: 480,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // 読み込む index.html。
  // tsc でコンパイルするので、出力先の dist の相対パスで指定する。
  win.loadFile('./index.html');
  win.loadFile(path.join(__dirname, './index.html'));

  // 開発者ツールを起動する
  if (process.env.NODE_ENV === 'DEV') {
    win.webContents.openDevTools();
  }

  trayIcon = new Tray(nativeImage.createFromPath(__dirname + '/icon/icon_tray.png'));

  // タスクトレイに右クリックメニューを追加
  const contextMenu = Menu.buildFromTemplate([
    {
      label: '表示',
      click: function () {
        win.focus();
      },
    },
    {
      label: '終了',
      click: function () {
        win.close();
      },
    },
  ]);
  trayIcon.setContextMenu(contextMenu);

  // タスクトレイのツールチップをアプリ名に
  trayIcon.setToolTip(app.getName());

  // タスクトレイが左クリックされた場合、アプリのウィンドウをアクティブに
  trayIcon.on('click', function () {
    win.focus();
  });
};

// Electronの起動準備が終わったら、ウィンドウを作成する。
app.whenReady().then(createWindow);

// すべての ウィンドウ が閉じたときの処理
app.on('window-all-closed', () => {
  // macOS 以外では、メインプロセスを停止する
  // macOS では、ウインドウが閉じてもメインプロセスは停止せず
  // ドックから再度ウインドウが表示されるようにする。
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // macOS では、ウインドウが閉じてもメインプロセスは停止せず
  // ドックから再度ウインドウが表示されるようにする。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
