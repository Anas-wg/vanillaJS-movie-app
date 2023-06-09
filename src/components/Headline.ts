import { Component } from "../core/heropy";

export default class Headline extends Component {
  render() {
    // headline 자신에 클래스 추가
    this.el.classList.add('headline')
    // headline 자신 객체를 html에 할당
    this.el.innerHTML = /* html */`
      <h1>
        <span>OMDB API</span><Br>
        THE OPEN<Br>
        MOVIE DATABASE
      </h1>
      <p>
        The OMDb API is a RESTful web service to obtain movie information, 
        all content and images on the site are contributed and maintained by our users.<br>
        If you find this service useful, please consider making a one-time donation or become a patron.
      </p>
    `
  }
}