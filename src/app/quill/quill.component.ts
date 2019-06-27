import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-quill',
  templateUrl: './quill.component.html',
  styleUrls: ['./quill.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class QuillComponent implements OnInit {

  config = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                         // remove formatting button
      ['link', 'image', 'video']                         // link and image, video
    ]
  };

  constructor() { }

  ngOnInit() {


    var Font = Quill.import('formats/font');
    // We do not add Sans Serif since it is the default
    Font.whitelist = ['inconsolata', 'roboto', 'mirza', 'arial', 'georgia', 'tahoma', 'verdana', 'trebuchet', 'lato-regular', 'times-new-roman'];
    Quill.register(Font, true);

    // var quill = new Quill('#editor', {
    //   modules: { toolbar: true },
    //   theme: 'snow'
    // })
  }

}
