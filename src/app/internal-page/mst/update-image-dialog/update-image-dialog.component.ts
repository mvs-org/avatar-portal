import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-update-image-dialog',
  templateUrl: './update-image-dialog.component.html',
  styleUrls: ['./update-image-dialog.component.scss']
})
export class UpdateImageDialogComponent implements OnInit {

  fileData: File = undefined;
  previewUrl: any = undefined;
  uploadedFilePath: string = undefined;

  constructor(
    private http: HttpClient,
    public dialogRef: MatDialogRef<UpdateImageDialogComponent>,
  ) { }

  ngOnInit() {
  }

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview
    const mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (event) => {
      this.previewUrl = reader.result;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    console.log(formData)
    this.http.post('https://mvs-avatar-portal.firebaseapp.com/api/mst/hallo', formData)
      .subscribe(res => {
        console.log(res);
        //this.uploadedFilePath = res.data.filePath;
        alert('SUCCESS !!');
        this.dialogRef.close();
      })
  }

}
