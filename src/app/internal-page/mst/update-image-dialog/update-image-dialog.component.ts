import { Component, OnInit, Inject } from '@angular/core'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { UploadService } from  '../../../upload.service'

@Component({
  selector: 'app-update-image-dialog',
  templateUrl: './update-image-dialog.component.html',
  styleUrls: ['./update-image-dialog.component.scss']
})
export class UpdateImageDialogComponent implements OnInit {

  fileData: File = undefined
  previewUrl: any = undefined
  uploadedFilePath: string = undefined
  uploading = false
  loadingValue = 0

  constructor(
    private uploadService: UploadService,
    public dialogRef: MatDialogRef<UpdateImageDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.fileData = data.icon
    this.preview()
  }

  ngOnInit() { }

  fileProgress(fileInput: any) {
    if(fileInput) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
    }
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
    this.uploading = true
    this.loadingValue = 0
    const formData = new FormData();
    formData.append('file', this.fileData);
    //formData.append('file', this.form.get('avatar').value);
    this.uploadService.upload('mst/' + this.data.symbol, this.fileData).subscribe(
      (res) => {
        this.loadingValue = res.message
        if(res.message == 100) {
          this.dialogRef.close()
        }
      },
      (err) => console.log(err)
    );
    /*this.http.post('https://mvs-avatar-portal.firebaseapp.com/api/mst/hallo', formData)
      .subscribe(res => {
        console.log(res);
        //this.uploadedFilePath = res.data.filePath;
        alert('SUCCESS !!');
        this.dialogRef.close();
      })*/
  }

}
