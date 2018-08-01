import { dialog, OpenDialogOptions, BrowserWindow } from 'electron';
import * as fs from 'fs';
import axios from 'axios';

export class JsonFileSystem {

  static getJsonFromFile(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        let data = require(path);
        resolve(data);
      } catch (err) {
        reject(err);
      }
    });
  }

  static getJsonFromUrl(url: string): Promise<any> {
    return axios.get(url);
  }

  static writeJsonFile(data: any, path: string) {
      try {
        fs.writeFileSync(path, JSON.stringify(data), { encoding: 'utf8' });
      } catch (err) {
        console.log(err);
        throw err;
      }
  }

  static getFilePathForReadFromDialog(parentWindow: BrowserWindow): string {
    const option: OpenDialogOptions = {
      title: 'Choose channel list file',
      filters: [
        { name: 'JSON file', extensions: ['json'] },
        { name: 'ALL file', extensions: ['*'] }
      ],
      properties: [
        'openFile'
      ]
    };
    let filePathes = dialog.showOpenDialog(parentWindow ? parentWindow : null, option);
    return filePathes.length > 0 ? filePathes[0] : '';
  }

  static getFilePathForWriteFromDialog(parentWindow: BrowserWindow): string {
    const option: OpenDialogOptions = {
      title: 'Choose save path',
      filters: [
        { name: 'JSON file', extensions: ['json'] },
        { name: 'ALL file', extensions: ['*'] }
      ]
    };
    return dialog.showSaveDialog(parentWindow ? parentWindow : null, option);
  }
}