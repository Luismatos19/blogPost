import { Component, Input, OnInit } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  @Input()
  public post: BlogPostModel = new BlogPostModel();


  constructor() { }

  public count: number = 0;

  ngOnInit(): void {
  }

  compartilhar(): void {

    this.contador();
    // execute o que quiser aqui.
    // lembre-se que você pode alterar as variaveis locais
    alert('Post ' + this.post?.titulo + ' foi compartilhado ' + this.count +' vezes!');
  }


  contador(): void {
    this.count++;
  }

}
