import { app, BrowserWindow, Tray, nativeImage } from 'electron';
import path from 'path';

// セキュアな Electron の構成
// 参考: https://qiita.com/pochman/items/64b34e9827866664d436

let trayIcon: any = null;
let win: any = null;
let forceQuit: boolean = false;

const createWindow = (): void => {
  // レンダープロセスとなる、ウィンドウオブジェクトを作成する。
  win = win
    ? win
    : new BrowserWindow({
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
  win.setMinimumSize(480, 600);
  win.setMaximumSize(480, 600);

  win.on('close', (event: any) => {
    if (!forceQuit) {
      event.preventDefault();
      win.hide();
    }
  });

  // 開発者ツールを起動する
  if (process.env.NODE_ENV === 'DEV') {
    win.webContents.openDevTools();
  }

  trayIcon = trayIcon ? trayIcon : new Tray(nativeImage.createFromPath(__dirname + '/icon/icon_tray.png'));

  trayIcon.setToolTip(app.getName());

  // タスクトレイが左クリックされた場合、アプリのウィンドウをアクティブに
  trayIcon.on('click', function () {
    win.show();
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

app.on('before-quit', () => {
  console.log('before-quit');
  forceQuit = true;
});

app.dock.hide();
