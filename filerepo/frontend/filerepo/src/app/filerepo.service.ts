import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { File } from "./file";
import { HttpHeaders } from '@angular/common/http';

const localUrl = 'http://127.0.0.1:8000/files';
let httpOptions: { headers: HttpHeaders };
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
export class FilerepoService {

  constructor(private http: HttpClient) {
  }

  public getFileInfo(id: string){
    return this.http.get<File>(localUrl + "/"+id+"/info")
  }
  public getFileList(){
    return this.http.get<File>(localUrl + "/")
  }

  public uploadFile(uploaded_file: File){
    return this.http.post<File>(localUrl + "/upload", uploaded_file, httpOptions)
  }
}
