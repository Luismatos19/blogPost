import { Component, OnInit } from '@angular/core';
import { BlogPostModel } from '../blog-post-model';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  public blogPosts: Array<BlogPostModel>;
  public titulo=  '';
  public texto=  '';
  public imagem=  '';
​
  constructor() {
    this.blogPosts = [];


const post = new BlogPostModel();
    post.titulo = 'Primeira postagem!';
    post.imagem =
      'https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png';
    post.texto =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui';
    this.blogPosts.push(post);

    const post2 = new BlogPostModel();
    post2.titulo = 'Segunda postagem!';
    post2.imagem =
      'https://www.weblink.com.br/blog/wp-content/uploads/2019/06/O-Que-e-Um-Blog.png';
    post2.texto =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui';
    this.blogPosts.push(post2);

    const post3 = new BlogPostModel();
    post3.titulo = 'Terceira postagem!';
    post3.imagem = 'https://blog.hotmart.com/blog/2017/09/criar-um-blog.png';
    post3.texto =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a tortor eu  odio pellentesque ullamcorper. Duis non ipsum mauris. Nullam dolor dui';
    this.blogPosts.push(post3);
  }

  onSubmit():void {
    const post =new BlogPostModel();
    post.titulo = this.titulo;
    post.texto =  this.texto;
    post.imagem = this.imagem;

    this.blogPosts.push(post);

  }

  ngOnInit(): void {
  }

}
