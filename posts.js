export default class posts {

    constructor(x, y, z){
        this.x = x
        this.y = y
        this.z = z
        this.addPost = this.addPost.bind(this);
        this.addPost(this.x, this.y, this.z)
    }

    addPost(x,y,z){
        const novo = document.createElement("div");
        novo.className = "post";
        const h = document.createElement("h2");
        const p = document.createElement("p");
        const img = document.createElement("img");
        h.className = "h2";
        p.className = "p";
        img.setAttribute("src", z);
        img.className = "postImg";
        const t1 = document.createTextNode(x);
        const t2 = document.createTextNode(y);
        h.appendChild(t1);
        p.appendChild(t2);
        novo.appendChild(h);
        novo.appendChild(p);
        novo.appendChild(img);
        const d1 = document.getElementById("posts");
        d1.insertAdjacentElement('afterbegin', novo);
    
    }




}