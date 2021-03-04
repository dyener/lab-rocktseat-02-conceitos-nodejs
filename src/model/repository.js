module.exports = class Repository {

   id;
   title;
   url;
   techs;
   likes = 0;
  
   constructor(pId, pTitle, pUrl, pTechs, pLikes){
    this.id = pId;
    this.title = pTitle;
    this.url = pUrl;
    this.techs = pTechs;
    this.likes = pLikes;
  }

  getId(){
    return this.id
  }

  setId(id){
    this.id = id;
  }

  getTitle(){
    return this.title;
  }

  setTite(title){
    this.title = title;
  }

  getUrl(){
    return this.url;
  }

  setUrl(url){
    this.url = url;
  }

  getTechs(){
    return this.techs;
  }
  
  setTechs(techs){
    this.techs = techs;
  }

  getLikes(){
    return this.likes;
  }

  setLikes(likes){
    this.likes = likes;
  }

} 